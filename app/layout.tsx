import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://launchfast.dev"; // ganti dengan domain final
const SITE_NAME = "LaunchFast";
const TITLE = "LaunchFast - The Next.js Starter Kit for Shipping SaaS Fast";
const DESCRIPTION =
  "A production-ready Next.js boilerplate with auth, payments, database, and email already wired up. Skip the setup and ship your SaaS this week.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s — ${SITE_NAME}` },
  description: DESCRIPTION,
  keywords: [
    "nextjs boilerplate",
    "nextjs starter kit",
    "saas boilerplate",
    "saas starter kit",
    "supabase nextjs starter",
    "ship saas fast",
  ],
  authors: [{ name: "Zeiyn", url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@iamzeiyn",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

// Structured data so Google can render this as a Product/Organization rich result.
// Keep in sync with SITE_URL/SITE_NAME/DESCRIPTION above — no separate source of truth.
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        sameAs: ["https://x.com/iamzeiyn"],
      },
      {
        "@type": "Product",
        name: "LaunchFast Next.js Starter Kit",
        description: DESCRIPTION,
        brand: { "@id": `${SITE_URL}/#org` },
        offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1 pt-20">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}