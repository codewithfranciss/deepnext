"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Github, Twitter, Linkedin, Mail, ExternalLink, BookOpen, Code, Users, Zap } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      })
      return
    }

    setIsSubscribing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive the latest React updates.",
    })

    setEmail("")
    setIsSubscribing(false)
  }

  

  const categories = [
    { name: "Tutorials", href: "/tutorials" },
    { name: "Tools", href: "/tools" },
    { name: "Templates", href: "/templates" },
    { name: "UI Components", href: "/ui" },
    { name: "Jobs", href: "/jobs" },
    { name: "Quiz", href: "/quiz" },
  ]

  const resources = [
    { name: "HackShelf", href: "/docs" },
  
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Email", href: "mailto:hello@deepreact.dev", icon: Mail },
  ]

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Newsletter Section */}
        <Card className="bg-gradient-to-r from-[#7c3aed]/10 to-blue-600/10 border-[#7c3aed]/20 rounded-xl mb-12">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#7c3aed] rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Stay Updated</h3>
              </div>
              <p className="text-neutral-300 mb-6 text-sm sm:text-base">
                Get the latest React tutorials, tools, and resources delivered to your inbox weekly.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400 rounded-xl focus:border-[#7c3aed] focus:ring-[#7c3aed]"
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-[#7c3aed] hover:bg-[#7c3aed]/80 text-white rounded-xl px-6"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              <p className="text-xs text-neutral-400 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">DeepReact</h3>
                <Badge variant="outline" className="border-[#7c3aed] text-[#7c3aed] text-xs mt-1">
                  Modern React Resources
                </Badge>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Your ultimate destination for React tutorials, tools, templates, and community resources. Built by
              developers, for developers.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-[#7c3aed] transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Other projects</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-neutral-400 hover:text-[#7c3aed] transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Community</h4>
            <div className="space-y-3 mb-6">
              <p className="text-neutral-400 text-sm">
                Join our growing community of React developers and stay connected.
              </p>
              <div className="flex items-center gap-1 text-sm">
                <Users className="w-4 h-4 text-[#7c3aed]" />
                <span className="text-neutral-300">12,000+ developers</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-[#7c3aed] rounded-lg flex items-center justify-center transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-[#7c3aed] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-[#7c3aed] transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://github.com/deepreact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#7c3aed] transition-colors flex items-center gap-1"
              >
                Open Source
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
