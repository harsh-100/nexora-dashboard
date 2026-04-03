import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

export const metadata: Metadata = {
  title: "Nexora — OSOS OMEGA Dashboard",
  description:
    "Nexora is a modern, redesigned dashboard for OSOS OMEGA. Manage your engineering projects with clarity and control.",
  keywords: ["dashboard", "OSOS", "OMEGA", "project management", "engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
