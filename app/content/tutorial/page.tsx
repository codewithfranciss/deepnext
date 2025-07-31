"use client"

import Header from "@/components/shared/Header"
import Filter from "@/components/shared/TabFIlters"
import { tutorials } from "@/data/tutorial"
import { TutorialTabs } from "@/data/tabs"
import TutorialCard from "@/components/tutorials/TutorialCard"
import type { Tutorial } from "@/components/tutorials/type"

const Tutorials = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background">
      <Header title="Tutorials" />

      <main className="flex-1 p-4 lg:p-6">
        <Filter tabs={TutorialTabs} />

        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          <header className="my-6 lg:my-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              React Tutorials
            </h1>
            <p className="text-muted-foreground">
              Learn React with comprehensive tutorials and guides
            </p>
          </header>

          <section className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-2">
            {tutorials.map((tutorial: Tutorial, index: number) => (
              <TutorialCard key={tutorial.id || index} tutorial={tutorial} />
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Tutorials
