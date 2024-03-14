import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Shortly",
  description:
    "A url shortner page where you can shorten your long urls with ease.",
  keywords: ["shortly", "url", "shortner", "shorten", "link"],
  creator: "Aditya Phasu",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#eff1f7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
