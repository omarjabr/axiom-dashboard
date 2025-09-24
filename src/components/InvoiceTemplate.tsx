import {
  Banknote,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  Mail,
  MapPin,
  Phone,
  Printer,
  QrCode,
  Wallet,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";
import neoLogo from "../assets/axiom.svg";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const invoiceItems = [
  {
    description: "Web Development Services",
    quantity: 40,
    rate: 75,
    amount: 3000,
  },
  { description: "UI/UX Design", quantity: 20, rate: 85, amount: 1700 },
  { description: "Project Management", quantity: 10, rate: 65, amount: 650 },
];

const subtotal = invoiceItems.reduce((sum, item) => sum + item.amount, 0);
const tax = subtotal * 0.1; // 10% tax
const total = subtotal + tax;

export function InvoiceTemplate() {
  const [status, setStatus] = useState<"unpaid" | "paid" | "overdue">("unpaid");

  const getStatusIcon = () => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "overdue":
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-orange-500" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800 border-green-200";
      case "overdue":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-orange-100 text-orange-800 border-orange-200";
    }
  };

  const handlePayNow = () => {
    setStatus("paid");
  };

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

      {/* Invoice Title and Status */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0B4881] mb-2">INVOICE</h2>
        <p className="text-[#11254A]/70 mb-4">Invoice #INV-001</p>

        {/* Status Badge */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getStatusColor()}`}
          >
            {getStatusIcon()}
            <span className="font-medium capitalize">{status}</span>
          </div>
        </div>

        {/* Pay Now Button - Only show if unpaid or overdue */}
        {status !== "paid" && (
          <Button
            onClick={handlePayNow}
            className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white"
          >
            <CreditCard className="h-4 w-4 mr-2" />
            Pay Now
          </Button>
        )}
      </div>

      {/* Bill To and From Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-[#11254A] mb-3">Bill To:</h3>
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
          <h3 className="font-bold text-[#11254A] mb-3">From:</h3>
          <div className="space-y-2 text-[#11254A]/80">
            <p className="font-medium">Neo Business Solutions</p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#0B4881]" />
              <span>456 Company Ave</span>
            </div>
            <div className="flex items-center gap-2">
              <span>San Francisco, CA 94102</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#0B4881]" />
              <span>billing@neo.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#0B4881]" />
              <span>(555) 987-6543</span>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="border-[#0B4881]/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-[#0B4881]" />
              <span className="text-sm text-[#11254A]/70">Invoice Date</span>
            </div>
            <p className="font-medium text-[#11254A]">January 15, 2024</p>
          </CardContent>
        </Card>

        <Card className="border-[#1067B0]/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-[#1067B0]" />
              <span className="text-sm text-[#11254A]/70">Due Date</span>
            </div>
            <p className="font-medium text-[#11254A]">February 15, 2024</p>
          </CardContent>
        </Card>

        <Card className="border-[#11254A]/20">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm text-[#11254A]/70">Payment Terms</span>
            </div>
            <p className="font-medium text-[#11254A]">Net 30</p>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Items Table */}
      <Card className="mb-6">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#0B4881]/10">
                <TableHead className="text-[#11254A] font-bold">
                  Description
                </TableHead>
                <TableHead className="text-[#11254A] font-bold text-center">
                  Qty
                </TableHead>
                <TableHead className="text-[#11254A] font-bold text-right">
                  Rate
                </TableHead>
                <TableHead className="text-[#11254A] font-bold text-right">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-[#11254A]">
                    {item.description}
                  </TableCell>
                  <TableCell className="text-center text-[#11254A]">
                    {item.quantity}
                  </TableCell>
                  <TableCell className="text-right text-[#11254A]">
                    ${item.rate}
                  </TableCell>
                  <TableCell className="text-right font-medium text-[#0B4881]">
                    ${item.amount.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Totals */}
      <div className="flex justify-end mb-8">
        <div className="w-full max-w-sm">
          <div className="space-y-2">
            <div className="flex justify-between text-[#11254A]">
              <span>Subtotal:</span>
              <span className="font-medium">${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#11254A]">
              <span>Tax (10%):</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold text-[#0B4881]">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Payment Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* QR Code */}
        <Card className="border-[#0B4881]/20">
          <CardContent className="p-6 text-center">
            <h3 className="font-bold text-[#11254A] mb-4">Scan to Pay</h3>
            <div className="bg-white border-2 border-[#0B4881]/20 rounded-lg p-4 mb-4 inline-block">
              <QrCode className="h-32 w-32 text-[#11254A]" />
            </div>
            <p className="text-sm text-[#11254A]/70">
              Scan this QR code with your mobile banking app or payment app to
              pay instantly
            </p>
          </CardContent>
        </Card>

        {/* Payment Options */}
        <Card className="border-[#1067B0]/20">
          <CardContent className="p-6">
            <h3 className="font-bold text-[#11254A] mb-4">
              Accepted Payment Methods
            </h3>

            {/* Primary Payment Options */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center space-x-2 p-2 bg-white rounded border border-[#0B4881]/10">
                <CreditCard className="h-5 w-5 text-[#0B4881]" />
                <span className="text-sm text-[#11254A]">Cards</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white rounded border border-[#0B4881]/10">
                <Wallet className="h-5 w-5 text-[#0B4881]" />
                <span className="text-sm text-[#11254A]">Digital Wallets</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white rounded border border-[#0B4881]/10">
                <Building className="h-5 w-5 text-[#0B4881]" />
                <span className="text-sm text-[#11254A]">Bank Transfer</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white rounded border border-[#0B4881]/10">
                <Banknote className="h-5 w-5 text-[#0B4881]" />
                <span className="text-sm text-[#11254A]">BNPL (Tabby)</span>
              </div>
            </div>

            {/* Payment Providers */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-[#11254A]">
                Supported Providers:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs font-medium">
                  PayPal
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs font-medium">
                  Stripe
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs font-medium">
                  Apple Pay
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs font-medium">
                  Western Union
                </span>
                <span className="px-2 py-1 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs font-medium">
                  Tabby BNPL
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Instructions */}
      <Card className="bg-[#F1F2F4] border-none">
        <CardContent className="p-6">
          <h3 className="font-bold text-[#11254A] mb-3">
            Payment Instructions
          </h3>
          <div className="space-y-3 text-[#11254A]/80">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#0B4881] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium text-[#11254A]">
                  Quick Payment (Recommended)
                </p>
                <p className="text-sm">
                  Scan the QR code above with your banking or payment app for
                  instant payment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#1067B0] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium text-[#11254A]">Online Payment</p>
                <p className="text-sm">
                  Visit neo.com/pay/INV-001 and choose from multiple payment
                  options
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#11254A] text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium text-[#11254A]">
                  Traditional Methods
                </p>
                <p className="text-sm">
                  Bank transfer to account: 123-456-789 or check payable to Neo
                  Business Solutions
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-[#0B4881]/10 rounded-lg">
              <p className="text-sm text-[#0B4881] font-medium">
                💡 Pro Tip: QR code payments are processed instantly and you'll
                receive an immediate confirmation!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t border-[#0B4881]/20">
        <p className="text-[#11254A]/70">Thank you for your business!</p>
        <p className="text-sm text-[#11254A]/50 mt-2">
          Neo Business Solutions | www.neo.com | support@neo.com
        </p>
      </div>
    </div>
  );
}
