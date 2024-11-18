import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';

export const metadata = {
  title: "Project Jam",
  description: "idk what to put here",
  openGraph: {
    title: "Project Jam",
    url: "https://project-jam.js.cool/",
    images: "https://project-jam.js.cool/logo.png",
    siteName: "Project Jam",
  },
  twitter: {
    card: "summary_large_image",
  },
  themeColor: "#e9a75b",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
