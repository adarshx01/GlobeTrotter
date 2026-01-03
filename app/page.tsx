import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">GlobalTrotter</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Plan your perfect journey, create detailed itineraries, and share your travel adventures with the world
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Plan Your Trips</CardTitle>
              <CardDescription>
                Create detailed itineraries with destinations, activities, and accommodations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="px-0">
                <Link href="/trips/new">Create Trip →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Dashboard</CardTitle>
              <CardDescription>
                Track your upcoming trips, budgets, and travel plans in one place
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="px-0">
                <Link href="/dashboard">View Dashboard →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Join Community</CardTitle>
              <CardDescription>
                Connect with fellow travelers, share experiences, and get inspiration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="px-0">
                <Link href="/community">Explore Community →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
