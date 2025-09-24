import { MoreHorizontal, Search } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const transactions = [
  {
    id: "TXN-001",
    date: "2024-01-15",
    description: "Website Development Payment",
    customer: "Tech Corp Ltd",
    type: "Income",
    amount: "+$5,200.00",
    status: "Completed",
  },
  {
    id: "TXN-002",
    date: "2024-01-14",
    description: "Office Supplies",
    customer: "Office Depot",
    type: "Expense",
    amount: "-$324.50",
    status: "Completed",
  },
  {
    id: "TXN-003",
    date: "2024-01-13",
    description: "Software License",
    customer: "Adobe Systems",
    type: "Expense",
    amount: "-$52.99",
    status: "Pending",
  },
  {
    id: "TXN-004",
    date: "2024-01-12",
    description: "Consulting Services",
    customer: "StartupXYZ",
    type: "Income",
    amount: "+$3,500.00",
    status: "Completed",
  },
  {
    id: "TXN-005",
    date: "2024-01-11",
    description: "Marketing Campaign",
    customer: "Google Ads",
    type: "Expense",
    amount: "-$892.30",
    status: "Completed",
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest financial activities</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                className="pl-8 w-[200px]"
              />
            </div>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Customer/Vendor</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.type === "Income" ? "default" : "secondary"
                    }
                  >
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell
                  className={
                    transaction.type === "Income"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {transaction.amount}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "Completed"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
