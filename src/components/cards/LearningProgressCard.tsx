import React from "react";

export interface LearningProgressCardProps {
  title?: string;
  percentage?: number | string;
  className?: string;
}

export const LearningProgressCard: React.FC<LearningProgressCardProps> = ({
  title = "Learning Progress",
  percentage = 55,
  className = "",
}) => {
  const numericPercent =
    typeof percentage === "number"
      ? percentage
      : parseInt(String(percentage).replace("%", ""), 10) || 55;

  const displayPercent =
    typeof percentage === "string" && percentage.endsWith("%")
      ? percentage
      : `${numericPercent}%`;

  return (
    <div
      className={`w-58 h-32.75 bg-white rounded-2xl shadow-xl p-4 flex flex-col justify-between text-left border border-white/80 shrink-0 ${className}`}
    >
      <p className="font-sans font-medium text-[14px] leading-[16.8px] text-shuttle-gray-950">
        {title}
      </p>
      <p className="font-heading font-semibold text-[48px] leading-[57.6px] tracking-[-0.48px] text-shuttle-gray-950">
        {displayPercent}
      </p>
      <div className="w-full max-w-50 h-2 bg-shuttle-gray-50 rounded-full overflow-hidden">
        <div
          className="h-full bg-electric-lime-400 rounded-full transition-all duration-300"
          style={{ width: `${Math.min(Math.max(numericPercent, 0), 100)}%` }}
        />
      </div>
    </div>
  );
};

export default LearningProgressCard;
