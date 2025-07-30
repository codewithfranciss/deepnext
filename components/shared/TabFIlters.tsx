"use client"
import { useState } from "react";

type TabsProp = {
    tabs: string[]
}
export default function Filter({tabs}: TabsProp){
    const [activeTab, setActiveTab] = useState("All");
   return(
                             <>
                            <div className="relative">
                            <div className="overflow-auto scrollbar-hide">
                              <div className="flex flex-wrap items-center justify-center my-2">
                                {tabs.map((tab) => (
                                  <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 mx-auto rounded-sm text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                                      activeTab === tab
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "bg-none text-lg text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                                    }`}
                                  >
                                    {tab}
                                  </button>
                                ))}
                              </div>
                            </div>
                            
                          </div>
                          </>
                          )
}