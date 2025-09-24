import { CreditCard, FileText, Plus, Receipt, Users } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const quickActions = [
  {
    icon: Plus,
    label: "Add Income",
    description: "Record new revenue",
    variant: "default" as const,
    className: "bg-[#0B4881] hover:bg-[#0B4881]/90 text-white",
  },
  {
    icon: CreditCard,
    label: "Add Expense",
    description: "Log business expense",
    variant: "secondary" as const,
    className: "bg-[#1067B0] hover:bg-[#1067B0]/90 text-white",
  },
  {
    icon: FileText,
    label: "Create Invoice",
    description: "Bill your customers",
    variant: "outline" as const,
    className:
      "border-[#11254A] text-[#11254A] hover:bg-[#11254A] hover:text-white",
  },
  {
    icon: Receipt,
    label: "Record Payment",
    description: "Mark invoice as paid",
    variant: "outline" as const,
    className:
      "border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white",
  },
  {
    icon: Users,
    label: "Add Customer",
    description: "New client details",
    variant: "outline" as const,
    className:
      "border-[#1067B0] text-[#1067B0] hover:bg-[#1067B0] hover:text-white",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#11254A]">Quick Actions</CardTitle>
        <CardDescription className="text-[#11254A]/70">
          Common accounting tasks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {quickActions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            className={`w-full justify-start h-16 px-4 py-3 ${action.className}`}
          >
            <action.icon className="h-5 w-5 mr-4 flex-shrink-0" />
            <div className="text-left flex-1">
              <div className="font-medium text-sm">{action.label}</div>
              <div className="text-xs opacity-70 mt-1">
                {action.description}
              </div>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
