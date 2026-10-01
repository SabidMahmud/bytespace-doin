import React from "react";
import Image from "next/image";
import { PARTNERS } from "@/data";

export const PartnersSection = () => {
  return (
    <section className="w-full bg-shuttle-gray-50 py-20 flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[121px] flex items-center justify-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-[72px] opacity-100">
          {PARTNERS.map((partner) => (
            <Image
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className="h-[42px] w-auto object-contain shrink-0"
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  );
};
