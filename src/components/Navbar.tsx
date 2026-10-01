"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV_LINKS, AUTH_NAV_LINKS } from "@/data";

export const Navbar = () => {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-[100] flex justify-center pointer-events-auto">
      <div className="w-full max-w-[1440px] px-6 xl:px-[120px]">
        {/* Increased mobile height to ensure it clears the notch/status bar */}
        <div className="flex justify-between items-center h-20 lg:h-[120px] relative">
          {/* Logo */}
          <div className="flex items-center z-50">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="ByteSpace Logo"
                width={171}
                height={37}
                className="h-7 w-auto lg:h-[37px] object-contain"
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Center Nav - Desktop Only */}
          <nav className="hidden lg:flex items-start gap-6 absolute left-1/2 transform -translate-x-1/2 top-[47px]">
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-shuttle-gray-50 hover:text-electric-lime-400 font-sans font-medium text-base leading-[19.2px] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Nav - Desktop Only */}
          <div className="hidden lg:flex items-center gap-6 z-50">
            {AUTH_NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-shuttle-gray-50 hover:text-electric-lime-400 font-sans font-normal text-base leading-[24px] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="text-shuttle-gray-50 hover:text-electric-lime-400 transition-colors flex items-center justify-center w-6 h-6"
              aria-label="Shopping Bag"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
              </svg>
            </button>
          </div>

          {/* Pure CSS Mobile Hamburger (No JS Required) */}
          <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
          <label
            htmlFor="mobile-menu-toggle"
            className="lg:hidden text-shuttle-gray-50 p-4 -mr-2 z-[99999] relative cursor-pointer pointer-events-auto touch-manipulation transition-colors select-none"
            aria-label="Toggle Mobile Menu"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8 peer-checked:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close Icon (Visible when checked) */}
            <svg
              className="w-8 h-8 hidden peer-checked:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>

          {/* Full Screen Slide-down Menu Drawer */}
          <div className="fixed inset-0 bg-persian-blue-800 z-[9999] flex flex-col items-center justify-center gap-8 text-center opacity-0 pointer-events-none transition-all duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto">
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-shuttle-gray-50 hover:text-electric-lime-400 font-sans font-medium text-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="w-[100px] h-px bg-white/20 my-2"></div>

            {AUTH_NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`font-sans text-xl transition-colors ${
                  link.isPrimary
                    ? "text-electric-lime-400 hover:text-electric-lime-500 font-medium"
                    : "text-shuttle-gray-50 hover:text-electric-lime-400 font-normal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
