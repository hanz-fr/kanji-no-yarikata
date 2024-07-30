import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "漢字のやり方",
  description: "A minimalist kanji web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
