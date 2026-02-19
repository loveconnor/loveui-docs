import { InfoIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"

export default function AlertWithIcon() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>Updated Heads up!</AlertTitle>
      <AlertDescription>
        Updated Describe what can be done about it here.
      </AlertDescription>
    </Alert>
  )
}
