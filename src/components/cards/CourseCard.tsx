import React from "react";
import Image from "next/image";

export interface CourseCardProps {
  title?: string;
  author?: string;
  level?: string;
  image?: string;
  price?: string;
  period?: string;
  rating?: string;
  badges?: string[];
  avatars?: string[];
  count?: string;
  countBadgeVariant?: "lime" | "dark";
  priceColor?: string;
  className?: string;
}

const DEFAULT_COURSE_AVATARS = [
  "/images/course/avatar1.png",
  "/images/course/avatar2.png",
  "/images/course/avatar3.png",
  "/images/course/avatar4.png",
];

export const CourseCard = ({
  title = "From Idea to Startup Success",
  author = "by purepearl studio",
  level = "Beginner",
  image = "/images/course/cover.png",
  price = "$25",
  period = "/lifetime",
  rating = "4.5",
  badges = ["17 Lessons", "2 hours 16 mins", "59 Comments"],
  avatars = DEFAULT_COURSE_AVATARS,
  count = "26+",
  countBadgeVariant = "lime",
  priceColor,
  className = "",
}: CourseCardProps) => {
  return (
    <div className={`w-[373px] h-[384px] border-[1px] border-shuttle-gray-200 bg-white rounded-[24px] p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:-translate-y-1 group cursor-pointer shrink-0 ${className}`}>
      
      {/* Thumbnail Frame (341px x 195px) */}
      <div className="relative w-[341px] h-[195px] rounded-[12px] overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          priority
          unoptimized
        />
        
        {badges && badges.length > 0 && (
          <div className="absolute bottom-3 left-3 flex items-center gap-3 z-10 w-[315px] overflow-hidden">
            {badges.map((b, idx) => (
              <span 
                key={idx} 
                className="bg-shuttle-gray-50/90 backdrop-blur-md text-black-700 text-[12px] font-sans font-medium px-3 py-[5px] rounded-full whitespace-nowrap shrink-0"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Frame */}
      <div className="flex flex-col flex-1 mt-[20px]">
        {/* Title + Author and Rating */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col flex-1 min-w-0 pr-2">
            <h3 
              className="font-heading font-semibold text-[20px] leading-[1.2] text-black tracking-[-0.2px] truncate"
              title={title}
            >
              {title}
            </h3>
            <p className="font-sans text-[12px] leading-[1.6] text-black-700 font-normal mt-0.5">
              {author}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 shrink-0 pt-0.5">
            <span className="font-sans text-[18px] text-black-700 font-normal">
              {rating}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-shuttle-gray-200">
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
            </svg>
          </div>
        </div>

        {/* Level Badge + Avatar Stack */}
        <div className="flex items-center gap-3 mt-4">
          {/* Beginner Badge */}
          <div className="h-[32px] px-3 bg-shuttle-gray-50 rounded-full flex items-center gap-1 shrink-0">
            <svg
              className="w-5 h-5 text-shuttle-gray-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
            </svg>
            <span className="font-sans text-[12px] font-medium text-shuttle-gray-700">
              {level}
            </span>
          </div>

          {/* Avatar Stack */}
          <div className="flex items-center -space-x-2 shrink-0">
            {avatars.map((av, i) => (
              <Image
                key={i}
                src={av}
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-[0px] border-white object-cover relative"
                style={{ zIndex: i }}
                unoptimized
              />
            ))}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center relative shrink-0 ${
                countBadgeVariant === "dark"
                  ? "bg-black border-[1.5px] border-white text-white"
                  : "bg-electric-lime-400 border-0 border-white text-shuttle-gray-950"
              }`}
              style={{ zIndex: avatars.length }}
            >
              <span className="font-sans text-[12px] font-medium">
                {count}
              </span>
            </div>
          </div>
        </div>

        {/* Price & Period */}
        <div className="flex items-baseline gap-1 mt-[18px]">
          <span
            className={`font-heading font-semibold text-[20px] ${
              priceColor || "text-persian-blue-800"
            }`}
          >
            {price}
          </span>
          <span className="font-sans text-[12px] text-black-700 font-normal">
            {period}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
