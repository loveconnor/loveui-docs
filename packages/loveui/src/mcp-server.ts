#!/usr/bin/env node

import { constants } from "node:fs";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListResourceTemplatesRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ReadResourceRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import packageJson from "../package.json" with { type: "json" };
import { listRegistryPackages, loadRegistryItem } from "./registry.js";

const LOVEUI_REGISTRY_SCHEME = "loveui://registry/";
const LOVEUI_RESOURCE_TEMPLATE = "loveui://registry/{package}";
const GET_PACKAGE_TOOL_NAME = "get-loveui-package";

type RegistrySnapshot = {
  dir: string;
  names: string[];
  nameSet: Set<string>;
};

type RegistrySnapshotIndex = {
  items?: Array<{
    name?: string;
  }>;
};

const createResourceUri = (packageName: string) => `${LOVEUI_REGISTRY_SCHEME}${packageName}`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLI_ROOT = path.resolve(__dirname, "..");
const REGISTRY_SNAPSHOT_DIR_CANDIDATES = [
  path.join(CLI_ROOT, "public", "r"),
  path.resolve(CLI_ROOT, "..", "..", "apps", "ui", "public", "r"),
  path.resolve(process.cwd(), "apps", "ui", "public", "r")
];

const ensureReadable = async (targetPath: string) => {
  try {
    await access(targetPath, constants.R_OK);
    return true;
  } catch {
    return false;
  }
};

let registrySnapshotPromise: Promise<RegistrySnapshot | null> | null = null;

const loadRegistrySnapshot = async (): Promise<RegistrySnapshot | null> => {
  if (!registrySnapshotPromise) {
    registrySnapshotPromise = (async () => {
      for (const dir of REGISTRY_SNAPSHOT_DIR_CANDIDATES) {
        const indexPath = path.join(dir, "registry.json");
        if (!(await ensureReadable(indexPath))) continue;

        try {
          const index = JSON.parse(
            await readFile(indexPath, "utf8")
          ) as RegistrySnapshotIndex;
          const names = Array.from(
            new Set(
              (index.items ?? [])
                .map((item) => item.name?.trim())
                .filter((name): name is string => Boolean(name))
            )
          ).sort((a, b) => a.localeCompare(b));

          if (names.length === 0) continue;

          return {
            dir,
            names,
            nameSet: new Set(names)
          };
        } catch {
          continue;
        }
      }

      return null;
    })();
  }

  return registrySnapshotPromise;
};

const listAvailableRegistryNames = async () => {
  const [snapshot, packageNames] = await Promise.all([
    loadRegistrySnapshot(),
    listRegistryPackages()
  ]);

  const names = new Set<string>(packageNames);
  for (const name of snapshot?.names ?? []) {
    names.add(name);
  }

  return Array.from(names).sort((a, b) => a.localeCompare(b));
};

const readSnapshotRegistryItem = async (packageName: string) => {
  const snapshot = await loadRegistrySnapshot();
  if (!snapshot || !snapshot.nameSet.has(packageName)) {
    return null;
  }

  const itemPath = path.join(snapshot.dir, `${packageName}.json`);
  if (!(await ensureReadable(itemPath))) {
    return null;
  }

  return JSON.parse(await readFile(itemPath, "utf8"));
};

const getPackageNameFromUri = (uri: string) => {
  if (!uri.startsWith(LOVEUI_REGISTRY_SCHEME)) {
    throw new McpError(ErrorCode.InvalidParams, `Unsupported resource URI: ${uri}`);
  }

  const packageName = decodeURIComponent(uri.slice(LOVEUI_REGISTRY_SCHEME.length)).trim();
  if (!packageName) {
    throw new McpError(ErrorCode.InvalidParams, "Package name is required.");
  }

  return packageName;
};

const readRegistryItem = async (packageName: string) => {
  try {
    const snapshotItem = await readSnapshotRegistryItem(packageName);
    if (snapshotItem) {
      return snapshotItem;
    }

    return await loadRegistryItem(packageName);
  } catch (error) {
    throw new McpError(
      ErrorCode.InvalidParams,
      error instanceof Error ? error.message : String(error)
    );
  }
};

async function main() {
  const server = new Server(
    {
      name: "loveui-mcp",
      version: packageJson.version ?? "0.0.0"
    },
    {
      capabilities: {
        resources: {
          listChanged: true
        },
        tools: {
          listChanged: true
        }
      }
    }
  );

  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    const packages = await listAvailableRegistryNames();

    return {
      resources: packages.map((pkg) => ({
        uri: createResourceUri(pkg),
        name: pkg,
        description: `loveui registry definition for ${pkg}`,
        mimeType: "application/json"
      }))
    };
  });

  server.setRequestHandler(ListResourceTemplatesRequestSchema, async () => {
    return {
      resourceTemplates: [
        {
          name: "loveui-registry",
          uriTemplate: LOVEUI_RESOURCE_TEMPLATE,
          description: "loveui registry definitions by package name",
          mimeType: "application/json"
        }
      ]
    };
  });

  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const packageName = getPackageNameFromUri(request.params.uri);
    const registryItem = await readRegistryItem(packageName);

    return {
      contents: [
        {
          uri: request.params.uri,
          mimeType: "application/json",
          text: JSON.stringify(registryItem, null, 2)
        }
      ]
    };
  });

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: GET_PACKAGE_TOOL_NAME,
          description: "Fetch a loveui registry definition by package name.",
          inputSchema: {
            type: "object",
            additionalProperties: false,
            properties: {
              name: {
                type: "string",
                description: "Package name, e.g. badge"
              }
            },
            required: ["name"]
          }
        }
      ]
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name !== GET_PACKAGE_TOOL_NAME) {
      throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} not found`);
    }

    const name = request.params.arguments?.name;
    if (typeof name !== "string" || name.trim() === "") {
      throw new McpError(ErrorCode.InvalidParams, "Package name is required.");
    }

    const registryItem = await readRegistryItem(name.trim());
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(registryItem, null, 2)
        }
      ]
    };
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
