"use client"

import { Button } from "@/registry/default/ui/button"
import { Field, FieldControl, FieldLabel } from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet"

export default function DialogDemo() {
  return (
    <Sheet>
      <SheetTrigger
        render={(props) => (
          <Button {...props} variant="outline">
            Updated Open Sheet
          </Button>
        )}
      />
      <SheetPopup>
        <Form>
          <SheetHeader>
            <SheetTitle>Updated Edit profile</SheetTitle>
            <SheetDescription>
              Updated Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <Field>
              <FieldLabel>Updated Name</FieldLabel>
              <FieldControl type="text" defaultValue="Connor Love" />
            </Field>
            <Field>
              <FieldLabel>Updated Username</FieldLabel>
              <FieldControl type="text" defaultValue="@loveconnor" />
            </Field>
          </div>
          <SheetFooter>
            <SheetClose
              render={(props) => (
                <Button {...props} variant="ghost">
                  Updated Cancel
                </Button>
              )}
            />
            <Button type="submit">Updated Save</Button>
          </SheetFooter>
        </Form>
      </SheetPopup>
    </Sheet>
  )
}
