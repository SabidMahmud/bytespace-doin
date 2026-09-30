import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[var(--color-persian-blue-800)] text-white hover:opacity-90 focus:ring-[var(--color-persian-blue-800)]",
    secondary:
      "bg-[var(--color-electric-lime-400)] text-[var(--color-black-950)] hover:bg-[var(--color-electric-lime-500)] focus:ring-[var(--color-electric-lime-400)]",
    outline:
      "border-2 border-[var(--color-shuttle-gray-200)] text-[var(--color-shuttle-gray-950)] hover:border-[var(--color-shuttle-gray-900)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
