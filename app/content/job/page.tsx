"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { SubmitButton } from "@/components/submit /SubmitForm"
import { ExternalLink, MapPin, DollarSign, Clock, Building } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    salary: "$120k - $160k",
    postedAt: "2024-01-15",
    description:
      "Join our team to build cutting-edge React applications with modern technologies including Next.js, TypeScript, and GraphQL.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "Next.js knowledge"],
    url: "https://example.com/jobs/senior-react-dev",
    remote: true,
  },
  {
    id: 2,
    title: "Frontend React Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    type: "Full-time",
    level: "Mid-level",
    salary: "$90k - $120k",
    postedAt: "2024-01-14",
    description:
      "Build responsive web applications using React, Redux, and modern CSS frameworks in a fast-paced startup environment.",
    requirements: ["3+ years React experience", "Redux knowledge", "CSS expertise"],
    url: "https://example.com/jobs/frontend-react-engineer",
    remote: false,
  },
  {
    id: 3,
    title: "React Native Developer",
    company: "MobileFirst",
    location: "Austin, TX",
    type: "Contract",
    level: "Senior",
    salary: "$80 - $100/hr",
    postedAt: "2024-01-13",
    description: "Develop cross-platform mobile applications using React Native for iOS and Android platforms.",
    requirements: ["React Native experience", "Mobile development", "App Store deployment"],
    url: "https://example.com/jobs/react-native-dev",
    remote: true,
  },
  {
    id: 4,
    title: "Junior React Developer",
    company: "WebSolutions",
    location: "Seattle, WA",
    type: "Full-time",
    level: "Junior",
    salary: "$60k - $80k",
    postedAt: "2024-01-12",
    description:
      "Perfect opportunity for a junior developer to grow their React skills in a supportive team environment.",
    requirements: ["1+ years React experience", "JavaScript fundamentals", "Git knowledge"],
    url: "https://example.com/jobs/junior-react-dev",
    remote: true,
  },
  {
    id: 5,
    title: "Full Stack React Developer",
    company: "DataDriven Co.",
    location: "Chicago, IL",
    type: "Full-time",
    level: "Mid-level",
    salary: "$100k - $130k",
    postedAt: "2024-01-11",
    description:
      "Work on both frontend React applications and backend Node.js services in our data analytics platform.",
    requirements: ["React & Node.js experience", "Database knowledge", "API development"],
    url: "https://example.com/jobs/fullstack-react-dev",
    remote: false,
  },
  {
    id: 6,
    title: "React Consultant",
    company: "ConsultingPro",
    location: "Remote",
    type: "Freelance",
    level: "Senior",
    salary: "$100 - $150/hr",
    postedAt: "2024-01-10",
    description: "Help clients modernize their applications by migrating to React and implementing best practices.",
    requirements: ["Expert React knowledge", "Consulting experience", "Client communication"],
    url: "https://example.com/jobs/react-consultant",
    remote: true,
  },
]

const categories = ["All", "Full-time", "Contract", "Freelance", "Remote", "Junior", "Mid-level", "Senior"]

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
        <header className="sticky top-0 z-40 border-b border-neutral-800 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-between px-3 py-3 sm:px-4 sm:py-[18px] lg:px-6">
            <div className="flex items-center gap-2 sm:gap-4">
              <SidebarTrigger className="text-white hover:text-[#7c3aed]" />
              <h1 className="text-lg sm:text-xl font-semibold text-white">React Jobs</h1>
            </div>
            <SubmitButton />
          </div>
        </header>
  
        {/* Main */}
        <main className="p-3 sm:p-4 lg:p-6">
          {/* Filters */}
          <div className="mb-6 sm:mb-8">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide pb-2">

            </div>
          </div>
  
          {/* Job Cards */}
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
  
                    {/* Description */}
                    <CardDescription className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {job.description}
                    </CardDescription>
  
                    {/* Requirements */}
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
  