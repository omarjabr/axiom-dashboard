import {
  ArrowLeft,
  CreditCard,
  Package,
  Plus,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "./ui/badge";
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
  { day: "Mon", sales: 2400, transactions: 45, avg: 53 },
  { day: "Tue", sales: 2800, transactions: 52, avg: 54 },
  { day: "Wed", sales: 3200, transactions: 58, avg: 55 },
  { day: "Thu", sales: 2900, transactions: 51, avg: 57 },
  { day: "Fri", sales: 4200, transactions: 72, avg: 58 },
  { day: "Sat", sales: 5100, transactions: 89, avg: 57 },
  { day: "Sun", sales: 3800, transactions: 64, avg: 59 },
];

const topProducts = [
  {
    name: "Fresh Sandwiches",
    sold: 89,
    revenue: 135,
    stock: 23,
    category: "Food",
  },
  {
    name: "Artisan Pastries",
    sold: 98,
    revenue: 147,
    stock: 34,
    category: "Food",
  },
  {
    name: "Organic Tea",
    sold: 76,
    revenue: 114,
    stock: 67,
    category: "Beverages",
  },
  {
    name: "Premium Coffee",
    sold: 145,
    revenue: 217,
    stock: 89,
    category: "Beverages",
  },
];

const recentTransactions = [
  {
    id: "TXN-2401",
    time: "14:32",
    items: 3,
    total: "$24.50",
    payment: "Card",
    customer: "Walk-in",
  },
  {
    id: "TXN-2402",
    time: "14:28",
    items: 1,
    total: "$15.00",
    payment: "Cash",
    customer: "John D.",
  },
  {
    id: "TXN-2403",
    time: "14:25",
    items: 5,
    total: "$47.25",
    payment: "Card",
    customer: "Sarah M.",
  },
  {
    id: "TXN-2404",
    time: "14:20",
    items: 2,
    total: "$18.75",
    payment: "Digital",
    customer: "Mike R.",
  },
];

const inventory = [
  { item: "Coffee Beans", current: 89, target: 100, status: "Good" },
  { item: "Milk", current: 23, target: 50, status: "Low" },
  { item: "Pastries", current: 34, target: 60, status: "Medium" },
  { item: "Tea Bags", current: 67, target: 80, status: "Good" },
  { item: "Sandwiches", current: 12, target: 30, status: "Critical" },
];

const retailProducts = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    sold: 45,
    revenue: "$2,250",
    stock: 78,
    price: "$50",
  },
  {
    name: "Coffee Mug Set",
    category: "Home",
    sold: 32,
    revenue: "$960",
    stock: 23,
    price: "$30",
  },
  {
    name: "Smartphone Case",
    category: "Electronics",
    sold: 67,
    revenue: "$1,340",
    stock: 156,
    price: "$20",
  },
  {
    name: "Desktop Organizer",
    category: "Office",
    sold: 28,
    revenue: "$840",
    stock: 45,
    price: "$30",
  },
];

const fnbProducts = [
  {
    name: "Espresso",
    category: "Hot Drinks",
    sold: 145,
    revenue: "$435",
    stock: "Unlimited",
    price: "$3",
  },
  {
    name: "Caesar Salad",
    category: "Salads",
    sold: 34,
    revenue: "$510",
    stock: 67,
    price: "$15",
  },
  {
    name: "Chocolate Cake",
    category: "Desserts",
    sold: 28,
    revenue: "$420",
    stock: 12,
    price: "$15",
  },
  {
    name: "Avocado Toast",
    category: "Breakfast",
    sold: 56,
    revenue: "$672",
    stock: 89,
    price: "$12",
  },
];

const chartConfig = {
  sales: { label: "Sales", color: "#0B4881" },
  transactions: { label: "Transactions", color: "#1067B0" },
  avg: { label: "Average", color: "#11254A" },
};

