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

export default function DialogNestedDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Updated Open parent
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Updated Manage team member</DialogTitle>
          <DialogDescription>
            Updated View and manage a user in your team.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">Updated Name</p>
            <p className="text-sm font-medium">Updated Connor Love</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm text-muted-foreground">Updated Email</p>
            <p className="text-sm font-medium">clove@loveui.dev</p>
          </div>
        </div>
        <DialogFooter>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Updated Edit details
            </DialogTrigger>
            <DialogPopup showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Updated Edit details</DialogTitle>
                <DialogDescription>
                  Updated Make changes to the member&apos;s information.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Field>
                  <FieldLabel>Updated Name</FieldLabel>
                  <FieldControl type="text" defaultValue="Connor Love" />
                </Field>
                <Field>
                  <FieldLabel>Updated Email</FieldLabel>
                  <FieldControl type="text" defaultValue="clove@loveui.dev" />
                </Field>
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  Updated Cancel
                </DialogClose>
                <Button type="submit">Updated Save changes</Button>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  )
}
