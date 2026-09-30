import React from "react";
import Image from "next/image";

export const LearningPathsSection = () => {
  return (
    <>
      <section className="w-full bg-white pb-[120px] flex justify-center">
                <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[119px] flex flex-col items-center">
      
                  {/* Header (Frame 9 [34:684] -> w: 917px, h: 117px, gap: 16px) */}
                  <div className="w-full max-w-[917px] text-center mb-[68px]">
                    <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[36px] lg:leading-[43.2px] text-[#040819] tracking-[-0.36px] mb-4">
                      Explore Diverse Learning Paths at Bytespace
                    </h2>
                    <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#82868E] font-normal max-w-[917px] mx-auto">
                      At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                  </div>
      
                  {/* 6 Category Cards Grid (Frame 10 [34:725] -> w: 1202px, h: 167px, gap: 40px) */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-[40px] justify-items-center w-full max-w-[1202px]">
                    {[
                      { name: "Design", icon: "/icons/category-design.svg" },
                      { name: "Development", icon: "/icons/category-development.svg" },
                      { name: "IT & Software", icon: "/icons/category-it-software.svg" },
                      { name: "Business", icon: "/icons/category-business.svg" },
                      { name: "Marketing", icon: "/icons/category-marketing.svg" },
                      { name: "Photography", icon: "/icons/category-photography.svg" },
                    ].map((cat, idx) => (
                      <div
                        key={idx}
                        className="w-[167px] h-[167px] bg-white rounded-[24px] border border-[#CED0D3] flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:border-[#003BE2] hover:shadow-md group cursor-pointer"
                      >
                        <div className="w-[60px] h-[60px] bg-[#D4FB20] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                          <Image
                            src={cat.icon}
                            alt={cat.name}
                            width={36}
                            height={36}
                            className="w-9 h-9 object-contain"
                          />
                        </div>
                        <span className="font-sans text-[20px] leading-[24px] text-[#242528] font-medium text-center px-2">
                          {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>
      
                </div>
              </section>
    </>
  );
};
