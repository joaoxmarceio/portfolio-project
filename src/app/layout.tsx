import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "©JOÃO MARCELO | Creative Director",
  description: "Selected work in brand identity, art direction, campaigns, UX/UI, landing pages and B2B presentations.",
  icons: {
    icon: "/favicon.svg?v=2",
    shortcut: "/favicon.svg?v=2",
    apple: "/favicon.svg?v=2",
  },
  openGraph: {
    title: "©JOÃO MARCELO | Creative Director",
    description: "Selected work in brand identity, art direction, campaigns, UX/UI, landing pages and B2B presentations.",
    url: "https://www.joaomarceio.com.br",
    siteName: "João Marcelo Portfolio",
    images: [
      {
        url: "/og-image-v2.jpg",
        width: 2400,
        height: 1260,
        alt: "João Marcelo Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "©JOÃO MARCELO | Creative Director",
    description: "Selected work in brand identity, art direction, campaigns, UX/UI, landing pages and B2B presentations.",
    images: ["/og-image-v2.jpg"],
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
