"use client"

import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
} from "../../../../../packages/dialog-stack"
import { Button } from "../../../../../packages/ui/src/ui/button"

const Example = () => (
  <DialogStack clickable>
    <DialogStackTrigger asChild>
      <Button variant="outline">Updated Show me</Button>
    </DialogStackTrigger>
    <DialogStackOverlay />

    <DialogStackBody>
      <DialogStackContent>
        <DialogStackHeader>
          <DialogStackTitle>Updated I'm the first dialog</DialogStackTitle>
          <DialogStackDescription>
            Updated With a fancy description
          </DialogStackDescription>
        </DialogStackHeader>
        <DialogStackFooter className="justify-end">
          <DialogStackNext asChild>
            <Button variant="outline">Updated Next</Button>
          </DialogStackNext>
        </DialogStackFooter>
      </DialogStackContent>

      <DialogStackContent>
        <DialogStackHeader>
          <DialogStackTitle>Updated I'm the second dialog</DialogStackTitle>
          <DialogStackDescription>
            Updated With a fancy description
          </DialogStackDescription>
        </DialogStackHeader>
        <DialogStackFooter className="justify-between">
          <DialogStackPrevious asChild>
            <Button variant="outline">Updated Previous</Button>
          </DialogStackPrevious>
          <DialogStackNext asChild>
            <Button variant="outline">Updated Next</Button>
          </DialogStackNext>
        </DialogStackFooter>
      </DialogStackContent>

      <DialogStackContent>
        <DialogStackHeader>
          <DialogStackTitle>Updated I'm the third dialog</DialogStackTitle>
          <DialogStackDescription>
            Updated With a fancy description
          </DialogStackDescription>
        </DialogStackHeader>
        <DialogStackFooter className="justify-between">
          <DialogStackPrevious asChild>
            <Button variant="outline">Updated Previous</Button>
          </DialogStackPrevious>
        </DialogStackFooter>
      </DialogStackContent>
    </DialogStackBody>
  </DialogStack>
)

export default Example
