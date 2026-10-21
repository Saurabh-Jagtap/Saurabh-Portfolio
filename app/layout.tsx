
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saurabhjagtap.tech"),
  title: {
    default: "Saurabh Jagtap | Full-Stack Developer",
    template: "%s | Saurabh Jagtap",
  },
  description:
    "Saurabh Jagtap is a full-stack developer building practical web applications with TypeScript, React, Next.js, Node.js, and modern backend technologies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saurabh Jagtap | Full-Stack Developer",
    description:
      "Explore Saurabh Jagtap's projects, technical skills, and experience building web applications.",
    url: "https://saurabhjagtap.tech",
    siteName: "Saurabh Jagtap",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
