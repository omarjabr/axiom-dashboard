import {
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  Mail,
  Phone,
  Printer,
  QrCode,
  User,
} from "lucide-react";
import React from "react";
import axiomLogo from "../assets/axiom.svg";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const serviceDetails = [
  { service: "Consultation Fee", duration: "2 hours", rate: 150, amount: 300 },
  {
    service: "Document Processing",
    quantity: "5 documents",
    rate: 25,
    amount: 125,
  },
  { service: "Administrative Fee", quantity: "1", rate: 50, amount: 50 },
];

const subtotal = serviceDetails.reduce((sum, item) => sum + item.amount, 0);
const discount = 25; // Discount amount
const tax = (subtotal - discount) * 0.08; // 8% tax after discount
const total = subtotal - discount + tax;

export function ClientReceiptTemplate() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <img src={axiomLogo} alt="Axiom Business" className="h-12 w-auto" />
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

        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
          <CheckCircle className="h-4 w-4" />
          <span className="font-medium">Payment Confirmed</span>
        </div>
      </div>

      {/* Receipt Header */}
      <Card className="mb-6 border-[#0B4881]/20">
        <CardContent className="p-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-[#0B4881]">
              CLIENT RECEIPT
            </h2>
            <p className="text-[#11254A]/70">Receipt #CR-001</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#0B4881]" />
                <span className="text-[#11254A]/70">Date:</span>
              </div>
              <p className="text-[#11254A] pl-6">January 15, 2024</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#1067B0]" />
                <span className="text-[#11254A]/70">Time:</span>
              </div>
              <p className="text-[#11254A] pl-6">3:45 PM</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Information */}
      <Card className="mb-6 border-[#1067B0]/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <User className="h-4 w-4 text-[#1067B0]" />
            <h3 className="font-bold text-[#11254A]">Client Information</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#11254A]/70">Name:</span>
              <span className="text-[#11254A] font-medium">Sarah Johnson</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#11254A]/70">Client ID:</span>
              <span className="text-[#11254A] font-medium">CL-12345</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#11254A]/70">Email:</span>
              <span className="text-[#11254A] font-medium">
                sarah.j@email.com
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#11254A]/70">Phone:</span>
              <span className="text-[#11254A] font-medium">(555) 987-6543</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Details */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-4">Services Provided</h3>
          <div className="space-y-4">
            {serviceDetails.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <p className="font-medium text-[#11254A]">{item.service}</p>
                    <p className="text-sm text-[#11254A]/70">
                      {item.duration || item.quantity} @ ${item.rate}
                    </p>
                  </div>
                  <p className="font-bold text-[#0B4881]">${item.amount}</p>
                </div>
                {index < serviceDetails.length - 1 && (
                  <Separator className="mt-2" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-3">Payment Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#11254A]">Subtotal:</span>
              <span className="text-[#11254A]">${subtotal}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount:</span>
              <span>-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#11254A]">Tax (8%):</span>
              <span className="text-[#11254A]">${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold text-[#0B4881]">
              <span>Total Paid:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Details */}
      <Card className="mb-6 border-[#11254A]/20">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-3">Payment Details</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-[#0B4881]" />
                <span className="text-[#11254A]">Payment Method:</span>
              </div>
              <span className="text-[#11254A] font-medium">Visa **** 4567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#11254A]/70">Transaction ID:</span>
              <span className="text-[#11254A] font-mono text-sm">
                TXN-ABC123456789
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#11254A]/70">Authorization:</span>
              <span className="text-[#11254A] font-mono text-sm">
                AUTH-987654
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#11254A]/70">Status:</span>
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Approved
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Provider Info */}
      <Card className="mb-6 bg-[#F1F2F4] border-none">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-2">Service Provider</h3>
          <div className="text-sm space-y-1 text-[#11254A]/80">
            <p>
              <span className="font-medium">Representative:</span> Michael Chen
            </p>
            <p>
              <span className="font-medium">Department:</span> Client Services
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-[#0B4881]" />
              <span>m.chen@axiom.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-[#0B4881]" />
              <span>(555) 987-6543 ext. 234</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="mb-6 border-orange-200">
        <CardContent className="p-4">
          <h3 className="font-bold text-[#11254A] mb-2">
            Important Information
          </h3>
          <div className="text-xs text-[#11254A]/80 space-y-1">
            <p>• This receipt serves as proof of payment</p>
            <p>• Keep this receipt for your records</p>
            <p>• Services are non-refundable after completion</p>
            <p>• For questions, contact us within 30 days</p>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center pt-4 border-t border-[#0B4881]/20">
        <p className="text-sm text-[#11254A]/70 mb-2">
          Thank you for choosing Axiom!
        </p>
        <p className="text-xs text-[#11254A]/50 mb-1">
          Axiom Business Solutions
        </p>
        <p className="text-xs text-[#11254A]/50 mb-1">
          456 Company Ave, San Francisco, CA 94102
        </p>
        <p className="text-xs text-[#11254A]/50">
          www.axiom.com | support@axiom.com
        </p>
      </div>

      {/* QR Code for Future Services */}
      <Card className="mt-4 border-[#0B4881]/20">
        <CardContent className="p-4 text-center">
          <h3 className="font-bold text-[#11254A] mb-3">
            Book Future Services
          </h3>
          <div className="bg-white border border-[#0B4881]/20 rounded p-2 mb-3 inline-block">
            <QrCode className="h-20 w-20 text-[#11254A]" />
          </div>
          <p className="text-xs text-[#11254A]/70 mb-3">
            Scan to access our client portal and book additional services
          </p>

          {/* Quick Payment Setup */}
          <div className="bg-[#F1F2F4] rounded p-3">
            <p className="text-xs font-medium text-[#11254A] mb-2">
              Payment Methods Available:
            </p>
            <div className="flex justify-center flex-wrap gap-1">
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
                Tabby BNPL
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
