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

export const metadata: Metadata = {
  title: "ROOMIE — Encontrá con quién vivir, sin jugártela a ciegas",
  description:
    "ROOMIE conecta estudiantes que llegan del interior de Uruguay a Montevideo con compañeros de cuarto verificados y compatibles.",
  icons: {
    icon: "/roomie_profile.png",
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
