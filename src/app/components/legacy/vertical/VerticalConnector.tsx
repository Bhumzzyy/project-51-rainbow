"use client";

import React from "react";

interface VerticalConnectorProps {
  direction: "left" | "right";
  className?: string;
}

export const VerticalConnector: React.FC<VerticalConnectorProps> = ({
  direction,
  className = "",
}) => {
  return (
    <div
      className={`legacy-vertical__connector legacy-vertical__connector--${direction} ${className}`}
      aria-hidden="true"
    >
      <div className="legacy-vertical__connector-dot" />
    </div>
  );
};

export default VerticalConnector;
