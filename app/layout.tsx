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
        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#DE7F18" />
      </head>
      <body>{children}</body>
    </html>
  );
}
