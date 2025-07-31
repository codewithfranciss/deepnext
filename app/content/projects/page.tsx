
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, GitFork, Eye, Calendar } from "lucide-react";

const OSProjects = () => {

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "TypeScript": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "JavaScript": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
      <div className="min-h-screen flex w-full bg-background">

        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Open Source Projects</h1>
              <p className="text-muted-foreground">Discover and contribute to amazing React open source projects</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge className={getLanguageColor(project.language)}>
                        {project.language}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg lg:text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm lg:text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {project.stars.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.lastUpdate}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">View Project</span>
                        <span className="sm:hidden">View</span>
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="hidden sm:inline">Star on GitHub</span>
                        <span className="sm:hidden">Star</span>
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

export default OSProjects;