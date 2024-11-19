import type { Metadata } from "next";
import localFont from "next/font/local";

const neueHass = localFont({
  src: "../../public/fonts/NeueHaasDisplayMediu.woff2",
  variable: "--font-neueHass",
  display: "swap",
});

import "./globals.css";
import AppWalletProvider from "@/providers/wallet.provider";

export const metadata: Metadata = {
  title: "DeBio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueHass.variable}`}>
        <AppWalletProvider>
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
