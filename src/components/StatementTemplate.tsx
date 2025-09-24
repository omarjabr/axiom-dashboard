import {
  Banknote,
  Building,
  Calendar,
  CreditCard,
  Download,
  Mail,
  MapPin,
  Phone,
  Printer,
  QrCode,
  TrendingUp,
  Wallet,
} from "lucide-react";
import React from "react";
import neoLogo from "../assets/axiom.svg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
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
    date: "2024-01-15",
    description: "Invoice #INV-001",
    debit: 5200,
    credit: 0,
    balance: 5200,
    type: "Invoice",
  },
  {
    date: "2024-01-20",
    description: "Payment Received",
    debit: 0,
    credit: 5200,
    balance: 0,
    type: "Payment",
  },
  {
    date: "2024-01-25",
    description: "Invoice #INV-002",
    debit: 3500,
    credit: 0,
    balance: 3500,
    type: "Invoice",
  },
  {
    date: "2024-02-01",
    description: "Late Fee",
    debit: 50,
    credit: 0,
    balance: 3550,
    type: "Fee",
  },
  {
    date: "2024-02-05",
    description: "Invoice #INV-003",
    debit: 2800,
    credit: 0,
    balance: 6350,
    type: "Invoice",
  },
  {
    date: "2024-02-10",
    description: "Partial Payment",
    debit: 0,
    credit: 2000,
    balance: 4350,
    type: "Payment",
  },
];

const currentBalance = transactions[transactions.length - 1].balance;
const totalDebits = transactions.reduce((sum, t) => sum + t.debit, 0);
const totalCredits = transactions.reduce((sum, t) => sum + t.credit, 0);

