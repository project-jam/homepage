import type React from "react";
import "./globals.css";

export const metadata = {
  title: "project jam",
  description: "a chill website",
  openGraph: {
    title: "project jam",
    description: "a chill website",
    images: [
      {
        url: "/icon.png", // Make sure the image is in the public folder
        width: 1200,
        height: 630,
        alt: "project jam",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        
        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#DE7F18" />
      </head>
      <body>{children}</body>
    </html>
  );
}

