"use client"
import "./globals.css";
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function GlobalNotFound() {
  const router = useRouter()
  return (
    <html>
      <body>
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="relative mb-8">
              <div className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-gradient-to-r from-[#7c3aed] to-blue-600 bg-clip-text leading-none">
                404
              </div>
              <div className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] font-bold text-[#7c3aed]/10 blur-sm leading-none">
                404
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Oops! Page Not Found</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild className="bg-[#7c3aed] hover:bg-[#7c3aed]/80 text-white rounded-xl px-8 py-3 text-lg">
                <Link href="/content/latest">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-neutral-700 text-white hover:bg-neutral-800 bg-transparent rounded-xl px-8 py-3 text-lg"
                onClick={() => {
                  const searchInput = document.getElementById("search-input") as HTMLInputElement
                  searchInput?.focus()
                }}
              >
                <Search className="w-5 h-5 mr-2" />
                Search Content
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
     </body>
    </html>
  )
}