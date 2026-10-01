import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { DiscoverPassionSection } from "@/components/home/DiscoverPassionSection";
import { CourseGridSection } from "@/components/home/CourseGridSection";
import { LearningPathsSection } from "@/components/home/LearningPathsSection";
import { FeaturesShowcaseSection } from "@/components/home/FeaturesShowcaseSection";
import { CtaSection } from "@/components/home/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <DiscoverPassionSection />
        <CourseGridSection />
        <LearningPathsSection />
        <FeaturesShowcaseSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
