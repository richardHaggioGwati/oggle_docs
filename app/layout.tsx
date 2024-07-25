import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({weight: ["100", "300", "500", "900"], subsets: ["greek"]});

export const metadata: Metadata = {
  title: "Oggle",
  description: "Oggle docs",
  icons: "./oggle_logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
