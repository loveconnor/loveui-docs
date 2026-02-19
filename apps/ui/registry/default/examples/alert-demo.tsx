import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"

export default function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Updated Heads up!</AlertTitle>
      <AlertDescription>
        <p>Updated Describe what can be done about it here.</p>
      </AlertDescription>
    </Alert>
  )
}
