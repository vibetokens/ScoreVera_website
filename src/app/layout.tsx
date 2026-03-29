import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import ScrollTracker from "@/components/ScrollTracker";
import "./globals.css";

const GA_ID = "G-NHXN7WD7VP";
const CLARITY_ID = "w3iwf1um0g";

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
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>

        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","${CLARITY_ID}");
        `}</Script>

        {children}
        <Analytics />
        <ScrollTracker />
      </body>
    </html>
  );
}
