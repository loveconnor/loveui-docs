"use client"

import { useState } from "react"
import { UploadIcon } from "lucide-react"

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
    <Dropzone onDrop={handleDrop} onError={console.error} src={files}>
      <DropzoneEmptyState>
        <div className="flex w-full items-center gap-4 p-8">
          <div className="flex size-16 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <UploadIcon size={24} />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium">Upload a file</p>
            <p className="text-xs text-muted-foreground">
              Drag and drop or click to upload
            </p>
          </div>
        </div>
      </DropzoneEmptyState>
      <DropzoneContent />
    </Dropzone>
  )
}

export default Example
