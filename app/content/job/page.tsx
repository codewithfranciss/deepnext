"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/shared/Header"
import { ExternalLink, MapPin, DollarSign, Clock, Building } from "lucide-react"
import jobs from "@/dummy/jobs"


export default function JobsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
  
    const filteredJobs = jobs.filter((job) => {
      if (selectedCategory === "All") return true
      if (selectedCategory === "Remote") return job.remote
      return job.type === selectedCategory || job.level === selectedCategory
    })
  
    return (
      <div className="min-h-screen bg-[#0e0e0e] overflow-x-hidden">
        {/* Header */}
       <Header title="React Jobs" />
        {/* Main */}
        <main className="p-3 sm:p-4 lg:p-6">
          <div className="mb-6 sm:mb-8">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide pb-2">
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="bg-neutral-900/50 border-neutral-800 rounded-xl hover:border-[#7c3aed]/50 transition-all duration-200 hover:shadow-lg hover:shadow-[#7c3aed]/10"
              >
                <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                  <div className="flex flex-col space-y-3 sm:space-y-4">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs sm:text-sm">
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs sm:text-sm">
                        {job.level}
                      </Badge>
                      {job.remote && (
                        <Badge className="bg-green-600 text-white text-xs sm:text-sm">
                          Remote
                        </Badge>
                      )}
                    </div>
  
                    {/* Title */}
                    <CardTitle className="text-lg sm:text-xl font-semibold text-white hover:text-[#7c3aed] transition-colors">
                      {job.title}
                    </CardTitle>
  
                    {/* Details */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-400 min-w-0">
                      <div className="flex items-center gap-1 min-w-0">
                        <Building className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1 min-w-0">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 min-w-0">
                        <DollarSign className="w-3 h-3 flex-shrink-0" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1 min-w-0">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span>{job.postedAt}</span>
                      </div>
                    </div>
                    <CardDescription className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {job.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-neutral-800 text-neutral-300 text-xs"
                        >
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
  
                <CardContent className="pt-0 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm text-neutral-400 order-2 sm:order-1">
                      Posted {job.postedAt}
                    </span>
                    <Button 
                      className="bg-secondary hover:bg-[#7c3aed]/80 text-white rounded-xl w-full sm:w-auto order-1 sm:order-2 touch-manipulation" 
                      asChild
                    >
                      <a href={job.url} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
  
          {/* Empty state */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No jobs found for "{selectedCategory}"</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                variant="outline"
                className="mt-4 border-neutral-700 text-neutral-300 hover:text-white"
              >
                Show All Jobs
              </Button>
            </div>
          )}
        </main>
      </div>
    )
  }
  