export function POSContent() {
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
              Back to POS
            </Button>
            <div>
              <h1 className="text-[#11254A] text-xl font-medium">
                {activeSection === "retail"
                  ? "Retail POS"
                  : "Food & Beverage POS"}
              </h1>
              <p className="text-[#11254A]/70 text-sm">
                {activeSection === "retail"
                  ? "Physical products and merchandise"
                  : "Restaurant and cafe operations"}
              </p>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          {activeSection === "retail" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#11254A] flex items-center gap-2">
                    <Store className="h-5 w-5 text-[#0B4881]" />
                    Retail Products
                  </CardTitle>
                  <CardDescription>
                    Physical merchandise and products
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Sold</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {retailProducts.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-[#11254A]">
                            {product.name}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-[#11254A]">
                              {product.category}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-[#0B4881] font-medium">
                            {product.price}
                          </TableCell>
                          <TableCell>{product.sold}</TableCell>
                          <TableCell className="text-[#0B4881] font-medium">
                            {product.revenue}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                parseInt(product.stock.toString()) > 50
                                  ? "default"
                                  : parseInt(product.stock.toString()) > 25
                                  ? "secondary"
                                  : "destructive"
                              }
                            >
                              {product.stock}
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
          {activeSection === "fnb" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#11254A] flex items-center gap-2">
                    <UtensilsCrossed className="h-5 w-5 text-[#1067B0]" />
                    Food & Beverage Menu
                  </CardTitle>
                  <CardDescription>Restaurant and cafe items</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Sold</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Stock</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {fnbProducts.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-[#11254A]">
                            {product.name}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-[#11254A]">
                              {product.category}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-[#0B4881] font-medium">
                            {product.price}
                          </TableCell>
                          <TableCell>{product.sold}</TableCell>
                          <TableCell className="text-[#0B4881] font-medium">
                            {product.revenue}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                product.stock === "Unlimited"
                                  ? "default"
                                  : parseInt(product.stock as string) > 50
                                  ? "default"
                                  : parseInt(product.stock as string) > 25
                                  ? "secondary"
                                  : "destructive"
                              }
                            >
                              {product.stock}
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
              Point of Sale
            </h1>
            <p className="text-[#11254A]/70 text-sm">
              Sales transactions and inventory management
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white"
          >
            <Package className="h-4 w-4 mr-2" />
            Manage Inventory
          </Button>
          <Button className="bg-[#0B4881] hover:bg-[#0B4881]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Sale
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* POS Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Today's Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0B4881]">$3,847</div>
              <p className="text-xs text-muted-foreground">
                +18% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#1067B0]">67</div>
              <p className="text-xs text-muted-foreground">
                +12% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Sale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$57.42</div>
              <p className="text-xs text-muted-foreground">+5% improvement</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Items Sold
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0B4881]">234</div>
              <p className="text-xs text-muted-foreground">
                Across all categories
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Weekly Sales Performance
              </CardTitle>
              <CardDescription>
                Daily sales and transaction volume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stackId="1"
                      stroke="#0B4881"
                      fill="#0B4881"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Product Performance
              </CardTitle>
              <CardDescription>Top selling items this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topProducts}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* format revenue to currency */}

                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="sold" fill="#0B4881" />
                    <Bar dataKey="revenue" fill="#1067B0" />
                    <Bar dataKey="stock" fill="#11254A" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Products and Recent Transactions */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Top Products</CardTitle>
              <CardDescription>Best performing items</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Sold</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-[#0B4881]" />
                          <div>
                            <p className="font-medium text-[#11254A]">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.sold}</TableCell>
                      <TableCell className="text-[#0B4881] font-medium">
                        {product.revenue}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.stock > 50
                              ? "default"
                              : product.stock > 25
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {product.stock}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Recent Transactions
              </CardTitle>
              <CardDescription>Latest sales activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-[#0B4881]" />
                      <div>
                        <p className="font-medium text-[#11254A]">
                          {transaction.id}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.time} - {transaction.customer}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#0B4881]">
                        {transaction.total}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.items} items - {transaction.payment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* POS Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A]">POS Categories</CardTitle>
            <CardDescription>
              Choose your business type for specialized POS features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <Button
                variant="outline"
                className="h-32 border-[#0B4881] text-[#0B4881] hover:bg-[#0B4881] hover:text-white flex-col space-y-4"
                onClick={() => setActiveSection("retail")}
              >
                <Store className="h-12 w-12" />
                <div className="text-center">
                  <div className="font-medium">Retail POS</div>
                  <div className="text-sm opacity-70">
                    Physical products, inventory, SKUs
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-32 border-[#1067B0] text-[#1067B0] hover:bg-[#1067B0] hover:text-white flex-col space-y-4"
                onClick={() => setActiveSection("fnb")}
              >
                <UtensilsCrossed className="h-12 w-12" />
                <div className="text-center">
                  <div className="font-medium">Food & Beverage</div>
                  <div className="text-sm opacity-70">
                    Restaurant, cafe, menu items
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A]">Inventory Status</CardTitle>
            <CardDescription>Current stock levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {inventory.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#11254A] font-medium">
                      {item.item}
                    </span>
                    <span className="text-muted-foreground">
                      {item.current}/{item.target}
                    </span>
                  </div>
                  <Progress
                    value={(item.current / item.target) * 100}
                    className="h-2"
                  />
                  <div className="text-right">
                    <Badge
                      variant={
                        item.status === "Good"
                          ? "default"
                          : item.status === "Medium"
                          ? "secondary"
                          : item.status === "Low"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
