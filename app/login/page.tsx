"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "lucide-react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login for now
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-primary/20 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-col items-center space-y-4 pt-10">
          <div className="relative">
            <Avatar className="h-24 w-24 border-4 border-primary ring-4 ring-primary/20">
              <AvatarImage src="/user-profile-illustration.png" alt="User" />
              <AvatarFallback className="bg-primary/10 text-primary">
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight text-primary">GlobalTrotter</CardTitle>
            <CardDescription className="text-lg">Welcome back, traveler!</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="traveler123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
            <Button type="submit" className="w-full text-lg font-semibold" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Login Button"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {"Don't have an account?"}{" "}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Register here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
