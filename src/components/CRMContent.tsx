import { ArrowLeft, Plus, Target, User, UserPlus } from "lucide-react";
import React, { useState } from "react";
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
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
import { Progress } from "./ui/progress";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const salesData = [
  { month: "Jan", leads: 45, customers: 12, revenue: 25000 },
  { month: "Feb", leads: 52, customers: 18, revenue: 32000 },
  { month: "Mar", leads: 48, customers: 15, revenue: 28000 },
  { month: "Apr", leads: 61, customers: 22, revenue: 45000 },
  { month: "May", leads: 55, customers: 19, revenue: 38000 },
  { month: "Jun", leads: 67, customers: 24, revenue: 52000 },
];

const customers = [
  {
    id: "CUST-001",
    name: "John Smith",
    company: "Tech Corp",
    email: "john@techcorp.com",
    status: "Active",
    value: "$15,000",
  },
  {
    id: "CUST-002",
    name: "Sarah Johnson",
    company: "Design Co",
    email: "sarah@designco.com",
    status: "Lead",
    value: "$8,500",
  },
  {
    id: "CUST-003",
    name: "Mike Davis",
    company: "StartupXYZ",
    email: "mike@startup.com",
    status: "Active",
    value: "$22,000",
  },
  {
    id: "CUST-004",
    name: "Lisa Chen",
    company: "Marketing Inc",
    email: "lisa@marketing.com",
    status: "Prospect",
    value: "$12,000",
  },
];

const pipeline = [
  { stage: "Prospecting", deals: 15, value: 75000 },
  { stage: "Qualification", deals: 8, value: 120000 },
  { stage: "Proposal", deals: 5, value: 85000 },
  { stage: "Negotiation", deals: 3, value: 65000 },
  { stage: "Closed Won", deals: 12, value: 180000 },
];

const leadSources = [
  { name: "Website", value: 35, color: "#0B4881" },
  { name: "Referrals", value: 25, color: "#1067B0" },
  { name: "Social Media", value: 20, color: "#11254A" },
  { name: "Email", value: 15, color: "#F1F2F4" },
  { name: "Other", value: 5, color: "#0B4881" },
];

const leads = [
  {
    id: "LEAD-001",
    name: "Emma Wilson",
    company: "Tech Startup Inc",
    email: "emma@techstartup.com",
    source: "Website",
    score: 85,
    status: "Hot",
  },
  {
    id: "LEAD-002",
    name: "David Brown",
    company: "Marketing Solutions",
    email: "david@marketing.com",
    source: "Referral",
    score: 72,
    status: "Warm",
  },
  {
    id: "LEAD-003",
    name: "Anna Garcia",
    company: "Design Agency",
    email: "anna@design.com",
    source: "Social Media",
    score: 58,
    status: "Cold",
  },
  {
    id: "LEAD-004",
    name: "Robert Kim",
    company: "E-commerce Co",
    email: "robert@ecom.com",
    source: "Email Campaign",
    score: 91,
    status: "Hot",
  },
];

const opportunities = [
  {
    id: "OPP-001",
    name: "Enterprise Software Deal",
    client: "Tech Corp Ltd",
    value: 125000,
    stage: "Proposal",
    probability: 75,
    closeDate: "2024-03-15",
  },
  {
    id: "OPP-002",
    name: "Marketing Campaign Project",
    client: "StartupXYZ",
    value: 85000,
    stage: "Negotiation",
    probability: 60,
    closeDate: "2024-02-28",
  },
  {
    id: "OPP-003",
    name: "Website Redesign",
    client: "Design Co",
    value: 45000,
    stage: "Qualification",
    probability: 40,
    closeDate: "2024-04-10",
  },
  {
    id: "OPP-004",
    name: "CRM Implementation",
    client: "Marketing Inc",
    value: 95000,
    stage: "Closed Won",
    probability: 100,
    closeDate: "2024-01-30",
  },
];

const chartConfig = {
  leads: { label: "Leads", color: "#0B4881" },
  customers: { label: "Customers", color: "#1067B0" },
  revenue: { label: "Revenue", color: "#11254A" },
};

