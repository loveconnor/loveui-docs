import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/registry/default/ui/card"
import { Field, FieldControl, FieldLabel } from "@/registry/default/ui/field"
import { Form } from "@/registry/default/ui/form"
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

const frameworkOptions = [
  { label: "Updated Next.js", value: "next" },
  { label: "Updated Vite", value: "vite" },
  { label: "Updated Remix", value: "remix" },
  { label: "Updated Astro", value: "astro" },
]

export default function CardDemo() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Updated Create project</CardTitle>
        <CardDescription>Updated Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <Form>
        <CardPanel>
          <div className="flex flex-col gap-4">
            <Field>
              <FieldLabel>Updated Name</FieldLabel>
              <FieldControl type="text" placeholder="Updated Name of your project" />
            </Field>
            <Field>
              <FieldLabel>Updated Framework</FieldLabel>
              <Select items={frameworkOptions} defaultValue="next">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectPopup>
                  {frameworkOptions.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectPopup>
              </Select>
            </Field>
          </div>
        </CardPanel>
        <CardFooter>
          <Button className="w-full" type="submit">
            Updated Deploy
          </Button>
        </CardFooter>
      </Form>
    </Card>
  )
}
