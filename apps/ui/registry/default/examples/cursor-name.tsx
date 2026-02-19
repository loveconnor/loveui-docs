"use client"

import {
  Cursor,
  CursorBody,
  CursorName,
  CursorPointer,
} from "../../../../../packages/cursor"

const Example = () => (
  <Cursor>
    <CursorPointer />
    <CursorBody>
      <CursorName>Updated Connor</CursorName>
    </CursorBody>
  </Cursor>
)

export default Example
