import { CircleCheckIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"
import { Button } from "@/registry/default/ui/button"

export default function AlertSuccess() {
  return (
    <Alert variant="success">
      <CircleCheckIcon />
      <AlertTitle>Updated Heads up!</AlertTitle>
      <AlertDescription>
        Updated Describe what can be done about it here.
      </AlertDescription>
    </Alert>
  )
}
