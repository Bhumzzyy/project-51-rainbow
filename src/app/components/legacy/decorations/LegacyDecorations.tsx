"use client";

import React, { useState } from "react";
import Image from "next/image";

// ============================================================================
// BASE REUSABLE DECORATION IMAGE COMPONENT WITH FALLBACK
// ============================================================================

export interface LegacyDecorationProps {
  className?: string;
  isAboveTheFold?: boolean;
}

interface InternalDecorationProps extends LegacyDecorationProps {
  src: string;
  fallbackSvg: React.ReactNode;
}

const LegacyDecorationImage: React.FC<InternalDecorationProps> = ({
  src,
  fallbackSvg,
  className = "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-90",
  isAboveTheFold = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallbackSvg}</>;
  }

  return (
    <Image
      src={src}
      alt=""
      width={500}
      height={500}
      priority={isAboveTheFold}
      loading={isAboveTheFold ? "eager" : "lazy"}
      decoding="async"
      unoptimized
      onError={() => setHasError(true)}
      className={`legacy-decor-img object-contain pointer-events-none select-none ${className}`}
      style={{ aspectRatio: "1 / 1" }}
    />
  );
};

// ============================================================================
// INLINE SVG FALLBACKS (PRESERVED AS BACKUPS)
// ============================================================================

export const IceCreamScoopRawSVG: React.FC<{ className?: string }> = ({
  className = "w-12 h-12 text-[#E98745]",
}) => (
  <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
    <circle cx="30" cy="28" r="18" fill="#FFF9D6" stroke="#28231F" strokeWidth="1.5" />
    <path
      d="M14 34 Q20 40 28 36 Q36 32 44 38 Q48 34 46 28"
      fill="#E98745"
      fillOpacity="0.45"
      stroke="#28231F"
      strokeWidth="1.5"
    />
    <path d="M26 36 Q25 46 28 47 Q31 46 30 36" fill="#FFF9D6" stroke="#28231F" strokeWidth="1.2" />
    <path d="M22 22 Q28 18 34 22" stroke="#28231F" strokeWidth="1" strokeLinecap="round" />
    <path d="M24 28 Q30 26 36 30" stroke="#28231F" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const IceCubeRawSVG: React.FC<{ className?: string }> = ({
  className = "w-14 h-12",
}) => (
  <svg viewBox="0 0 70 60" fill="none" className={className} aria-hidden="true">
    <g transform="translate(8, 12)">
      <polygon points="16,4 32,10 24,24 8,18" fill="#FAF8F0" fillOpacity="0.8" stroke="#28231F" strokeWidth="1.5" />
      <polygon points="8,18 24,24 24,38 8,32" fill="#FFF9D6" fillOpacity="0.6" stroke="#28231F" strokeWidth="1.5" />
      <polygon points="24,24 32,10 32,24 24,38" fill="#FAF8F0" fillOpacity="0.4" stroke="#28231F" strokeWidth="1.5" />
      <line x1="14" y1="14" x2="20" y2="16" stroke="#E98745" strokeWidth="1.2" strokeLinecap="round" />
    </g>
    <g transform="translate(34, 4) rotate(18)">
      <polygon points="12,2 24,6 18,18 6,14" fill="#FAF8F0" stroke="#28231F" strokeWidth="1.2" />
      <polygon points="6,14 18,18 18,28 6,24" fill="#FFF9D6" stroke="#28231F" strokeWidth="1.2" />
      <polygon points="18,18 24,6 24,16 18,28" fill="#FAF8F0" stroke="#28231F" strokeWidth="1.2" />
    </g>
  </svg>
);

export const CreamSwirlRawSVG: React.FC<{ className?: string }> = ({
  className = "w-16 h-12",
}) => (
  <svg viewBox="0 0 80 50" fill="none" className={className} aria-hidden="true">
    <path d="M10 35 C25 45, 45 42, 55 25 C62 14, 72 20, 75 12" stroke="#FAF8F0" strokeWidth="6" strokeLinecap="round" />
    <path d="M10 35 C25 45, 45 42, 55 25 C62 14, 72 20, 75 12" stroke="#E98745" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
    <path d="M12 33 C26 42, 44 38, 52 23" stroke="#28231F" strokeWidth="1.2" fill="none" />
  </svg>
);

export const CitrusSliceRawSVG: React.FC<{ className?: string }> = ({
  className = "w-12 h-12",
}) => (
  <svg viewBox="0 0 50 50" fill="none" className={className} aria-hidden="true">
    <circle cx="25" cy="25" r="22" stroke="#E98745" strokeWidth="3" fill="#FFF9D6" />
    <circle cx="25" cy="25" r="18" stroke="#28231F" strokeWidth="1" strokeDasharray="2 2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <line
        key={i}
        x1="25"
        y1="25"
        x2={25 + 16 * Math.cos((angle * Math.PI) / 180)}
        y2={25 + 16 * Math.sin((angle * Math.PI) / 180)}
        stroke="#E98745"
        strokeWidth="1.5"
      />
    ))}
    <circle cx="25" cy="25" r="3" fill="#FAF8F0" stroke="#28231F" strokeWidth="1" />
  </svg>
);

