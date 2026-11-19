"use client";

import React from "react";
import { LegacyMilestoneData } from "@/data/legacy-data";
import { LegacyMilestoneImage } from "./LegacyMilestoneImage";
import { LegacyYear } from "./LegacyYear";
import { LegacyConnector } from "./LegacyConnector";

interface LegacyMilestoneProps {
  milestone: LegacyMilestoneData;
  index: number;
  isActive: boolean;
  isPrevious: boolean;
  isUpcoming: boolean;
  onSelect?: () => void;
}

interface MilestoneTextBlockProps {
  milestone: LegacyMilestoneData;
  isActive: boolean;
  isTextTop: boolean;
}

const MilestoneTextBlock: React.FC<MilestoneTextBlockProps> = ({
  milestone,
  isActive,
  isTextTop,
}) => (
  <div
    className={`flex flex-col items-center text-center px-2 transition-all duration-300 mx-auto ${
      isActive ? "translate-y-0" : isTextTop ? "-translate-y-1" : "translate-y-1"
    }`}
    style={{ maxWidth: "var(--legacy-text-max-width)" }}
  >
    {/* Orange milestone index */}
    <span
      className="text-[12px] sm:text-[13px] md:text-[14px] font-bold tracking-[0.25em] uppercase text-[#E98745] mb-1 font-condensed"
      style={{ fontFamily: "var(--font-condensed), var(--font-recoleta-full), 'Recoleta', Georgia, serif" }}
    >
      {milestone.index}
    </span>

    {/* Bold Heading using centralized CSS variable */}
    <h3
      className={`legacy-milestone-heading font-black tracking-tight uppercase mb-2 font-condensed transition-colors duration-300 ${
        isActive ? "text-[#B9272F]" : "text-[#28231F]"
      }`}
    >
      {milestone.heading}
    </h3>

    {/* Description using centralized CSS variable */}
    <p className="legacy-milestone-body text-[#28231F]/90 font-normal line-clamp-4">
      {milestone.description}
    </p>
  </div>
);

export const LegacyMilestone: React.FC<LegacyMilestoneProps> = ({
  milestone,
  index,
  isActive,
  isPrevious,
  onSelect,
}) => {
  // Strict alternation:
  // Even index (0, 2, 4...) -> Milestone 1 (1980), 3 (1990)...: Text Top, Image Bottom
  // Odd index (1, 3, 5...)  -> Milestone 2 (1985), 4 (1995)...: Image Top, Text Bottom
  const isTextTop = index % 2 === 0;

  // Visual opacity & emphasis:
  // Active: full opacity, scale 1.0
  // Upcoming (from right): high opacity (0.92) so it is crisp & fully readable before active point
  // Previous (to left): gentle fade (0.70)
  let opacityClass = "opacity-100 scale-100";
  if (isPrevious) {
    opacityClass = "opacity-70 scale-[0.98] hover:opacity-90";
  } else if (!isActive) {
    opacityClass = "opacity-92 scale-[0.99] hover:opacity-100";
  }

  return (
    <article
      id={milestone.id}
      data-milestone-index={index}
      onClick={onSelect}
      className={`legacy-milestone-col relative flex flex-col items-center justify-between shrink-0 select-none cursor-pointer transition-all duration-300 ease-out ${opacityClass} h-[560px] sm:h-[620px] md:h-[680px] lg:h-[720px]`}
      aria-label={`Milestone ${milestone.year}: ${milestone.heading}`}
      aria-current={isActive ? "step" : undefined}
    >
      {/* ============================================================== */}
      {/* TOP SECTION (Above Timeline)                                   */}
      {/* ============================================================== */}
      <div className="w-full flex-1 flex flex-col items-center justify-end pb-3 sm:pb-4 relative z-20">
        {isTextTop ? (
          <>
            <MilestoneTextBlock
              milestone={milestone}
              isActive={isActive}
              isTextTop={isTextTop}
            />
            <LegacyConnector direction="up" isActive={isActive} className="mt-3" />
          </>
        ) : (
          <div className="w-full flex items-center justify-center pb-2">
            <LegacyMilestoneImage
              milestoneId={milestone.id}
              src={milestone.imageSrc}
              alt={milestone.alt}
              width={milestone.width}
              height={milestone.height}
              isActive={isActive}
            />
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* CENTER TIMELINE SECTION (Directly inside red line)             */}
      {/* ============================================================== */}
      <div
        className="relative z-30 flex items-center justify-center my-0 py-0"
        style={{ height: "var(--legacy-timeline-height)" }}
      >
        <LegacyYear
          year={milestone.year}
          yearTop={milestone.yearTop}
          yearBottom={milestone.yearBottom}
          isActive={isActive}
        />
      </div>

      {/* ============================================================== */}
      {/* BOTTOM SECTION (Below Timeline)                                */}
      {/* ============================================================== */}
      <div className="w-full flex-1 flex flex-col items-center justify-start pt-3 sm:pt-4 relative z-20">
        {isTextTop ? (
          <div className="w-full flex items-center justify-center pt-2">
            <LegacyMilestoneImage
              milestoneId={milestone.id}
              src={milestone.imageSrc}
              alt={milestone.alt}
              width={milestone.width}
              height={milestone.height}
              isActive={isActive}
            />
          </div>
        ) : (
          <>
            <LegacyConnector direction="down" isActive={isActive} className="mb-3" />
            <MilestoneTextBlock
              milestone={milestone}
              isActive={isActive}
              isTextTop={isTextTop}
            />
          </>
        )}
      </div>
    </article>
  );
};

export default LegacyMilestone;
