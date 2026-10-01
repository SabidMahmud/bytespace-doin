import React from "react";
import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { LearningProgressCard } from "@/components/cards/LearningProgressCard";

export const StudentFeatureVisual = () => {
  return (
    <div className="relative w-[621px] h-[552px] shrink-0 z-10 transform scale-[0.48] min-[360px]:scale-[0.52] sm:scale-75 md:scale-90 lg:scale-100 origin-top">
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
      <Image
        src="/images/cutouts/student-coil.png"
        alt="Electric lime coil"
        width={125}
        height={163}
        className="absolute left-[457px] top-[93px] z-45 pointer-events-none max-w-none"
        priority
        unoptimized
      />

      {/* Layer 3: 3D Student with Laptop */}
      <Image
        src="/images/cutouts/student-v2.png"
        alt="Student with laptop"
        width={620}
        height={640}
        className="absolute left-[64px] top-[48px] z-30 pointer-events-none max-w-none"
        priority
        unoptimized
      />

      {/* Layer 4: Learning Progress Card */}
      <LearningProgressCard className="absolute left-[345px] top-[218px] z-40" />
    </div>
  );
};
