import React from "react";
import { Button } from "@/components/Button";

export const DiscoverPassionSection = () => {
  return (
    <>
      <section className="w-full bg-white pt-[72px] pb-[77px] flex justify-center">
        <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          {/* Headline [11:65] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, text-navy-950, max-w: 588px */}
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52.8px] text-navy-950 tracking-[-0.44px] mb-[16px] text-center max-w-[588px]">
            Discover Your Passion, Build Your Skills
          </h2>

          {/* Subtitle [11:64] -> Satoshi 400, 18px / 28.8px, text-shuttle-gray-400, max-w: 917px */}
          <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-shuttle-gray-400 max-w-[1020px] text-center font-normal mb-[42px] px-4 sm:px-0">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="hidden md:inline" /> fields, from technology to the arts, and make a difference in your career and life.
          </p>

          {/* 3 Rows of Category Filter Pills */}
          <div className="flex flex-col items-center gap-[21px] w-full">

            {/* Row 1 (Tab_Categories [21:33] -> w: 1086px, h: 43px, gap: 16px) */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Button
                type="button"
                variant="lime"
                size="pill"
                className="shrink-0"
              >
                Featured
              </Button>
              {['Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'].map((cat, i) => (
                <Button
                  key={i}
                  type="button"
                  variant="muted"
                  size="pill"
                  className="shrink-0"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Row 2 (Frame 6 [21:56] -> w: 952px, h: 43px, gap: 16px) */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'].map((cat, i) => (
                <Button
                  key={i}
                  type="button"
                  variant="muted"
                  size="pill"
                  className="shrink-0"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Row 3 (Frame 7 [21:63] -> w: 622px, h: 43px, gap: 16px) */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {['Productivity', 'Web Development', 'Data Science', 'Cooking'].map((cat, i) => (
                <Button
                  key={i}
                  type="button"
                  variant="muted"
                  size="pill"
                  className="shrink-0"
                >
                  {cat}
                </Button>
              ))}
              <Button
                type="button"
                variant="ghost"
                className="h-[43px] px-2 text-[16px] leading-[19.2px] shrink-0"
              >
                + More
              </Button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};
