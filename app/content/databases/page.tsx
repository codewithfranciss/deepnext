"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import databases from "@/data/database"
import Header from "@/components/shared/Header"
import { ExternalLink, Database} from "lucide-react"

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* Header */}
      <Header title="Databases" />

      <main className="p-6">
        {/* Hero Section */}
        <div className="mb-8 lg:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Database className="w-4 h-4" />
            Databases
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Top Databases for Your Next.js Projects
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse a handpicked collection of modern, reliable databases to supercharge your Next.js applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {databases.map((database) => (
            <Card
              key={database.id}
              className="bg-neutral-900/50 border-neutral-800 rounded-xl hover:border-[#7c3aed]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#7c3aed]/10 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                <img
                    src={database.logo}
                    alt={`${database.name} logo`}
                 className="w-10 h-10 rounded-md object-contain p-1"/>

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
                  <Button
                    className="w-full bg-secondary hover:bg-primary text-white rounded-xl transition-all duration-200"
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
