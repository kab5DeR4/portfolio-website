import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolioData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — Full-Stack Developer & Security Systems Builder`,
  description: `${personalInfo.name} (@${personalInfo.handle}) is a BSc IT student & full-stack developer architecting continuous compliance engines, distributed web systems, and high-performance apps.`,
  keywords: [
    "Roshan Nale",
    "kab5DeR4",
    "Developer Portfolio",
    "Full-Stack Developer",
    "Claude Code Portfolio",
    "GRC Engine",
    "Continuous Compliance",
    "FastAPI",
    "Next.js Developer",
    "Application Security",
    "Pillai College"
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.socials.portfolio }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.socials.portfolio,
    title: `${personalInfo.name} — Full-Stack Developer & Security Systems`,
    description: personalInfo.bio,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Developer Portfolio`,
    description: personalInfo.bio,
    creator: `@${personalInfo.handle}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // json-ld structured data for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    alternateName: personalInfo.handle,
    url: personalInfo.socials.portfolio,
    sameAs: [
      personalInfo.socials.github,
      personalInfo.socials.linkedin,
      personalInfo.socials.twitter,
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "GRC Engine",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Pillai College (Autonomous)",
    },
    knowsAbout: [
      "Full-Stack Web Development",
      "Application Security",
      "Continuous Compliance (GRC)",
      "FastAPI",
      "React",
      "Next.js",
      "Flutter",
      "Offline-First Systems",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#fbfaf5] text-[#121512]">
        {children}
      </body>
    </html>
  );
}
