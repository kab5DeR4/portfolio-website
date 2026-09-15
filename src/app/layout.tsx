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
  title: `${personalInfo.name} — Full-Stack Developer & Security-Focused Engineer`,
  description: `Portfolio of Roshan Nale, a BSc IT student building full-stack software, security-focused systems, compliance automation tools, and AI/ML projects. Open to internships and graduate roles.`,
  keywords: [
    "Roshan Nale",
    "kab5DeR4",
    "Developer Portfolio",
    "Full-Stack Developer",
    "GRC Engine",
    "Continuous Compliance",
    "FastAPI Developer",
    "Next.js Developer",
    "Application Security",
    "BSc IT Student",
    "Pillai College",
    "Security Engineering"
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.socials.portfolio }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.socials.portfolio,
    title: `${personalInfo.name} — Full-Stack Developer & Security-Focused Engineer`,
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
