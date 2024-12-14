import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientProviders from "@/context/ClientProviders";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
