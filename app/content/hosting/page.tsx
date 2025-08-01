import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/shared/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Zap, Shield, DollarSign, Clock } from "lucide-react";

const Hosting = () => {
  const hostingProviders = [
    {
      name: "Vercel",
      description: "Platform for static sites and Serverless Functions that fits perfectly with your workflow.",
      features: ["Zero Config", "Global CDN", "Serverless Functions", "Real-time Collaboration"],
      pricing: "Free tier available",
      deployment: "Instant",
      popular: true,
      rating: 4.9
    },
    {
      name: "Netlify",
      description: "Build, deploy, and manage modern web projects with Git-based workflow and powerful serverless platform.",
      features: ["Git Integration", "Form Handling", "Split Testing", "Edge Functions"],
      pricing: "Free tier available",
      deployment: "< 1 minute",
      popular: true,
      rating: 4.8
    },
    {
      name: "Railway",
      description: "Deploy from GitHub with zero configuration and scale up with a click.",
      features: ["Database Hosting", "Environment Management", "Automatic Deployments", "Team Collaboration"],
      pricing: "Pay per usage",
      deployment: "< 30 seconds",
      popular: false,
      rating: 4.7
    },
    {
      name: "Render",
      description: "Cloud platform that provides static sites, web services, PostgreSQL databases, and more.",
      features: ["Auto Deploy", "Custom Domains", "SSL Certificates", "DDoS Protection"],
      pricing: "Free tier available",
      deployment: "1-2 minutes",
      popular: false,
      rating: 4.6
    },
    {
      name: "DigitalOcean App Platform",
      description: "Platform-as-a-Service offering that simplifies deploying, managing, and scaling apps.",
      features: ["Auto Scaling", "Database Integration", "Monitoring", "Load Balancing"],
      pricing: "From $5/month",
      deployment: "2-3 minutes",
      popular: false,
      rating: 4.5
    },
    {
      name: "AWS Amplify",
      description: "Full-stack development platform for building web and mobile applications on AWS.",
      features: ["Full-Stack", "Authentication", "GraphQL API", "Analytics"],
      pricing: "Pay per usage",
      deployment: "1-2 minutes",
      popular: false,
      rating: 4.4
    }
  ];

  return (
 
      <div className="min-h-screen flex w-full bg-background">
       <Header title="Hosting Platforms" />
        <main className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">React Hosting Solutions</h1>
              <p className="text-muted-foreground">Best platforms to deploy and host your React applications</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              {hostingProviders.map((provider, index) => (
                <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg lg:text-xl">{provider.name}</CardTitle>
                      </div>
                      {provider.popular && (
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-sm lg:text-base">{provider.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-muted-foreground">{provider.pricing}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-muted-foreground">{provider.deployment}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {provider.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs bg-primary/10 text-primary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium">{provider.rating}/5</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Learn More
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Zap className="w-4 h-4 mr-1" />
                          Deploy Now
                        </Button>
                      </div>
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

export default Hosting;