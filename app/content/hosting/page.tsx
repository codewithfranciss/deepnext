"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/shared/Header"
import { ExternalLink,ChevronDown, ChevronUp, Server} from "lucide-react"
import hostingProviders from "@/data/hosting"


export default function HostingPage() {
  const [expandedHero, setExpandedHero] = useState(false)



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
          {hostingProviders.map((provider) => (
            <Card
              key={provider.id}
              className="bg-neutral-900/50 border-neutral-800 rounded-xl hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                <img
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                 className="w-10 h-10 rounded-md object-contain p-1"/>
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