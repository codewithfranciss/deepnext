"use client"
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";

const Latest = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Articles", "Videos", "Tools", "Tutorials", "News"];

  const latestItems = [
    {
      title: "React 19 Released with New Features",
      description: "The latest version of React brings concurrent features and improved server components for better performance.",
      time: "2 hours ago",
      trending: true,
      category: "Framework",
      readTime: "5 min read"
    },
    {
      title: "Vite 6.0 Beta Available",
      description: "Major performance improvements and new development features for faster builds and better developer experience.",
      time: "4 hours ago",
      trending: true,
      category: "Build Tool",
      readTime: "3 min read"
    },
    {
      title: "TypeScript 5.6 Features Overview",
      description: "New type annotations and improved inference capabilities in the latest release with enhanced developer tools.",
      time: "1 day ago",
      trending: false,
      category: "Language",
      readTime: "7 min read"
    },
    {
      title: "Next.js App Router Best Practices",
      description: "Complete guide to optimizing your Next.js applications with the new router and server components.",
      time: "2 days ago",
      trending: false,
      category: "Tutorial",
      readTime: "12 min read"
    },
    {
      title: "Advanced CSS Grid Techniques",
      description: "Master modern CSS Grid layouts with practical examples and real-world use cases for responsive design.",
      time: "3 days ago",
      trending: false,
      category: "CSS",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen flex w-full bg-background">
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className=" flex items-center justify-between py-6  sm:px-4 md:px-6 border-b border-border bg-card/50 backdrop-blur-sm sticky">
          <div className="flex items-center  gap-2 sm:gap-4">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
            <h2 className="text-base sm:text-lg font-semibold text-foreground">Latest</h2>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-3 sm:px-4 md:px-6 py-4 md:py-6">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            
            {/* Page Title */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Latest Updates
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
                Stay updated with the newest developments in the React ecosystem and modern web development
              </p>
            </div>

            {/* Tab Filter - Horizontal Scroll on Mobile */}
            <div className="mb-6 md:mb-8">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                <div className="flex gap-2 min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                        activeTab === tab
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="space-y-3 md:space-y-4">
              {latestItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-2">
                          <CardTitle className="text-lg sm:text-xl leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                            {item.title}
                          </CardTitle>
                          {item.trending && (
                            <Badge 
                              variant="secondary" 
                              className="bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800 shrink-0"
                            >
                              <TrendingUp className="w-3 h-3 mr-1" />
                              <span className="hidden sm:inline">Trending</span>
                              <span className="sm:hidden">Hot</span>
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {item.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0 self-start">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {item.time}
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span className="hidden sm:inline">{item.readTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        <span className="hidden sm:inline">Read more</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center pt-6 md:pt-8">
              <button className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-medium transition-colors duration-200 hover:shadow-sm">
                Load More
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Latest;