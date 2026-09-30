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
}

export const CourseCard = ({
  title = "From Idea to Startup Success",
  author = "by purepearl studio",
  level = "Beginner",
  image = "/images/course/cover.png",
  price = "$25",
  period = "/lifetime",
  rating = "4.5",
  badges = ["17 Lessons", "2 hours 16 mins", "59 Comments"],
}: CourseCardProps) => {
  return (
    <div className="w-[373px] h-[384px] bg-white rounded-[24px] p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:-translate-y-1 group cursor-pointer shrink-0">
      
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
                className="bg-[#F5F5F6]/90 backdrop-blur-md text-[#4F4F4F] text-[12px] font-sans font-medium px-3 py-[5px] rounded-full whitespace-nowrap shrink-0"
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
            <p className="font-sans text-[12px] leading-[1.6] text-[#4F4F4F] font-normal mt-0.5">
              {author}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 shrink-0 pt-0.5">
            <span className="font-sans text-[18px] text-[#4F4F4F] font-normal">
              {rating}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#CECFD3]">
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
            </svg>
          </div>
        </div>

        {/* Level Badge + Avatar Stack */}
        <div className="flex items-center gap-3 mt-4">
          {/* Beginner Badge */}
          <div className="h-[32px] px-3 bg-[#F5F5F6] rounded-full flex items-center gap-1 shrink-0">
            <svg
              className="w-5 h-5 text-[#4B4C53]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 4h3v16h-3V4zM5 14h3v6H5v-6zm6-5h3v11h-3V9z" />
            </svg>
            <span className="font-sans text-[12px] font-medium text-[#4B4C53]">
              {level}
            </span>
          </div>

          {/* Avatar Stack */}
          <div className="flex items-center -space-x-2 shrink-0">
            <Image src="/images/course/avatar1.png" alt="" width={32} height={32} className="w-8 h-8 rounded-full border-[1.5px] border-white object-cover relative z-0" unoptimized />
            <Image src="/images/course/avatar2.png" alt="" width={32} height={32} className="w-8 h-8 rounded-full border-[1.5px] border-white object-cover relative z-10" unoptimized />
            <Image src="/images/course/avatar3.png" alt="" width={32} height={32} className="w-8 h-8 rounded-full border-[1.5px] border-white object-cover relative z-20" unoptimized />
            <Image src="/images/course/avatar4.png" alt="" width={32} height={32} className="w-8 h-8 rounded-full border-[1.5px] border-white object-cover relative z-30" unoptimized />
            <div className="w-8 h-8 rounded-full bg-[#D4FB20] border-[1.5px] border-white flex items-center justify-center relative z-40 shrink-0">
              <span className="font-sans text-[12px] font-medium text-[#242528]">26+</span>
            </div>
          </div>
        </div>

        {/* Price & Period */}
        <div className="flex items-baseline gap-1 mt-[18px]">
          <span className="font-heading font-semibold text-[20px] text-[#003BE2]">
            {price}
          </span>
          <span className="font-sans text-[12px] text-[#4F4F4F] font-normal">
            {period}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
