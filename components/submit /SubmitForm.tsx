import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, LinkIcon, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "Article",
  "Video", 
  "UI",
  "Template",
  "OS Project",
  "Tool",
  "Hosting",
  "Database",
  "Documentation"
];

export const SubmitButton = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!url || !category) {
      toast({
        title: "Missing fields",
        description: "Please fill in both URL and category.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    toast({
      title: "Resource submitted successfully!",
      description: "Thank you for your contribution. It will be reviewed shortly.",
    });

    // Reset form
    setUrl("");
    setCategory("");
    setOpen(false);
  };

  return (
    <div className="flex justify-between items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button 
            className="bg-secondary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl mx-4 px-6 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Submit
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 p-6 bg-card border border-border rounded-xl shadow-lg backdrop-blur-sm"
          align="end"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Submit Resource</h3>
              <p className="text-sm text-muted-foreground">Share a React-related resource with the community</p>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Resource URL
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="https://example.com/awesome-react-tool"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-10 bg-input border-border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Category
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="pl-10 bg-input border-border rounded-lg">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border rounded-lg">
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium"
            >
              Submit Resource
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};