import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capstone Skeleton",
  description: "My deployed capstone project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b border-gray-200 px-6 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              Capstone
            </Link>

            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}