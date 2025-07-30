"use client"
import { useState } from "react";

type TabsProp = {
  tabs: string[];
};

export default function Filter({ tabs }: TabsProp) {
  const [activeTab, setActiveTab] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="relative w-full max-w-xs mx-auto md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg shadow-sm hover:bg-muted/50 transition-colors duration-200"
        >
          <span className="text-sm font-medium text-foreground">{activeTab}</span>
          <svg
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-20 overflow-hidden">
              <div className="py-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                      activeTab === tab
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Desktop Tabs */}
      <div className="relative hidden md:block">
        <div className="scrollbar-hide">
          <div className="flex items-center flex-wrap justify-center gap-2 my-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
