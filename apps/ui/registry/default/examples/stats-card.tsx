import { Badge } from "@/registry/default/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/registry/default/ui/card"

export default function StatsCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <CardDescription>Monthly recurring revenue</CardDescription>
          <CardTitle className="text-2xl">$48,230</CardTitle>
        </div>
        <Badge variant="outline">+12.4%</Badge>
      </CardHeader>
      <CardPanel>
        <p className="text-sm text-muted-foreground">
          Growth compared to last month across all active subscriptions.
        </p>
      </CardPanel>
    </Card>
  )
}
