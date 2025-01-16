"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 7000); // Show loader for 7 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {isLoading ? <Loader /> : children}
      </body>
    </html>
  );
}
