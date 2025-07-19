import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Rohan | Fullstack Developer & UI/UX Designer",
  description:
    "Rohan is a full-stack developer and product designer with expertise in Java, Spring Boot, Next.js, PostgreSQL, Figma, and clean UI/UX design.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "Rohan Gupta",
    "Backend Developer",
    "Spring Boot",
    "Java Developer",
    "Full Stack Developer",
    "UI UX Designer",
    "Figma Portfolio",
    "Product Designer",
    "PostgreSQL Expert",
    "Next.js Developer",
    "Leetcode",
    "Software Engineer",
    "Rohan Portfolio",
  ],
  authors: [{ name: "Rohan Gupta", url: "https://github.com/R0HAN9" }],
  creator: "Rohan Gupta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
