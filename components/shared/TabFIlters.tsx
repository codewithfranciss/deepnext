"use client"
import { useState } from "react";

type TabsProp = {
    tabs: string[]
}
export default function Filter({tabs}: TabsProp){
    const [activeTab, setActiveTab] = useState("All");
   return(
                             <>
                            {/* Tabs - Enhanced mobile scroll */}
                            <div className="relative">
                            <div className="scrollbar-hide">
                              <div className="flex gap-2 flex-wrap my-2 pb-1">
                                {tabs.map((tab) => (
                                  <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                                      activeTab === tab
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "bg-none font-black text-muted-foreground hover:bg-muted/80 hover:text-foreground"
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