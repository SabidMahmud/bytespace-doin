import React from "react";
import Image from "next/image";
import { StudentFeatureVisual } from "@/components/home/StudentFeatureVisual";
import { InstructorFeatureVisual } from "@/components/home/InstructorFeatureVisual";

export const FeaturesShowcaseSection = () => {
  return (
    <>
      <section className="w-full bg-[#FAFAFA] relative overflow-hidden flex justify-center py-16 sm:py-20 lg:py-[120px]">
        {/* Subtle Radial Gradient Decorative Background (Ellipse 8, 9, 10, 11, 12) - Full Screen Width */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <Image
            src="/frame15-bg.svg"
            alt=""
            fill
            className="w-full h-full object-cover select-none"
            priority
            unoptimized
          />
        </div>

        {/* Content Container (Frame 16 [34:1160] -> w: 1258px, gap: 72px) */}
        <div className="relative z-10 w-full max-w-[1440px] px-4 sm:px-6 xl:pl-[121px] xl:pr-[61px] flex flex-col gap-14 sm:gap-20 lg:gap-[72px]">

          {/* Block 1 (Frame 13 [34:1157] -> w: 1258px, h: 552px, gap: 63px) */}
          <div className="w-full max-w-[1258px] flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-[63px]">

            {/* Left Text (Text [34:768] -> w: 574px, h: 404px) */}
            <div className="w-full lg:w-[574px] shrink-0 text-left">
              {/* Title [34:771] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #242528 */}
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] tracking-[-0.44px] mb-4 sm:mb-6 lg:mb-[40px] max-w-[577px]">
                Your Path to Professional<br className="hidden sm:inline" /> Growth Starts Here!
              </h2>

              {/* Subtitle [34:772] -> Satoshi 400, 18px / 28.8px, #4B4C53, max-w: 477px */}
              <p className="font-sans text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28.8px] text-[#4B4C53] font-normal mb-6 sm:mb-8 lg:mb-[40px] max-w-[477px]">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Stats Row (Auto Layout Horizontal [34:773] -> gap: 56px) */}
              <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-10 lg:gap-[56px] max-w-sm sm:max-w-none">
                <div>
                  <p className="font-heading font-medium text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                    12K
                  </p>
                  <p className="font-sans text-[14px] sm:text-[18px] leading-[22px] sm:leading-[28.8px] text-[#4B4C53] font-normal">
                    Students
                  </p>
                </div>
                <div>
                  <p className="font-heading font-medium text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                    70+
                  </p>
                  <p className="font-sans text-[14px] sm:text-[18px] leading-[22px] sm:leading-[28.8px] text-[#4B4C53] font-normal">
                    Courses
                  </p>
                </div>
                <div>
                  <p className="font-heading font-medium text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                    16
                  </p>
                  <p className="font-sans text-[14px] sm:text-[18px] leading-[22px] sm:leading-[28.8px] text-[#4B4C53] font-normal">
                    Creators
                  </p>
                </div>
              </div>
            </div>

            {/* Right Feature Visual (Frame 11 [34:1155] -> w: 621px, h: 552px) */}
            <div className="w-full lg:w-[621px] flex justify-center shrink-0 h-[290px] sm:h-[420px] md:h-[500px] lg:h-[552px]">
              <StudentFeatureVisual />
            </div>
          </div>

          {/* Block 2 (Frame 14 [34:1158] -> w: 1200px, h: 596px, gap: 79px) */}
          <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-[79px]">

            {/* Left Dashboard Visual (Frame 12 [34:1156] -> w: 541px, h: 596px) */}
            <div className="w-full lg:w-[541px] flex justify-center shrink-0 h-[340px] sm:h-[450px] md:h-[540px] lg:h-[596px]">
              <InstructorFeatureVisual />
            </div>

            {/* Right Text (Text [34:897] -> w: 580px, h: 388px) */}
            <div className="w-full lg:w-[580px] shrink-0 text-left">
              {/* Title [34:900] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #242528 */}
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] tracking-[-0.44px] mb-4 sm:mb-6 lg:mb-[40px] max-w-[391px]">
                Create &amp; Manage<br className="hidden sm:inline" /> Courses Easily.
              </h2>

              {/* Subtitle [34:901] -> Satoshi 400, 18px / 28px, #4B4C53, max-w: 574px */}
              <p className="font-sans text-[15px] sm:text-[18px] leading-[24px] sm:leading-[28.8px] text-[#4B4C53] font-normal mb-6 sm:mb-8 lg:mb-[40px] max-w-[574px]">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Checklist (Auto Layout Vertical [34:902] -> gap: 16px) */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#003BE2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="font-sans font-medium text-[16px] sm:text-[18px] leading-[21.6px] text-[#242528]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};
