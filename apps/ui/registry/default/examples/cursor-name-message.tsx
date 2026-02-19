"use client"

import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from "../../../../../packages/cursor"

const Example = () => (
  <Cursor color="#000000">
    <CursorPointer />
    <CursorBody>
      <CursorName>Updated Connor</CursorName>
      <CursorMessage>Updated That looks great!</CursorMessage>
    </CursorBody>
  </Cursor>
)

export default Example
