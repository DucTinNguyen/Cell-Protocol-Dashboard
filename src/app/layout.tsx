import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
const neueHass = localFont({
  src: "../../public/fonts/NeueHaasDisplayMediu.woff2",
  variable: "--font-neueHass",
  display: "swap",
});

const marbold = localFont({
  src: "../../public/fonts/MarboldNormal-Kd2Z.woff2",
  variable: "--font-marbold",
  display: "swap",
});

import "./globals.css";
import AppWalletProvider from "@/providers/wallet.provider";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://dashboard.cellprotocol.science/"),
  title: "THE FUTURE OF DECENTRALIZED SCIENCE",
  description: "Discover the next wave of research: blockchain powered and boundless",
  openGraph: {
    title: "THE FUTURE OF DECENTRALIZED SCIENCE",
    description: "Discover the next wave of research: blockchain powered and boundless",
    url: new URL("https://dashboard.cellprotocol.science/")
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>THE FUTURE OF DECENTRALIZED SCIENCE</title>
        <meta
          name="description"
          content="Discover the next wave of research: blockchain powered and boundless"
        />
        <meta property="og:image" content="./opengraph-image.png"></meta>
        <meta property="og:url" content="https://dashboard.cellprotocol.science"></meta>
        <meta property="og:title" content="THE FUTURE OF DECENTRALIZED SCIENCE"></meta>
        <meta property="og:site_name" content="https://dashboard.cellprotocol.science"></meta>
        <meta
          property="og:description"
          content="Discover the next wave of research: blockchain powered and boundless"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${marbold.variable} ${neueHass.variable}`}>
        <AppWalletProvider>
          <Suspense>
            {children}
          </Suspense>
        </AppWalletProvider>
      </body>
    </html>
  );
}
