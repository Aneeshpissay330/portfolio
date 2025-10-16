"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin } from '@mdi/js';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  title: string;
  navLinks: NavLink[];
}

export function Header({ title, navLinks }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-border spacing-generous">
      <div className="container mx-auto spacing-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
            {title}
          </Link>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-sm ${
                        pathname === link.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/Aneeshpissay330"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-accent transition-colors rounded-sm"
            >
              <Icon path={mdiGithub} size={1} style={{ color: '#181717' }} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/aneesh-pissay-1559a31a9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-accent transition-colors rounded-sm"
            >
              <Icon path={mdiLinkedin} size={1} style={{ color: '#0A66C2' }} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}