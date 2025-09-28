import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/HeaderNavbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solan Ushering Services - Excellence in Event Management",
  description: "From warm welcomes to flawless coordination — Solan Ushering Services brings elegance, excellence, and ease to every event. Professional ushering and event management services.",
  keywords: ["ushering services", "event management", "professional ushering", "event coordination", "wedding ushers", "corporate events"],
  authors: [{ name: "Solan Ushering Services" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Solan Ushering Services - Excellence in Event Management",
    description: "Professional ushering and event management services with elegance and precision.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <HeaderNavbar />
            <main className="flex-1 pt-16 lg:pt-20">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}