export const BerryRawSVG: React.FC<{ className?: string }> = ({
  className = "w-11 h-12",
}) => (
  <svg viewBox="0 0 45 50" fill="none" className={className} aria-hidden="true">
    <path
      d="M22 44 C12 36, 6 26, 8 16 C9 10, 15 8, 22 13 C29 8, 35 10, 36 16 C38 26, 32 36, 22 44 Z"
      fill="#B9272F"
      fillOpacity="0.85"
      stroke="#28231F"
      strokeWidth="1.5"
    />
    <path d="M22 6 V12" stroke="#28231F" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 14 Q22 11 29 14" stroke="#28231F" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="22" r="1" fill="#FFF9D6" />
    <circle cx="28" cy="22" r="1" fill="#FFF9D6" />
    <circle cx="22" cy="28" r="1" fill="#FFF9D6" />
    <circle cx="17" cy="34" r="1" fill="#FFF9D6" />
    <circle cx="27" cy="34" r="1" fill="#FFF9D6" />
  </svg>
);

export const SprinkleRawSVG: React.FC<{ className?: string }> = ({
  className = "w-14 h-10",
}) => (
  <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden="true">
    <rect x="10" y="8" width="10" height="3" rx="1.5" transform="rotate(25 10 8)" fill="#B9272F" />
    <rect x="36" y="6" width="10" height="3" rx="1.5" transform="rotate(-35 36 6)" fill="#E98745" />
    <rect x="22" y="24" width="9" height="3" rx="1.5" transform="rotate(15 22 24)" fill="#28231F" />
    <rect x="44" y="26" width="9" height="3" rx="1.5" transform="rotate(-15 44 26)" fill="#E98745" />
    <circle cx="12" cy="28" r="1.5" fill="#B9272F" />
    <circle cx="48" cy="14" r="1.5" fill="#FFF9D6" stroke="#28231F" strokeWidth="0.8" />
  </svg>
);

export const VanillaFlowerRawSVG: React.FC<{ className?: string }> = ({
  className = "w-14 h-14",
}) => (
  <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <ellipse
        key={i}
        cx="30"
        cy="15"
        rx="7"
        ry="13"
        transform={`rotate(${angle} 30 30)`}
        fill="#FFF9D6"
        stroke="#28231F"
        strokeWidth="1.2"
      />
    ))}
    <circle cx="30" cy="30" r="4.5" fill="#E98745" stroke="#28231F" strokeWidth="1" />
  </svg>
);

export const ChocolateDripRawSVG: React.FC<{ className?: string }> = ({
  className = "w-16 h-10",
}) => (
  <svg viewBox="0 0 70 40" fill="none" className={className} aria-hidden="true">
    <path d="M5 8 H65 V14 Q55 24 50 14 Q40 32 35 14 Q25 26 20 14 Q12 18 5 14 Z" fill="#28231F" />
    <circle cx="35" cy="35" r="2.5" fill="#28231F" />
  </svg>
);

export const IceCreamRibbonRawSVG: React.FC<{ className?: string }> = ({
  className = "w-16 h-14",
}) => (
  <svg viewBox="0 0 70 50" fill="none" className={className} aria-hidden="true">
    <path
      d="M10 20 C20 4, 35 45, 45 22 C52 6, 62 38, 65 15"
      stroke="#B9272F"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M12 22 C22 8, 37 47, 47 24 C54 8, 64 40, 67 17"
      stroke="#E98745"
      strokeWidth="1"
      strokeDasharray="3 3"
      fill="none"
    />
  </svg>
);

