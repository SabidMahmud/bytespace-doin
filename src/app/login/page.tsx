import React from "react";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <AuthLayout 
      title="Welcome back!" 
      subtitle="Please enter your details to sign in."
    >
      <form className="space-y-6">
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
          <div className="flex justify-between items-center mb-2">
            <label className="block font-sans text-sm font-medium text-[var(--color-shuttle-gray-900)]">
              Password
            </label>
            <Link href="#" className="text-sm text-[var(--color-persian-blue-800)] hover:underline font-sans">
              Forgot password?
            </Link>
          </div>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-shuttle-gray-200)] focus:ring-2 focus:ring-[var(--color-persian-blue-800)] focus:border-transparent outline-none transition-all text-sm font-sans"
          />
        </div>

        <Button variant="primary" className="w-full">Sign in</Button>
      </form>

      <p className="mt-8 text-center text-sm font-sans text-[var(--color-shuttle-gray-700)]">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-[var(--color-persian-blue-800)] font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}
