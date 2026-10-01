"use client";

import React from "react";
import { usePathname } from "next/navigation";

export const AuthSidebarContent: React.FC = () => {
  const pathname = usePathname();
  const isLogin = pathname?.includes("/login");

  return (
    <div className="flex flex-col gap-4 text-center xl:text-left max-w-[475px] mx-auto xl:mx-0">
      <span className="font-heading font-semibold text-[24px] xl:text-[20px] leading-[1.2] text-shuttle-gray-50 tracking-[-0.2px]">
        {isLogin ? "Sign in to ByteSpace" : "Sign up and come in"}
      </span>
      <p className="font-sans font-normal text-[16px] xl:text-[18px] leading-[1.6] text-shuttle-gray-50">
        {isLogin
          ? "Welcome back! Enter your credentials to access your courses, track your learning progress, and continue growing."
          : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"}
      </p>
    </div>
  );
};
