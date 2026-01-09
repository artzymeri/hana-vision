import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://hana-vision.de'),
  title: "HANA VISION | Schulbegleitung mit Herz, Struktur und Wirkung",
  description: "Bei HANA VISION unterstützen wir Kinder im Schulalltag, fördern ihre Entwicklung und schaffen Wege, wie Lernen, Teilhabe und Selbstvertrauen möglich werden. Individuelle Schulbegleitung, die stärkt, versteht und Teilhabe ermöglicht.",
  keywords: ["Schulbegleitung", "Teilhabeassistenz", "Kinder", "Förderung", "Entwicklung", "Inklusion", "Bildung", "HANA VISION"],
  authors: [{ name: "HANA VISION" }],
  creator: "HANA VISION",
  publisher: "HANA VISION",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://hana-vision.de",
    siteName: "HANA VISION",
    title: "HANA VISION | Schulbegleitung mit Herz, Struktur und Wirkung",
    description: "Individuelle Schulbegleitung, die stärkt, versteht und Teilhabe ermöglicht.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HANA VISION Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HANA VISION | Schulbegleitung",
    description: "Individuelle Schulbegleitung, die stärkt, versteht und Teilhabe ermöglicht.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&f[]=cabinet-grotesk@800,700,500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
