import Image from "next/image";
import Link from "next/link";

interface SkillCardProps {
  icon: string;        // URL or /public path
  size?: number;       // Container size (default 80px)
  border?: boolean;    // Toggle border (default true)
  href?: string;       // Optional link
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, size = 80, border = true, href }) => {
  const CardContent = (
    <div
      className={`bg-white p-6 text-center hover:border-gray-300 transition-colors 
        ${border ? "border border-gray-200" : ""}`}
    >
      <div
        className="flex items-center justify-center mx-auto"
        style={{ width: size, height: size }}
      >
        <Image
          src={icon}
          alt="Skill Icon"
          width={256}
          height={256}
          className="object-contain"
        />
      </div>
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
