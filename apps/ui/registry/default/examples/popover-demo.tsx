import { Button } from "@/registry/default/ui/button"
import { Field } from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/default/ui/popover"
import { Textarea } from "@/registry/default/ui/textarea"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Updated Open Popover
      </PopoverTrigger>
      <PopoverPopup className="w-80">
        <div className="mb-4">
          <PopoverTitle className="text-base">Updated Send us feedback</PopoverTitle>
          <PopoverDescription>
            Updated Let us know how we can improve.
          </PopoverDescription>
        </div>
        <Form>
          <Field>
            <Textarea
              id="feedback"
              placeholder="Updated How can we improve?"
              aria-label="Updated Send feedback"
            />
          </Field>
          <Button type="submit">Updated Send feedback</Button>
        </Form>
      </PopoverPopup>
    </Popover>
  )
}
