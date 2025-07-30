import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export function ToolCard({ title, description, icon, href }: ToolCardProps) {
  return (
    <Card className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-2xl group-hover:bg-primary/10 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
          {description}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full bg-transparent border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg"
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            Visit
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </Button>
      </div>
    </Card>
  );
}