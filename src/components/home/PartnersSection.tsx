import React from "react";
import Image from "next/image";

export const PartnersSection = () => {
  return (
    <>
      <section className="w-full bg-shuttle-gray-50 py-[80px] flex items-center justify-center">
                <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-[121px] flex items-center justify-center">
                  <div className="w-full flex flex-wrap items-center justify-center gap-[72px] opacity-100">
                    <Image src="/partner-1.svg" alt="Partner 1" width={167} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
                    <Image src="/partner-2.svg" alt="Partner 2" width={168} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
                    <Image src="/partner-3.svg" alt="Partner 3" width={170} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
                    <Image src="/partner-4.svg" alt="Partner 4" width={170} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
                    <Image src="/partner-5.svg" alt="Partner 5" width={169} height={42} className="h-[42px] w-auto object-contain shrink-0" unoptimized />
                  </div>
                </div>
              </section>
    </>
  );
};
