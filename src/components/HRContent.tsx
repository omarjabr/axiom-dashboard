import {
  Award,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Plus,
  Users,
} from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
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
const payrollData = [
  { month: "Jan", salary: 45000, benefits: 8000, taxes: 12000 },
  { month: "Feb", salary: 47000, benefits: 8200, taxes: 12500 },
  { month: "Mar", salary: 46000, benefits: 8100, taxes: 12200 },
  { month: "Apr", salary: 48000, benefits: 8400, taxes: 12800 },
  { month: "May", salary: 49000, benefits: 8500, taxes: 13000 },
  { month: "Jun", salary: 51000, benefits: 8700, taxes: 13500 },
];

const employees = [
  {
    id: "EMP-001",
    name: "John Smith",
    department: "Engineering",
    position: "Senior Developer",
    salary: "$85,000",
    status: "Active",
  },
  {
    id: "EMP-002",
    name: "Sarah Johnson",
    department: "Design",
    position: "UI/UX Designer",
    salary: "$70,000",
    status: "Active",
  },
  {
    id: "EMP-003",
    name: "Mike Davis",
    department: "Marketing",
    position: "Marketing Manager",
    salary: "$75,000",
    status: "Active",
  },
  {
    id: "EMP-004",
    name: "Lisa Chen",
    department: "Sales",
    position: "Sales Representative",
    salary: "$60,000",
    status: "Leave",
  },
];

const timeOff = [
  {
    employee: "John Smith",
    type: "Vacation",
    dates: "Jan 15-19",
    days: 5,
    status: "Approved",
  },
  {
    employee: "Sarah Johnson",
    type: "Sick Leave",
    dates: "Jan 22",
    days: 1,
    status: "Approved",
  },
  {
    employee: "Mike Davis",
    type: "Personal",
    dates: "Jan 25-26",
    days: 2,
    status: "Pending",
  },
  {
    employee: "Lisa Chen",
    type: "Maternity",
    dates: "Feb 1-Mar 15",
    days: 42,
    status: "Approved",
  },
];

const departments = [
  { name: "Engineering", employees: 8, budget: 680000, utilization: 85 },
  { name: "Design", employees: 4, budget: 280000, utilization: 90 },
  { name: "Marketing", employees: 3, budget: 225000, utilization: 78 },
  { name: "Sales", employees: 5, budget: 300000, utilization: 92 },
];

const attendanceData = [
  { month: "Jan", present: 92, absent: 5, late: 3 },
  { month: "Feb", present: 89, absent: 7, late: 4 },
  { month: "Mar", present: 94, absent: 4, late: 2 },
  { month: "Apr", present: 91, absent: 6, late: 3 },
  { month: "May", present: 93, absent: 4, late: 3 },
  { month: "Jun", present: 95, absent: 3, late: 2 },
];

const lifecycleData = [
  { name: "Recruitment", count: 8, color: "#0B4881" },
  { name: "Onboarding", count: 3, color: "#1067B0" },
  { name: "Active", count: 18, color: "#11254A" },
  { name: "Performance Review", count: 6, color: "#F1F2F4" },
  { name: "Exit Process", count: 1, color: "#0B4881" },
];

const payrollDetails = [
  {
    department: "Engineering",
    employees: 8,
    totalSalary: 85000,
    avgSalary: 10625,
    benefits: 8500,
  },
  {
    department: "Design",
    employees: 4,
    totalSalary: 70000,
    avgSalary: 17500,
    benefits: 7000,
  },
  {
    department: "Marketing",
    employees: 3,
    totalSalary: 75000,
    avgSalary: 25000,
    benefits: 7500,
  },
  {
    department: "Sales",
    employees: 5,
    totalSalary: 60000,
    avgSalary: 12000,
    benefits: 6000,
  },
];

const performanceData = [
  {
    employee: "John Smith",
    department: "Engineering",
    score: 92,
    status: "Excellent",
  },
  {
    employee: "Sarah Johnson",
    department: "Design",
    score: 88,
    status: "Good",
  },
  {
    employee: "Mike Davis",
    department: "Marketing",
    score: 85,
    status: "Good",
  },
  {
    employee: "Lisa Chen",
    department: "Sales",
    score: 94,
    status: "Excellent",
  },
];

const chartConfig = {
  salary: { label: "Salary", color: "#0B4881" },
  benefits: { label: "Benefits", color: "#1067B0" },
  taxes: { label: "Taxes", color: "#11254A" },
  present: { label: "Present", color: "#0B4881" },
  absent: { label: "Absent", color: "#11254A" },
  late: { label: "Late", color: "#1067B0" },
};

