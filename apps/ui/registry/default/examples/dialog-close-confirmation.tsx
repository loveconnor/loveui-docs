"use client"

import * as React from "react"

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from "@/registry/default/ui/alert-dialog"
import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { Field } from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"
import { Textarea } from "@/registry/default/ui/textarea"

export default function DialogCloseConfirmationDemo() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [confirmOpen, setConfirmOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={(o) => {
        if (!o && value) {
          setConfirmOpen(true)
        } else {
          setDialogOpen(o)
        }
      }}
    >
      <DialogTrigger render={<Button variant="outline" />}>
        Updated Compose
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Updated New message</DialogTitle>
          <DialogDescription>
            Updated Type something and try closing.
          </DialogDescription>
        </DialogHeader>
        <Form
          onSubmit={(event) => {
            event.preventDefault()
            // Close the dialog when submitting
            setDialogOpen(false)
          }}
        >
          <Field>
            <Textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Field>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              Updated Cancel
            </DialogClose>
            <Button
              onClick={() => {
                setValue("")
                setDialogOpen(false)
              }}
            >
              Updated Send
            </Button>
          </DialogFooter>
        </Form>
      </DialogPopup>

      {/* Confirmation dialog */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>Updated Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              Updated Your message will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="ghost" />}>
              Updated Go back
            </AlertDialogClose>
            <Button
              onClick={() => {
                setConfirmOpen(false)
                setValue("")
                setDialogOpen(false)
              }}
            >
              Updated Discard
            </Button>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </Dialog>
  )
}
