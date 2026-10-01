import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#CECFD3] flex justify-center pt-12 pb-8 sm:pt-[71px] sm:pb-[47px]">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 flex flex-col">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-10 lg:gap-0">
          
          {/* Left Column */}
          <div className="flex flex-col w-full lg:max-w-[504px]">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              {/* Using the new logo-dark.svg */}
              <Image 
                src="/logo-dark.svg" 
                alt="ByteSpace" 
                width={171} 
                height={37} 
                className="h-[30px] sm:h-[37px] w-auto object-contain" 
              />
            </div>
            
            <p className="font-sans text-[14px] leading-[1.6] text-[#242528] mb-6 sm:mb-8 max-w-md">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-[14px]">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full sm:w-[376px] h-[48px] sm:h-[52px] px-5 sm:px-6 border border-[#CECFD3] rounded-full font-sans text-[15px] sm:text-[16px] text-[#242528] outline-none placeholder-[#82868E] focus:border-[#003BE2] transition-colors"
                />
                <Button 
                  type="button"
                  variant="lime"
                  size="md"
                  className="w-full sm:w-[104px] text-[16px] sm:text-[18px] shrink-0"
                >
                  Search
                </Button>
              </div>
              <p className="font-sans text-[11px] sm:text-[12px] leading-[1.6] text-[#4B4C53] max-w-md">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 w-full lg:w-auto">
            
            {/* Column 1: Browse */}
            <div className="flex flex-col min-w-[130px]">
              <h4 className="font-sans font-medium text-[16px] leading-[1.5] text-[#242528] mb-4 sm:mb-6">Browse</h4>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Featured Courses</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Featured Categories</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Business</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">IT</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Design</Link>
              </div>
            </div>

            {/* Column 2: Empty Heading (aligns with items) */}
            <div className="flex flex-col min-w-[130px] pt-0 sm:pt-[44px] lg:pt-[48px]">
              <div className="flex flex-col gap-3 sm:gap-4">
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Development</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Marketing</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Photography</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Finance</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Sport</Link>
              </div>
            </div>

            {/* Column 3: Platform */}
            <div className="flex flex-col min-w-[130px] col-span-2 sm:col-span-1">
              <h4 className="font-sans font-medium text-[16px] leading-[1.5] text-[#242528] mb-4 sm:mb-6">Platform</h4>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Become a Creator</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Affiliate Program</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Contact</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Help</Link>
                <Link href="#" className="font-sans text-[14px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">About</Link>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Line & Copyright */}
        <div className="w-full h-[1px] bg-[#CECFD3] mt-10 sm:mt-16 lg:mt-[130px] mb-6 sm:mb-[23px]"></div>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full text-center sm:text-left">
          <p className="font-sans text-[12px] text-[#82868E]">
            &copy; 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-5 sm:gap-6">
            <Link href="#" className="font-sans text-[12px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-sans text-[12px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Terms of Service</Link>
            <Link href="#" className="font-sans text-[12px] text-[#4B4C53] hover:text-[#003BE2] transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