export const CelebrationSprinkleRawSVG: React.FC<{ className?: string }> = ({
  className = "w-14 h-12",
}) => (
  <svg viewBox="0 0 60 50" fill="none" className={className} aria-hidden="true">
    <path d="M15 15 L17 10 L19 15 L24 17 L19 19 L17 24 L15 19 L10 17 Z" fill="#E98745" />
    <path d="M42 28 L43.5 24 L45 28 L49 29.5 L45 31 L43.5 35 L42 31 L38 29.5 Z" fill="#B9272F" />
    <circle cx="38" cy="14" r="2" fill="#28231F" />
    <circle cx="20" cy="38" r="2" fill="#E98745" />
    <line x1="28" y1="18" x2="32" y2="22" stroke="#B9272F" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="26" y1="32" x2="30" y2="36" stroke="#28231F" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ============================================================================
// 10 INTEGRATED OPTIMIZED WEBP DECORATIONS (WITH SVG FALLBACK)
// ============================================================================

// 1. Ice Cream Scoop: Between 1980 and 1985 (Above the fold -> eager loading)
export const IceCreamScoopDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-01-ice-cream-scoop.webp"
    fallbackSvg={<IceCreamScoopRawSVG className={props.className} />}
    isAboveTheFold={props.isAboveTheFold ?? true}
    {...props}
  />
);
export const IceCreamScoopSVG = IceCreamScoopDecoration;

// 2. Ice Cubes: Between 1985 and 1990
export const IceCubeDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-02-ice-cubes.webp"
    fallbackSvg={<IceCubeRawSVG className={props.className} />}
    {...props}
  />
);
export const IceCubeSVG = IceCubeDecoration;

// 3. Cream Swirl: Between 1990 and 1995
export const CreamSwirlDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-03-cream-swirl.webp"
    fallbackSvg={<CreamSwirlRawSVG className={props.className} />}
    {...props}
  />
);
export const CreamSwirlSVG = CreamSwirlDecoration;

// 4. Citrus Slice: Between 1995 and 2000
export const CitrusSliceDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-04-citrus-slice.webp"
    fallbackSvg={<CitrusSliceRawSVG className={props.className} />}
    {...props}
  />
);
export const CitrusSliceSVG = CitrusSliceDecoration;

// 5. Berry: Between 2000 and 2005
export const BerryDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-05-berry.webp"
    fallbackSvg={<BerryRawSVG className={props.className} />}
    {...props}
  />
);
export const BerrySVG = BerryDecoration;

// 6. Sprinkles: Between 2005 and 2010
export const SprinkleDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-06-sprinkles.webp"
    fallbackSvg={<SprinkleRawSVG className={props.className} />}
    {...props}
  />
);
export const SprinkleSVG = SprinkleDecoration;

// 7. Vanilla Flower: Between 2010 and 2015
export const VanillaFlowerDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-07-vanilla-flower.webp"
    fallbackSvg={<VanillaFlowerRawSVG className={props.className} />}
    {...props}
  />
);
export const VanillaFlowerSVG = VanillaFlowerDecoration;

// 8. Chocolate Drip: Between 2015 and 2016
export const ChocolateDripDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-08-chocolate-drip.webp"
    fallbackSvg={<ChocolateDripRawSVG className={props.className} />}
    {...props}
  />
);
export const ChocolateDripSVG = ChocolateDripDecoration;

// 9. Ice Cream Ribbon: Between 2016 and 2017–2019
export const IceCreamRibbonDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-09-ice-cream-ribbon.webp"
    fallbackSvg={<IceCreamRibbonRawSVG className={props.className} />}
    {...props}
  />
);
export const IceCreamRibbonSVG = IceCreamRibbonDecoration;

// 10. Celebration Confetti: Between 2024 and 2026
export const CelebrationSprinkleDecoration: React.FC<LegacyDecorationProps> = (props) => (
  <LegacyDecorationImage
    src="/assets/legacy/decorations/decor-10-celebration-confetti.webp"
    fallbackSvg={<CelebrationSprinkleRawSVG className={props.className} />}
    {...props}
  />
);
export const CelebrationSprinkleSVG = CelebrationSprinkleDecoration;
