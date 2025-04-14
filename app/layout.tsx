// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Open Graph & Twitter metadata
export const metadata: Metadata = {
  title: "Banglangdang Translations",
  description: "Translation, Editing, Co-collaboration in Korean/English work on Buddhism and beyond.",
  openGraph: {
    title: "Banglangdang Translations",
    description: "Translation, Editing, Co-collaboration in Korean/English work on Buddhism and beyond.",
    url: "https://banglangdang.vercel.app",
    siteName: "Banglangdang Translations",
    images: [
      {
        url: "https://banglangdang.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Banglangdang Translations",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banglangdang Translations",
    description: "Translation, Editing, Co-collaboration in Korean/English work on Buddhism and beyond.",
    images: ["https://banglangdang.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
