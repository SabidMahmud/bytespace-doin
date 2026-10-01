import React from "react";

interface YearToDateCardProps {
  className?: string;
  year?: string;
  amount?: string;
  growth?: string;
}

export const YearToDateCard = ({
  className = "",
  year = "2023",
  amount = "$1,200.38",
  growth = "+12$",
}: YearToDateCardProps) => {
  return (
    <div
      className={`w-[134px] h-[135px] bg-persian-blue-800/90 backdrop-blur-[10px] rounded-[16px] p-4 flex flex-col justify-between text-shuttle-gray-50 ${className}`}
    >
      <div>
        <p className="font-sans font-medium text-[16px] leading-[19.2px]">Year to Date</p>
        <p className="font-sans text-[10px] text-shuttle-gray-50">{year}</p>
      </div>
      <span className="font-heading font-semibold text-[24px] leading-8 text-shuttle-gray-50 tracking-[-0.01em]">
        {amount}
      </span>
      <div>
        <span className="inline-block bg-electric-lime-500 text-shuttle-gray-950 font-sans font-medium text-[10px] px-2 py-0.5 rounded-full">
          {growth}
        </span>
      </div>
    </div>
  );
};
