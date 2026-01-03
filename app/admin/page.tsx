"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  ArrowUpDown,
  Users,
  MapPin,
  TrendingUp,
  Activity,
  UserPlus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, PieChart, Pie, CartesianGrid } from "recharts"
import { Suspense } from "react"

const ANALYTICS_DATA = [
  { name: "Jan", users: 400, trips: 240 },
  { name: "Feb", users: 300, trips: 139 },
  { name: "Mar", users: 200, trips: 980 },
  { name: "Apr", users: 278, trips: 390 },
  { name: "May", users: 189, trips: 480 },
  { name: "Jun", users: 239, trips: 380 },
  { name: "Jul", users: 349, trips: 430 },
]

const PIE_DATA = [
  { name: "Europe", value: 400, color: "var(--chart-1)" },
  { name: "Asia", value: 300, color: "var(--chart-2)" },
  { name: "Americas", value: 300, color: "var(--chart-3)" },
  { name: "Africa", value: 200, color: "var(--chart-4)" },
]

function AdminContent() {
  const [activeTab, setActiveTab] = useState("analytics")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary">Admin Panel</h1>
            <p className="mt-2 text-muted-foreground">Manage your platform, users, and track trends.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <CalendarRange className="h-4 w-4" /> Last 30 Days
            </Button>
            <Button size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Export Data
            </Button>
          </div>
        </div>

        {/* Search and Global Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search users, cities, or activities..." className="pl-10" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Users className="h-4 w-4" /> Group by
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ArrowUpDown className="h-4 w-4" /> Sort by
            </Button>
          </div>
        </div>

        <Tabs defaultValue="analytics" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 max-w-2xl mb-8">
            <TabsTrigger value="users" className="gap-2">
              <Users className="h-4 w-4" /> Manage Users
            </TabsTrigger>
            <TabsTrigger value="cities" className="gap-2">
              <MapPin className="h-4 w-4" /> Popular Cities
            </TabsTrigger>
            <TabsTrigger value="activities" className="gap-2">
              <Activity className="h-4 w-4" /> Popular Activities
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <TrendingUp className="h-4 w-4" /> Trends & Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Users"
                value="12,543"
                description="+12.5% from last month"
                icon={Users}
                trend="up"
              />
              <StatsCard
                title="Active Trips"
                value="2,354"
                description="+18% from last month"
                icon={TrendingUp}
                trend="up"
              />
              <StatsCard
                title="New Registrations"
                value="456"
                description="-3% from last week"
                icon={UserPlus}
                trend="down"
              />
              <StatsCard
                title="Platform Engagement"
                value="89%"
                description="+2% from last month"
                icon={Activity}
                trend="up"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>User Growth & Trip Planning</CardTitle>
                  <CardDescription>Monthly comparison of new users vs planned trips.</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ANALYTICS_DATA}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
                      <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          borderColor: "var(--border)",
                          borderRadius: "var(--radius)",
                        }}
                      />
                      <Bar dataKey="users" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="trips" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Regional Interest</CardTitle>
                  <CardDescription>Distribution of trips by continent.</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px] flex flex-col items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={PIE_DATA}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {PIE_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-4 mt-4 w-full px-4">
                    {PIE_DATA.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-xs font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Manage Users</CardTitle>
                <CardDescription>View, edit, and manage all platform users and their activities.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-48 items-center justify-center border-2 border-dashed rounded-xl text-muted-foreground">
                  User Management Table Placeholder
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function StatsCard({ title, value, description, icon: Icon, trend }: any) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs flex items-center gap-1 mt-1 ${trend === "up" ? "text-emerald-500" : "text-destructive"}`}
        >
          {trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

function CalendarRange(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

function Download(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={null}>
      <AdminContent />
    </Suspense>
  )
}
