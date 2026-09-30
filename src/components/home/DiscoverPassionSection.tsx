import React from "react";

export const DiscoverPassionSection = () => {
  return (
    <>
      <section className="w-full bg-white pt-[72px] pb-[77px] flex justify-center">
                <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
                  {/* Headline [11:65] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #040819, max-w: 588px */}
                  <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#040819] tracking-[-0.44px] mb-[16px] text-center max-w-[588px]">
                    Discover Your Passion, Build Your Skills
                  </h2>
      
                  {/* Subtitle [11:64] -> Satoshi 400, 18px / 28.8px, #82868E, max-w: 917px */}
                  <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#82868E] max-w-[1020px] text-center font-normal mb-[42px] px-4 sm:px-0">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="hidden md:inline" /> fields, from technology to the arts, and make a difference in your career and life.
                  </p>
      
                  {/* 3 Rows of Category Filter Pills */}
                  <div className="flex flex-col items-center gap-[21px] w-full">
      
                    {/* Row 1 (Tab_Categories [21:33] -> w: 1086px, h: 43px, gap: 16px) */}
                    <div className="flex flex-wrap justify-center items-center gap-4">
                      <button
                        type="button"
                        className="h-[43px] px-4 bg-[#D4FB20] text-[#242528] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-all hover:bg-[#CBFC01] select-none cursor-pointer shrink-0"
                      >
                        Featured
                      </button>
                      {['Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'].map((cat, i) => (
                        <button
                          key={i}
                          type="button"
                          className="h-[43px] px-4 bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-colors select-none cursor-pointer shrink-0"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
      
                    {/* Row 2 (Frame 6 [21:56] -> w: 952px, h: 43px, gap: 16px) */}
                    <div className="flex flex-wrap justify-center items-center gap-4">
                      {['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'].map((cat, i) => (
                        <button
                          key={i}
                          type="button"
                          className="h-[43px] px-4 bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-colors select-none cursor-pointer shrink-0"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
      
                    {/* Row 3 (Frame 7 [21:63] -> w: 622px, h: 43px, gap: 16px) */}
                    <div className="flex flex-wrap justify-center items-center gap-4">
                      {['Productivity', 'Web Development', 'Data Science', 'Cooking'].map((cat, i) => (
                        <button
                          key={i}
                          type="button"
                          className="h-[43px] px-4 bg-[#F5F5F6] hover:bg-[#EAEBED] text-[#4B4C53] rounded-[24px] font-sans font-medium text-[16px] leading-[19.2px] transition-colors select-none cursor-pointer shrink-0"
                        >
                          {cat}
                        </button>
                      ))}
                      <button
                        type="button"
                        className="h-[43px] px-2 text-[#003BE2] hover:text-[#0028A3] font-sans font-medium text-[16px] leading-[19.2px] transition-colors flex items-center cursor-pointer select-none"
                      >
                        + More
                      </button>
                    </div>
      
                  </div>
      
                </div>
              </section>
    </>
  );
};
