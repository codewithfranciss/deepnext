import { ToolsGrid } from "@/components/tool/ToolGrid"
import Filter from "@/components/shared/TabFIlters"
import { ToolTabs } from "@/data/tabs"
import Header from "@/components/shared/Header"
export default function ToolsPage() {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <div className="flex-1 flex flex-col">
        <Header title="Tools" />
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">            <Filter tabs={ToolTabs} />
            <div className="space-y-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Developer Tools
              </h1>
              <p className="text-sm lg:text-base text-muted-foreground">
                Essential tools and utilities for React development
              </p>
            </div>
            <ToolsGrid />
          </div>
        </main>
      </div>
    </div>
  )
}
