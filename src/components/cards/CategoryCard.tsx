import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CategoryCardProps {
  title?: string;
  name?: string;
  icon: string | React.ReactNode;
  iconBg?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  name,
  icon,
  iconBg = "bg-[#D4FB20]",
  href,
  onClick,
  className = "",
  isActive = false,
}) => {
  const label = title || name || "";

  const content = (
    <>
      <div
        className={`w-[60px] h-[60px] ${iconBg} rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shrink-0`}
      >
        {typeof icon === "string" ? (
          <Image
            src={icon}
            alt={label}
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
            unoptimized
          />
        ) : (
          icon
        )}
      </div>
      <span className="font-sans text-[20px] leading-[24px] text-[#242528] font-medium text-center px-2">
        {label}
      </span>
    </>
  );

  const baseClasses = `w-[167px] h-[167px] bg-white rounded-[24px] border ${
    isActive ? "border-[#003BE2] shadow-md" : "border-[#CED0D3]"
  } flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:border-[#003BE2] hover:shadow-md group cursor-pointer shrink-0 ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {content}
    </div>
  );
};
