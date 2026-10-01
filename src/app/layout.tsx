import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./room.css";
import "./v2.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
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
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}
