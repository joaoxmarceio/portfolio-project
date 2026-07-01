import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "©JOÃO MARCELO",
  description: "Portfolio website built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
