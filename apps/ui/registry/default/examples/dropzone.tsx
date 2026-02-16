"use client"

import { useState } from "react"

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "../../../../../packages/dropzone"

const Example = () => {
  const [files, setFiles] = useState<File[] | undefined>()

  const handleDrop = (files: File[]) => {
    console.log(files)
    setFiles(files)
  }

  return (
    <Dropzone
      accept={{ "image/*": [] }}
      maxFiles={10}
      maxSize={1024 * 1024 * 10}
      minSize={1024}
      onDrop={handleDrop}
      onError={console.error}
      src={files}
    >
      <DropzoneEmptyState />
      <DropzoneContent />
    </Dropzone>
  )
}

export default Example
