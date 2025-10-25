import Link from "next/link";
import { ReactNode } from "react";


interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  accent?: boolean;
}

export default function LinkButton({ href, children, className = "", accent = true }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${accent ? "btn-accent" : ""} px-8 py-3 transition-colors font-medium cursor-pointer rounded-sm ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
