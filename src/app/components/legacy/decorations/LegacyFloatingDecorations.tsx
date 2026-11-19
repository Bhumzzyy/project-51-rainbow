"use client";

import React from "react";
import Image from "next/image";
import {
  FLOATING_DECORATIONS_CONFIG,
  FloatingDecorationConfig,
} from "./legacy-floating-config";

interface LegacyFloatingDecorationsProps {
  customConfigs?: FloatingDecorationConfig[];
  milestonePositions?: number[];
  className?: string;
}

export const LegacyFloatingDecorations: React.FC<
  LegacyFloatingDecorationsProps
> = ({ customConfigs, milestonePositions, className = "" }) => {
  const configs = customConfigs || FLOATING_DECORATIONS_CONFIG;

  if (!configs || configs.length === 0) {
    return null;
  }

  return (
    <div
      className={`legacy-floating-layer ${className}`}
      aria-hidden="true"
    >
      {configs
        .filter((item) => item.enabled !== false)
        .map((item) => {
          const {
            id,
            src,
            alt,
            anchor,
            position,
            size,
            transform,
            appearance,
            animation,
            responsive,
          } = item;

          // Milestone anchor calculation
          const mIdx = Math.max(0, Math.min(13, anchor.milestoneIndex));
          const isBetween = anchor.type === "between";

          // Calculate horizontal left coordinate in pixels directly from measured milestone centers
          let anchorX = 0;
          if (milestonePositions && milestonePositions.length > 0) {
            if (isBetween) {
              const nextIdx = Math.min(
                milestonePositions.length - 1,
                anchor.nextMilestoneIndex ?? mIdx + 1
              );
              anchorX = (milestonePositions[mIdx] + milestonePositions[nextIdx]) / 2;
            } else {
              anchorX = milestonePositions[mIdx] ?? 0;
            }
          } else {
            // Stable baseline fallback for SSR prior to client measure()
            const baseStep = 530;
            const baseStart = 286;
            anchorX = baseStart + mIdx * baseStep + (isBetween ? baseStep * 0.5 : 0);
          }

          const finalX = Math.round(anchorX + position.x);

          // Vertical positioning:
          // Red timeline bar is centered at 50% height.
          // Upper decorations float gracefully in top whitespace (top: 8% to 26%).
          // Lower decorations float gracefully in bottom whitespace (bottom: 8% to 26%).
          const isTop = anchor.side === "top";
          const verticalProp = isTop ? "top" : "bottom";
          const verticalValue = `${Math.max(6, Math.min(26, position.y))}%`;

          // Transform: centers element, applies initial rotation, scale, and horizontal/vertical flips
          const flipXMultiplier = transform.flipX ? -1 : 1;
          const flipYMultiplier = transform.flipY ? -1 : 1;
          const outerTransform = `translate(-50%, -50%) rotate(${transform.rotate}deg) scale(${transform.scale}) scaleX(${flipXMultiplier}) scaleY(${flipYMultiplier})`;

          // Responsive visibility classes
          const visibilityClasses = [
            !responsive.desktop ? "legacy-hide-desktop" : "",
            !responsive.tablet ? "legacy-hide-tablet" : "",
            !responsive.mobile ? "legacy-hide-mobile" : "",
          ]
            .filter(Boolean)
            .join(" ");

          // Animation type class mapping
          let animClass = "legacy-anim-static";
          if (animation.type === "float") animClass = "legacy-anim-float";
          else if (animation.type === "bounce") animClass = "legacy-anim-bounce";
          else if (animation.type === "drift") animClass = "legacy-anim-drift";

          // Above the fold eager loading optimization for first two milestones
          const isAboveTheFold = mIdx <= 1;

          // Custom CSS variables for independent sizing and animation parameters
          const outerStyle: React.CSSProperties = {
            left: `${finalX}px`,
            [verticalProp]: verticalValue,
            transform: outerTransform,
            opacity: appearance.opacity,
            zIndex: appearance.zIndex,
            "--decor-w-desktop": `${size.desktop}px`,
            "--decor-w-tablet": `${size.tablet}px`,
            "--decor-w-mobile": `${size.mobile}px`,
            "--decor-max-w": size.maxWidth ? `${size.maxWidth}px` : "none",
          } as React.CSSProperties;

          const innerStyle: React.CSSProperties = {
            animationDuration: `${animation.duration}s`,
            animationDelay: `${animation.delay}s`,
            "--travel-x": `${animation.distanceX}px`,
            "--travel-y": `${animation.distanceY}px`,
            "--travel-rot": `${animation.rotation}deg`,
            "--travel-scale": `${animation.scale}`,
          } as React.CSSProperties;

          return (
            <div
              key={id}
              className={`legacy-floating-decor ${visibilityClasses}`}
              style={outerStyle}
            >
              <div
                className={`legacy-floating-inner ${animClass}`}
                style={innerStyle}
              >
                <Image
                  src={src}
                  alt={alt || ""}
                  width={size.desktop}
                  height={size.desktop}
                  priority={isAboveTheFold}
                  loading={isAboveTheFold ? "eager" : "lazy"}
                  decoding="async"
                  unoptimized
                  className="legacy-float-img"
                  sizes={`(max-width: 640px) ${size.mobile}px, (max-width: 1024px) ${size.tablet}px, ${size.desktop}px`}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LegacyFloatingDecorations;
