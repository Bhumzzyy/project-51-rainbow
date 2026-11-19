"use client";

import React from "react";

interface VerticalYearProps {
  year: string;
  className?: string;
}

export const VerticalYear: React.FC<VerticalYearProps> = ({
  year,
  className = "",
}) => {
  return (
    <div
      className={`legacy-vertical__year-marker ${className}`}
      aria-label={`Milestone Year ${year}`}
    >
      <span className="legacy-vertical__year-text">{year}</span>
    </div>
  );
};

export default VerticalYear;

