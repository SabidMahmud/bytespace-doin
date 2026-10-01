import React from "react";
import { CourseCard } from "@/components/cards/CourseCard";
import { COURSES } from "@/data";

export const CourseGridSection = () => {
  return (
    <section className="w-full bg-white pb-18 flex justify-center">
      <div className="w-full max-w-299.75 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {COURSES.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
