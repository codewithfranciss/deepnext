"use client"

import {
  Search,
  Flame,
  Briefcase,
  BookOpen,
  Brain,
  Puzzle,
  Palette,
  Wrench,
  Folder,
  Cloud,
  Database,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

const sidebarItems = [
  { title: "Search", url: "/search", icon: Search, disabled: true, comingSoon: true },
  { title: "Latest", url: "/content/latest", icon: Flame },
  { title: "Jobs", url: "/content/job", icon: Briefcase },
  { title: "Tutorials", url: "/content/tutorial", icon: BookOpen },
  { title: "Quiz", url: "/quiz", icon: Brain, isNew: true },
  { title: "Templates", url: "/templates", icon: Puzzle },
  { title: "UI", url: "/ui", icon: Palette, isNew: true },
  { title: "Tools", url: "/content/tools", icon: Wrench },
  { title: "OS Projects", url: "/content/projects", icon: Folder },
  { title: "Hosting", url: "/content/hosting", icon: Cloud },
  { title: "Database", url: "/database", icon: Database },
  { title: "Docs", url: "/docs", icon: FileText },
]

export function AppSidebar() {
  const currentPath = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  return (
    <Sidebar className="w-64">
      <SidebarContent className="bg-card border-r border-border">
        <div className="p-6 border-b border-border">
          <h1 className="font-bold text-xl text-foreground">DeepReact</h1>
        </div>

        <SidebarGroup className="px-3 border-none py-10">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 border-none">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title} className="border-none">
                  <SidebarMenuButton
                    asChild={!item.disabled}
                    className={`
                      w-full rounded-lg transition-all duration-200 text-left group
                      ${isActive(item.url) && !item.disabled
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "hover:bg-accent/10 text-muted-foreground hover:text-foreground"}
                      ${item.disabled ? "opacity-40 cursor-not-allowed" : ""}
                    `}
                  >
                    {item.disabled ? (
                      <div className="flex items-center gap-3 px-3 py-2">
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <div className="flex items-center justify-between flex-1">
                          <span className="font-medium">{item.title}</span>
                          {item.comingSoon && (
                            <Badge variant="secondary" className="text-xs px-2 py-0">
                              Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                    ) : (
                      <Link href={item.url} className="flex items-center gap-3 px-3 py-2 w-full">
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <div className="flex items-center justify-between flex-1">
                          <span className="font-medium">{item.title}</span>
                          {item.isNew && (
                            <Badge
                              variant="default"
                              className="text-xs px-2 py-0 bg-primary text-primary-foreground"
                            >
                              New
                            </Badge>
                          )}
                        </div>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
