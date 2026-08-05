import type { Metadata } from "next";
import { Newsreader, Playfair_Display, DM_Mono, Alex_Brush, Dancing_Script } from "next/font/google";
import "./globals.css";
import PreloaderProvider from "@/provider/preloader-provider";

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

// const signatureFont = Alex_Brush({
//   weight: "400",
//   variable: "--font-signature",
//   subsets: ["latin"],
// });

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you need
  variable: '--font-cursive', // Optional: Use this if integrating with Tailwind CSS
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Abhishek Jaiswar - Software Engineer",
  description: "A Mumbai Based Software Engineer Building Your Dream Software In Real",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreaderFont.variable} ${playfairFont.variable} ${dmMonoFont.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif bg-background text-foreground">
        <PreloaderProvider>
          {children}
        </PreloaderProvider>
      </body>
    </html>
  );
}