export function HRContent() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-[#11254A]" />
          <div>
            <h1 className="text-[#11254A] text-xl font-medium">HR & Payroll</h1>
            <p className="text-[#11254A]/70 text-sm">
              Manage employees and payroll operations
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white"
          >
            <FileText className="h-4 w-4 mr-2" />
            Reports
          </Button>
          <Button
            variant="outline"
            className="border-[#1067B0] text-[#1067B0] hover:bg-[#1067B0] hover:text-white"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Time Off
          </Button>
          <Button className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* HR Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Employees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0B4881]">24</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#1067B0]">$73,200</div>
              <p className="text-xs text-muted-foreground">
                Including benefits
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Salary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$72,500</div>
              <p className="text-xs text-muted-foreground">
                +5% from last year
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Turnover Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0B4881]">8.5%</div>
              <p className="text-xs text-muted-foreground">
                Below industry avg
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Payroll Breakdown
              </CardTitle>
              <CardDescription>Monthly payroll costs</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={payrollData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="salary"
                      fill="#0B4881"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="benefits"
                      fill="#1067B0"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar dataKey="taxes" fill="#11254A" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Attendance Tracking
              </CardTitle>
              <CardDescription>Monthly attendance patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={attendanceData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="present"
                      stroke="#0B4881"
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="absent"
                      stroke="#11254A"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="late"
                      stroke="#1067B0"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Employee Lifecycle
              </CardTitle>
              <CardDescription>
                Current employee status distribution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <Pie
                      data={lifecycleData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="count"
                    >
                      {lifecycleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex flex-wrap gap-4 mt-4">
                {lifecycleData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm text-[#11254A]">{entry.name}</span>
                    <span className="text-xs text-muted-foreground">
                      ({entry.count})
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Department Utilization
              </CardTitle>
              <CardDescription>Team performance and budget</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#11254A] font-medium">
                        {dept.name}
                      </span>
                      <span className="text-muted-foreground">
                        {dept.employees} employees
                      </span>
                    </div>
                    <Progress value={dept.utilization} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span className="text-[#0B4881]">
                        {dept.utilization}% utilization
                      </span>
                      <span className="text-muted-foreground">
                        ${dept.budget.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payroll Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A] flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-[#0B4881]" />
              Detailed Payroll Analysis
            </CardTitle>
            <CardDescription>Department-wise payroll breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department</TableHead>
                  <TableHead>Employees</TableHead>
                  <TableHead>Total Salary</TableHead>
                  <TableHead>Avg Salary</TableHead>
                  <TableHead>Benefits</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollDetails.map((dept, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-[#11254A]">
                      {dept.department}
                    </TableCell>
                    <TableCell>{dept.employees}</TableCell>
                    <TableCell className="text-[#0B4881] font-medium">
                      ${dept.totalSalary.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-[#1067B0] font-medium">
                      ${dept.avgSalary.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-[#11254A] font-medium">
                      ${dept.benefits.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Employee Performance and Time Off */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A] flex items-center gap-2">
                <Award className="h-5 w-5 text-[#0B4881]" />
                Employee Performance
              </CardTitle>
              <CardDescription>
                Recent performance review scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceData.map((employee, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#0B4881]" />
                      <div>
                        <p className="font-medium text-[#11254A]">
                          {employee.employee}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {employee.department}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#0B4881]">
                        {employee.score}/100
                      </p>
                      <Badge
                        variant={
                          employee.status === "Excellent"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {employee.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Time Off Requests
              </CardTitle>
              <CardDescription>Recent leave applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeOff.map((request, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#0B4881]" />
                      <div>
                        <p className="font-medium text-[#11254A]">
                          {request.employee}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {request.type} - {request.dates}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#11254A]">
                        {request.days} days
                      </p>
                      <Badge
                        variant={
                          request.status === "Approved"
                            ? "default"
                            : request.status === "Pending"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Employee Directory */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A] flex items-center gap-2">
              <Users className="h-5 w-5 text-[#0B4881]" />
              Employee Directory
            </CardTitle>
            <CardDescription>Complete team member information</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Salary</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#0B4881]" />
                        <div>
                          <p className="font-medium text-[#11254A]">
                            {employee.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {employee.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell className="text-[#0B4881] font-medium">
                      {employee.salary}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          employee.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {employee.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
