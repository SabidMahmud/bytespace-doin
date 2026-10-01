import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";

export const CtaSection = () => {
  return (
    <>
      <section className="w-full bg-[#003be2] relative min-h-[488px] flex justify-center items-center overflow-hidden">
        {/* Tiled Grid Background overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/hero-grid.svg"
            alt=""
            fill
            className="w-full h-full object-cover select-none"
            unoptimized
          />
        </div>

        {/* Fixed 1440px container for absolute images to ensure perfect center pinning */}
        {/* z-30 ensures abstract shapes float ON TOP of the text, matching the Figma layer order */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-30">
          <div className="w-[1440px] min-w-[1440px] h-[488px] relative">
            <Image
              unoptimized
              src="/images/cutouts/cta_cone_1.png"
              alt=""
              width={190}
              height={189}
              className="absolute"
              style={{ left: "1079px", top: "0px" }}
            />
            <Image
              unoptimized
              src="/images/cutouts/cta_frame_1.png"
              alt=""
              width={334}
              height={332}
              className="absolute"
              style={{ left: "1108.25px", top: "288px" }}
            />
            <Image
              unoptimized
              src="/images/cutouts/cta_frame_2.png"
              alt=""
              width={389}
              height={387}
              className="absolute"
              style={{ left: "-120px", top: "-163px" }}
            />
            <Image
              unoptimized
              src="/images/cutouts/cta_frame_3.png"
              alt=""
              width={177}
              height={176}
              className="absolute"
              style={{ left: "177px", top: "4.5px" }}
            />
            <Image
              unoptimized
              src="/images/cutouts/cta_cone_2.png"
              alt=""
              width={190}
              height={189}
              className="absolute"
              style={{ left: "-49px", top: "224.5px" }}
            />
            <Image
              unoptimized
              src="/images/cutouts/cta_cone_3.png"
              alt=""
              width={346}
              height={344}
              className="absolute"
              style={{ left: "18px", top: "298px" }}
            />
            <Image
              unoptimized
              src="/images/cutouts/cta_cone_4.png"
              alt=""
              width={374}
              height={372}
              className="absolute"
              style={{ left: "1224px", top: "5px" }}
            />
          </div>
        </div>

        {/* Content Container (z-10 so it sits behind the floating shapes but above the grid) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[964px] w-full px-4 py-16 md:py-0">
          <h2 className="font-heading font-semibold text-[32px] md:text-[44px] leading-[1.2] text-[#F5F5F6] max-w-[710px] mb-[40px]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#F5F5F6] mb-[40px] max-w-[964px]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button
            href="/register"
            variant="lime"
            className="rounded-[24px] px-6 py-3 text-[18px] hover:opacity-90"
          >
            Join as Creator
          </Button>
        </div>
      </section>
    </>
  );
};
