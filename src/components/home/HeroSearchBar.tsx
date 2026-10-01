"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button";

export interface HeroSearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const HeroSearchBar: React.FC<HeroSearchBarProps> = ({
  className = "",
  placeholder = "Course, topic, creator",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`flex items-center gap-3 sm:gap-4 ${className}`}
    >
      <div className="w-full flex-1 min-w-0 h-[52px] bg-white rounded-full px-6 flex items-center shadow-lg">
        <svg
          className="w-5 h-5 text-shuttle-gray-400 mr-3 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full bg-transparent outline-none text-shuttle-gray-950 font-sans placeholder-shuttle-gray-400 text-[16px] md:text-[18px] leading-[28.8px] font-normal"
        />
      </div>
      <Button
        type="submit"
        variant="lime"
        size="lg"
        className="w-full sm:w-[104px] text-[16px] md:text-[18px] shadow-lg shrink-0"
      >
        Search
      </Button>
    </form>
  );
};
