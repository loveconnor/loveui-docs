import { CircleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"

export default function AlertWarning() {
  return (
    <Alert variant="error">
      <CircleAlertIcon />
      <AlertTitle>Updated Heads up!</AlertTitle>
      <AlertDescription>
        Updated Describe what can be done about it here.
      </AlertDescription>
    </Alert>
  )
}
