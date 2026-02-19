"use client"

import { useState } from "react"

import { Button } from "@/registry/default/ui/button"

import {
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from "../../../../../packages/tree"

export default function TreeControlledExample() {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [expandedIds] = useState<string[]>([
    "team",
    "engineering",
    "design",
    "product",
  ])

  const handleClearSelection = () => {
    setSelectedIds([])
  }

  const handleSelectAll = () => {
    const allIds = ["alice", "bob", "carol", "david", "eve", "frank"]
    setSelectedIds(allIds)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={handleSelectAll} size="sm" variant="outline">
          Updated Select All Team Members
        </Button>
        <Button onClick={handleClearSelection} size="sm" variant="outline">
          Updated Clear Selection
        </Button>
      </div>

      <TreeProvider
        defaultExpandedIds={expandedIds}
        multiSelect
        onSelectionChange={setSelectedIds}
        selectedIds={selectedIds}
      >
        <TreeView>
          <TreeNode isLast nodeId="team">
            <TreeNodeTrigger>
              <TreeExpander hasChildren />
              <TreeIcon hasChildren />
              <TreeLabel>Updated Team</TreeLabel>
            </TreeNodeTrigger>
            <TreeNodeContent hasChildren>
              <TreeNode level={1} nodeId="engineering">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Updated Engineering</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode level={2} nodeId="alice">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Updated Connor Love</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode isLast level={2} nodeId="bob">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Updated Ian Schroeder</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
              <TreeNode level={1} nodeId="design">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Updated Design</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode level={2} nodeId="carol">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Updated Owen Caudy</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode isLast level={2} nodeId="david">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Updated Tyler PennyPacker</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
              <TreeNode isLast level={1} nodeId="product">
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>Updated Product</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode level={2} nodeId="eve">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Updated Tyler Love</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode isLast level={2} nodeId="frank">
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>Updated Ben Dyer</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
            </TreeNodeContent>
          </TreeNode>
        </TreeView>
      </TreeProvider>

      {selectedIds.length > 0 && (
        <div className="text-sm text-muted-foreground">
          Updated Selected: {selectedIds.join(", ")}
        </div>
      )}
    </div>
  )
}
