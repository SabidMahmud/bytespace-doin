import React from "react";
import Image from "next/image";

const DEFAULT_AVATARS = [
  "/images/register/student_1.png",
  "/images/register/student_2.png",
  "/images/register/student_3.png",
  "/images/register/student_4.png",
  "/images/register/student_5.png",
  "/images/register/student_6.png",
  "/images/register/student_7.png",
];

export type HappyStudentsCardVariant = "light" | "accent";

export interface HappyStudentsCardProps {
  variant?: HappyStudentsCardVariant;
  title?: string;
  rating?: string;
  reviewCount?: string;
  countLabel?: string;
  avatars?: string[];
  className?: string;
}

const RatingStar = ({ fill }: { fill: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true"
  >
    <path
      d="M7.52482 1.45123C7.67519 0.992014 8.32481 0.992015 8.47518 1.45123L9.69317 5.17111C9.76032 5.37617 9.95144 5.51503 10.1672 5.51552L14.0814 5.5244C14.5646 5.5255 14.7654 6.14333 14.3751 6.42824L11.2137 8.73613C11.0394 8.86335 10.9664 9.08803 11.0326 9.2934L12.2337 13.0188C12.382 13.4787 11.8564 13.8605 11.4648 13.5774L8.29297 11.2838C8.11812 11.1574 7.88188 11.1574 7.70703 11.2838L4.53516 13.5774C4.14359 13.8605 3.61803 13.4787 3.7663 13.0188L4.96741 9.2934C5.03363 9.08803 4.96062 8.86335 4.78634 8.73613L1.62491 6.42824C1.23464 6.14333 1.43538 5.5255 1.91859 5.5244L5.83278 5.51552C6.04856 5.51503 6.23968 5.37617 6.30683 5.17111L7.52482 1.45123Z"
      fill={fill}
    />
  </svg>
);

export const HappyStudentsCard: React.FC<HappyStudentsCardProps> = ({
  variant = "light",
  title = "Happy Students",
  rating = "4.5",
  reviewCount = "240",
  countLabel = "2K+",
  avatars = DEFAULT_AVATARS,
  className = "",
}) => {
  const isAccent = variant === "accent";
  const avatarSize = 43;

  return (
    <div
      className={`w-[258px] p-4 flex flex-col justify-between text-left shrink-0 ${
        isAccent
          ? "h-[123px] bg-[#D4FB20] rounded-[16px] shadow-xl"
          : "h-[121px] bg-white rounded-[16px] shadow-xl border border-white/80"
      } ${className}`}
    >
      <div className={isAccent ? "flex flex-col gap-1" : "flex flex-col"}>
        <p
          className={`font-sans font-medium text-[16px] text-[#242528] ${
            isAccent ? "leading-[24px]" : "leading-[19.2px] mb-1"
          }`}
        >
          {title}
        </p>
        <div
          className={`flex items-center gap-1.5 ${isAccent ? "" : "mb-2"}`}
        >
          <span
            className={`font-sans ${
              isAccent
                ? "font-normal text-[10px] leading-[15px] text-[#424348]"
                : "font-normal text-[12px] leading-[19.2px] text-[#82868E]"
            }`}
          >
            {rating} ({reviewCount})
          </span>
          <RatingStar fill={isAccent ? "#003BE2" : "#D4FB20"} />
        </div>
      </div>

      <div className="flex items-center -space-x-4">
        {avatars.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`relative overflow-hidden rounded-full shrink-0 ${
              isAccent ? "border-0 border-[#D4FB20]" : "border-0 border-white"
            }`}
            style={{
              width: avatarSize,
              height: avatarSize,
              zIndex: i,
            }}
          >
            <Image
              src={src}
              alt=""
              width={avatarSize}
              height={avatarSize}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        ))}
        <div
          className={`rounded-full flex items-center justify-center relative shrink-0 font-sans font-bold text-[12px] leading-[18px] ${
            isAccent
              ? "bg-black border-0 border-[#D4FB20] text-[#F5F5F6]"
              : "bg-[#D4FB20] text-[#242528] border-0 border-white"
          }`}
          style={{
            width: avatarSize,
            height: avatarSize,
            zIndex: avatars.length,
          }}
        >
          {countLabel}
        </div>
      </div>
    </div>
  );
};
