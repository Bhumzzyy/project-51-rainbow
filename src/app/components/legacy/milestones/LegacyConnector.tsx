"use client";

import React from "react";

interface LegacyConnectorProps {
  direction: "up" | "down";
  className?: string;
  isActive?: boolean;
}

export const LegacyConnector: React.FC<LegacyConnectorProps> = ({
  direction,
  className = "",
}) => {
  return (
    <div
      className={`pointer-events-none flex flex-col items-center select-none ${
        direction === "up" ? "flex-col-reverse" : "flex-col"
      } ${className}`}
      aria-hidden="true"
    >
      {/* Fine static vertical connector line */}
      <div className="w-[1.5px] h-6 sm:h-8 md:h-10 bg-[#B9272F]" />

      {/* Static terminal dot */}
      <div className="relative flex items-center justify-center my-0.5">
        <span className="w-2 h-2 rounded-full bg-[#B9272F]" />
      </div>
    </div>
  );
};

export default LegacyConnector;
