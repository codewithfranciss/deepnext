"use client"
import { JobsTabs } from "@/dummy/tabs"
import Header from "@/components/shared/Header"
import JobCards from "@/components/jobs/JobCards"
import Filter from "@/components/shared/TabFIlters"

export default function JobsPage() {

    return (
      <div className="min-h-screen bg-[#0e0e0e] overflow-x-hidden">
        {/* Header */}
       <Header title="React Jobs" />
          
        {/* Main */}
        <main className="p-3 sm:p-4 lg:p-6">
        <Filter tabs={JobsTabs}/>
          <div className="mb-6 sm:mb-8">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide pb-2">
            </div>
          </div>
          <JobCards />

        </main>
      </div>
    )
  }
  