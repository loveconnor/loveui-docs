"use client"

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

export default function TreeNoLinesExample() {
  return (
    <TreeProvider
      defaultExpandedIds={["projects", "website-redesign"]}
      showLines={false}
    >
      <TreeView>
        <TreeNode nodeId="projects">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Updated Projects</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode level={1} nodeId="website-redesign">
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Updated Website Redesign</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode level={2} nodeId="homepage">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Updated Homepage</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode level={2} nodeId="about-page">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Updated About Page</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode isLast level={2} nodeId="contact-form">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Updated Contact Form</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
            <TreeNode isLast level={1} nodeId="mobile-app">
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>Updated Mobile App</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode level={2} nodeId="ios-version">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Updated iOS Version</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode isLast level={2} nodeId="android-version">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon />
                    <TreeLabel>Updated Android Version</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
        <TreeNode isLast nodeId="resources">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>Updated Resources</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode level={1} nodeId="documentation">
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>Updated Documentation</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode level={1} nodeId="api-reference">
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>Updated API Reference</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
            <TreeNode isLast level={1} nodeId="examples">
              <TreeNodeTrigger>
                <TreeExpander />
                <TreeIcon />
                <TreeLabel>Updated Examples</TreeLabel>
              </TreeNodeTrigger>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
      </TreeView>
    </TreeProvider>
  )
}
