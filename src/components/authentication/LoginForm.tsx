"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full max-w-[579px] h-full min-h-[620px] sm:min-h-[700px] xl:w-[579px] xl:h-[784px] bg-white rounded-[24px] pt-[36px] px-[20px] pb-[28px] sm:pt-[61px] sm:px-[63px] sm:pb-[51px] flex flex-col justify-between shadow-2xl shrink-0">
      {/* ── Top Section (Header + Form) ── */}
      <div className="flex flex-col gap-[28px] sm:gap-[40px]">
        {/* Header Texts */}
        <div className="flex flex-col">
          <span className="font-sans font-normal text-[16px] sm:text-[18px] leading-[28.8px] text-persian-blue-800">
            Welcome Back
          </span>
          <h1 className="font-heading font-semibold text-[28px] min-[380px]:text-[34px] sm:text-[44px] leading-[1.15] sm:leading-[1.2] tracking-[-0.44px] text-shuttle-gray-950 mt-1">
            Sign in to ByteSpace
          </h1>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-sans font-medium text-[14px] leading-[16.8px] text-shuttle-gray-950"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="designer@example.com"
              className="w-full h-[52px] px-[24px] py-[12px] bg-white border border-shuttle-gray-100 rounded-[12px] font-sans font-normal text-[18px] leading-[28.8px] text-shuttle-gray-950 placeholder-shuttle-gray-400 focus:outline-none focus:border-persian-blue-800 focus:ring-2 focus:ring-persian-blue-800/20 transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="font-sans font-medium text-[14px] leading-[16.8px] text-shuttle-gray-950"
              >
                Password
              </label>
              <Link
                href="#"
                className="font-sans text-[14px] text-persian-blue-800 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full h-[52px] px-[24px] py-[12px] bg-white border border-shuttle-gray-100 rounded-[12px] font-sans font-normal text-[18px] leading-[28.8px] text-shuttle-gray-950 placeholder-shuttle-gray-400 focus:outline-none focus:border-persian-blue-800 focus:ring-2 focus:ring-persian-blue-800/20 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              variant="lime"
              size="auth"
              loading={isSubmitting}
              className="hover:shadow-md active:scale-95"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>

      {/* ── Bottom Section (Don't have an account? Sign up) ── */}
      <div className="flex items-center justify-center gap-1 font-sans text-[16px] leading-[25.6px] mt-6 sm:mt-0">
        <span className="text-shuttle-gray-700 font-normal">
          Don&apos;t have an account?
        </span>
        <Link
          href="/register"
          className="text-persian-blue-800 font-normal hover:underline ml-1"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};
