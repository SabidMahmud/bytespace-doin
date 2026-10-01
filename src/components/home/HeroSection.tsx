import React from "react";
import Image from "next/image";
import {
  HappyStudentsCard,
  LearningProgressCard,
  CourseStatsBadge,
} from "@/components/cards";
import { HeroSearchBar } from "./HeroSearchBar";

export const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-persian-blue-800 w-full flex flex-col xl:justify-center min-h-[100vh] xl:min-h-[1024px] xl:h-[1024px]">
        {/* Exact 2px Stroke Grid Background from Figma [Group 4: 12:224] - Full Screen Width */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/hero-grid.svg"
            alt=""
            fill
            className="w-full h-full object-cover select-none"
            priority
          />
        </div>

        {/* ── 3D Decorative Shapes (Pinned to Viewport Edges) ── */}

        {/* 1. Top-Left Lime Coil */}
        <div
          className="absolute -left-[56px] top-[283px] w-[256px] h-[272px] z-30 pointer-events-none hidden xl:block"
          aria-hidden="true"
        >
          <Image
            src="/shape-lime-blob.png"
            alt=""
            fill
            sizes="256px"
            className="object-contain"
            priority
          />
        </div>

        {/* 4. Top-Right Lime Cylinder */}
        <div
          className="absolute right-[-3px] top-[256px] w-[164px] h-[298px] z-30 pointer-events-none hidden xl:block"
          aria-hidden="true"
        >
          <Image
            src="/shape-lime-cylinder.png"
            alt=""
            fill
            sizes="164px"
            className="object-contain"
            priority
          />
        </div>

        {/* ── Desktop Version (Exact 1440x1024 Figma Artboard Stage) ── */}
        <div className="hidden xl:block relative w-[1440px] h-[1024px] shrink-0 opacity-100 mx-auto">
          {/* ── Giant Lime Circle [1:1866] -> x: 145, y: 582, w: 1149, h: 1149, stroke: 320px inside ── */}
          <div
            className="absolute left-[145px] top-[582px] w-[1149px] h-[1149px] rounded-full border-[320px] border-electric-lime-400 bg-transparent z-0 pointer-events-none box-border"
            aria-hidden="true"
          />

          {/* ── 3D Decorative Shapes (Pinned to Content) ── */}

          {/* 2. Mid-Left White Coil */}
          <div
            className="absolute left-[215px] top-[506px] w-[114px] h-[121px] z-30 pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <Image
              src="/shape-white-coil-left.png"
              alt=""
              fill
              sizes="114px"
              className="object-contain"
              priority
            />
          </div>

          {/* 3. Bottom-Left White Donut/Ring */}
          <div
            className="absolute left-[70px] top-[741px] w-[236px] h-[216px] z-30 pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <Image
              src="/shape-white-ring.png"
              alt=""
              fill
              sizes="236px"
              className="object-contain"
              priority
            />
          </div>

          {/* 5. Mid-Right White Pyramid */}
          <div
            className="absolute right-[183px] top-[486px] w-[124px] h-[136px] z-30 pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <Image
              src="/shape-white-pyramid.png"
              alt=""
              fill
              sizes="124px"
              className="object-contain"
              priority
            />
          </div>

          {/* 6. Bottom-Right White Coil */}
          <div
            className="absolute right-[52px] top-[710px] w-[189px] h-[249px] z-30 pointer-events-none hidden lg:block"
            aria-hidden="true"
          >
            <Image
              src="/shape-white-coil-right.png"
              alt=""
              fill
              sizes="189px"
              className="object-contain"
              priority
            />
          </div>

          {/* ── Main Typography & Search [Hero 1:1769] ── */}

          {/* Headline [1:1770] -> x: 252, y: 169, w: 935, h: 172 (Heading L: Poppins SemiBold 72px / 86.4px, -0.72px) */}
          <div className="absolute left-[252px] top-[169px] w-[935px] text-center z-10 pointer-events-none">
            <h1 className="font-heading font-semibold text-[72px] leading-[86.4px] text-white tracking-[-0.72px]">
              Get Access to Hundreds<br />Courses Available
            </h1>
          </div>

          {/* Subtitle [1:1771] -> x: 310, y: 373, w: 819, h: 29 (Body L: Satoshi Regular 18px / 28.8px) */}
          <div className="absolute left-[310px] top-[373px] w-[819px] text-center z-10 pointer-events-none">
            <p className="font-sans text-[18px] leading-[28.8px] text-shuttle-gray-100 font-normal whitespace-nowrap">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>

          {/* Search Bar [1:1772] -> x: 430, y: 462, w: 581, h: 52 */}
          <HeroSearchBar className="absolute left-[430px] top-[462px] w-[581px] h-[52px] z-20" />

          {/* ── Student with Laptop [1:1796] -> x: 431, y: 512, w: 578, h: 541 ── */}
          <div className="absolute left-[431px] top-[512px] w-[578px] h-[541px] z-10 pointer-events-none">
            <Image
              src="/images/cutouts/hero-student.png"
              alt="Student with laptop"
              fill
              sizes="578px"
              className="w-full h-full object-contain select-none"
              priority
            />
          </div>

          {/* ── 3 Floating Glassmorphic Cards (Exact Figma Positions & Z-Index) ── */}

          {/* Card 1: UI/UX Design [46:126] -> x: 404, y: 639, w: 208, h: 70 */}
          <CourseStatsBadge className="absolute left-[404px] top-[639px] z-20" />

          {/* Card 2: Learning Progress [1:1797] -> x: 842, y: 651, w: 232, h: 131 */}
          <LearningProgressCard className="absolute left-[842px] top-[651px] z-20" />

          {/* Card 3: Happy Students [1:1821] -> x: 328, y: 837, w: 258, h: 121 */}
          <HappyStudentsCard
            variant="light"
            className="absolute left-[328px] top-[837px] z-20"
          />
        </div>

        {/* ── Mobile & Tablet Version (Flexbox Layout) ── */}
        <div className="xl:hidden relative w-full flex flex-col items-center pt-24 pb-16 px-4 md:px-8 z-10 flex-1">
          {/* Headline */}
          <div className="w-full max-w-3xl text-center mb-6">
            <h1 className="font-heading font-semibold text-[38px] sm:text-[48px] md:text-[56px] leading-[1.2] text-white tracking-[-0.72px]">
              Get Access to Hundreds<br />Courses Available
            </h1>
          </div>

          {/* Subtitle */}
          <div className="w-full max-w-2xl text-center mb-8">
            <p className="font-sans text-[15px] sm:text-[17px] leading-[1.6] text-shuttle-gray-100 font-normal">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>

          {/* Search Bar */}
          <HeroSearchBar className="w-full max-w-lg mb-10 flex-col sm:flex-row" />

          {/* Student Visual with Proportional Lime Arch & Clean Badges */}
          <div className="relative w-[300px] sm:w-[380px] aspect-[578/541] mt-4 flex items-center justify-center">
            {/* Exact Proportional Figma Lime Arch framing the student from behind */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-[16%] w-[310px] h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border-[48px] sm:border-[60px] border-electric-lime-400 bg-transparent pointer-events-none -z-0 box-border"
              aria-hidden="true"
            />

            {/* Student Image */}
            <Image
              src="/images/cutouts/hero-student.png"
              alt="Student with laptop"
              fill
              sizes="(max-width: 640px) 300px, 380px"
              className="w-full h-full object-contain select-none relative z-10"
              priority
            />

            {/* UI/UX Design Badge (Top-Left) */}
            <CourseStatsBadge
              size="sm"
              className="absolute -left-2 sm:-left-6 top-[18%] z-20"
            />

            {/* Learning Progress Badge (Bottom-Right) */}
            <div className="absolute -right-2 sm:-right-6 bottom-[10%] z-20 origin-bottom-right scale-[0.62] sm:scale-[0.8] pointer-events-none">
              <LearningProgressCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
