import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Servd | AI Recipe Generator with Smart Pantry & Subscription Controls",
  description:
    "Discover intelligent cooking with Servd — an AI-powered recipe platform featuring smart pantry scanning, subscription-based rate limiting, Arcjet bot protection, secure Clerk authentication, and advanced generative AI models for personalized recipes.",
  keywords: [
    "AI recipes",
    "AI cooking app",
    "pantry recipe generator",
    "Arcjet security",
    "Clerk authentication",
    "subscription based rate limiting",
    "bot protection",
    "Next.js AI app",
  ],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* Footer */}
          <footer className="py-8 px-4 border-t bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
              <p className="text-stone-500 text-lg">
                Made with 💗 by KRA
                <Link
                  href="https://github.com/KarthickRamAlagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block ml-1 p-1 rounded-full bg-stone-500 text-white align-super hover:bg-stone-600 transition"
                >
                  <Github size={14} />
                </Link>
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
