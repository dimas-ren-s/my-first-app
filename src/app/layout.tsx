"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "./components/theme-provider";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400"] });
const disableNavbarList = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={jakartaSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {!disableNavbarList.includes(pathname) && <Navbar />}
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
