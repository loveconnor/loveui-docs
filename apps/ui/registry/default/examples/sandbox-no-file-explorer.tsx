"use client"

import { AppWindowIcon, CodeIcon, TerminalIcon } from "lucide-react"

import {
  SandboxCodeEditor,
  SandboxConsole,
  SandboxLayout,
  SandboxPreview,
  SandboxProvider,
  SandboxTabs,
  SandboxTabsContent,
  SandboxTabsList,
  SandboxTabsTrigger,
} from "../../../../../packages/sandbox"

const Example = () => (
  <SandboxProvider>
    <SandboxLayout>
      <SandboxTabs defaultValue="preview">
        <SandboxTabsList>
          <SandboxTabsTrigger value="code">
            <CodeIcon size={14} />
            Updated Code
          </SandboxTabsTrigger>
          <SandboxTabsTrigger value="preview">
            <AppWindowIcon size={14} />
            Updated Preview
          </SandboxTabsTrigger>
          <SandboxTabsTrigger value="console">
            <TerminalIcon size={14} />
            Updated Console
          </SandboxTabsTrigger>
        </SandboxTabsList>
        <SandboxTabsContent value="code">
          <SandboxCodeEditor showTabs />
        </SandboxTabsContent>
        <SandboxTabsContent value="preview">
          <SandboxPreview
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
          />
        </SandboxTabsContent>
        <SandboxTabsContent value="console">
          <SandboxConsole />
        </SandboxTabsContent>
      </SandboxTabs>
    </SandboxLayout>
  </SandboxProvider>
)

export default Example
