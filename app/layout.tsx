import SkillCard from "@/components/SkillCard";
import { Footer, NextHeader } from "@Aneeshpissay330/components-ui";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextHeader
          title="Aneesh Pissay"
          navLinks={navLinks}
          rightContent={
            <div className="flex items-center space-x-4">
              <SkillCard 
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                size={40}
                border={false}
                href="https://github.com/Aneeshpissay330"
              />
              <SkillCard 
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                size={40}
                border={false}
                href="https://www.linkedin.com/in/aneesh-pissay-1559a31a9"
              />
            </div>
          }
        />
        {children}
        <Footer
          title="Aneesh Pissay"
        />
      </body>
    </html>
  );
}
