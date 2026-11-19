"use client";

import React from "react";

interface LegacyYearProps {
  year: string;
  yearTop?: string;
  yearBottom?: string;
  isActive?: boolean;
  className?: string;
}

export const LegacyYear: React.FC<LegacyYearProps> = ({
  year,
  isActive = false,
  className = "",
}) => {
  const isMultiYear = year.includes("–") || year.includes("-");

  return (
    <div
      className={`relative z-20 flex items-center justify-center select-none transition-transform duration-300 ${
        isActive ? "scale-105" : "scale-100"
      } ${className}`}
      aria-label={`Year ${year}`}
    >
      <span
        className={`legacy-year-numeral text-center leading-none ${
          isMultiYear ? "text-[0.72em] tracking-tight" : "tracking-normal"
        }`}
      >
        {year}
      </span>
    </div>
  );
};

export default LegacyYear;
