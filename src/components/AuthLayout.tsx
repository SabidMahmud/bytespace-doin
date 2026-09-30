import React from "react";
import Link from "next/link";
import Image from "next/image";

export const AuthLayout = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--color-shuttle-gray-50)]">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 bg-white">
        <div className="w-full max-w-md mx-auto">
          <Link href="/" className="inline-block mb-12">
            <Image 
              src="/logo.svg" 
              alt="ByteSpace Logo" 
              width={171} 
              height={37} 
              className="h-8 w-auto object-contain" 
            />
          </Link>

          <h2 className="font-heading font-semibold text-3xl text-[var(--color-black-950)] mb-2">{title}</h2>
          <p className="font-sans text-[var(--color-shuttle-gray-400)] mb-8">{subtitle}</p>

          {children}
        </div>
      </div>

      {/* Right side - Image/Decoration */}
      <div className="hidden md:flex w-full md:w-1/2 bg-[var(--color-persian-blue-800)] p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-lg text-center text-white">
          <h3 className="font-heading font-semibold text-4xl mb-6">Join the Community</h3>
          <p className="font-sans text-lg text-white/80">
            Experience the collaboration of numerous creators and an expanding selection of courses.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-electric-lime-400)] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};
