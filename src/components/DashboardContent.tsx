import { Plus } from "lucide-react";
import React from "react";
import { FinancialCharts } from "./FinancialCharts";
import { MetricsCards } from "./MetricsCards";
import { QuickActions } from "./QuickActions";
import { RecentTransactions } from "./RecentTransactions";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export function DashboardContent() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-[#11254A]" />
          <div>
            <h1 className="text-[#11254A] text-xl font-medium">Dashboard</h1>
            <p className="text-[#11254A]/70 text-sm">
              Welcome back! Here's your financial overview.
            </p>
          </div>
        </div>
        <Button className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Transaction
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-6">
        <MetricsCards />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FinancialCharts />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        <RecentTransactions />
      </div>
    </div>
  );
}
