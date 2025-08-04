"use client"
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, MessageCircle, Hash, Send } from "lucide-react";

const communityTabs = ["All", "Twitter", "Discord", "Telegram", "Reddit"];

const communities = {
  Twitter: [
    {
      id: 1,
      name: "React Community",
      handle: "@reactjs",
      description: "Official React Twitter account for news, updates, and community highlights",
      members: "2.1M",
      icon: "🔵",
      url: "https://twitter.com/reactjs",
      verified: true
    },
    {
      id: 2,
      name: "Next.js",
      handle: "@nextjs",
      description: "The React Framework for Production - news and updates",
      members: "891K",
      icon: "⚫",
      url: "https://twitter.com/nextjs",
      verified: true
    },
    {
      id: 3,
      name: "Tailwind CSS",
      handle: "@tailwindcss",
      description: "A utility-first CSS framework for rapid UI development",
      members: "567K",
      icon: "🎨",
      url: "https://twitter.com/tailwindcss",
      verified: true
    }
  ],
  Discord: [
    {
      id: 4,
      name: "Reactiflux",
      handle: "reactiflux",
      description: "A chat community of 200,000+ React JS, React Native, Redux, Jest, Relay developers",
      members: "200K+",
      icon: "⚛️",
      url: "https://discord.gg/reactiflux",
      verified: true
    },
    {
      id: 5,
      name: "The Primeagen",
      handle: "theprimeagen",
      description: "Vim, programming, and general tech discussions",
      members: "45K+",
      icon: "🔧",
      url: "https://discord.gg/theprimeagen",
      verified: false
    },
    {
      id: 6,
      name: "Frontend Horse",
      handle: "frontendhorse",
      description: "Frontend developers community for CSS, JavaScript, and design",
      members: "12K+",
      icon: "🐴",
      url: "https://discord.gg/frontendhorse",
      verified: false
    }
  ],
  Telegram: [
    {
      id: 7,
      name: "React Developers",
      handle: "@reactdevelopers",
      description: "Share knowledge, ask questions, and discuss React development",
      members: "25K+",
      icon: "⚛️",
      url: "https://t.me/reactdevelopers",
      verified: false
    },
    {
      id: 8,
      name: "JavaScript Chat",
      handle: "@javascriptchat",
      description: "JavaScript developers community for discussions and help",
      members: "18K+",
      icon: "🟨",
      url: "https://t.me/javascriptchat",
      verified: false
    },
    {
      id: 9,
      name: "Web Development",
      handle: "@webdevelopment",
      description: "Full-stack web development discussions and resources",
      members: "32K+",
      icon: "🌐",
      url: "https://t.me/webdevelopment",
      verified: false
    }
  ],
  Reddit: [
    {
      id: 10,
      name: "r/reactjs",
      handle: "r/reactjs",
      description: "A community for learning and developing web applications using React",
      members: "341K",
      icon: "⚛️",
      url: "https://reddit.com/r/reactjs",
      verified: true
    },
    {
      id: 11,
      name: "r/webdev",
      handle: "r/webdev",
      description: "A community dedicated to all things web development",
      members: "899K",
      icon: "🌐",
      url: "https://reddit.com/r/webdev",
      verified: true
    },
    {
      id: 12,
      name: "r/Frontend",
      handle: "r/Frontend",
      description: "Frontend web development discussion and resources",
      members: "156K",
      icon: "🎨",
      url: "https://reddit.com/r/Frontend",
      verified: true
    }
  ]
};

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "Twitter":
      return <MessageCircle className="h-4 w-4" />;
    case "Discord":
      return <Hash className="h-4 w-4" />;
    case "Telegram":
      return <Send className="h-4 w-4" />;
    case "Reddit":
      return <Users className="h-4 w-4" />;
    default:
      return <Users className="h-4 w-4" />;
  }
};

export default function Communities() {
  const [activeTab, setActiveTab] = useState("All");

  const getAllCommunities = () => {
    return Object.entries(communities).flatMap(([platform, items]) =>
      items.map(item => ({ ...item, platform }))
    );
  };

  const getFilteredCommunities = () => {
    if (activeTab === "All") {
      return getAllCommunities();
    }
    return communities[activeTab as keyof typeof communities]?.map(item => ({ ...item, platform: activeTab })) || [];
  };

  const filteredCommunities = getFilteredCommunities();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Developer Communities
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow developers, share knowledge, and stay updated with the latest in tech
          </p>
        </div>

        {/* Tab Filter */}


        {/* Communities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCommunities.map((community) => (
            <Card key={community.id} className="group hover:shadow-lg transition-all duration-200 border border-border bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{community.icon}</div>
                    <div className="flex items-center gap-2">
                      {getPlatformIcon(community.platform)}
                      <Badge variant="secondary" className="text-xs">
                        {community.platform}
                      </Badge>
                    </div>
                  </div>
                  {community.verified && (
                    <Badge variant="default" className="text-xs bg-blue-500 text-white">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg sm:text-xl text-foreground line-clamp-1">
                  {community.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-mono">
                  {community.handle}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {community.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="font-medium">{community.members}</span>
                    <span>members</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(community.url, '_blank')}
                  >
                    Join
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No communities found
            </h3>
            <p className="text-muted-foreground">
              Try selecting a different platform or check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}