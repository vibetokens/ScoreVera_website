import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#07090D",
};

export const metadata: Metadata = {
  title: {
    default: "ScoreVera — Credit Dispute System That Actually Works",
    template: "%s | ScoreVera",
  },
  description:
    "Stop guessing what to do with your credit. FCRA-compliant dispute automation. Know what to send. Know when. Know what happens next.",
  metadataBase: new URL("https://scorevera.com"),
  openGraph: {
    type: "website",
    siteName: "ScoreVera",
    locale: "en_US",
    url: "https://scorevera.com",
    title: "ScoreVera — Credit Dispute System That Actually Works",
    description:
      "Stop guessing what to do with your credit. FCRA-compliant dispute automation. Know what to send. Know when. Know what happens next.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ScoreVera" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@scorevera",
    creator: "@scorevera",
    title: "ScoreVera — Credit Dispute System That Actually Works",
    description:
      "Stop guessing what to do with your credit. FCRA-compliant dispute automation. Know what to send. Know when. Know what happens next.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/icon", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
