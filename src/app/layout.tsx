import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guhan S | AI Engineer & Full Stack Developer",
  description: "Portfolio of Guhan S, an AI Engineer, Full Stack Developer, Java Developer, and Machine Learning Enthusiast. Building Intelligent Software that Solves Real World Problems.",
  keywords: ["Guhan S", "AI Engineer", "Full Stack Developer", "Java Developer", "Machine Learning", "Erode", "Tamil Nadu", "India", "Software Engineer"],
  authors: [{ name: "Guhan S", url: "mailto:guhanguhan529@gmail.com" }],
  creator: "Guhan S",
  metadataBase: new URL("https://github.com/GUHAN005"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/GUHAN005",
    title: "Guhan S | AI Engineer & Full Stack Developer",
    description: "Building Intelligent Software that Solves Real World Problems. Portfolio of Guhan S.",
    siteName: "Guhan S Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1086,
        height: 1448,
        alt: "Guhan S Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guhan S | AI Engineer & Full Stack Developer",
    description: "Building Intelligent Software that Solves Real World Problems.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Guhan S",
    "jobTitle": "AI Engineer & Full Stack Developer",
    "url": "https://github.com/GUHAN005",
    "email": "guhanguhan529@gmail.com",
    "telephone": "+919444341696",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Erode",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://github.com/GUHAN005",
      "https://www.linkedin.com/in/s-guhan"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-dark text-gray-100 overflow-x-hidden selection:bg-indigo-600/30 selection:text-cyan-400">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
