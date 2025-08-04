"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Header from "@/components/shared/Header"
import { ExternalLink, Database, Zap, DollarSign, Shield } from "lucide-react"

const databases = [
  {
    id: 1,
    name: "Supabase",
    description:
      "Open source Firebase alternative with PostgreSQL database, authentication, and real-time subscriptions.",
    category: "PostgreSQL",
    type: "Serverless",
    pricing: "Free tier available",
    features: ["Real-time", "Auth", "Storage", "Edge Functions"],
    scalability: "High",
    complexity: "Low",
    url: "https://supabase.com",
    logo: "⚡",
  },
  {
    id: 2,
    name: "PlanetScale",
    description: "MySQL-compatible serverless database platform with branching, non-blocking schema changes.",
    category: "MySQL",
    type: "Serverless",
    pricing: "Free tier available",
    features: ["Branching", "Schema Changes", "Analytics", "Backups"],
    scalability: "Very High",
    complexity: "Medium",
    url: "https://planetscale.com",
    logo: "🪐",
  },
  {
    id: 3,
    name: "MongoDB Atlas",
    description: "Fully managed cloud database service for modern applications with built-in security and scalability.",
    category: "NoSQL",
    type: "Managed",
    pricing: "Free tier available",
    features: ["Auto-scaling", "Analytics", "Search", "Charts"],
    scalability: "Very High",
    complexity: "Medium",
    url: "https://mongodb.com/atlas",
    logo: "🍃",
  },
  {
    id: 4,
    name: "Firebase Firestore",
    description:
      "NoSQL document database built for automatic scaling, high performance, and ease of application development.",
    category: "NoSQL",
    type: "Serverless",
    pricing: "Pay-as-you-go",
    features: ["Real-time", "Offline Support", "Security Rules", "Analytics"],
    scalability: "High",
    complexity: "Low",
    url: "https://firebase.google.com/products/firestore",
    logo: "🔥",
  },
  {
    id: 5,
    name: "Neon",
    description: "Serverless PostgreSQL with branching, bottomless storage, and instant provisioning.",
    category: "PostgreSQL",
    type: "Serverless",
    pricing: "Free tier available",
    features: ["Branching", "Auto-scaling", "Point-in-time Recovery", "Connection Pooling"],
    scalability: "High",
    complexity: "Low",
    url: "https://neon.tech",
    logo: "🌟",
  },
  {
    id: 6,
    name: "Upstash Redis",
    description: "Serverless Redis with per-request pricing, global replication, and REST API.",
    category: "Redis",
    type: "Serverless",
    pricing: "Pay-per-request",
    features: ["Global Replication", "REST API", "Durable Storage", "Analytics"],
    scalability: "High",
    complexity: "Low",
    url: "https://upstash.com",
    logo: "⚡",
  },
]

const categories = ["All", "PostgreSQL", "MySQL", "NoSQL", "Redis", "Serverless", "Managed"]

export default function DatabasePage() {
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredDatabases = databases.filter((db) => {
    if (selectedCategory === "All") return true
    return db.category === selectedCategory || db.type === selectedCategory
  })

  const getScalabilityColor = (scalability: string) => {
    switch (scalability) {
      case "Very High":
        return "text-green-500"
      case "High":
        return "text-blue-500"
      case "Medium":
        return "text-yellow-500"
      default:
        return "text-neutral-400"
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Low":
        return "text-green-500"
      case "Medium":
        return "text-yellow-500"
      case "High":
        return "text-red-500"
      default:
        return "text-neutral-400"
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* Header */}
  <Header title="Databases" />

      {/* Main Content */}
      <main className="p-6">
        {/* Horizontal Tab Filter */}
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
          px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200
          ${
            selectedCategory === category
              ? "bg-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/25"
              : "bg-transparent text-white/70 hover:text-white hover:shadow-lg hover:shadow-[#7c3aed]/10 hover:bg-[#7c3aed]/10"
          }
        `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDatabases.map((database) => (
            <Card
              key={database.id}
              className="bg-neutral-900/50 border-neutral-800 rounded-xl hover:border-[#7c3aed]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#7c3aed]/10 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{database.logo}</span>
                  <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                    {database.category}
                  </Badge>
                  <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                    {database.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-white group-hover:text-[#7c3aed] transition-colors">
                  {database.name}
                </CardTitle>
                <CardDescription className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                  {database.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1 text-neutral-400">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-xs">{database.pricing}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-blue-500" />
                      <span className={`text-xs ${getScalabilityColor(database.scalability)}`}>
                        {database.scalability}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs text-neutral-400">Complexity: </span>
                    <span className={`text-xs ${getComplexityColor(database.complexity)}`}>{database.complexity}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {database.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-neutral-800 text-neutral-300 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-[#7c3aed] hover:bg-[#7c3aed]/80 text-white rounded-xl transition-all duration-200"
                    asChild
                  >
                    <a href={database.url} target="_blank" rel="noopener noreferrer">
                      <Database className="w-3 h-3 mr-2" />
                      Visit Database
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}