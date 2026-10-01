"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { InputField } from "@/components/ui/InputField";

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating registration action
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
    <div className="w-full max-w-[579px] h-full min-h-[620px] sm:min-h-[700px] xl:w-[579px] xl:h-[784px] bg-white rounded-3xl pt-9 px-5 pb-7 sm:pt-[61px] sm:px-[63px] sm:pb-[51px] flex flex-col justify-between shadow-2xl shrink-0">
      {/* ── Top Section (Header + Form) ── */}
      <div className="flex flex-col gap-7 sm:gap-10">
        {/* Header Texts */}
        <div className="flex flex-col">
          <span className="font-sans font-normal text-base sm:text-lg leading-[28.8px] text-persian-blue-800">
            Create an Account
          </span>
          <h1 className="font-heading font-semibold text-[28px] min-[380px]:text-[34px] sm:text-[44px] leading-[1.15] sm:leading-[1.2] tracking-[-0.44px] text-shuttle-gray-950 mt-1">
            Welcome to ByteSpace
          </h1>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <InputField
            id="fullName"
            name="fullName"
            type="text"
            label="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jamie Davis"
          />

          <InputField
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="designer@example.com"
          />

          <InputField
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          {/* Continue Submit Button */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              variant="lime"
              size="auth"
              loading={isSubmitting}
              className="hover:shadow-md active:scale-95"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>

      {/* ── Bottom Section (Already have an account? Login) ── */}
      <div className="flex items-center justify-center gap-1 font-sans text-base leading-[25.6px] mt-6 sm:mt-0">
        <span className="text-shuttle-gray-700 font-normal">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="text-persian-blue-800 font-normal hover:underline ml-1"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};
