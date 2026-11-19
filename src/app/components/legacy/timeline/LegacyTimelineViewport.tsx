"use client";

import React from "react";
import { LegacyMilestoneData } from "@/data/legacy-data";
import { LegacyTimelineTrack } from "./LegacyTimelineTrack";

interface LegacyTimelineViewportProps {
  trackRef: React.RefObject<HTMLDivElement | null>;
  milestones: LegacyMilestoneData[];
  activeIndex: number;
  scrollProgress?: number;
  milestonePositions?: number[];
  onSelectMilestone: (index: number) => void;
}

export const LegacyTimelineViewport: React.FC<LegacyTimelineViewportProps> = ({
  trackRef,
  milestones,
  activeIndex,
  milestonePositions,
  onSelectMilestone,
}) => {
  return (
    <div
      className="sticky top-[var(--navbar-height,80px)] h-[calc(100vh-var(--navbar-height,80px))] w-full overflow-hidden bg-[#FFFCEE] text-[#28231F] flex items-center select-none z-10"
      aria-label="51 Rainbow Interactive Horizontal Heritage Timeline"
    >
      {/* Continuous background thick red line spanning across the viewport */}
      <div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0"
        style={{
          height: "var(--legacy-timeline-height)",
          backgroundColor: "var(--legacy-timeline-color)",
        }}
        aria-hidden="true"
      />

      {/* Horizontally Translated Track */}
      <main className="relative flex-1 w-full h-full overflow-hidden flex items-center">
        <LegacyTimelineTrack
          trackRef={trackRef}
          milestones={milestones}
          activeIndex={activeIndex}
          milestonePositions={milestonePositions}
          onSelectMilestone={onSelectMilestone}
        />
      </main>
    </div>
  );
};

export default LegacyTimelineViewport;
