import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const recursive = Recursive({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Fast, Open-Source Profanity API",
  description: "A project made by Tausif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} antialiased bg-blue-50`}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
