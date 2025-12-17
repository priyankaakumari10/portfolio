import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Priyanka Kumari | Frontend Developer",
    template: "%s | Priyanka Kumari",
  },
  description:
    "Frontend Developer with 2+ years of experience in React.js, Next.js, and React Native. Specialized in building scalable web applications and mobile apps. Expert in TypeScript, Redux Toolkit, and modern CSS frameworks.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
  ],
  authors: [{ name: "Priyanka Kumari", url: "https://github.com/priyankaakumari10" }],
  creator: "Priyanka Kumari",
  publisher: "Priyanka Kumari",
  metadataBase: new URL("https://priyankakumari.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Priyanka Kumari | Frontend Developer",
    description:
      "Frontend Developer with 2+ years of experience in React.js, Next.js, and React Native. Specialized in building scalable web applications and mobile apps.",
    url: "https://priyankakumari.dev",
    siteName: "Priyanka Kumari Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Kumari | Frontend Developer",
    description:
      "Frontend Developer with 2+ years of experience in React.js, Next.js, and React Native.",
  },
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // Add your verification codes here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://priyankakumari.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Priyanka Kumari",
              jobTitle: "Frontend Developer",
              url: "https://priyankakumari.dev",
              email: "1702priyankakumari@gmail.com",
              telephone: "+91-9560720902",
              sameAs: [
                "https://linkedin.com/in/priyanka-kumari-5a6387210",
                "https://github.com/priyankaakumari10",
              ],
              knowsAbout: [
                "React.js",
                "Next.js",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Redux Toolkit",
                "Tailwind CSS",
                "Material UI",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Ganga Institute of Technology & Management",
              },
              worksFor: {
                "@type": "Organization",
                name: "Techvins Software Pvt. Ltd",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
