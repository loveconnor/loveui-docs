import { InfoIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"
import { Button } from "@/registry/default/ui/button"

export default function AlertWithIconAction() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>Updated Heads up!</AlertTitle>
      <AlertDescription>
        Updated Describe what can be done about it here.
      </AlertDescription>
      <AlertAction>
        <Button variant="ghost" size="xs">
          Updated Dismiss
        </Button>
        <Button size="xs">Updated Ok</Button>
      </AlertAction>
    </Alert>
  )
}
