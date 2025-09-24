import {
  ArrowLeft,
  BarChart3,
  Calculator,
  FileBarChart,
  FileText,
  Plus,
  Receipt,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { ReceiptTemplate } from "./ReceiptTemplate";
import { StatementTemplate } from "./StatementTemplate";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
  { month: "Feb", revenue: 52000, expenses: 35000, profit: 17000 },
  { month: "Mar", revenue: 48000, expenses: 31000, profit: 17000 },
  { month: "Apr", revenue: 61000, expenses: 42000, profit: 19000 },
  { month: "May", revenue: 55000, expenses: 38000, profit: 17000 },
  { month: "Jun", revenue: 67000, expenses: 45000, profit: 22000 },
];

const invoices = [
  {
    id: "INV-001",
    client: "Tech Corp Ltd",
    amount: "$5,200.00",
    status: "Paid",
    dueDate: "2024-01-15",
  },
  {
    id: "INV-002",
    client: "StartupXYZ",
    amount: "$3,500.00",
    status: "Pending",
    dueDate: "2024-01-20",
  },
  {
    id: "INV-003",
    client: "Design Co",
    amount: "$2,800.00",
    status: "Overdue",
    dueDate: "2024-01-10",
  },
  {
    id: "INV-004",
    client: "Marketing Inc",
    amount: "$4,200.00",
    status: "Draft",
    dueDate: "2024-01-25",
  },
];

const taxReports = [
  {
    period: "Q4 2023",
    type: "VAT Return",
    amount: "$2,450.00",
    status: "Submitted",
  },
  { period: "Q1 2024", type: "Income Tax", amount: "$8,750.00", status: "Due" },
  {
    period: "Q1 2024",
    type: "Payroll Tax",
    amount: "$3,200.00",
    status: "Paid",
  },
];

const accountsPayable = [
  {
    vendor: "Office Supplies Co",
    amount: "$1,250.00",
    dueDate: "2024-02-15",
    status: "Due",
  },
  {
    vendor: "Tech Equipment Ltd",
    amount: "$3,450.00",
    dueDate: "2024-02-20",
    status: "Overdue",
  },
  {
    vendor: "Marketing Agency",
    amount: "$2,800.00",
    dueDate: "2024-02-25",
    status: "Pending",
  },
  {
    vendor: "Legal Services",
    amount: "$1,900.00",
    dueDate: "2024-03-01",
    status: "Due",
  },
];

const accountsReceivable = [
  {
    client: "Tech Corp Ltd",
    amount: "$5,200.00",
    dueDate: "2024-01-15",
    aging: "Current",
  },
  {
    client: "StartupXYZ",
    amount: "$3,500.00",
    dueDate: "2024-01-20",
    aging: "1-30 days",
  },
  {
    client: "Design Co",
    amount: "$2,800.00",
    dueDate: "2024-01-10",
    aging: "31-60 days",
  },
  {
    client: "Marketing Inc",
    amount: "$4,200.00",
    dueDate: "2024-01-05",
    aging: "60+ days",
  },
];

const trialBalanceData = [
  { account: "Cash", debit: 25000, credit: 0, type: "Asset" },
  { account: "Accounts Receivable", debit: 15800, credit: 0, type: "Asset" },
  { account: "Inventory", debit: 12500, credit: 0, type: "Asset" },
  { account: "Equipment", debit: 45000, credit: 0, type: "Asset" },
  { account: "Accounts Payable", debit: 0, credit: 9400, type: "Liability" },
  { account: "Loans Payable", debit: 0, credit: 25000, type: "Liability" },
  { account: "Capital", debit: 0, credit: 50000, type: "Equity" },
  { account: "Revenue", debit: 0, credit: 67000, type: "Revenue" },
  { account: "Expenses", debit: 53100, credit: 0, type: "Expense" },
];

const chartConfig = {
  revenue: { label: "Revenue", color: "#0B4881" },
  expenses: { label: "Expenses", color: "#1067B0" },
  profit: { label: "Profit", color: "#11254A" },
};

