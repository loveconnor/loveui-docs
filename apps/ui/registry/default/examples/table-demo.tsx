import { Badge } from "@/registry/default/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>Updated A list of current projects.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Updated Project</TableHead>
          <TableHead>Updated Status</TableHead>
          <TableHead>Updated Team</TableHead>
          <TableHead className="text-right">Updated Budget</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            Updated Website Redesign
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              <span
                className="size-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Updated Paid
            </Badge>
          </TableCell>
          <TableCell>Updated Frontend Team</TableCell>
          <TableCell className="text-right">$12,500</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Updated Mobile App</TableCell>
          <TableCell>
            <Badge variant="outline">
              <span
                className="size-1.5 rounded-full bg-muted-foreground/64"
                aria-hidden="true"
              />
              Updated Unpaid
            </Badge>
          </TableCell>
          <TableCell>Updated Mobile Team</TableCell>
          <TableCell className="text-right">$8,750</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Updated API Integration</TableCell>
          <TableCell>
            <Badge variant="outline">
              <span
                className="size-1.5 rounded-full bg-amber-500"
                aria-hidden="true"
              />
              Updated Pending
            </Badge>
          </TableCell>
          <TableCell>Updated Backend Team</TableCell>
          <TableCell className="text-right">$5,200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            Updated Database Migration
          </TableCell>
          <TableCell>
            <Badge variant="outline">
              <span
                className="size-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Updated Paid
            </Badge>
          </TableCell>
          <TableCell>Updated DevOps Team</TableCell>
          <TableCell className="text-right">$3,800</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Updated User Dashboard</TableCell>
          <TableCell>
            <Badge variant="outline">
              <span
                className="size-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Updated Paid
            </Badge>
          </TableCell>
          <TableCell>Updated UX Team</TableCell>
          <TableCell className="text-right">$7,200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Updated Security Audit</TableCell>
          <TableCell>
            <Badge variant="outline">
              <span
                className="size-1.5 rounded-full bg-red-500"
                aria-hidden="true"
              />
              Updated Failed
            </Badge>
          </TableCell>
          <TableCell>Updated Security Team</TableCell>
          <TableCell className="text-right">$2,100</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Updated Total Budget</TableCell>
          <TableCell className="text-right font-medium">$39,550</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
