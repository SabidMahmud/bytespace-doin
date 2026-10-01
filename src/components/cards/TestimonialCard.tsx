import React from "react";
import Image from "next/image";

export interface TestimonialCardProps {
  name: string;
  role: string;
  avatar?: string;
  image?: string;
  quote: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  image,
  quote,
  className = "",
}) => {
  const avatarSrc = avatar || image || "";

  // Ensure quote is cleanly wrapped in quotes if not already present
  const formattedQuote =
    quote.startsWith('"') || quote.startsWith('“') || quote.startsWith('&quot;')
      ? quote
      : `"${quote}"`;

  return (
    <div
      className={`bg-white rounded-[24px] p-6 flex flex-col items-start w-full lg:w-[374px] shrink-0 ${className}`}
    >
      {avatarSrc && (
        <Image
          src={avatarSrc}
          width={80}
          height={80}
          alt={name}
          className="rounded-full w-20 h-20 object-cover shrink-0"
          unoptimized
        />
      )}
      <div className="mt-6 flex flex-col">
        <h4 className="font-heading font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">
          {name}
        </h4>
        <p className="font-sans text-[18px] leading-[1.6] text-[#003BE2]">
          {role}
        </p>
      </div>
      <p className="mt-6 font-sans text-[18px] leading-[1.6] text-[#4F4F4F]">
        {formattedQuote}
      </p>
    </div>
  );
};
