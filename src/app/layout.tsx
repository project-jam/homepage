import "./globals.css";

export const metadata = {
  title: "Project Jam",
  description: "idk what to put here",
  openGraph: {
    title: "Project Jam",
    url: "https://project-jam.is-a.dev/",
    images: "https://project-jam.is-a.dev/logo.png",
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
