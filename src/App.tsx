import React, { useState } from "react";
import { AccountingContent } from "./components/AccountingContent";
import { CRMContent } from "./components/CRMContent";
import { DashboardContent } from "./components/DashboardContent";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { HRContent } from "./components/HRContent";
import { POSContent } from "./components/POSContent";
import { SidebarProvider } from "./components/ui/sidebar";

export type ActiveSection = "dashboard" | "accounting" | "crm" | "hr" | "pos";

export default function App() {
  const [activeSection, setActiveSection] =
    useState<ActiveSection>("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />;
      case "accounting":
        return <AccountingContent />;
      case "crm":
        return <CRMContent />;
      case "hr":
        return <HRContent />;
      case "pos":
        return <POSContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <DashboardSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 overflow-auto">{renderContent()}</main>
      </div>
    </SidebarProvider>
  );
}
