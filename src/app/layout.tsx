import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'; // Import the Navbar component
import Footer from '@/components/Footer'; // Import the Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Syaiful",
  description: "Ini adalah portofolio saya yang dibuat dengan Next.js 13 dan Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-full`}
      >
        <Navbar /> {/* Render the Navbar component */}
        <main className="flex-grow pt-32">
          {children}
        </main>
        <Footer /> {/* Render the Footer component */}
      </body>
    </html>
  );
}
