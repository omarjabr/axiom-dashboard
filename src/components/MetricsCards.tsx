import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const metrics = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: TrendingUp,
    description: "from last month",
    bgColor: "bg-[#0B4881]",
  },
  {
    title: "Total Expenses",
    value: "$12,234.00",
    change: "-4.3%",
    trend: "down",
    icon: TrendingDown,
    description: "from last month",
    bgColor: "bg-[#1067B0]",
  },
  {
    title: "Net Profit",
    value: "$33,997.89",
    change: "+15.7%",
    trend: "up",
    icon: DollarSign,
    description: "from last month",
    bgColor: "bg-[#11254A]",
  },
  {
    title: "Cash Flow",
    value: "$28,450.12",
    change: "+8.2%",
    trend: "up",
    icon: Wallet,
    description: "from last month",
    bgColor: "bg-[#0B4881]",
  },
];

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#11254A]">
              {metric.value}
            </div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              {metric.trend === "up" ? (
                <ArrowUpIcon className="h-3 w-3 text-[#0B4881]" />
              ) : (
                <ArrowDownIcon className="h-3 w-3 text-red-500" />
              )}
              <span
                className={
                  metric.trend === "up" ? "text-[#0B4881]" : "text-red-500"
                }
              >
                {metric.change}
              </span>
              <span>{metric.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
