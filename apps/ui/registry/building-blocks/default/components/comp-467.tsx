import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/building-blocks/default/ui/table"

const items = [
  {
    id: "1",
    name: "Connor Love",
    username: "@loveconnor",
    image: "https://github.com/loveconnor.png",
    email: "loveconnor2005@gmail.com",
    location: "Columbus, Ohio",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "John Doe",
    username: "@jdoe",
    image: "https://avatars.githubusercontent.com/u/91501317?v=4",
    email: "jdoe@example.com",
    location: "Ghana, Africa",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "4",
    name: "Thomas Raklovits",
    username: "@monster0506",
    image: "https://github.com/loveconnor.png",
    email: "traklovits@company.com",
    location: "Cleveland, Ohio",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "Nathan Wickersham",
    username: "@nwickersham",
    image: "https://avatars.githubusercontent.com/u/91501317?v=4",
    email: "nwick@company.com",
    location: "Los Angeles, CA",
    status: "Active",
    balance: "-$1,000.00",
  },
]

export default function Component() {
  return (
    <div>
      <Table>
        <TableHeader>
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
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full"
                    src={item.image}
                    width={40}
                    height={40}
                    alt={item.name}
                  />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {item.username}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">{item.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Table with images
      </p>
    </div>
  )
}
