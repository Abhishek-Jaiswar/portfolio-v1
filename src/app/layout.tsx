import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, DM_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-greatvibes",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://tridex.in";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Abhishek Jaiswar — Software Engineer",
    template: "%s | Abhishek Jaiswar",
  },
  description:
    "Abhishek Jaiswar is a software engineer based in Mumbai, building scalable web applications with React, Next.js, Node.js, Express, PostgreSQL, and MongoDB.",
  keywords: [
    "Abhishek Jaiswar",
    "Software Engineer",
    "Software Engineer Mumbai",
    "Software Engineer India",
    "Full Stack Developer",
    "Full Stack Developer Mumbai",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "REST API Development",
    "TypeScript",
    "Web Developer Mumbai",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Jaiswar", url: baseUrl }],
  creator: "Abhishek Jaiswar",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Abhishek Jaiswar",
    title: "Abhishek Jaiswar — Software Engineer",
    description:
      "Software engineer in Mumbai building scalable web applications with React, Next.js, Node.js, and PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jaiswar — Software Engineer",
    description:
      "Software engineer in Mumbai building scalable web applications end to end.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Abhishek Jaiswar",
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "CBS Software Private Limited" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Mumbai" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "India",
      },
      url: baseUrl,
      image: `${baseUrl}/abhishek.jpg`,
      sameAs: [
        "https://github.com/Abhishek-Jaiswar",
        "https://www.linkedin.com/in/abhishek-jaiswar12/",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "PostgreSQL",
        "MongoDB",
        "REST API Development",
        "Role-Based Access Control",
        "Database Design",
        "Performance Optimization",
        "CI/CD",
        "Clean Architecture",
        "C++",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Abhishek Jaiswar — Portfolio",
      description:
        "Portfolio of Abhishek Jaiswar, a software engineer based in Mumbai.",
      publisher: { "@id": `${baseUrl}/#person` },
      inLanguage: "en-US",
    },
  ],
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${dmMono.variable} ${greatVibes.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
