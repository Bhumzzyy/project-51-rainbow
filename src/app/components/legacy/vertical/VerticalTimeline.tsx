"use client";

import React from "react";
import { LegacyVerticalMilestoneData } from "@/data/legacy-vertical-data";
import { VerticalMilestone } from "./VerticalMilestone";

interface VerticalTimelineProps {
  milestones: LegacyVerticalMilestoneData[];
}

export const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ milestones }) => {
  return (
    <div
      className="legacy-vertical__timeline"
      role="region"
      aria-label="Heritage Timeline"
    >
      {/* Continuous Central Vertical Crimson Line (#B9272F) */}
      <div className="legacy-vertical__timeline-line" aria-hidden="true" />

      {/* 14 Alternating Milestones */}
      {milestones.map((milestone, idx) => {
        const position = idx % 2 === 0 ? "left" : "right";
        return (
          <VerticalMilestone
            key={milestone.id}
            milestone={milestone}
            index={idx}
            position={position}
            isPriority={idx < 2}
          />
        );
      })}
    </div>
  );
};

export default VerticalTimeline;
