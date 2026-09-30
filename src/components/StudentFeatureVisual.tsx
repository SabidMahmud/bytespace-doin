import React from "react";
import Image from "next/image";
import { CourseCard } from "@/components/CourseCard";

export const StudentFeatureVisual = () => {
  return (
    <div className="relative w-[621px] h-[552px] shrink-0 transform scale-[0.52] sm:scale-75 md:scale-90 lg:scale-100 origin-top">
      {/* Layer 1: Course Card */}
      <div className="absolute left-0 top-0 z-20">
        <CourseCard
          title="Learn Figma from Basic"
          author="by purepearl studio"
          level="Beginner"
          image="/courses/course-3.png"
          price="$25"
          period="/lifetime"
          rating="4.5"
          badges={["17 Lessons", "2 hours 16 mins", "59 Comments"]}
        />
      </div>

      {/* Layer 2: 3D Lime Coil */}
      <div className="absolute left-[406px] top-[67px] w-[215px] h-[215px] z-35 pointer-events-none">
        <Image
          src="/shape-lime-blob.png"
          alt="Electric lime coil"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>

      {/* Layer 3: 3D Student with Laptop */}
      <div className="absolute left-[20px] top-[80px] w-[500px] h-[516px] z-30 pointer-events-none">
        <Image
          src="/images/cutouts/student.png"
          alt="Student with laptop"
          width={500}
          height={516}
          className="w-full h-full object-contain"
          priority
          unoptimized
        />
      </div>

      {/* Layer 4: Learning Progress Card */}
      <div className="absolute left-[345px] top-[213px] w-[232px] h-[138px] z-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between border border-white/80">
        <p className="font-sans font-medium text-[16px] leading-6 text-[#242528]">Learning Progress</p>
        <p className="font-heading font-semibold text-[48px] leading-[57.6px] tracking-tight text-[#242528]">55%</p>
        <div className="w-[200px] h-2 bg-[#F5F5F6] rounded-full overflow-hidden">
          <div className="w-[112px] h-full bg-[#D4FB20] rounded-full" />
        </div>
      </div>
    </div>
  );
};
