import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/context/ClientProviders";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfairDisplay",
});

export const metadata: Metadata = {
  title: "PressWisp - Latest News and Insights",
  description:
    "Explore trending topics and stay updated with curated news and insights on PressWisp.",
  openGraph: {
    title: "PressWisp - Latest News and Insights",
    description:
      "PressWisp delivers curated articles and insights on trending topics to keep you informed.",
    type: "website",
    url: "https://presswisp.com/",
    images: [
      {
        url: "https://presswisp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PressWisp",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased",
          manrope.variable,
          playfairDisplay.variable
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
