import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#CECFD3] flex justify-center pt-[71px] pb-[47px]">
      <div className="w-full max-w-[1200px] px-4 flex flex-col">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          
          {/* Left Column */}
          <div className="flex flex-col w-full lg:max-w-[504px] mb-12 lg:mb-0">
            <div className="flex items-center gap-2 mb-6">
              {/* Using the new logo-dark.svg */}
              <Image 
                src="/logo-dark.svg" 
                alt="ByteSpace" 
                width={171} 
                height={37} 
                className="object-contain" 
              />
            </div>
            
            <p className="font-sans text-[14px] leading-[1.6] text-[#242528] mb-8">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full sm:w-[376px] h-[52px] px-6 border border-[#CECFD3] rounded-full font-sans text-[16px] text-[#242528] outline-none placeholder-[#242528]"
                />
                <button className="w-full sm:w-[104px] h-[46px] bg-[#D4FB20] text-[#242528] rounded-full font-sans font-medium text-[18px] flex items-center justify-center hover:opacity-90 transition-opacity shrink-0">
                  Search
                </button>
              </div>
              <p className="font-sans text-[12px] leading-[1.6] text-[#242528]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            
            {/* Column 1: Browse */}
            <div className="flex flex-col w-[167px]">
              <h4 className="font-sans text-[16px] leading-[1.5] text-[#242528] mb-6">Browse</h4>
              <div className="flex flex-col gap-4">
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Featured Courses</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Featured Categories</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Business</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">IT</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Design</Link>
              </div>
            </div>

            {/* Column 2: Empty Heading (aligns with items) */}
            <div className="flex flex-col w-[167px] pt-[48px]">
              <div className="flex flex-col gap-4">
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Development</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Marketing</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Photography</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Finance</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Sport</Link>
              </div>
            </div>

            {/* Column 3: Platform */}
            <div className="flex flex-col w-[167px]">
              <h4 className="font-sans text-[16px] leading-[1.5] text-[#242528] mb-6">Platform</h4>
              <div className="flex flex-col gap-4">
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Become a Creator</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Affiliate Program</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Contact</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">Help</Link>
                <Link href="#" className="font-sans text-[14px] text-[#242528] hover:opacity-70 transition-opacity">About</Link>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Line & Copyright */}
        <div className="w-full h-[1px] bg-[#CECFD3] mt-[130px] mb-[23px]"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full">
          <p className="font-sans text-[12px] text-[#242528]">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            <Link href="#" className="font-sans text-[12px] text-[#242528] hover:opacity-70 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="font-sans text-[12px] text-[#242528] hover:opacity-70 transition-opacity">Terms of Service</Link>
            <Link href="#" className="font-sans text-[12px] text-[#242528] hover:opacity-70 transition-opacity">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
