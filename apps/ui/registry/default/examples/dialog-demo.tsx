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
import { Field, FieldControl, FieldLabel } from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Updated Open Dialog
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <Form>
          <DialogHeader>
            <DialogTitle>Updated Edit profile</DialogTitle>
            <DialogDescription>
              Updated Make changes to your profile here. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Field>
              <FieldLabel>Updated Name</FieldLabel>
              <FieldControl type="text" defaultValue="Connor Love" />
            </Field>
            <Field>
              <FieldLabel>Updated Username</FieldLabel>
              <FieldControl type="text" defaultValue="@loveconnor" />
            </Field>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              Updated Cancel
            </DialogClose>
            <Button type="submit">Updated Save</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  )
}
