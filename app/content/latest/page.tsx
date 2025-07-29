"use client"
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SubmitButton } from "@/components/submit /SubmitForm";

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
        {/* Header - Fixed backdrop blur and consistent spacing */}
        <header className="flex items-center justify-between py-[18px] px-4 md:px-6 border-b border-border bg-card/50 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground transition-colors" />
            <h2 className="text-lg font-semibold text-foreground">Latest</h2>
          </div>
          <SubmitButton />
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-6 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Latest Updates
              </h1>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                Stay updated with the newest developments in the React ecosystem and modern web development
              </p>
            </div>

            {/* Tabs - Enhanced mobile scroll */}
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 min-w-max pb-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
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
              {/* Gradient fade for scroll indication */}
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
            </div>

            {/* Articles Grid - Improved mobile layout */}
            <div className="space-y-4">
              {latestItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="group border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <div className="space-y-3">
                      {/* Title and trending badge */}
                      <div className="flex items-start gap-2">
                        <CardTitle className="text-lg md:text-xl leading-tight group-hover:text-primary transition-colors duration-200 flex-1">
                          {item.title}
                        </CardTitle>
                        {item.trending && (
                          <Badge 
                            variant="secondary" 
                            className="bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800 flex-shrink-0 text-xs"
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            <span className="hidden xs:inline">Trending</span>
                            <span className="xs:hidden">Hot</span>
                          </Badge>
                        )}
                      </div>
                      
                      {/* Description */}
                      <CardDescription className="text-sm md:text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span>{item.time}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span className="hidden sm:inline">{item.readTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        <span className="hidden sm:inline">Read more</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center pt-6">
              <button className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-medium transition-colors duration-200 hover:shadow-sm w-full sm:w-auto max-w-xs">
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