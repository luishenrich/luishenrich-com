import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
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
    template: "%s — Luis Henrich-Bandis",
  },
  description:
    "Solo founder of StudyPDF. Master's student at RWTH Aachen. Notes on building products, engineering, and machine learning.",
  openGraph: {
    title: "Luis Henrich-Bandis",
    description:
      "Solo founder of StudyPDF. Master's student at RWTH Aachen.",
    url: "https://luishenrich.com",
    siteName: "Luis Henrich-Bandis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Henrich-Bandis",
    description:
      "Solo founder of StudyPDF. Master's student at RWTH Aachen.",
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
        <header className="mx-auto max-w-[720px] px-6 sm:px-12 pt-10 pb-16">
          <Link
            href="/"
            className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
          >
            Luis Henrich-Bandis
          </Link>
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
      </body>
    </html>
  );
}
