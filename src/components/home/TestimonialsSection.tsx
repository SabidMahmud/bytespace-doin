import React from "react";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <>
      <section className="w-full bg-[#FAFAFA] relative overflow-hidden flex justify-center py-16 md:pt-[74px] md:pb-[57px]">
                {/* Background Gradient Blobs (z-0) */}
                <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
                  <div className="w-[1440px] min-w-[1440px] h-full relative">
                    <div
                      className="absolute rounded-full blur-[40px]"
                      style={{
                        width: '1137px', height: '1137px',
                        left: '842px', top: '-241px',
                        opacity: 0.40,
                        background: 'radial-gradient(circle at center, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)'
                      }}
                    />
                    <div
                      className="absolute rounded-full blur-[40px]"
                      style={{
                        width: '672px', height: '672px',
                        left: '395px', top: '-138px',
                        opacity: 0.60,
                        background: 'radial-gradient(circle at center, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)'
                      }}
                    />
                    <div
                      className="absolute rounded-full blur-[40px]"
                      style={{
                        width: '1137px', height: '1137px',
                        left: '-442px', top: '149px',
                        opacity: 0.24,
                        background: 'radial-gradient(circle at center, rgba(0,59,226,1) 0%, rgba(0,59,226,0.23) 53%, rgba(0,59,226,0.06) 75%, rgba(0,59,226,0) 100%)'
                      }}
                    />
                  </div>
                </div>
      
                {/* Content (z-10) */}
                <div className="relative z-10 w-full max-w-[1204px] px-4 flex flex-col">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-[72px] gap-6 lg:gap-0">
                    <h2 className="font-heading font-semibold text-[32px] lg:text-[44px] leading-[1.2] tracking-[-0.44px] text-black w-full lg:max-w-[577px]">
                      Discover What Our Community Is Saying
                    </h2>
                    <p className="font-sans text-[16px] lg:text-[18px] text-[#4F4F4F] leading-[1.6] w-full lg:max-w-[580px]">
                      At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                    </p>
                  </div>
      
                  {/* Cards Grid */}
                  <div className="flex flex-col lg:flex-row items-start gap-[41px]">
      
                    {/* Card 1 */}
                    <div className="bg-white rounded-[24px] p-6 flex flex-col items-start w-full lg:w-[374px]">
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XLP3K4Ds3CGdyslVgKkb2B8~navyxP66UrJ~rVjho0xt6lqQIMVuoP6LkClOKs4WKspF8RiQ1uN0-udGucK6~3pn--K3Rvn81blsLKXnon1cTH5s~pGE~R5p-kZYd3hnuUdpxn6UHMq7439uKjchT~Qf0lIyVSa-Q3aBm1saq1HWqkeOXY3qOi-Jrscb0k0~cMzH~L1dHSC5rCqCx5bZsTWguzoWh33dC68CR5iThqtWvDXfyjrsVfZWd59s09wqVgnwKz6Rykn2YEfHhN3PIQeHmzVMUxTBffP36uRSh~P2GsCnP4r5eqBCqmpAo3ovUFwxG7xWIBnkraWKtPAI2w__"
                        width={80}
                        height={80}
                        alt="Sarah M."
                        className="rounded-full w-20 h-20 object-cover shrink-0"
                        unoptimized
                      />
                      <div className="mt-6 flex flex-col">
                        <h4 className="font-heading font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">Sarah M.</h4>
                        <p className="font-sans text-[18px] leading-[1.6] text-[#003BE2]">Enthusiastic Learner</p>
                      </div>
                      <p className="mt-6 font-sans text-[18px] leading-[1.6] text-[#4F4F4F]">
                        &quot;ByteSpacequot;ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.learning.&quot;quot;
                      </p>
                    </div>
      
                    {/* Card 2 */}
                    <div className="bg-white rounded-[24px] p-6 flex flex-col items-start w-full lg:w-[374px]">
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/63c4/be83/222c85e6c852819bc5d4b24a87a87fb6?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YCohi-xO~puGWuvtrqiiURHxIjNMB4-06-XgTShaAPVbcCloS89RrXkeepMzEltIyR2Y4mo3FWvoTYzN1AvtR6fs8YgVqGa7u51VNGy3XNDxdIh7c5WUxxxF~UVK9XURNViAUMl-uun2O3t-JO9gnNpRIc-qpJ4DWhlnnRisXErjDm5ytJR8Kc3bDz4TfZr09EU~bzcHkXIV3fiJAtokQ7Olbf8m9eQpOnktixaA3ZQk8jDYAYpIz3KtsnGrkHrwNSRriBccblu9oknFkxVt4kwpL~CDUTR5KE6oum4DY-1nKy6fy73U4vDGi1y6tcV3qB1mA-uF0FN3cweNaxguYA__"
                        width={80}
                        height={80}
                        alt="James L."
                        className="rounded-full w-20 h-20 object-cover shrink-0"
                        unoptimized
                      />
                      <div className="mt-6 flex flex-col">
                        <h4 className="font-heading font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">James L.</h4>
                        <p className="font-sans text-[18px] leading-[1.6] text-[#003BE2]">Lifelong Learner</p>
                      </div>
                      <p className="mt-6 font-sans text-[18px] leading-[1.6] text-[#4F4F4F]">
                        &quot;I&apos;vequot;I&apos;ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.development.&quot;quot;
                      </p>
                    </div>
      
                    {/* Card 3 */}
                    <div className="bg-white rounded-[24px] p-6 flex flex-col items-start w-full lg:w-[374px]">
                      <Image
                        src="https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c5Cc28Lxb7J4uLgcjPm5iogfKw4lSINQluiyHrgj2rvK7ucMLsoWVLXnWSQG-2ajrrVLk3sUKgNwJ49Blrt3YsZgm2tDOyoGiHPBuafEOF0KK~8dedaoIB0uHgs3KeLh34769LMGx1U49ctBU4GsN92FcfMIJwQHiMHu0qfeUCKIW40tzhzpTMLe1TNBLl-stmVYP6t7Bk0fLU4AzLQjf-5cw95GJoFE3jGKGNmNFLPA-d6MvI2zY-8cvgQkl4c0nKWFVzh1oOctftQNkncqsOCRiHfK0pvBhJsneCR25AtBTmAkPaaqnM0hAwo-1UjDEWcMOSIGNnUXYl0RR~eC4A__"
                        width={80}
                        height={80}
                        alt="Alex B."
                        className="rounded-full w-20 h-20 object-cover shrink-0"
                        unoptimized
                      />
                      <div className="mt-6 flex flex-col">
                        <h4 className="font-heading font-semibold text-[20px] leading-[1.2] tracking-[-0.2px] text-black">Alex B.</h4>
                        <p className="font-sans text-[18px] leading-[1.6] text-[#003BE2]">Inspired Creator</p>
                      </div>
                      <p className="mt-6 font-sans text-[18px] leading-[1.6] text-[#4F4F4F]">
                        &quot;As a creatorquot;As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It&apos;s fulfilling to see my courses making a positive impact on learners globally.globally.&quot;quot;
                      </p>
                    </div>
      
                  </div>
                </div>
              </section>
    </>
  );
};
