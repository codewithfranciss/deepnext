// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AppSiderbar";
import { Footer } from "@/components/shared/Footer"; // 👈 import your Footer

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
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <AppSidebar />

            {/* Main content layout */}
            <div className="flex flex-col flex-1">
              {/* Page content */}
              <main className="flex-1 overflow-hidden">
                {children}
              </main>

              {/* Footer */}
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
