import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { tutorials } from "@/data/tutorial";
  import { Button } from "@/components/ui/button";
  import Filter from "@/components/shared/TabFIlters";
  import { PlayCircle, Clock, User, Star } from "lucide-react";
  import { TutorialTabs } from "@/data/tabs";
  import Header from "@/components/shared/Header";
  
  type Level = "Beginner" | "Intermediate" | "Advanced" | string;
  
  interface Tutorial {
    id?: string;
    title: string;
    description: string;
    author: string;
    duration: string;
    rating: number | string;
    tags: string[];
    level: Level;
  }
  
  const Tutorials = () => {
    const getLevelColor = (level: Level): string => {
      const colors: Record<string, string> = {
        Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
        Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
      };
      return colors[level] || "bg-primary/10 text-primary border-primary/20";
    };
  
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
                <Card
                  key={tutorial.id || index}
                  className="border-border hover:border-primary/20 transition-all duration-200 hover:shadow-lg group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {tutorial.title}
                        </CardTitle>
                        <CardDescription className="text-base mb-3 line-clamp-2">
                          {tutorial.description}
                        </CardDescription>
  
                        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4 shrink-0" />
                            <span className="truncate">{tutorial.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 shrink-0" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 shrink-0 text-yellow-400" />
                            <span>{tutorial.rating}</span>
                          </div>
                        </div>
                      </div>
  
                      <Badge className={`${getLevelColor(tutorial.level)} shrink-0`}>
                        {tutorial.level}
                      </Badge>
                    </div>
                  </CardHeader>
  
                  <CardContent className="pt-0">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2 flex-wrap">
                        {tutorial.tags.map((tag: string) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary text-primary text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
  
                      <Button
                        className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 transition-colors self-start"
                        size="sm"
                      >
                        <PlayCircle className="w-4 h-4" />
                        Start Tutorial
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        </main>
      </div>
    );
  };
  
  export default Tutorials;
  