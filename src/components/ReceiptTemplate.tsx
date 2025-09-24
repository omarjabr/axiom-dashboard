import {
  Calendar,
  Clock,
  CreditCard,
  Download,
  MapPin,
  Printer,
  QrCode,
} from "lucide-react";
import React from "react";
import axiomLogo from "../assets/axiom.svg";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const receiptItems = [
  { name: "Web Development Package", price: 2500, quantity: 1 },
  { name: "Premium Support (1 Year)", price: 500, quantity: 1 },
  { name: "Additional Features", price: 350, quantity: 2 },
];

const subtotal = receiptItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const tax = subtotal * 0.08; // 8% tax
const total = subtotal + tax;

export function ReceiptTemplate() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <img src={axiomLogo} alt="Axiom Business" className="h-10 w-auto" />
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            className="border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white"
          >
            <Printer className="h-3 w-3 mr-1" />
            Print
          </Button>
          <Button
            size="sm"
            className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white"
          >
            <Download className="h-3 w-3 mr-1" />
            Download
          </Button>
        </div>
      </div>

      {/* Receipt Info */}
      <Card className="mb-6 border-[#0B4881]/20">
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-[#0B4881]">RECEIPT</h2>
            <p className="text-[#11254A]/70">Receipt #RCP-001</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0B4881]" />
                <span className="text-[#11254A]/70">Date:</span>
              </div>
              <span className="text-[#11254A]">January 15, 2024</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#1067B0]" />
                <span className="text-[#11254A]/70">Time:</span>
              </div>
              <span className="text-[#11254A]">2:30 PM</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#11254A]" />
                <span className="text-[#11254A]/70">Location:</span>
              </div>
              <span className="text-[#11254A]">San Francisco, CA</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Info */}
      <Card className="mb-6 border-[#1067B0]/20">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-2">
            Customer Information
          </h3>
          <div className="text-sm space-y-1 text-[#11254A]/80">
            <p>
              <span className="font-medium">Name:</span> John Doe
            </p>
            <p>
              <span className="font-medium">Email:</span> john.doe@email.com
            </p>
            <p>
              <span className="font-medium">Phone:</span> (555) 123-4567
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Items */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-3">Items Purchased</h3>
          <div className="space-y-3">
            {receiptItems.map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium text-[#11254A]">{item.name}</p>
                  <p className="text-sm text-[#11254A]/70">
                    Qty: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#0B4881]">
                    ${(item.price * item.quantity).toLocaleString()}
                  </p>
                  <p className="text-sm text-[#11254A]/70">
                    ${item.price} each
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between text-[#11254A]">
              <span>Subtotal:</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#11254A]">
              <span>Tax (8%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-lg font-bold text-[#0B4881]">
              <span>Total Paid:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card className="mb-6 border-[#11254A]/20">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-2">Payment Method</h3>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-[#0B4881]" />
            <span className="text-[#11254A]">Credit Card</span>
            <span className="text-[#11254A]/70">**** 4567</span>
          </div>
          <p className="text-sm text-[#0B4881] mt-1">✓ Payment Successful</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center pt-4 border-t border-[#0B4881]/20">
        <p className="text-sm text-[#11254A]/70 mb-2">
          Thank you for your purchase!
        </p>
        <p className="text-xs text-[#11254A]/50">
          Questions? Contact us at support@axiom.com
        </p>
        <p className="text-xs text-[#11254A]/50 mt-1">
          Axiom Business Solutions | www.axiom.com
        </p>
      </div>

      {/* QR Code for Future Payments */}
      <Card className="mt-4 border-[#0B4881]/20">
        <CardContent className="p-4 text-center">
          <h3 className="font-bold text-[#11254A] mb-2">
            Pay Future Invoices Instantly
          </h3>
          <div className="bg-white border border-[#0B4881]/20 rounded p-2 mb-2 inline-block">
            <QrCode className="h-16 w-16 text-[#11254A]" />
          </div>
          <p className="text-xs text-[#11254A]/70 mb-2">
            Scan to set up quick payments for future transactions
          </p>
          <div className="flex justify-center flex-wrap gap-1">
            <span className="px-1.5 py-0.5 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
              PayPal
            </span>
            <span className="px-1.5 py-0.5 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
              Stripe
            </span>
            <span className="px-1.5 py-0.5 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
              Apple Pay
            </span>
            <span className="px-1.5 py-0.5 bg-[#0B4881]/10 text-[#0B4881] rounded text-xs">
              Tabby
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
