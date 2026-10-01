import React from "react";
import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";

export const RegisterVisualGraphics: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const cardAvatars = [
    "/images/register/avatar_card_1.png",
    "/images/register/avatar_card_2.png",
    "/images/register/avatar_card_3.png",
    "/images/register/avatar_card_4.png",
  ];

  return (
    <div
      className={`relative w-[548px] h-[585px] pointer-events-none select-none shrink-0 ${className}`}
    >
      {/* ── Layer 1 (z-10): Bottom Course Card ("Build Digital Asset") ── */}
      <div className="absolute left-[25px] top-[89px] z-10 pointer-events-auto">
        <CourseCard
          title="Build Digital Asset"
          author="by purepearl studio"
          level="Beginner"
          image="/images/register/course_digital_asset.png"
          price="$25"
          period="/lifetime"
          rating="4.5"
          badges={["17 Lessons", "2 hours 16 mins", "59 Comments"]}
          avatars={cardAvatars}
          count="26+"
          countBadgeVariant="dark"
          priceColor="text-[#300B6A]"
        />
      </div>

      {/* ── Layer 2 (z-20): Top Course Card ("the Power of Big Data") ── */}
      <div className="absolute left-[136px] top-[0px] z-20 pointer-events-auto">
        <CourseCard
          title="the Power of Big Data"
          author="by purepearl studio"
          level="Beginner"
          image="/images/register/course_big_data.png"
          price="$25"
          period="/lifetime"
          rating="4.5"
          badges={["17 Lessons", "2 hours 16 mins", "59 Comments"]}
          avatars={cardAvatars}
          count="26+"
          countBadgeVariant="dark"
          priceColor="text-[#300B6A]"
        />
      </div>

      {/* ── Layer 3 (z-30): Happy Students Floating Badge ── */}
      <HappyStudentsCard
        variant="accent"
        className="absolute left-[251px] top-[435px] z-30 pointer-events-auto"
      />

      {/* ── Layer 4 (z-35): 3D Sphere Shape ── */}
      <div className="absolute left-[373px] top-[321px] w-[175px] h-[175px] z-35 pointer-events-none scale-x-[-1]">
        <Image
          src="/images/register/sphere.png"
          alt=""
          width={175}
          height={175}
          className="w-full h-full object-contain drop-shadow-xl"
          unoptimized
        />
      </div>

      {/* ── Layer 5 (z-40): Top Cone Shape ── */}
      <div className="absolute left-[54px] top-[15px] w-[146px] h-[146px] z-40 pointer-events-none">
        <Image
          src="/images/register/cone_top.png"
          alt=""
          width={146}
          height={146}
          className="w-full h-full object-contain drop-shadow-lg"
          unoptimized
        />
      </div>

      {/* ── Layer 6 (z-45): Bottom Cone Shape ── */}
      <div className="absolute left-[0px] top-[397px] w-[188px] h-[188px] z-45 pointer-events-none">
        <Image
          src="/images/register/cone_bottom.png"
          alt=""
          width={188}
          height={188}
          className="w-full h-full object-contain drop-shadow-xl"
          unoptimized
        />
      </div>
    </div>
  );
};
