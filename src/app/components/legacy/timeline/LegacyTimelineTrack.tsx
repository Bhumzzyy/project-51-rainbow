"use client";

import React from "react";
import { LegacyMilestoneData } from "@/data/legacy-data";
import { LegacyMilestone } from "../milestones/LegacyMilestone";

interface LegacyTimelineTrackProps {
  trackRef: React.RefObject<HTMLDivElement | null>;
  milestones: LegacyMilestoneData[];
  activeIndex: number;
  milestonePositions?: number[];
  onSelectMilestone: (index: number) => void;
}

export const LegacyTimelineTrack: React.FC<LegacyTimelineTrackProps> = ({
  trackRef,
  milestones,
  activeIndex,
  onSelectMilestone,
}) => {
  return (
    <div
      ref={trackRef}
      className="relative flex items-center h-full w-max select-none will-change-transform"
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {/* ============================================================== */}
      {/* 1. THICK CONTINUOUS CENTRAL HORIZONTAL BLOOD-RED TIMELINE STRIP */}
      {/* ============================================================== */}
      <div
        className="legacy-timeline-bar absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-10"
        aria-hidden="true"
      >
        {/* Subtle rich top bevel highlight and bottom bevel shadow */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/25" />
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/20" />
      </div>

      {/* ============================================================== */}
      {/* 2. 14 ALTERNATING MILESTONES (Clean & Focused Storytelling)     */}
      {/* ============================================================== */}
      <div className="relative z-20 flex items-center w-max pl-10 sm:pl-16 md:pl-24 pr-48 sm:pr-72 md:pr-[400px]">
        {milestones.map((milestone, idx) => {
          const isActive = idx === activeIndex;
          const isPrevious = idx < activeIndex;
          const isUpcoming = idx > activeIndex;

          return (
            <LegacyMilestone
              key={milestone.id}
              milestone={milestone}
              index={idx}
              isActive={isActive}
              isPrevious={isPrevious}
              isUpcoming={isUpcoming}
              onSelect={() => onSelectMilestone(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LegacyTimelineTrack;
