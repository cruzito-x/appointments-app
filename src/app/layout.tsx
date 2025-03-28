"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: [
    "100",
    "200",
    "300",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="es">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body className={`bg-slate-100 ${poppins.className}`}>{children}</body>
      </html>
    </SessionProvider>
  );
}
