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
        <nav className="border-b border-gray-200 px-4 py-4 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="text-xl font-bold"
            >
              Capstone
            </Link>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm sm:text-base">
              <Link href="/" className="hover:underline">
                Home
              </Link>

              <Link href="/projects" className="hover:underline">
                Projects
              </Link>

              <Link href="/about" className="hover:underline">
                About
              </Link>

              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}