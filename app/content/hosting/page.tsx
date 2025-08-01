"use client"
import Header from "@/components/shared/Header"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"

import { ExternalLink, Zap, DollarSign, Globe, Shield } from "lucide-react"

const hostingProviders = [
  {
    id: 1,
    name: "Vercel",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    category: "JAMstack",
    pricing: "Free tier available",
    deployment: "Git-based",
    features: [],
    performance: "Excellent",
    support: "24/7",
    url: "https://vercel.com",
    logo: "▲",
  },
  {
    id: 2,
    name: "Netlify",
    description:
      "All-in-one platform for automating modern web projects with continuous deployment from Git across all of our services.",
    category: "JAMstack",
    pricing: "Free tier available",
    deployment: "Git-based",
    features: [],
    performance: "Excellent",
    support: "24/7",
    url: "https://netlify.com",
    logo: "🌐",
  },
  {
    id: 3,
    name: "DigitalOcean",
    description:
      "Cloud infrastructure provider with simple pricing and developer-friendly tools for deploying applications.",
    category: "Cloud VPS",
    pricing: "$5/month",
    deployment: "Manual/Docker",
    features: [],
    performance: "Very Good",
    support: "24/7",
    url: "https://digitalocean.com",
    logo: "🌊",
  },
  {
    id: 4,
    name: "Railway",
    description: "Deploy from GitHub with zero configuration. Built for developers who want to focus on building.",
    category: "PaaS",
    pricing: "$5/month",
    deployment: "Git-based",
    features: ["Auto Deploy", "Databases", "Environment Variables", "Custom Domains"],
    performance: "Good",
    support: "Community",
    url: "https://railway.app",
    logo: "🚂",
  },
  {
    id: 5,
    name: "Render",
    description: "Modern cloud platform that offers free SSL, global CDN, and automatic deployments from Git.",
    category: "PaaS",
    pricing: "Free tier available",
    deployment: "Git-based",
    features: ["Auto Deploy", "SSL Certificates", "CDN", "Background Jobs"],
    performance: "Good",
    support: "Email + Community",
    url: "https://render.com",
    logo: "🚀",
  },
  {
    id: 6,
    name: "AWS Amplify",
    description: "Full-stack development platform for building scalable web and mobile applications.",
    category: "Cloud",
    pricing: "Pay-as-you-go",
    deployment: "Git-based",
    features: ["Hosting", "Authentication", "APIs", "Storage"],
    performance: "Excellent",
    support: "24/7 Premium",
    url: "https://aws.amazon.com/amplify",
    logo: "☁️",
  },
]

const categories = ["All", "JAMstack", "Cloud VPS", "PaaS", "Cloud", "CDN"]

export default function HostingPage() {
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProviders =
    selectedCategory === "All"
      ? hostingProviders
      : hostingProviders.filter((provider) => provider.category === selectedCategory)

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "Excellent":
        return "text-green-500"
      case "Very Good":
        return "text-blue-500"
      case "Good":
        return "text-yellow-500"
      default:
        return "text-neutral-400"
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* Header */}
<Header title="Hosting Platforms" />

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
          {filteredProviders.map((provider) => (
            <Card
              key={provider.id}
              className="bg-neutral-900/50 border-neutral-800 rounded-xl hover:border-[#7c3aed]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#7c3aed]/10 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{provider.logo}</span>
                  <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                    {provider.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-white group-hover:text-[#7c3aed] transition-colors">
                  {provider.name}
                </CardTitle>
                <CardDescription className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                  {provider.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
          
                 
                  </div>

                 

                 

                  <Button
                    className="w-full bg-secondary hover:bg-[#7c3aed]/80 text-white rounded-xl transition-all duration-200"
                    asChild
                  >
                    <a href={provider.url} target="_blank" rel="noopener noreferrer">
                      Visit Provider
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
