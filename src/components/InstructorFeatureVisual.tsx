import React from "react";
import Image from "next/image";

export const InstructorFeatureVisual = () => {
  return (
    <div className="relative w-[541px] h-[596px] shrink-0 transform scale-[0.56] sm:scale-75 md:scale-90 lg:scale-100 origin-top">
      {/* Layer 1: Total Revenue Card */}
      <div className="absolute left-0 top-[44px] w-[232px] h-[119px] z-20 bg-[#003BE2] rounded-2xl shadow-lg p-4 flex flex-col justify-between text-white">
        <div>
          <p className="font-sans font-medium text-[16px] leading-[19.2px]">Total Revenue</p>
          <p className="font-sans text-[10px] text-white/80">July 1-28</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-heading font-semibold text-[24px] leading-8 text-white">$120.29</span>
          <span className="bg-[#D4FB20] text-[#242528] font-sans font-medium text-[10px] px-2 py-0.5 rounded-full">+12$</span>
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="w-[112px] h-full bg-[#D4FB20] rounded-full" />
        </div>
      </div>

      {/* Layer 1: Year to Date Card */}
      <div className="absolute left-0 top-[194px] w-[134px] h-[135px] z-20 bg-[#003BE2] rounded-2xl shadow-lg p-4 flex flex-col justify-between text-white">
        <div>
          <p className="font-sans font-medium text-[16px] leading-[19.2px]">Year to Date</p>
          <p className="font-sans text-[10px] text-white/80">2023</p>
        </div>
        <span className="font-heading font-semibold text-[24px] leading-8 text-white">$1,200.38</span>
        <div>
          <span className="inline-block bg-[#D4FB20] text-[#242528] font-sans font-medium text-[10px] px-2 py-0.5 rounded-full">+12$</span>
        </div>
      </div>

      {/* Layer 2: 3D Lime Coil */}
      <div className="absolute left-[305px] top-[114px] w-[215px] h-[215px] z-25 pointer-events-none">
        <Image
          src="/shape-lime-blob.png"
          alt="Electric lime coil"
          width={215}
          height={215}
          className="w-full h-full object-contain"
          priority
          unoptimized
        />
      </div>

      {/* Layer 3: 3D Female Instructor with Tablet */}
      <div className="absolute left-[28px] top-0 w-[435px] h-[596px] z-30 pointer-events-none">
        <Image
          src="/images/cutouts/instructor-female.png"
          alt="Instructor with tablet"
          width={435}
          height={596}
          className="w-full h-full object-contain object-top"
          priority
          unoptimized
        />
      </div>

      {/* Layer 4: Happy Students Card */}
      <div className="absolute left-[283px] top-[413px] w-[258px] h-[123px] z-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between border border-white/80">
        <div>
          <p className="font-sans font-medium text-[16px] leading-[19.2px] text-[#242528] mb-1">Happy Students</p>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="font-sans text-[10px] text-[#242528] font-normal">4.5 (240)</span>
            <span className="text-[#D4FB20] text-sm">★</span>
          </div>
        </div>
        <div className="flex items-center -space-x-4">
          {[
            "/images/course/avatar1.png",
            "/images/course/avatar2.png",
            "/images/course/avatar3.png",
            "/images/course/avatar4.png",
            "/images/course/avatar1.png",
            "/images/course/avatar2.png",
            "/images/course/avatar3.png",
          ].map((avatarUrl, i) => (
            <Image key={i} src={avatarUrl} alt="" width={43} height={43} className="w-[43px] h-[43px] rounded-full border-0 border-white object-cover" unoptimized />
          ))}
          <div className="w-[43px] h-[43px] rounded-full bg-[#D4FB20] border-0 border-white flex items-center justify-center text-[12px] font-bold text-[#242528] z-10 shrink-0">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
};
