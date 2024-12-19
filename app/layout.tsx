import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const inter = Poppins ({ subsets: ['latin'],  weight: '400' })

export const metadata: Metadata = {
  title: "IKOKO LALAZY SPECIAL FORCE | No More Crime",
  description: "Built by Odeleye John Ayomide, Founder at HubPost Community!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
