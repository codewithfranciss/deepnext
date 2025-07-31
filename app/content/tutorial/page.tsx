import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tutorials } from "@/data/tutorial";
import { Button } from "@/components/ui/button";
import Filter from "@/components/shared/TabFIlters";
import { PlayCircle, Clock, User, Star } from "lucide-react";

const Tutorials = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Beginner", "Intermediate", "Advanced", "Hooks", "Performance", "Testing"];
  


  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
      <div className="min-h-screen flex w-full bg-background">
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

  );
};

export default Tutorials;