import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";
import latestItems from "@/data/latest";
export default function LatestCard(){
    return(
        <>
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
                  </>
    )
}