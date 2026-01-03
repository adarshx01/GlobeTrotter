"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, MapPin, Globe, Phone, User } from "lucide-react"

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 py-12">
      <Card className="w-full max-w-2xl border-primary/20 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-col items-center space-y-4 pt-10">
          <div className="group relative cursor-pointer">
            <Avatar className="h-28 w-28 border-4 border-primary ring-4 ring-primary/20 transition-transform hover:scale-105">
              <AvatarImage src="/profile-upload.jpg" alt="Photo" />
              <AvatarFallback className="bg-primary/10">
                <Camera className="h-10 w-10 text-primary" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 rounded-full bg-primary p-2 text-white shadow-lg">
              <Camera className="h-4 w-4" />
            </div>
          </div>
          <div className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight text-primary">Join GlobalTrotter</CardTitle>
            <CardDescription className="text-lg">Start your next adventure today</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="firstName" placeholder="John" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" placeholder="+1 (555) 000-0000" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="city" placeholder="New York" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="country" placeholder="USA" className="pl-10" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Additional Information</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your travel style or favorite destinations..."
                className="min-h-[120px] resize-none"
              />
            </div>

            <Button type="submit" className="w-full py-6 text-lg font-bold" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Register Users"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Sign in here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
