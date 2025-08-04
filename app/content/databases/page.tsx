"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { databases } from "@/data/db"
import Header from "@/components/shared/Header"
import { ExternalLink, Database} from "lucide-react"

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* Header */}
  <Header title="Databases" />
      <main className="p-6">
        {/* <Filter tabs={Dbtabs} /> */}

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