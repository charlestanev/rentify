import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Rentify",
  description: "A full-stack accommodation platform built with modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body>
          <Providers>
            <Navbar></Navbar>
          </Providers>
          <main className="container py-10">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
