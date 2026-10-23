import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const title = "Matty Wegehaupt | Banglangdang Translations";
const description =
  "Korean–English translation and editing by Matty Wegehaupt (오상진). Books, Buddhist scholarship, course translations, and current literary work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://banglangdang.vercel.app"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Banglangdang Translations",
    images: [
      {
        url: "/og-image-hanok.png",
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
    title,
    description,
    images: ["/og-image-hanok.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
