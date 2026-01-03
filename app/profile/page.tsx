"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit3, MapPin, Calendar, Camera, Globe, Settings, Map } from "lucide-react"

const USER_DATA = {
  name: "John Doe",
  handle: "@johndoe_travels",
  bio: "Passionate traveler, photographer, and storyteller. Exploring the world one city at a time. Currently planning my next big trek in the Himalayas.",
  location: "New York, USA",
  joinDate: "Member since June 2024",
  stats: { trips: 24, following: 432, followers: 850 },
}

const TRIPS = [
  {
    id: "1",
    title: "Paris Summer",
    place: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
  },
  {
    id: "2",
    title: "Tokyo Nights",
    place: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80",
  },
  {
    id: "3",
    title: "Rome History",
    place: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80",
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden mb-8">
          <div className="h-48 w-full bg-gradient-to-r from-primary/20 via-primary/5 to-accent/20" />
          <CardContent className="relative pt-0 px-6 pb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16">
              <div className="relative group">
                <Avatar className="h-32 w-32 border-4 border-background ring-4 ring-primary/20 shadow-2xl">
                  <AvatarImage src="/profile-upload.jpg" alt={USER_DATA.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-3xl">JD</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-lg"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold tracking-tight">{USER_DATA.name}</h1>
                    <p className="text-primary font-medium">{USER_DATA.handle}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Settings className="h-4 w-4" /> Settings
                    </Button>
                    <Button size="sm" className="gap-2">
                      <Edit3 className="h-4 w-4" /> Edit Profile
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {USER_DATA.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {USER_DATA.joinDate}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-bold">About Me</h3>
                <p className="text-muted-foreground leading-relaxed">{USER_DATA.bio}</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6 flex justify-around items-center border border-primary/10">
                <div className="text-center">
                  <p className="text-2xl font-bold">{USER_DATA.stats.trips}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Trips</p>
                </div>
                <div className="h-10 w-px bg-primary/20" />
                <div className="text-center">
                  <p className="text-2xl font-bold">{USER_DATA.stats.followers}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Followers</p>
                </div>
                <div className="h-10 w-px bg-primary/20" />
                <div className="text-center">
                  <p className="text-2xl font-bold">{USER_DATA.stats.following}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Following</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="preplanned" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
            <TabsTrigger value="preplanned" className="gap-2">
              <Map className="h-4 w-4" /> Preplanned Trips
            </TabsTrigger>
            <TabsTrigger value="previous" className="gap-2">
              <Globe className="h-4 w-4" /> Previous Trips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preplanned" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRIPS.map((trip) => (
              <Card
                key={trip.id}
                className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={trip.image || "/placeholder.svg"}
                    alt={trip.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <h4 className="text-white font-bold">{trip.title}</h4>
                    <p className="text-white/80 text-xs flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {trip.place}
                    </p>
                  </div>
                </div>
                <CardContent className="p-3">
                  <Button variant="ghost" className="w-full text-xs font-bold text-primary hover:bg-primary/5">
                    View Trip Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="previous" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Similar grid for previous trips */}
            <div className="col-span-full py-12 text-center bg-muted/20 rounded-2xl border-2 border-dashed border-border/50">
              <p className="text-muted-foreground">You haven't completed any trips yet. Start your journey!</p>
              <Button variant="link" className="text-primary font-bold">
                Plan a new trip now
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
