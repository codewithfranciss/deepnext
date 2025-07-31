import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TabFilter } from "@/components/TabFilter";
import { PlayCircle, Clock, User, Star } from "lucide-react";

const Tutorials = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Beginner", "Intermediate", "Advanced", "Hooks", "Performance", "Testing"];
  
  const tutorials = [
    {
      title: "Complete React Hooks Guide",
      description: "Master all React hooks with practical examples and real-world use cases.",
      author: "Jane Smith",
      duration: "45 min",
      level: "Intermediate",
      rating: 4.9,
      tags: ["Hooks", "React", "JavaScript"]
    },
    {
      title: "Building a Full-Stack App with Next.js",
      description: "Create a complete application using Next.js, TypeScript, and MongoDB.",
      author: "John Doe",
      duration: "2h 30min",
      level: "Advanced",
      rating: 4.8,
      tags: ["Next.js", "TypeScript", "MongoDB"]
    },
    {
      title: "React State Management with Zustand",
      description: "Learn modern state management patterns using Zustand for React applications.",
      author: "Sarah Wilson",
      duration: "1h 15min",
      level: "Intermediate",
      rating: 4.7,
      tags: ["State Management", "Zustand", "React"]
    },
    {
      title: "Testing React Components",
      description: "Comprehensive guide to testing React components with Jest and Testing Library.",
      author: "Mike Johnson",
      duration: "1h 45min",
      level: "Beginner",
      rating: 4.6,
      tags: ["Testing", "Jest", "React Testing Library"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">React Tutorials</h1>
              <p className="text-muted-foreground">Learn React with comprehensive tutorials and guides</p>
            </div>
            
            <TabFilter tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-2">
              {tutorials.map((tutorial, index) => (
                <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{tutorial.title}</CardTitle>
                        <CardDescription className="text-base mb-3">{tutorial.description}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {tutorial.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {tutorial.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {tutorial.rating}
                          </div>
                        </div>
                      </div>
                      <Badge className={getLevelColor(tutorial.level)}>
                        {tutorial.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {tutorial.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        Start Tutorial
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Tutorials;