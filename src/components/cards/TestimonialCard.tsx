import React from "react";
import Image from "next/image";
import type { Testimonial } from "@/types";

export interface TestimonialCardProps extends Partial<Testimonial> {
  name: string;
  role: string;
  quote: string;
  image?: string;
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
      className={`bg-white rounded-3xl p-6 flex flex-col items-start w-full lg:w-[374px] shrink-0 ${className}`}
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
        <h4 className="font-heading font-semibold text-xl leading-[1.2] tracking-[-0.2px] text-black">
          {name}
        </h4>
        <p className="font-sans text-lg leading-[1.6] text-persian-blue-800">
          {role}
        </p>
      </div>
      <p className="mt-6 font-sans text-lg leading-[1.6] text-black-700">
        {formattedQuote}
      </p>
    </div>
  );
};
