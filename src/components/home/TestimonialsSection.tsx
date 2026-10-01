import React from "react";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { TESTIMONIALS } from "@/data";

export const TestimonialsSection = () => {
  return (
    <section className="w-full bg-surface-soft relative overflow-hidden flex justify-center py-16 md:pt-[74px] md:pb-[57px]">
      {/* Background Gradient Blobs (z-0) */}
      <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
        <div className="w-[1440px] min-w-[1440px] h-full relative">
          <div
            className="absolute rounded-full blur-[40px]"
            style={{
              width: "1137px",
              height: "1137px",
              left: "842px",
              top: "-241px",
              opacity: 0.4,
              background:
                "radial-gradient(circle at center, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
            }}
          />
          <div
            className="absolute rounded-full blur-[40px]"
            style={{
              width: "672px",
              height: "672px",
              left: "395px",
              top: "-138px",
              opacity: 0.6,
              background:
                "radial-gradient(circle at center, rgba(203,252,1,1) 0%, rgba(203,252,1,0.23) 53%, rgba(203,252,1,0.06) 75%, rgba(203,252,1,0) 100%)",
            }}
          />
          <div
            className="absolute rounded-full blur-[40px]"
            style={{
              width: "1137px",
              height: "1137px",
              left: "-442px",
              top: "149px",
              opacity: 0.24,
              background:
                "radial-gradient(circle at center, rgba(0,59,226,1) 0%, rgba(0,59,226,0.23) 53%, rgba(0,59,226,0.06) 75%, rgba(0,59,226,0) 100%)",
            }}
          />
        </div>
      </div>

      {/* Content (z-10) */}
      <div className="relative z-10 w-full max-w-[1204px] px-4 flex flex-col">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-[72px] gap-6 lg:gap-0">
          <h2 className="font-heading font-semibold text-[32px] lg:text-[44px] leading-[1.2] tracking-[-0.44px] text-black w-full lg:max-w-[577px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-sans text-[16px] lg:text-[18px] text-black-700 leading-[1.6] w-full lg:max-w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-[41px]">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
