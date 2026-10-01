import React from "react";

export interface CourseStatsBadgeProps {
  title?: string;
  coursesCount?: number | string;
  studentsCount?: number | string;
  className?: string;
  size?: "sm" | "md";
}

export const CourseStatsBadge: React.FC<CourseStatsBadgeProps> = ({
  title = "UI/UX Design",
  coursesCount = "200",
  studentsCount = "1000+",
  className = "",
  size = "md",
}) => {
  if (size === "sm") {
    return (
      <div
        className={`bg-white rounded-xl sm:rounded-2xl shadow-lg px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 text-left border border-white/80 ${className}`}
      >
        <p className="font-sans font-medium text-shuttle-gray-950 text-[11px] sm:text-[14px] leading-tight mb-0.5">
          {title}
        </p>
        <p className="text-[9px] sm:text-[11px] font-sans font-normal text-shuttle-gray-400 leading-tight">
          {coursesCount} Courses &bull; {studentsCount} Students
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-[208px] h-[70px] bg-white rounded-2xl shadow-xl px-4 py-3 text-left border border-white/80 ${className}`}
    >
      <p className="font-sans font-medium text-shuttle-gray-950 text-[16px] leading-[19.2px] mb-0.5">
        {title}
      </p>
      <p className="text-[12px] font-sans font-normal text-shuttle-gray-400 leading-[19.2px]">
        {coursesCount} Courses &bull; {studentsCount} Students
      </p>
    </div>
  );
};
