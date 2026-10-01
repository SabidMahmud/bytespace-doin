"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { FOOTER_SECTIONS, FOOTER_LEGAL_LINKS } from "@/data";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-shuttle-gray-200 flex justify-center pt-12 pb-8 sm:pt-[71px] sm:pb-[47px]">
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

            <p className="font-sans text-sm leading-[1.6] text-shuttle-gray-950 mb-6 sm:mb-8 max-w-md">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="flex flex-col gap-3 sm:gap-3.5">
              <form 
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full sm:w-[376px] h-12 sm:h-[52px] px-5 sm:px-6 border border-shuttle-gray-200 rounded-full font-sans text-[15px] sm:text-base text-shuttle-gray-950 outline-none placeholder-shuttle-gray-400 focus:border-persian-blue-800 transition-colors"
                />
                <Button
                  type="submit"
                  variant="lime"
                  size="md"
                  className="w-full sm:w-[130px] text-base sm:text-lg shrink-0"
                >
                  Subscribe
                </Button>
              </form>
              <p className="font-sans text-[11px] sm:text-xs leading-[1.6] text-shuttle-gray-700 max-w-md">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 w-full lg:w-auto">
            {FOOTER_SECTIONS.map((section, idx) => (
              <div
                key={section.id}
                className={`flex flex-col min-w-[130px] ${
                  idx === 1
                    ? "pt-0 sm:pt-11 lg:pt-12"
                    : idx === 2
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                {section.title && (
                  <h4 className="font-sans font-medium text-base leading-[1.5] text-shuttle-gray-950 mb-4 sm:mb-6">
                    {section.title}
                  </h4>
                )}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {section.links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="font-sans text-sm text-shuttle-gray-700 hover:text-persian-blue-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="w-full h-px bg-shuttle-gray-200 mt-10 sm:mt-16 lg:mt-[130px] mb-6 sm:mb-[23px]"></div>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full text-center sm:text-left">
          <p className="font-sans text-xs text-shuttle-gray-400">
            &copy; 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-5 sm:gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="font-sans text-xs text-shuttle-gray-700 hover:text-persian-blue-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
