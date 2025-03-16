import type React from "react";
import "./globals.css";

export const metadata = {
  title: "project jam",
  description: "A chill website",
  openGraph: {
    title: "project jam",
    description: "A chill website",
    images: [
      {
        url: "/twitter_summary_image.png", // Make sure the image is in the public folder
        width: 1200,
        height: 630,
        alt: "Project Jam Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // Uses a large Twitter card format
    site: "@your_twitter_handle", // Replace with your Twitter handle
    title: "project jam",
    description: "A chill website",
    images: "/twitter_summary_image.png", // Path to the image
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

        {/* Twitter Metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images} />
      </head>
      <body>{children}</body>
    </html>
  );
}
