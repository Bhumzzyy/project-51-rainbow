"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LegacyMilestoneSvg } from "../decorations/LegacyMilestoneSvg";

interface LegacyMilestoneImageProps {
  milestoneId: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  isActive?: boolean;
}

export const LegacyMilestoneImage: React.FC<LegacyMilestoneImageProps> = ({
  milestoneId,
  src,
  alt,
  width = 600,
  height = 450,
  className = "",
  isActive = false,
}) => {
  const [loadError, setLoadError] = useState(false);

  const isInitial = milestoneId === "milestone-01" || milestoneId === "milestone-02";

  return (
    <div
      className={`relative flex items-center justify-center w-full transition-transform duration-500 ease-out ${
        isActive ? "scale-100" : "scale-[0.98]"
      } ${className}`}
    >
      {!loadError ? (
        <div
          className="legacy-artwork-container relative w-full flex items-center justify-center"
          style={{
            maxWidth: "var(--legacy-image-width)",
            height: "var(--legacy-image-height)",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={isInitial}
            loading={isInitial ? "eager" : "lazy"}
            className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_16px_32px_rgba(40,35,31,0.14)] transition-all duration-300"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 460px"
            onError={() => {
              console.warn(
                `[LegacyAsset] Image failed to load for ${milestoneId} at ${src}. Activating SVG vector fallback.`
              );
              setLoadError(true);
            }}
          />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center p-2">
          <LegacyMilestoneSvg milestoneId={milestoneId} />
        </div>
      )}
    </div>
  );
};

export default LegacyMilestoneImage;
