"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, ArrowUpDown, LayoutGrid, Plus, Calendar, MapPin, Globe } from "lucide-react"
import { Suspense } from "react"

const REGIONAL_SELECTIONS = [
  { name: "Europe", count: 12, color: "bg-blue-500/10 text-blue-500" },
  { name: "Asia", count: 8, color: "bg-emerald-500/10 text-emerald-500" },
  { name: "Americas", count: 15, color: "bg-orange-500/10 text-orange-500" },
  { name: "Africa", count: 4, color: "bg-amber-500/10 text-amber-500" },
  { name: "Oceania", count: 6, color: "bg-teal-500/10 text-teal-500" },
]

const TRIPS = [
  {
    id: "1",
    title: "Paris Summer Getaway",
    place: "Paris, France",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    dates: "Jan 1 - Jan 10",
  },
  {
    id: "2",
    title: "Japan Cultural Expedition",
    place: "Kyoto, Japan",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1493974968028-56623f02e6e9?w=800&q=80",
    dates: "Feb 15 - Feb 28",
  },
  {
    id: "3",
    title: "New York Business Trip",
    place: "NYC, USA",
    status: "completed",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    dates: "Dec 10 - Dec 15",
  },
]

function DashboardContent() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Banner Section */}
        <section className="relative mb-12 h-[300px] overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
            alt="Adventure Awaits"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Explore the World</h1>
            <p className="mt-2 text-lg text-white/80">Plan your next adventure with GlobalTrotter</p>
          </div>
        </section>

        {/* Search and Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search trips, places, or activities..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <LayoutGrid className="h-4 w-4" /> Group by
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ArrowUpDown className="h-4 w-4" /> Sort by
            </Button>
          </div>
        </div>

        {/* Top Regional Selections */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">Top Regional Selections</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {REGIONAL_SELECTIONS.map((region) => (
              <Button
                key={region.name}
                variant="outline"
                className={`h-auto min-w-[140px] flex-col items-center gap-2 rounded-2xl p-6 transition-all hover:scale-105 hover:border-primary/50 ${region.color}`}
              >
                <Globe className="h-8 w-8" />
                <span className="font-bold">{region.name}</span>
                <span className="text-xs opacity-70">{region.count} Destinations</span>
              </Button>
            ))}
          </div>
        </section>

        {/* Previous Trips / Trip Listing */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Your Trips</h2>
            <Link href="/trips/new">
              <Button className="gap-2">
                <Plus className="h-4 w-4" /> Plan a trip
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRIPS.map((trip) => (
              <Card
                key={trip.id}
                className="group overflow-hidden border-border/50 bg-card transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10]">
                  <img
                    src={trip.image || "/placeholder.svg"}
                    alt={trip.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute right-3 top-3">
                    <Badge
                      className={
                        trip.status === "ongoing"
                          ? "bg-emerald-500"
                          : trip.status === "upcoming"
                            ? "bg-primary"
                            : "bg-muted text-muted-foreground"
                      }
                    >
                      {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">{trip.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {trip.place}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> {trip.dates}
                    </div>
                  </div>
                  <Link href={`/trips/${trip.id}`} className="mt-4 block">
                    <Button variant="secondary" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-card/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-primary">
            <Globe className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">GlobalTrotter</span>
          </div>
          <p className="text-muted-foreground">© 2026 GlobalTrotter. Your journey begins here.</p>
        </div>
      </footer>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <DashboardContent />
    </Suspense>
  )
}
