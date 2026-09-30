import React from "react";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/mockCourses";

export const CourseGridSection = () => {
  return (
    <>
      <section className="w-full bg-white pb-[72px] flex justify-center">
                <div className="w-full max-w-[1199px] px-4 xl:px-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] justify-items-center">
                    {courses.map((course, idx) => (
                      <CourseCard key={idx} {...course} />
                    ))}
                  </div>
                </div>
              </section>
    </>
  );
};
