import type { Metadata, Viewport } from "next";
import { Newsreader, Playfair_Display, DM_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import PreloaderProvider from "@/provider/preloader-provider";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/context/theme-context";

const newsreaderFont = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const playfairFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmMonoFont = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cursive",
  display: "swap",
});

const baseUrl = "https://abhishekjaiswar.dev";

export const viewport: Viewport = {
  themeColor: "#efe4cb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Abhishek Jaiswar — Full Stack Developer & AI Systems Engineer",
    template: "%s | The Abhishek Times",
  },
  description:
    "Portfolio and technical broadside of Abhishek Jaiswar, a Mumbai-based Full Stack Developer & AI Integration Engineer specializing in high-scale SaaS architectures, Node.js, Next.js, and multi-tenant PostgreSQL systems.",
  keywords: [
    "Abhishek Jaiswar",
    "Full Stack Developer Mumbai",
    "Software Engineer India",
    "Node.js Developer",
    "Next.js Portfolio",
    "TypeScript Architect",
    "Multi-tenant SaaS",
    "AI Streaming Systems",
    "SignBooks",
    "Lume Chat",
    "RS Interior Studio",
  ],
  authors: [{ name: "Abhishek Jaiswar", url: baseUrl }],
  creator: "Abhishek Jaiswar",
  publisher: "The Abhishek Times",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Favicons & Icons
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "The Abhishek Times",
    title: "Abhishek Jaiswar — Full Stack Developer & AI Systems Engineer",
    description:
      "Explore production SaaS case studies, low-latency AI streaming engines, and technical editorials by Abhishek Jaiswar in Mumbai, India.",
    images: [
      {
        url: "/abhishek.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Jaiswar — Full Stack & AI Engineer",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jaiswar — Full Stack Developer & AI Systems Engineer",
    description:
      "Explore production SaaS case studies, low-latency AI streaming engines, and technical editorials by Abhishek Jaiswar.",
    creator: "@abhishekjaiswar",
    images: ["/abhishek.jpg"],
  },

  // Technical Search Engine Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data Schema for Person & WebSite
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Abhishek Jaiswar",
      jobTitle: "Full Stack Developer & AI Integration Engineer",
      worksFor: {
        "@type": "Organization",
        name: "CBS Software Solutions",
      },
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
        "https://linkedin.com/in/abhishek-jaiswar",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Node.js",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Multi-Tenant SaaS Architecture",
        "AI Workflow Automation",
        "Docker",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "The Abhishek Times — Abhishek Jaiswar Portfolio",
      description:
        "Digital newspaper broadside chronicling software architecture, ideas, and production case studies by Abhishek Jaiswar.",
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreaderFont.variable} ${playfairFont.variable} ${dmMonoFont.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Schema.org Technical SEO Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-serif bg-background text-foreground">
        <ThemeProvider>
          <LanguageProvider>
            <PreloaderProvider>{children}</PreloaderProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
