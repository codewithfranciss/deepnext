"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Filter from "@/components/shared/TabFIlters"
import { Dbtabs } from "@/data/tabs"
import { databases } from "@/data/db"
import Header from "@/components/shared/Header"
import { ExternalLink, Database, Zap, DollarSign, Shield } from "lucide-react"





export default function DatabasePage() {

  const [selectedCategory, setSelectedCategory] = useState("All")


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
        <Filter tabs={Dbtabs} />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {databases.map((database) => (
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