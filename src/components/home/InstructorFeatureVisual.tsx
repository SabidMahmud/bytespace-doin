import React from "react";
import Image from "next/image";
import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { TotalRevenueCard } from "@/components/cards/TotalRevenueCard";

export const InstructorFeatureVisual = () => {
  return (
    <div className="relative w-[541px] h-[596px] shrink-0 transform scale-[0.52] min-[360px]:scale-[0.56] sm:scale-75 md:scale-90 lg:scale-100 origin-top">
      {/* Layer 1: Total Revenue Card */}
      <TotalRevenueCard className="absolute left-0 top-[44px] z-20" />

      {/* Layer 1: Year to Date Card */}
      <div className="absolute left-0 top-[194px] w-[134px] h-[135px] z-20 bg-persian-blue-800/90 backdrop-blur-[10px] rounded-[16px] p-4 flex flex-col justify-between text-shuttle-gray-50">
        <div>
          <p className="font-sans font-medium text-[16px] leading-[19.2px]">Year to Date</p>
          <p className="font-sans text-[10px] text-shuttle-gray-50">2023</p>
        </div>
        <span className="font-heading font-semibold text-[24px] leading-8 text-shuttle-gray-50 tracking-[-0.01em]">$1,200.38</span>
        <div>
          <span className="inline-block bg-electric-lime-500 text-shuttle-gray-950 font-sans font-medium text-[10px] px-2 py-0.5 rounded-full">+12$</span>
        </div>
      </div>

      {/* Layer 2: 3D Female Instructor with Tablet */}
      <Image
        src="/images/cutouts/instructor-female-v2.png"
        alt="Instructor with tablet"
        width={543.75}
        height={745}
        className="absolute left-[20px] top-[15px] z-30 pointer-events-none max-w-none"
        priority
        unoptimized
      />

      {/* Layer 3: 3D Lime Coil */}
      <Image
        src="/shape-lime-blob.png"
        alt="Electric lime coil"
        width={145}
        height={154}
        className="absolute left-[333px] top-[148px] z-35 pointer-events-none max-w-none"
        priority
        unoptimized
      />

      {/* Layer 4: Happy Students Card */}
      <HappyStudentsCard
        variant="light"
        className="absolute left-[283px] top-[413px] z-40"
      />
    </div>
  );
};
