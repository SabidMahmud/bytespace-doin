import React from "react";
import Image from "next/image";
import { RegisterHeader } from "@/components/authentication/AuthHeader";
import { RegisterVisualGraphics } from "@/components/authentication/AuthVisualGraphics";
import { AuthSidebarContent } from "@/components/authentication/AuthSidebarContent";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full min-h-screen bg-persian-blue-800 overflow-x-hidden flex flex-col items-center">
      {/* ── Exact 2px Stroke Grid Background ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
        <Image
          src="/hero-grid.svg"
          alt="Background Grid"
          fill
          className="w-full h-full object-cover opacity-100"
          priority
          unoptimized
        />
      </div>

      {/* ── Main Responsive Container ── */}
      <div className="relative w-full max-w-[1440px] px-4 sm:px-8 xl:px-[122px] py-8 xl:py-[120px] flex flex-col z-10 min-h-screen">
        {/* Header - Fixed to top left on desktop */}
        <div className="w-full mb-8 xl:mb-0 xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-[120px] xl:px-[122px] flex items-center justify-center xl:justify-start">
          <RegisterHeader />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between w-full flex-1 gap-12 xl:gap-[0px] mt-0">
          {/* Left Column (Text & Graphics) */}
          <div className="flex flex-col gap-10 xl:gap-[58px] w-full max-w-[548px]">
            <AuthSidebarContent />

            {/* Visual Graphics Section */}
            <div className="relative w-full flex justify-center xl:justify-start xl:-ml-[25px] overflow-hidden xl:overflow-visible">
              <div className="scale-[0.75] sm:scale-[0.9] xl:scale-100 origin-top xl:origin-top-left w-[548px] h-[585px] shrink-0">
                <RegisterVisualGraphics />
              </div>
            </div>
          </div>

          {/* Right Column (Form Slot) */}
          <div className="w-full flex justify-center xl:justify-end shrink-0 xl:w-[579px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