export function StatementTemplate() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center space-x-3">
          <img src={neoLogo} alt="Neo Business" className="h-12 w-auto" />
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white"
          >
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Statement Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0B4881] mb-2">
          STATEMENT OF ACCOUNT
        </h2>
        <p className="text-[#11254A]/70">Account Statement #ST-001</p>
      </div>

      {/* Client and Company Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-[#11254A] mb-3">Statement For:</h3>
          <div className="space-y-2 text-[#11254A]/80">
            <p className="font-medium">Tech Corp Ltd</p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#0B4881]" />
              <span>123 Business Street</span>
            </div>
            <div className="flex items-center gap-2">
              <span>New York, NY 10001</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#0B4881]" />
              <span>billing@techcorp.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#0B4881]" />
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#11254A] mb-3">Statement Details:</h3>
          <div className="space-y-2 text-[#11254A]/80">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#0B4881]" />
              <span>
                <strong>Period:</strong> January 1 - February 15, 2024
              </span>
            </div>
            <p>
              <strong>Statement Date:</strong> February 15, 2024
            </p>
            <p>
              <strong>Account Number:</strong> ACC-001
            </p>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#1067B0]" />
              <span>
                <strong>Payment Terms:</strong> Net 30 Days
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Summary */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="border-[#0B4881]/20">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-[#11254A]/70 mb-1">Current Balance</p>
              <p className="text-2xl font-bold text-[#0B4881]">
                ${currentBalance.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#1067B0]/20">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-[#11254A]/70 mb-1">Total Charges</p>
              <p className="text-2xl font-bold text-[#1067B0]">
                ${totalDebits.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#11254A]/20">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-[#11254A]/70 mb-1">Total Payments</p>
              <p className="text-2xl font-bold text-[#11254A]">
                ${totalCredits.toLocaleString()}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-[#11254A]/70 mb-1">Past Due</p>
              <p className="text-2xl font-bold text-orange-600">
                ${currentBalance > 0 ? currentBalance : 0}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-[#11254A]">Transaction History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#0B4881]/10">
                <TableHead className="text-[#11254A] font-bold">Date</TableHead>
                <TableHead className="text-[#11254A] font-bold">
                  Description
                </TableHead>
                <TableHead className="text-[#11254A] font-bold">Type</TableHead>
                <TableHead className="text-[#11254A] font-bold text-right">
                  Charges
                </TableHead>
                <TableHead className="text-[#11254A] font-bold text-right">
                  Payments
                </TableHead>
                <TableHead className="text-[#11254A] font-bold text-right">
                  Balance
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-[#F1F2F4]/30" : ""}
                >
                  <TableCell className="text-[#11254A]">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="font-medium text-[#11254A]">
                    {transaction.description}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.type === "Payment"
                          ? "default"
                          : transaction.type === "Fee"
                          ? "destructive"
                          : "secondary"
                      }
                      className={
                        transaction.type === "Payment"
                          ? "bg-[#0B4881]"
                          : transaction.type === "Fee"
                          ? ""
                          : "bg-[#1067B0]"
                      }
                    >
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-[#11254A]">
                    {transaction.debit > 0
                      ? `$${transaction.debit.toLocaleString()}`
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right text-[#0B4881]">
                    {transaction.credit > 0
                      ? `$${transaction.credit.toLocaleString()}`
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right font-medium text-[#11254A]">
                    ${transaction.balance.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Aging Summary */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A]">Aging Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-[#0B4881]/10 rounded">
                <span className="text-[#11254A]">Current (0-30 days)</span>
                <span className="font-bold text-[#0B4881]">$2,350</span>
              </div>
              <div className="flex justify-between p-3 bg-[#1067B0]/10 rounded">
                <span className="text-[#11254A]">31-60 days</span>
                <span className="font-bold text-[#1067B0]">$2,000</span>
              </div>
              <div className="flex justify-between p-3 bg-orange-100 rounded">
                <span className="text-[#11254A]">61+ days (Past Due)</span>
                <span className="font-bold text-orange-600">$0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A]">
              Quick Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="bg-white border-2 border-[#0B4881]/20 rounded-lg p-3 mb-3 inline-block">
                <QrCode className="h-20 w-20 text-[#11254A]" />
              </div>
              <p className="text-sm text-[#11254A]/70 mb-3">
                Scan QR code to pay your outstanding balance instantly
              </p>

              {/* Payment Methods Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center space-x-2 p-2 bg-[#F1F2F4] rounded border">
                  <CreditCard className="h-4 w-4 text-[#0B4881]" />
                  <span className="text-xs text-[#11254A]">Cards</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-[#F1F2F4] rounded border">
                  <Wallet className="h-4 w-4 text-[#0B4881]" />
                  <span className="text-xs text-[#11254A]">Wallets</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-[#F1F2F4] rounded border">
                  <Building className="h-4 w-4 text-[#0B4881]" />
                  <span className="text-xs text-[#11254A]">Bank Transfer</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-[#F1F2F4] rounded border">
                  <Banknote className="h-4 w-4 text-[#0B4881]" />
                  <span className="text-xs text-[#11254A]">BNPL</span>
                </div>
              </div>

              {/* Supported Providers */}
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
                  PayPal
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
                  Stripe
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
                  Apple Pay
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
                  Tabby
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
                  Western Union
                </span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-2 text-[#11254A]/80">
              <p>
                <strong>Traditional Payment Methods:</strong>
              </p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Bank Transfer: ACC-123456789</li>
                <li>• Check: Neo Business Solutions</li>
                <li>• Online Portal: neo.com/payments</li>
              </ul>
              <p className="text-sm text-orange-600 mt-4">
                <strong>Notice:</strong> Payment is due within 30 days of
                invoice date. A 1.5% monthly service charge may be applied to
                past due amounts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center pt-6 border-t border-[#0B4881]/20">
        <p className="text-[#11254A]/70 mb-2">
          For questions about this statement, please contact our accounting
          department.
        </p>
        <p className="text-sm text-[#11254A]/50">
          Neo Business Solutions | 456 Company Ave, San Francisco, CA 94102
        </p>
        <p className="text-sm text-[#11254A]/50">
          Phone: (555) 987-6543 | Email: accounting@neo.com | www.neo.com
        </p>
      </div>
    </div>
  );
}
