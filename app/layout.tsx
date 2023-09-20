import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title:
    "Mrinmoy Saikia - Frontend Developer specializing in Next.js, React.js",
  description:
    "Welcome to the portfolio of Mrinmoy Saikia, a frontend developer skilled in Next.js, React.js, TailwindCSS, TypeScript, and more. Explore projects, skills, and work experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[inter]">{children}</body>
    </html>
  );
}
