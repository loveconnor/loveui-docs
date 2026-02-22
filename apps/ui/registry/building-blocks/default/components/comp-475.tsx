import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/building-blocks/default/ui/table"

const items = [
  {
    id: "1",
    name: "Connor Love",
    email: "loveconnor2005@gmail.com",
    location: "Columbus, Ohio",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "John Doe",
    email: "jdoe@example.com",
    location: "Ghana, Africa",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "3",
    name: "Ian Shroeter",
    email: "ischroeter@company.com",
    location: "New York City, New York",
    status: "Inactive",
    balance: "$650.00",
  },
  {
    id: "4",
    name: "Thomas Raklovits",
    email: "traklovits@company.com",
    location: "Cleveland, Ohio",
    status: "Active",
    balance: "$10,330.00",
  },
  {
    id: "5",
    name: "Nathan Wickersham",
    email: "nwick@company.com",
    location: "Los Angeles, CA",
    status: "Active",
    balance: "-$1,000.00",
  },
  {
    id: "6",
    name: "Connor Love",
    email: "loveconnor2005@gmail.com",
    location: "New York, US",
    status: "Active",
    balance: "$1,500.00",
  },
  {
    id: "7",
    name: "John Doe",
    email: "jdoe@example.com",
    location: "Paris, FR",
    status: "Inactive",
    balance: "$200.00",
  },
  {
    id: "8",
    name: "Ian Shroeter",
    email: "ischroeter@company.com",
    location: "Berlin, DE",
    status: "Active",
    balance: "$1,000.00",
  },
  {
    id: "9",
    name: "Thomas Raklovits",
    email: "traklovits@company.com",
    location: "Tokyo, JP",
    status: "Active",
    balance: "$500.00",
  },
  {
    id: "10",
    name: "Nathan Wickersham",
    email: "nwick@company.com",
    location: "Shanghai, CN",
    status: "Inactive",
    balance: "$300.00",
  },
  {
    id: "11",
    name: "Connor Love",
    email: "loveconnor2005@gmail.com",
    location: "Busan, KR",
    status: "Active",
    balance: "$800.00",
  },
  {
    id: "12",
    name: "John Doe",
    email: "jdoe@example.com",
    location: "New York City, New York",
    status: "Active",
    balance: "$1,200.00",
  },
  {
    id: "13",
    name: "Ian Shroeter",
    email: "ischroeter@company.com",
    location: "Los Angeles, CA",
    status: "Active",
    balance: "$400.00",
  },
  {
    id: "14",
    name: "Thomas Raklovits",
    email: "traklovits@company.com",
    location: "New York, US",
    status: "Inactive",
    balance: "$600.00",
  },
  {
    id: "15",
    name: "Nathan Wickersham",
    email: "nwick@company.com",
    location: "Taipei, TW",
    status: "Active",
    balance: "$1,800.00",
  },
]

export default function Component() {
  return (
    <div>
      <div className="[&>div]:max-h-96">
        <Table className="border-separate border-spacing-0 [&_td]:border-border [&_tfoot_td]:border-t [&_th]:border-b [&_th]:border-border [&_tr]:border-none [&_tr:not(:last-child)_td]:border-b">
          <TableHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur-xs">
            <TableRow className="hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-right">{item.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-transparent">
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Table with sticky header
      </p>
    </div>
  )
}
