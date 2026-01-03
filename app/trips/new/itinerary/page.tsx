"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, DollarSign, Trash2, ArrowRight } from "lucide-react"

export default function BuildItineraryPage() {
  const [sections, setSections] = useState([
    {
      id: "1",
      title: "Travel & Arrival",
      description: "Flight to Paris and check-in at Hotel L'Oiseau Blanc.",
      dateRange: "Jan 1 to Jan 1",
      budget: "850.00",
    },
    {
      id: "2",
      title: "Cultural Exploration",
      description: "Visit the Louvre and explore the historic streets of Montmartre.",
      dateRange: "Jan 2 to Jan 4",
      budget: "320.00",
    },
  ])

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Math.random().toString(),
        title: "New Section",
        description: "",
        dateRange: "Select Dates",
        budget: "0.00",
      },
    ])
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            Step 2: Planning
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight">Build Itinerary Screen</h1>
          <p className="mt-2 text-muted-foreground">Divide your trip into organized sections.</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card
              key={section.id}
              className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 bg-primary" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">
                  Section {index + 1}: {section.title}
                </CardTitle>
                <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Section Title</Label>
                  <Input defaultValue={section.title} className="font-semibold" />
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="All the necessary information about this section. This can be anything like travel section, hotel or any other activity."
                    className="min-h-[100px] bg-background/50"
                    defaultValue={section.description}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Date Range</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input defaultValue={section.dateRange} className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget for this section</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input defaultValue={section.budget} className="pl-10 font-mono" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            variant="outline"
            className="w-full h-16 border-dashed border-2 border-primary/40 hover:bg-primary/5 text-primary text-lg font-bold gap-2 bg-transparent"
            onClick={addSection}
          >
            <Plus className="h-6 w-6" /> Add another Section
          </Button>

          <div className="flex justify-between items-center pt-8">
            <Button variant="ghost" className="gap-2">
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to details
            </Button>
            <Button size="lg" className="px-12 font-bold shadow-lg shadow-primary/20">
              Save and Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{children}</label>
}
