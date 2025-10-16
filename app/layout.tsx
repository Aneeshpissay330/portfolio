import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aneesh Pissay",
  description: "Aneesh Pissay's Portfolio - Full Stack and Mobile App Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    // { label: "Contact", href: "/contact" },
  ];
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        <Header
          title="Aneesh Pissay"
          navLinks={navLinks}
        />
        {children}
        <Footer
          title="Aneesh Pissay"
        />
      </body>
    </html>
  );
}
