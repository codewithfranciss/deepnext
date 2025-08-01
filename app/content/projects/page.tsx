import { projects } from "@/data/project";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, GitFork, Eye, Calendar, Code2, Github, ExternalLink, Zap } from "lucide-react";
import Header from "@/components/shared/Header";

export default function ProjectPage(){

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "TypeScript": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "JavaScript": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Python": return "bg-green-500/10 text-green-400 border-green-500/20";
      case "React": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "Vue": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
      <div className="min-h-screen flex flex-col w-full bg-gradient-to-br from-background via-background to-muted/20">
        <Header title="OS Projects"/>
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="mb-8 lg:mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                Open Source Community
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
                Discover Amazing Projects
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore cutting-edge open source projects, contribute to the community, and build the future together
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 lg:mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">{projects.length}</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {projects.reduce((sum, p) => sum + p.stars, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Stars</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">
                  {projects.reduce((sum, p) => sum + p.forks, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Forks</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {new Set(projects.map(p => p.language)).size}
                </div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Open Source Badge */}
                  <div className="absolute top-4 right-4 z-10">

                  </div>

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-medium border border-green-500/25">
                      <Github className="w-3 h-3" />
                      
                    </div>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm lg:text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 space-y-6">
                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-1.5 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-medium">{project.stars.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{project.lastUpdate}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group/btn hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                      >
                        <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View
                        <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group/btn transition-all"
                      >
                        <Star className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Star
                        <Zap className="w-3 h-3 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
                <span className="font-medium">Want to contribute? Check out our GitHub!</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};