export function AccountingContent() {
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);
  const [activeReport, setActiveReport] = useState<string | null>(null);

  if (activeTemplate) {
    return (
      <div className="flex flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setActiveTemplate(null)}
              className="text-[#0B4881] hover:bg-[#0B4881]/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Accounting
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          {activeTemplate === "invoice" && <InvoiceTemplate />}
          {activeTemplate === "receipt" && <ReceiptTemplate />}
          {activeTemplate === "statement" && <StatementTemplate />}
        </div>
      </div>
    );
  }

  if (activeReport) {
    return (
      <div className="flex flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setActiveReport(null)}
              className="text-[#0B4881] hover:bg-[#0B4881]/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Accounting
            </Button>
            <div>
              <h1 className="text-[#11254A] text-xl font-medium">
                {activeReport === "payable"
                  ? "Accounts Payable Report"
                  : activeReport === "receivable"
                  ? "Accounts Receivable Report"
                  : "Trial Balance Report"}
              </h1>
              <p className="text-[#11254A]/70 text-sm">
                {activeReport === "payable"
                  ? "Outstanding vendor payments"
                  : activeReport === "receivable"
                  ? "Outstanding customer invoices"
                  : "General ledger account balances"}
              </p>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          {activeReport === "payable" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#11254A] flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-[#11254A]" />
                  Accounts Payable Summary
                </CardTitle>
                <CardDescription>
                  Outstanding payments to vendors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accountsPayable.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-[#11254A]">
                          {item.vendor}
                        </TableCell>
                        <TableCell className="text-[#11254A] font-medium">
                          {item.amount}
                        </TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.status === "Due"
                                ? "default"
                                : item.status === "Overdue"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {item.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          {activeReport === "receivable" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#11254A] flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#0B4881]" />
                  Accounts Receivable Summary
                </CardTitle>
                <CardDescription>
                  Outstanding invoices from customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Aging</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accountsReceivable.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-[#11254A]">
                          {item.client}
                        </TableCell>
                        <TableCell className="text-[#0B4881] font-medium">
                          {item.amount}
                        </TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              item.aging === "Current"
                                ? "default"
                                : item.aging === "60+ days"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {item.aging}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          {activeReport === "trial" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-[#11254A] flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-[#1067B0]" />
                  Trial Balance
                </CardTitle>
                <CardDescription>
                  All account balances as of {new Date().toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Account</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Debit</TableHead>
                      <TableHead className="text-right">Credit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trialBalanceData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium text-[#11254A]">
                          {item.account}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[#11254A]">
                            {item.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-[#0B4881] font-medium">
                          {item.debit > 0
                            ? `${item.debit.toLocaleString()}`
                            : "-"}
                        </TableCell>
                        <TableCell className="text-right text-[#1067B0] font-medium">
                          {item.credit > 0
                            ? `${item.credit.toLocaleString()}`
                            : "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-[#F1F2F4]/50 font-bold">
                      <TableCell colSpan={2} className="text-[#11254A]">
                        TOTALS
                      </TableCell>
                      <TableCell className="text-right text-[#0B4881]">
                        $
                        {trialBalanceData
                          .reduce((sum, item) => sum + item.debit, 0)
                          .toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-[#1067B0]">
                        $
                        {trialBalanceData
                          .reduce((sum, item) => sum + item.credit, 0)
                          .toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-[#11254A]" />
          <div>
            <h1 className="text-[#11254A] text-xl font-medium">
              Accounting & Tax
            </h1>
            <p className="text-[#11254A]/70 text-sm">
              Manage your finances and tax obligations
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white"
          >
            <FileText className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
          <Button className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* Financial Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0B4881]">$67,000</div>
              <p className="text-xs text-muted-foreground">
                +22% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Outstanding Invoices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#1067B0]">$6,300</div>
              <p className="text-xs text-muted-foreground">
                2 invoices pending
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tax Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$8,750</div>
              <p className="text-xs text-muted-foreground">Due in 15 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Financial Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Profit & Loss</CardTitle>
              <CardDescription>Monthly financial performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#0B4881"
                      fill="#0B4881"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stackId="2"
                      stroke="#1067B0"
                      fill="#1067B0"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Monthly Profit</CardTitle>
              <CardDescription>Net profit breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[600px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="profit"
                      fill="#11254A"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Document Templates and Reports */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Document Templates
              </CardTitle>
              <CardDescription>
                Generate professional business documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button
                  variant="outline"
                  className="h-20 border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white flex-col space-y-2"
                  onClick={() => setActiveTemplate("invoice")}
                >
                  <FileText className="h-6 w-6" />
                  <span>Invoice</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 border-[#1067B0] text-[#1067B0] hover:bg-[#1067B0] hover:text-white flex-col space-y-2"
                  onClick={() => setActiveTemplate("receipt")}
                >
                  <Receipt className="h-6 w-6" />
                  <span>Receipt</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 border-[#11254A] text-[#11254A] hover:bg-[#11254A] hover:text-white flex-col space-y-2"
                  onClick={() => setActiveTemplate("statement")}
                >
                  <FileBarChart className="h-6 w-6" />
                  <span>Statement</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Financial Reports
              </CardTitle>
              <CardDescription>
                Detailed accounting analysis and reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button
                  variant="outline"
                  className="h-20 border-[#11254A] text-[#11254A] hover:bg-[#11254A] hover:text-white flex-col space-y-2"
                  onClick={() => setActiveReport("payable")}
                >
                  <TrendingDown className="h-6 w-6" />
                  <span>Accounts Payable</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white flex-col space-y-2"
                  onClick={() => setActiveReport("receivable")}
                >
                  <TrendingUp className="h-6 w-6" />
                  <span>Accounts Receivable</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 border-[#1067B0] text-[#1067B0] hover:bg-[#1067B0] hover:text-white flex-col space-y-2"
                  onClick={() => setActiveReport("trial")}
                >
                  <BarChart3 className="h-6 w-6" />
                  <span>Trial Balance</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Invoices and Tax Reports */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Recent Invoices</CardTitle>
              <CardDescription>Latest billing activity</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">
                        {invoice.id}
                      </TableCell>
                      <TableCell>{invoice.client}</TableCell>
                      <TableCell className="text-[#0B4881]">
                        {invoice.amount}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            invoice.status === "Paid"
                              ? "default"
                              : invoice.status === "Overdue"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Tax Reports</CardTitle>
              <CardDescription>Tax obligations and submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {taxReports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Calculator className="h-5 w-5 text-[#0B4881]" />
                      <div>
                        <p className="font-medium text-[#11254A]">
                          {report.type}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {report.period}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#11254A]">
                        {report.amount}
                      </p>
                      <Badge
                        variant={
                          report.status === "Paid"
                            ? "default"
                            : report.status === "Due"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
