"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="es">
        <body className="bg-slate-100">{children}</body>
      </html>
    </SessionProvider>
  );
}
