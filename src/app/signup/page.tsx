import React from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Signup() {
  return (
    <AuthLayout 
      title="Create an account" 
      subtitle="Start your learning journey with ByteSpace today."
    >
      <form className="space-y-6">
        <div>
          <label className="block font-sans text-sm font-medium text-[var(--color-shuttle-gray-900)] mb-2">
            Full Name
          </label>
          <input 
            type="text" 
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-shuttle-gray-200)] focus:ring-2 focus:ring-[var(--color-persian-blue-800)] focus:border-transparent outline-none transition-all text-sm font-sans"
          />
        </div>

        <div>
          <label className="block font-sans text-sm font-medium text-[var(--color-shuttle-gray-900)] mb-2">
            Email address
          </label>
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-shuttle-gray-200)] focus:ring-2 focus:ring-[var(--color-persian-blue-800)] focus:border-transparent outline-none transition-all text-sm font-sans"
          />
        </div>
        
        <div>
          <label className="block font-sans text-sm font-medium text-[var(--color-shuttle-gray-900)] mb-2">
            Password
          </label>
          <input 
            type="password" 
            placeholder="Create a strong password"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-shuttle-gray-200)] focus:ring-2 focus:ring-[var(--color-persian-blue-800)] focus:border-transparent outline-none transition-all text-sm font-sans"
          />
        </div>

        <Button variant="primary" className="w-full">Create account</Button>
      </form>

      <p className="mt-8 text-center text-sm font-sans text-[var(--color-shuttle-gray-700)]">
        Already have an account?{' '}
        <Link href="/login" className="text-[var(--color-persian-blue-800)] font-medium hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
