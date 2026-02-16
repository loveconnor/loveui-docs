"use client"

import { useState, type ReactNode } from "react"

import type { Languages } from "../../../../../packages/code-block/src"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockGroup,
  CodeBlockHeader,
  CodeBlockIcon,
  CodeblockShiki,
  CodeBlockSugarHigh,
  CopyButton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../../packages/code-block/src"

export type CodeSample = {
  code: string
  filename: string
  language: Languages
}

type HighlighterMode = "shiki" | "sugar-high" | "plain"

interface CodeBlockShowcaseProps {
  files: readonly CodeSample[]
  highlighter?: HighlighterMode
  hideHeader?: boolean
  lineNumbers?: boolean
  rightSlot?: ReactNode
}

function renderCode(
  file: CodeSample,
  highlighter: HighlighterMode,
  lineNumbers: boolean
) {
  if (highlighter === "plain") {
    return (
      <pre className="overflow-x-auto p-3 font-mono text-sm leading-6">
        <code>{file.code}</code>
      </pre>
    )
  }

  if (highlighter === "sugar-high") {
    return <CodeBlockSugarHigh code={file.code} lineNumbers={lineNumbers} />
  }

  return (
    <CodeblockShiki
      code={file.code}
      language={file.language}
      lineNumbers={lineNumbers}
    />
  )
}

export function CodeBlockShowcase({
  files,
  highlighter = "shiki",
  hideHeader = false,
  lineNumbers = true,
  rightSlot,
}: CodeBlockShowcaseProps) {
  const fallbackFile = files[0]
  const [activeFileName, setActiveFileName] = useState(
    fallbackFile?.filename ?? ""
  )

  if (!fallbackFile) {
    return null
  }

  const activeFile =
    files.find((file) => file.filename === activeFileName) ?? fallbackFile
  const hasTabs = files.length > 1

  return (
    <Tabs value={activeFile.filename} onValueChange={setActiveFileName}>
      <CodeBlock>
        {!hideHeader ? (
          <CodeBlockHeader>
            {hasTabs ? (
              <TabsList className="h-7 gap-1 border-0 bg-transparent p-0 dark:bg-transparent">
                {files.map((file) => (
                  <TabsTrigger
                    key={file.filename}
                    value={file.filename}
                    className="h-7 gap-1.5 rounded-md px-2 text-xs data-[state=active]:shadow-none"
                  >
                    <CodeBlockIcon
                      language={file.language}
                      className="size-3.5"
                    />
                    <span>{file.filename}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            ) : (
              <CodeBlockGroup>
                <CodeBlockIcon language={activeFile.language} />
                <span>{activeFile.filename}</span>
              </CodeBlockGroup>
            )}
            <div className="shrink-0">
              {rightSlot ?? <CopyButton content={activeFile.code} />}
            </div>
          </CodeBlockHeader>
        ) : null}

        <CodeBlockContent className={hideHeader ? "rounded-t-lg" : undefined}>
          {hasTabs
            ? files.map((file) => (
                <TabsContent
                  key={file.filename}
                  value={file.filename}
                  className="mt-0"
                >
                  {renderCode(file, highlighter, lineNumbers)}
                </TabsContent>
              ))
            : renderCode(activeFile, highlighter, lineNumbers)}
        </CodeBlockContent>
      </CodeBlock>
    </Tabs>
  )
}
