# ByteSpace

ByteSpace is a modern online learning platform built with Next.js and Tailwind CSS. It provides a robust landing page experience alongside a fully designed authentication flow. The architecture prioritizes reusability, strict TypeScript type safety, and clean domain-driven data structures.

## Live Demo

- **Production Deployment**: [https://bytespace-new.vercel.app](https://bytespace-new.vercel.app)

## Core Technologies

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4) with custom theme configuration
- **Fonts**: Custom localized fonts (Clash Display, Satoshi, Poppins)

## Features

- **Responsive Landing Page**: Carefully crafted UI sections including a Hero, Course Grid, Learning Paths, Features Showcase, Testimonials, and Call-to-Action.
- **Authentication Flows**: Polished Login and Registration forms built with composable input fields and split-screen layouts.
- **Component Architecture**: Atomic design principles with a centralized component library for specialized visual elements (e.g., CourseCard, TotalRevenueCard, YearToDateCard, TestimonialCard).
- **Domain-Driven Data**: Single Source of Truth implementation for mock data and strongly typed interfaces to ensure type consistency and stable rendering keys across the application.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a scalable Next.js App Router architecture.

```text
.
├── public                      # Static assets (images, icons, vectors)
│   ├── courses                 # Course thumbnail assets
│   ├── icons                   # Category icons
│   ├── images                  # Sub-grouped image assets (cutouts, auth, testimonials)
│   └── logo-dark.svg           # Brand logo
├── src
│   ├── app                     # Next.js App Router
│   │   ├── (auth)              # Authentication route group
│   │   │   ├── login           # /login route
│   │   │   ├── register        # /register route
│   │   │   └── layout.tsx      # Auth-specific layout wrapping
│   │   ├── fonts               # Local font binaries and declarations
│   │   ├── globals.css         # Global Tailwind directives and CSS variables
│   │   ├── icon.svg            # Generated site favicon
│   │   ├── layout.tsx          # Root HTML layout
│   │   └── page.tsx            # Main landing page route
│   ├── components
│   │   ├── authentication      # Specialized UI for auth flows (Forms, Headers)
│   │   ├── cards               # Reusable specialized card components
│   │   ├── home                # Composable landing page sections
│   │   ├── ui                  # Primitive UI elements (InputField)
│   │   ├── Button.tsx          # Core polymorphic button component
│   │   ├── Footer.tsx          # Global site footer
│   │   └── Navbar.tsx          # Global navigation bar
│   ├── data                    # Centralized mock data arrays
│   │   ├── categories.ts
│   │   ├── courses.ts
│   │   ├── navigation.ts
│   │   ├── partners.ts
│   │   └── testimonials.ts
│   └── types                   # Domain TypeScript interfaces
│       ├── category.ts
│       ├── course.ts
│       ├── navigation.ts
│       ├── partner.ts
│       └── testimonial.ts
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## Code Conventions

- **Component Design**: Components are decoupled from their data where possible. Complex pages are broken down into logical semantic sections.
- **Styling**: Tailwind CSS v4 is used globally. Canonical shorthand utilities are enforced (e.g., using `w-6` instead of `w-[24px]`) to maintain consistency. Custom branding colors and font variables are configured via `@theme` in `globals.css`.
- **Typing**: Strict TypeScript definitions in the `src/types/` directory act as the source of truth for all component props involving domain entities.
