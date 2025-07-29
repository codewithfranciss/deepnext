// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AppSiderbar";
import { Footer } from "@/components/shared/Footer"; 
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "DeepReact",
  description: "Ecosystem of React resources",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-[#0e0e0e] text-white`}>
        <SidebarProvider>
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <AppSidebar />

            {/* Main content layout */}
            <div className="flex flex-col flex-1">
              {/* Page content */}
              <main className="flex-1 p-6 overflow-y-auto">
                {children}
              </main>

              {/* Footer */}
              <Footer />
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
