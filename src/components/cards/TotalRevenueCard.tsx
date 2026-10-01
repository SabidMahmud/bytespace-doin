import React from "react";

export interface TotalRevenueCardProps {
  title?: string;
  dateRange?: string;
  amount?: string;
  badge?: string;
  progress?: number | string;
  className?: string;
}

export const TotalRevenueCard: React.FC<TotalRevenueCardProps> = ({
  title = "Total Revenue",
  dateRange = "July 1-28",
  amount = "$120.29",
  badge = "+12$",
  progress = "56%",
  className = "",
}) => {
  const progressWidth =
    typeof progress === "number" ? `${progress}%` : progress;

  return (
    <div
      className={`w-[232px] h-[119px] bg-persian-blue-800/90 backdrop-blur-[10px] rounded-[16px] p-4 flex flex-col justify-between text-shuttle-gray-50 select-none shrink-0 ${className}`}
    >
      <div>
        <p className="font-sans font-medium text-[16px] leading-[19.2px]">
          {title}
        </p>
        <p className="font-sans text-[10px] text-shuttle-gray-50">{dateRange}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-heading font-semibold text-[24px] leading-8 text-shuttle-gray-50 tracking-[-0.01em]">
          {amount}
        </span>
        {badge && (
          <span className="bg-electric-lime-500 text-shuttle-gray-950 font-sans font-medium text-[10px] px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-electric-lime-400 rounded-full transition-all duration-300"
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
};

export const TotalReveneueCard = TotalRevenueCard;
