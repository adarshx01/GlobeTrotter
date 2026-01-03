"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, LayoutGrid, ArrowUpDown, Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react"
import { Suspense } from "react"

const COMMUNITY_POSTS = [
  {
    id: "1",
    user: { name: "Sarah Jenkins", handle: "@sarah_travels", avatar: "https://i.pravatar.cc/150?u=sarah" },
    content:
      "Just finished my 10-day trip to Kyoto. The shrines were breathtaking! If you go, make sure to visit Fushimi Inari at sunrise to avoid the crowds.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    tags: ["Japan", "Culture", "TravelTips"],
    likes: 124,
    comments: 18,
    time: "2 hours ago",
  },
  {
    id: "2",
    user: { name: "Marco Rossi", handle: "@marco_explores", avatar: "https://i.pravatar.cc/150?u=marco" },
    content:
      "The Swiss Alps in winter are like a dream. Highly recommend the Glacier Express for some of the best views you'll ever see.",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
    tags: ["Switzerland", "Nature", "Winter"],
    likes: 89,
    comments: 12,
    time: "5 hours ago",
  },
]

function CommunityContent() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary">Community Tab</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Share your experiences, find inspiration, and connect with travelers from around the globe.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search posts, users, or destinations..."
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

        <div className="mx-auto max-w-3xl space-y-8">
          {COMMUNITY_POSTS.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <CardHeader className="flex flex-row items-center space-y-0 p-4">
                <Avatar className="h-10 w-10 border border-primary/20">
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-bold leading-none">{post.user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.user.handle} • {post.time}
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="px-4 pb-4">
                  <p className="text-sm leading-relaxed mb-3">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] font-semibold">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Post content"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-6 p-4 border-t border-border/40">
                <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  <Heart className="h-5 w-5" /> {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  <MessageSquare className="h-5 w-5" /> {post.comments}
                </button>
                <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary ml-auto">
                  <Share2 className="h-5 w-5" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default function CommunityPage() {
  return (
    <Suspense fallback={null}>
      <CommunityContent />
    </Suspense>
  )
}
