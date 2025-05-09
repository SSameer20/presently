import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "/images/logo.png",
  title: "Presently | Easy AI Generated Slides",
  description:
    "Create stunning, professional slides in seconds with Presently - the AI-powered slide generator. Perfect for presentations, pitches, and reports. Save time, boost creativity, and impress your audience with AI-generated slides tailored to your needs. Try it now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5149497713261785" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-full overflow-y-auto overflow-x-hidden dark bg-background text-foreground`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
