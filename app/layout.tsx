// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AppSiderbar";
import { Footer } from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "DeepNext",
  description:
    "Discover top-tier jobs, books, tools, and tutorials in the React.js and Next.js ecosystem. Curated for developers, by developers.",
  keywords: [
    "React resources",
    "Next.js tools",
    "React tutorials",
    "Next.js jobs",
    "JavaScript ecosystem",
    "Frontend development",
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "DeepNext, Your Hub for React & Next.js Resources",
    description:
      "Explore a growing collection of handpicked React and Next.js resources — jobs, tools, books, and more.",
    url: "https://deepnext.dev",
    siteName: "DeepNext",
    images: [
      {
        url: "https://deepnext.dev/og-image.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "DeepNext, Ecosystem of React and Next.js Resources",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeepNext, Your Hub for React & Next.js Resources",
    description:
      "Explore curated React.js and Next.js resources including jobs, tools, and tutorials.",
    images: ["https://deepnext.dev/og-image.png"], // Same image as above
    creator: "@yourTwitterHandle", // Optional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} font-poppins`}>
      <Analytics/>
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <main className="flex-1 overflow-hidden">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
