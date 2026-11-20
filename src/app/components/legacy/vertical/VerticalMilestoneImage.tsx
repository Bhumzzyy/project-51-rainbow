"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LegacyMilestoneSvg } from "../decorations/LegacyMilestoneSvg";
import { VerticalParallax } from "./VerticalParallax";

interface VerticalMilestoneImageProps {
  milestoneId: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const VerticalMilestoneImage: React.FC<VerticalMilestoneImageProps> = ({
  milestoneId,
  src,
  alt,
  width = 600,
  height = 450,
  priority = false,
}) => {
  const [loadError, setLoadError] = useState(false);

  return (
    <VerticalParallax className="w-full">
      <div className="legacy-vertical__artwork-wrapper">
        {!loadError ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className="legacy-vertical__artwork-img"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 520px"
            onError={() => {
              console.warn(`[VerticalLegacy] Image fallback activated for ${milestoneId}`);
              setLoadError(true);
            }}
          />
        ) : (
          <div className="w-full flex items-center justify-center p-4">
            <LegacyMilestoneSvg milestoneId={milestoneId} />
          </div>
        )}
      </div>
    </VerticalParallax>
  );
};

export default VerticalMilestoneImage;
