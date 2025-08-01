"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/shared/Header"
import { ExternalLink, Zap, DollarSign, Globe, Shield, Search, ChevronDown, ChevronUp, Server, Code2 } from "lucide-react"

const hostingProviders = [
  {
    id: 1,
    name: "Vercel",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.",
    category: "JAMstack",
    pricing: "Free tier available",
    deployment: "Git-based",
    features: ["Edge Functions", "Analytics", "Preview Deployments", "Custom Domains"],
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
    features: ["Serverless Functions", "Form Handling", "Split Testing", "Identity"],
    performance: "Excellent",
    support: "Community + Paid",
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
    features: ["Droplets", "Kubernetes", "Databases", "Load Balancers"],
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

const categories = ["JAMstack", "Cloud VPS", "PaaS", "Cloud", "CDN"]

export default function HostingPage() {
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedFilters, setExpandedFilters] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [expandedHero, setExpandedHero] = useState(false)

  const filteredProviders = hostingProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.category.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(provider.category)
    
    return matchesSearch && matchesCategory
  })

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

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
     <Header title="Hosting Platforms" />

      {/* Main Content */}
      <main className="p-6">
        {/* Hero Section */}
        <div className="mb-8 lg:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            React Hosting Solutions
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4">
            Deploy React Apps Effortlessly
          </h1>
          <p className="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto mb-4">
            Find the perfect hosting solution for your React applications with our curated list of top providers
          </p>
          
          {/* Expandable Content */}
          <div className={`overflow-hidden transition-all duration-300 ${expandedHero ? 'max-h-96' : 'max-h-0'}`}>
            <div className="text-neutral-300 max-w-4xl mx-auto space-y-4 pt-4">
              <p className="text-base leading-relaxed">
                Whether you're building a personal portfolio, a startup MVP, or an enterprise application, 
                choosing the right hosting provider is crucial for your React app's success. Our comprehensive 
                directory features carefully vetted hosting solutions that excel in performance, reliability, and developer experience.
              </p>
              <p className="text-base leading-relaxed">
                From JAMstack specialists like Vercel and Netlify that offer seamless Git integration and edge computing, 
                to flexible cloud platforms like DigitalOcean and AWS Amplify that provide scalable infrastructure, 
                we've organized providers by category to help you make informed decisions based on your specific needs and budget.
              </p>
              <p className="text-base leading-relaxed">
                Each provider listing includes detailed information about pricing, deployment methods, key features, 
                performance ratings, and support options. Use our search and filtering tools to quickly find 
                providers that match your requirements, whether you need free tiers for prototyping or enterprise-grade solutions for production workloads.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setExpandedHero(!expandedHero)}
            className=" inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {expandedHero ? 'Show Less' : 'Learn More'}
            {expandedHero ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <Card
              key={provider.id}
              className="bg-neutral-900/50 border-neutral-800 rounded-xl hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{provider.logo}</span>
                  <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs">
                    {provider.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {provider.name}
                </CardTitle>
                <CardDescription className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                  {provider.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">




                  <Button
                    className="w-full bg-secondary hover:from-[#6d28d9] hover:to-primary text-white rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 font-medium"
                    asChild
                  >
                    <a 
                      href={provider.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Visit Provider</span>
                      <ExternalLink className="w-4 h-4" />
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