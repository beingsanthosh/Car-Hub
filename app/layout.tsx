import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";



export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the worls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative">
          <Navbar/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}