import React from "react";
import Image from "next/image";
import { CourseCard } from "@/components/CourseCard";

export const FeaturesShowcaseSection = () => {
  return (
    <>
      <section className="w-full bg-[#FAFAFA] relative overflow-hidden flex justify-center py-[120px]">
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
                <div className="relative z-10 w-full max-w-[1440px] px-6 xl:pl-[121px] xl:pr-[61px] flex flex-col gap-[72px]">
      
                  {/* Block 1 (Frame 13 [34:1157] -> w: 1258px, h: 552px, gap: 63px) */}
                  <div className="w-full max-w-[1258px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[63px]">
      
                    {/* Left Text (Text [34:768] -> w: 574px, h: 404px) */}
                    <div className="w-full lg:w-[574px] shrink-0 text-left">
                      {/* Title [34:771] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #242528 */}
                      <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] tracking-[-0.44px] mb-[40px] max-w-[577px]">
                        Your Path to Professional<br />Growth Starts Here!
                      </h2>
      
                      {/* Subtitle [34:772] -> Satoshi 400, 18px / 28.8px, #4B4C53, max-w: 477px */}
                      <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#4B4C53] font-normal mb-[40px] max-w-[477px]">
                        Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                      </p>
      
                      {/* Stats Row (Auto Layout Horizontal [34:773] -> gap: 56px) */}
                      <div className="flex items-center gap-[56px]">
                        <div>
                          <p className="font-heading font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                            12K
                          </p>
                          <p className="font-sans text-[18px] leading-[28.8px] text-[#4B4C53] font-normal">
                            Students
                          </p>
                        </div>
                        <div>
                          <p className="font-heading font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                            70+
                          </p>
                          <p className="font-sans text-[18px] leading-[28.8px] text-[#4B4C53] font-normal">
                            Courses
                          </p>
                        </div>
                        <div>
                          <p className="font-heading font-medium text-[36px] leading-[44px] tracking-[-0.36px] text-[#003BE2]">
                            16
                          </p>
                          <p className="font-sans text-[18px] leading-[28.8px] text-[#4B4C53] font-normal">
                            Creators
                          </p>
                        </div>
                      </div>
                    </div>
      
                    {/* Right Feature Visual (Frame 11 [34:1155] -> w: 621px, h: 552px) */}
                    <div className="w-full lg:w-[621px] flex justify-center shrink-0 overflow-visible">
                      <div className="relative w-[621px] h-[552px] shrink-0 transform scale-[0.52] sm:scale-75 md:scale-90 lg:scale-100 origin-top -mb-[260px] sm:-mb-[130px] md:-mb-[55px] lg:mb-0">
                        {/* Layer 1: Course Card 1 [34:1055] */}
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
      
                        {/* Layer 2: 3D Lime Coil [34:981] */}
                        <div className="absolute left-[406px] top-[67px] w-[215px] h-[215px] z-60 pointer-events-none">
                          <Image
                            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/784440af-fe60-4c79-b540-bad66b296e50"
                            alt="Electric lime coil"
                            width={215}
                            height={215}
                            className="w-full h-full object-contain"
                            unoptimized
                          />
                        </div>
      
                        {/* Layer 3: 3D Student with Laptop [34:971] */}
                        <div className="absolute left-0 top-[12px] w-[577px] h-[540px] z-30 pointer-events-none">
                          <Image
                            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72c4485e-0db4-41d9-94ba-5bd0652290fc"
                            alt="Student with laptop"
                            width={673}
                            height={642}
                            className="absolute -left-[76px] -top-[35px] max-w-none"
                            priority
                            unoptimized
                          />
                        </div>
      
                        {/* Layer 4: Learning Progress Card [34:1031] */}
                        <div className="absolute left-[345px] top-[213px] w-[232px] h-[138px] z-40 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between border border-white/80">
                          <p className="font-sans font-medium text-[16px] leading-6 text-[#242528]">Learning Progress</p>
                          <p className="font-heading font-semibold text-[48px] leading-[57.6px] tracking-tight text-[#242528]">55%</p>
                          <div className="w-[200px] h-2 bg-[#F5F5F6] rounded-full overflow-hidden">
                            <div className="w-[112px] h-full bg-[#D4FB20] rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
      
                  </div>
      
                  {/* Block 2 (Frame 14 [34:1158] -> w: 1200px, h: 596px, gap: 79px) */}
                  <div className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-[79px]">
      
                    {/* Left Dashboard Visual (Frame 12 [34:1156] -> w: 541px, h: 596px) */}
                    <div className="w-full lg:w-[541px] flex justify-center shrink-0 overflow-visible">
                      <div className="relative w-[541px] h-[596px] shrink-0 transform scale-[0.56] sm:scale-75 md:scale-90 lg:scale-100 origin-top -mb-[260px] sm:-mb-[140px] md:-mb-[60px] lg:mb-0">
                        {/* Layer 1: Total Revenue Card [34:987] */}
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
      
                        {/* Layer 1: Year to Date Card [34:998] */}
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
      
                        {/* Layer 2: 3D Lime Coil [34:1006] */}
                        <div className="absolute left-[305px] top-[114px] w-[215px] h-[215px] z-50 pointer-events-none">
                          <Image
                            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7a34751-401c-4dda-a343-542834509895"
                            alt="Electric lime coil"
                            width={215}
                            height={215}
                            className="w-full h-full object-contain"
                            priority
                            unoptimized
                          />
                        </div>
      
                        {/* Layer 3: 3D Female Instructor with Tablet [34:1011] */}
                        <div className="absolute left-[28px] top-0 w-[435px] h-[596px] z-30 pointer-events-none">
                          <Image
                            src="/images/cutouts/instructor-female.png"
                            alt="Instructor with tablet"
                            width={507}
                            height={629}
                            className="absolute -left-[45px] -top-[31px] max-w-none"
                            unoptimized
                            priority
                          />
                        </div>
      
                        {/* Layer 4: Happy Students Card [34:1038] */}
                        <div className="absolute left-[283px] top-[413px] w-[258px] h-[123px] z-30 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between border border-white/80">
                          <div>
                            <p className="font-sans font-medium text-[16px] leading-[19.2px] text-[#242528] mb-1">Happy Students</p>
                            <div className="flex items-center gap-1.5 mb-2">
                              <span className="font-sans text-[10px] text-[#242528] font-normal">4.5 (240)</span>
                              <span className="text-[#D4FB20] text-sm">★</span>
                            </div>
                          </div>
                          <div className="flex items-center -space-x-4">
                            {[
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22e03c4a-2b06-457e-a859-3ca9a95c513e",
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9835594f-25d2-450e-8f98-417543c662b5",
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4915496f-047a-474f-9ce4-2200a099135e",
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5583e32-ab2a-4730-a1f7-adfe25065c20",
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3e65acd-f6ed-4f37-9743-ea3975a4d92a",
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c44f8ff-a0ac-4092-8e3d-2d65e0b67e6d",
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5496d55-478a-4736-bc16-e4652263d210",
                            ].map((avatarUrl, i) => (
                              <Image key={i} src={avatarUrl} alt="" width={43} height={43} className="w-[43px] h-[43px] rounded-full border-0 border-white object-cover" unoptimized />
                            ))}
                            <div className="w-[43px] h-[43px] rounded-full bg-[#D4FB20] border-0 border-white flex items-center justify-center text-[12px] font-bold text-[#242528] z-10 shrink-0">
                              2K+
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
      
                    {/* Right Text (Text [34:897] -> w: 580px, h: 388px) */}
                    <div className="w-full lg:w-[580px] shrink-0 text-left">
                      {/* Title [34:900] -> Poppins 600, 44px / 52.8px, -0.44px letter spacing, #242528 */}
                      <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] tracking-[-0.44px] mb-[40px] max-w-[391px]">
                        Create &amp; Manage<br />Courses Easily.
                      </h2>
      
                      {/* Subtitle [34:901] -> Satoshi 400, 18px / 28px, #4B4C53, max-w: 574px */}
                      <p className="font-sans text-[16px] sm:text-[18px] sm:leading-[28.8px] text-[#4B4C53] font-normal mb-[40px] max-w-[574px]">
                        ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
                      </p>
      
                      {/* Checklist (Auto Layout Vertical [34:902] -> gap: 16px) */}
                      <div className="flex flex-col gap-4">
                        {[
                          "Share Your Expertise",
                          "Monetize Your Passion",
                          "Flexibility and Autonomy",
                          "Build a Community",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#003BE2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <span className="font-sans font-medium text-[18px] leading-[21.6px] text-[#242528]">
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
