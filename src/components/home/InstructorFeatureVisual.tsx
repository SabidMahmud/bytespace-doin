import React from "react";
import Image from "next/image";
import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { TotalRevenueCard } from "@/components/cards/TotalRevenueCard";
import { YearToDateCard } from "@/components/cards/YearToDateCard";

export const InstructorFeatureVisual = () => {
  return (
    <div className="relative w-[541px] h-[596px] shrink-0 transform scale-[0.52] min-[360px]:scale-[0.56] sm:scale-75 md:scale-90 lg:scale-100 origin-top">
      {/* Layer 1: Total Revenue Card */}
      <TotalRevenueCard className="absolute left-0 top-[44px] z-20" />

      {/* Layer 1: Year to Date Card */}
      <YearToDateCard className="absolute left-0 top-[194px] z-20" />

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