export function CRMContent() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (activeSection) {
    return (
      <div className="flex flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setActiveSection(null)}
              className="text-[#0B4881] hover:bg-[#0B4881]/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to CRM
            </Button>
            <div>
              <h1 className="text-[#11254A] text-xl font-medium">
                {activeSection === "leads"
                  ? "Leads Management"
                  : "Opportunities Pipeline"}
              </h1>
              <p className="text-[#11254A]/70 text-sm">
                {activeSection === "leads"
                  ? "Manage and nurture potential customers"
                  : "Track and manage sales opportunities"}
              </p>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          {activeSection === "leads" && (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Leads
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#0B4881]">
                      {leads.length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Active prospects
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Hot Leads
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#1067B0]">
                      {leads.filter((l) => l.status === "Hot").length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      High probability
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Avg Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#11254A]">
                      {Math.round(
                        leads.reduce((sum, l) => sum + l.score, 0) /
                          leads.length
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Lead quality
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Conversion Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#0B4881]">
                      18.5%
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Lead to customer
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#11254A] flex items-center gap-2">
                    <UserPlus className="h-5 w-5 text-[#0B4881]" />
                    Leads Database
                  </CardTitle>
                  <CardDescription>
                    Manage and track potential customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Lead</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads.map((lead) => (
                        <TableRow key={lead.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-[#0B4881]" />
                              <div>
                                <p className="font-medium text-[#11254A]">
                                  {lead.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {lead.email}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{lead.company}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-[#11254A]">
                              {lead.source}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={lead.score}
                                className="h-2 w-16"
                              />
                              <span className="text-sm font-medium text-[#0B4881]">
                                {lead.score}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                lead.status === "Hot"
                                  ? "default"
                                  : lead.status === "Warm"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {lead.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
          {activeSection === "opportunities" && (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#0B4881]">
                      {opportunities.length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Active deals
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#1067B0]">
                      $
                      {opportunities
                        .reduce((sum, o) => sum + o.value, 0)
                        .toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Pipeline value
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Avg Deal Size
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#11254A]">
                      $
                      {Math.round(
                        opportunities.reduce((sum, o) => sum + o.value, 0) /
                          opportunities.length
                      ).toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Per opportunity
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Win Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#0B4881]">65%</div>
                    <p className="text-xs text-muted-foreground">Closed won</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#11254A] flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#1067B0]" />
                    Opportunities Pipeline
                  </CardTitle>
                  <CardDescription>
                    Track sales opportunities and deals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Opportunity</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Stage</TableHead>
                        <TableHead>Probability</TableHead>
                        <TableHead>Close Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {opportunities.map((opp) => (
                        <TableRow key={opp.id}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Target className="h-4 w-4 text-[#1067B0]" />
                              <div>
                                <p className="font-medium text-[#11254A]">
                                  {opp.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {opp.id}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{opp.client}</TableCell>
                          <TableCell className="text-[#0B4881] font-medium">
                            ${opp.value.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                opp.stage === "Closed Won"
                                  ? "default"
                                  : opp.stage === "Negotiation"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {opp.stage}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={opp.probability}
                                className="h-2 w-16"
                              />
                              <span className="text-sm font-medium text-[#1067B0]">
                                {opp.probability}%
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm">
                            {opp.closeDate}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
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
              Customer Relationship Management
            </h1>
            <p className="text-[#11254A]/70 text-sm">
              Manage customers and sales pipeline
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white"
          >
            <User className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
          <Button className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Deal
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* CRM Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Customers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0B4881]">1,247</div>
              <p className="text-xs text-muted-foreground">+12% this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#1067B0]">67</div>
              <p className="text-xs text-muted-foreground">+8% this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pipeline Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$525K</div>
              <p className="text-xs text-muted-foreground">43 open deals</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0B4881]">24.8%</div>
              <p className="text-xs text-muted-foreground">+2.1% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Sales Performance
              </CardTitle>
              <CardDescription>Monthly leads and conversions</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="leads"
                      stroke="#0B4881"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="customers"
                      stroke="#1067B0"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Lead Sources</CardTitle>
              <CardDescription>Where your leads come from</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="h-[300px] w-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <Pie
                      data={leadSources}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {leadSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex flex-wrap gap-4 mt-4">
                {leadSources.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm text-[#11254A]">{entry.name}</span>
                    <span className="text-xs text-muted-foreground">
                      ({entry.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CRM Sections */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A]">CRM Modules</CardTitle>
            <CardDescription>
              Access specialized CRM features and tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <Button
                variant="outline"
                className="h-32 border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white flex-col space-y-4"
                onClick={() => setActiveSection("leads")}
              >
                <UserPlus className="h-12 w-12" />
                <div className="text-center">
                  <div className="font-medium">Leads Management</div>
                  <div className="text-sm opacity-70">
                    Track and nurture potential customers
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-32 border-[#1067B0] text-[#1067B0] hover:bg-[#1067B0] hover:text-white flex-col space-y-4"
                onClick={() => setActiveSection("opportunities")}
              >
                <Target className="h-12 w-12" />
                <div className="text-center">
                  <div className="font-medium">Opportunities</div>
                  <div className="text-sm opacity-70">
                    Manage sales pipeline and deals
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pipeline and Customers */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Sales Pipeline</CardTitle>
              <CardDescription>Current deal stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pipeline.map((stage, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#11254A] font-medium">
                        {stage.stage}
                      </span>
                      <span className="text-muted-foreground">
                        {stage.deals} deals
                      </span>
                    </div>
                    <Progress
                      value={(stage.value / 200000) * 100}
                      className="h-2"
                    />
                    <div className="text-right text-sm text-[#0B4881] font-medium">
                      ${stage.value.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Recent Customers</CardTitle>
              <CardDescription>Latest customer activity</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-[#0B4881]" />
                          <div>
                            <p className="font-medium text-[#11254A]">
                              {customer.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {customer.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{customer.company}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            customer.status === "Active"
                              ? "default"
                              : customer.status === "Lead"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#0B4881] font-medium">
                        {customer.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
