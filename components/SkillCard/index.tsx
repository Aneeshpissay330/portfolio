import Link from "next/link";
import Icon from '@mdi/react';

interface SkillCardProps {
  icon: string;        // MDI icon path
  size?: number;       // Container size (default 80px)
  border?: boolean;    // Toggle border (default true)
  href?: string;       // Optional link
  color?: string;      // Icon color (hex value)
  label?: string;      // Skill label to display
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, size = 80, border = true, href, color = "#6B7280", label }) => {
  const CardContent = (
    <div
      className={`bg-card text-card-foreground spacing-generous text-center hover:bg-secondary transition-colors glass-effect ${
        border ? "border border-border" : ""
      }`}
    >
      <div
        className="flex items-center justify-center mx-auto mb-3"
        style={{ width: size, height: size }}
      >
        <Icon
          path={icon}
          size={size / 20} // Convert px to relative size for MDI
          style={{ color }}
        />
      </div>
      {label && (
        <p className="text-sm font-medium text-muted-foreground mt-2">{label}</p>
      )}
    </div>
  );

  // If href is provided, render <Link>, otherwise plain card
  return href ? (
    <Link href={href} className="block cursor-pointer">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
};

export default SkillCard;
