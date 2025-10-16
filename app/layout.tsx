import SkillCard from "@/components/SkillCard";
import { Footer, NextHeader } from "@Aneeshpissay330/components-ui";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { mdiGithub, mdiLinkedin } from '@mdi/js';
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
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" />
      </head>
      <body
        className={`${lexend.variable} antialiased`}
      >
        <NextHeader
          title="Aneesh Pissay"
          navLinks={navLinks}
          rightContent={
            <div className="flex items-center space-x-4">
              <SkillCard 
                icon={mdiGithub}
                size={40}
                border={false}
                href="https://github.com/Aneeshpissay330"
                color="#181717"
              />
              <SkillCard 
                icon={mdiLinkedin}
                size={40}
                border={false}
                href="https://www.linkedin.com/in/aneesh-pissay-1559a31a9"
                color="#0A66C2"
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
