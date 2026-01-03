"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar, MapPin, Search, Star, Plane, Hotel, Utensils, Music } from "lucide-react"

const SUGGESTIONS = [
  {
    id: "1",
    name: "Eiffel Tower",
    type: "Activity",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80",
  },
  {
    id: "2",
    name: "Louvre Museum",
    type: "Activity",
    image: "https://images.unsplash.com/photo-1544945582-3b466d874eac?w=400&q=80",
  },
  {
    id: "3",
    name: "Sacré-Cœur",
    type: "Place",
    image: "https://images.unsplash.com/photo-1524338198850-8a2ff63a4b3f?w=400&q=80",
  },
  {
    id: "4",
    name: "Seine River Cruise",
    type: "Activity",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
  },
  {
    id: "5",
    name: "Notre Dame",
    type: "Place",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&q=80",
  },
  {
    id: "6",
    name: "Montmartre",
    type: "Place",
    image: "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=400&q=80",
  },
]

export default function NewTripPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    place: "",
    startDate: "",
    endDate: "",
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">Plan a new trip</h1>
          <p className="text-muted-foreground">Define your journey and get inspired.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
              <CardDescription>Enter the core details of your adventure.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Trip Title</Label>
                <div className="relative">
                  <Plane className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="title"
                    placeholder="e.g. Paris Summer Getaway"
                    className="pl-10"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="place">Select a Place</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="place"
                    placeholder="Search destination..."
                    className="pl-10"
                    value={formData.place}
                    onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="startDate"
                      type="date"
                      className="pl-10"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="endDate"
                      type="date"
                      className="pl-10"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <Button
                className="w-full text-lg font-bold"
                size="lg"
                onClick={() => router.push("/trips/new/itinerary")}
              >
                Start Planning Itinerary
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/30">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {[
                { icon: Hotel, label: "Hotels" },
                { icon: Utensils, label: "Dining" },
                { icon: Music, label: "Events" },
                { icon: Search, label: "Guides" },
              ].map((item) => (
                <Button
                  key={item.label}
                  variant="outline"
                  className="flex flex-col h-20 gap-2 border-primary/10 hover:bg-primary/5 bg-transparent"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Suggestion for Places to Visit / Activities to perform
            </h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              View all
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {SUGGESTIONS.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-border/50 transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className="relative aspect-square">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3 text-center">
                  <p className="font-bold text-sm truncate">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
