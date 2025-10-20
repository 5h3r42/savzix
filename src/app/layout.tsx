import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://savzix.store"),
  title: {
    default: "Savzix Store | Modern Rituals for Skin, Hair, and Home",
    template: "%s | Savzix Store",
  },
  description:
    "Discover Savzix skincare, haircare, fragrance, and wellness essentials engineered for modern rituals.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://savzix.store",
    siteName: "Savzix Store",
    title: "Savzix Store | Modern Rituals for Skin, Hair, and Home",
    description:
      "Discover Savzix skincare, haircare, fragrance, and wellness essentials engineered for modern rituals.",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Savzix Store brand banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savzix Store | Modern Rituals for Skin, Hair, and Home",
    description:
      "Discover Savzix skincare, haircare, fragrance, and wellness essentials engineered for modern rituals.",
    images: ["/og-default.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
