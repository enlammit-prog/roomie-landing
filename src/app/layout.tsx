import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const SITE_URL = "https://joinroomie.vercel.app";
const OG_TITLE = "ROOMIE — Encontrá con quién vivir, sin jugártela a ciegas";
const OG_DESCRIPTION =
  "ROOMIE conecta estudiantes del interior y de intercambio con roommates verificados y compatibles en Montevideo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: OG_TITLE,
  description:
    "ROOMIE conecta estudiantes que llegan del interior de Uruguay a Montevideo con compañeros de cuarto verificados y compatibles.",
  icons: {
    icon: "/roomie_profile.png",
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "ROOMIE",
    images: [
      {
        url: "/roomie_profile.png",
        width: 1000,
        height: 1000,
        alt: "ROOMIE",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/roomie_profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${manrope.variable} font-manrope bg-bg text-ink antialiased min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
