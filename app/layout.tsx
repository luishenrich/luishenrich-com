import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luishenrich.com"),
  title: {
    default: "Luis Henrich-Bandis",
    template: "%s · Luis Henrich-Bandis",
  },
  description:
    "Founder. Building Lagias, and running StudyPDF at 100,000+ users. Notes on building products, applied AI, and what actually held up in production.",
  openGraph: {
    title: "Luis Henrich-Bandis",
    description:
      "Founder. Building Lagias, and running StudyPDF at 100,000+ users.",
    url: "https://luishenrich.com",
    siteName: "Luis Henrich-Bandis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Henrich-Bandis",
    description:
      "Founder. Building Lagias, and running StudyPDF at 100,000+ users.",
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <header className="mx-auto max-w-[720px] px-6 sm:px-12 pt-10 pb-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.1em] sm:tracking-[0.16em] text-text-primary hover:text-accent transition-colors whitespace-nowrap"
          >
            Luis Henrich-Bandis
          </Link>
          <nav className="flex items-center gap-4 sm:gap-5 text-[13px] text-text-secondary">
            <Link
              href="/about"
              className="hover:text-text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/work"
              className="hover:text-text-primary transition-colors"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="hover:text-text-primary transition-colors"
            >
              Writing
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mx-auto max-w-[720px] px-6 sm:px-12 py-12 mt-24 text-sm text-text-muted border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span>© {new Date().getFullYear()} Luis Henrich-Bandis</span>
            <ul className="flex gap-5">
              <li>
                <a
                  href="https://www.linkedin.com/in/luishenrich/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/luisnhenrich"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="mailto:hi@luishenrich.com"
                  className="hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
