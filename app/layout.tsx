import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewModeProvider } from "@/lib/view-mode-context";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heritage Museum - Explore Art, History & Culture",
  description: "Discover world-class exhibitions and attractions at Heritage Museum. Explore ancient artifacts, modern art, and cultural treasures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ViewModeProvider>
          <Navigation />
          <main id="main-content" className="min-h-screen" tabIndex={-1}>
            {children}
          </main>
          <footer className="border-t bg-muted/50 py-8 mt-16" role="contentinfo">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Heritage Museum. All rights reserved.</p>
              <p className="mt-2">Experience history, art, and culture.</p>
            </div>
          </footer>
        </ViewModeProvider>
      </body>
    </html>
  );
}
