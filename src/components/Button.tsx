import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "lime"
  | "outline"
  | "ghost"
  | "link"
  | "muted";

export type ButtonSize = "sm" | "md" | "lg" | "auth" | "pill" | "auto";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = "lime",
    size = "auto",
    children,
    className = "",
    loading = false,
    ...restProps
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    lime: "bg-electric-lime-400 hover:bg-electric-lime-500 text-shuttle-gray-950 focus:ring-electric-lime-400",
    secondary: "bg-electric-lime-400 hover:bg-electric-lime-500 text-shuttle-gray-950 focus:ring-electric-lime-400",
    primary: "bg-persian-blue-800 hover:bg-persian-blue-850 text-white focus:ring-persian-blue-800",
    outline: "border-2 border-shuttle-gray-200 text-shuttle-gray-950 hover:border-shuttle-gray-900 bg-transparent focus:ring-persian-blue-800",
    ghost: "bg-transparent text-persian-blue-800 hover:text-persian-blue-900 focus:ring-persian-blue-800",
    link: "bg-transparent text-persian-blue-800 hover:text-persian-blue-900 focus:ring-persian-blue-800",
    muted: "bg-shuttle-gray-50 hover:bg-shuttle-gray-100 text-shuttle-gray-700 focus:ring-electric-lime-400",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-[38px] px-4 text-sm",
    md: "h-12 px-6 text-base leading-[19.2px]",
    lg: "h-[52px] px-6 text-lg leading-[21.6px]",
    auth: "w-[123px] h-[46px] text-lg leading-[21.6px]",
    pill: "h-[43px] px-4 text-base leading-[19.2px] rounded-3xl",
    auto: "px-6 py-3 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = loading ? (
    <span className="flex items-center gap-2">
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span>{children}</span>
    </span>
  ) : (
    children
  );

  if ("href" in restProps && restProps.href !== undefined) {
    const { href, ...linkProps } = restProps as ButtonAsLink;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = restProps as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      disabled={buttonProps.disabled || loading}
      {...buttonProps}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";
