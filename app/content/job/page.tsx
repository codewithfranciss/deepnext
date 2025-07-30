"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/shared/Header"
import JobCards from "@/components/jobs/JobCards"
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
          <JobCards />

        </main>
      </div>
    )
  }
  