import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: "BG Wealth Club | Smart Online Earning Platform",
  description:
    "BG Wealth Club is a smart platform where users can explore online earning opportunities, guidance, and financial growth strategies.",
  
  keywords: [
    "bg wealth club",
    "online earning",
    "passive income",
    "Trading signals",
    "financial guidance"
  ],

  metadataBase: new URL("https://www.bgwealthclub.com"),

  openGraph: {
    title: "BG Wealth Club",
    description: "Explore online earning and financial growth with BG Wealth Club.",
    url: "https://www.bgwealthclub.com",
    siteName: "BG Wealth Club",
    type: "website",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
