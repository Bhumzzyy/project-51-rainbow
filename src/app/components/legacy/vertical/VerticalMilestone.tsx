"use client";

import React, { useEffect, useRef, useState } from "react";
import { LegacyVerticalMilestoneData } from "@/data/legacy-vertical-data";
import { VerticalMilestoneImage } from "./VerticalMilestoneImage";
import { VerticalYear } from "./VerticalYear";
import { VerticalConnector } from "./VerticalConnector";

interface VerticalMilestoneProps {
  milestone: LegacyVerticalMilestoneData;
  index: number;
  position: "left" | "right";
  isPriority?: boolean;
}

export const VerticalMilestone: React.FC<VerticalMilestoneProps> = ({
  milestone,
  index,
  isPriority = false,
}) => {
  const milestoneRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Even index = Artwork on Left, Text on Right (1980, 1990, 2000...)
  // Odd index  = Text on Left, Artwork on Right (1985, 1995, 2005...)
  const isArtworkLeft = index % 2 === 0;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (milestoneRef.current) {
      observer.observe(milestoneRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Content block component
  const narrativeContent = (alignment: "left" | "right") => (
    <div
      className={`legacy-vertical__content-slot legacy-vertical__content-slot--${alignment}`}
    >
      <span className="legacy-vertical__index">{milestone.index}</span>
      <h2 className="legacy-vertical__heading">{milestone.heading}</h2>
      <p className="legacy-vertical__description">{milestone.description}</p>
    </div>
  );

  // Artwork block component
  const artworkContent = (
    <div className="legacy-vertical__artwork-slot">
      <VerticalMilestoneImage
        milestoneId={milestone.id}
        src={milestone.imageSrc}
        alt={milestone.alt}
        width={milestone.width}
        height={milestone.height}
        priority={isPriority}
      />
    </div>
  );

  return (
    <article
      id={milestone.id}
      ref={milestoneRef}
      data-milestone-index={index}
      className={`legacy-vertical__milestone legacy-vertical__milestone--${
        isArtworkLeft ? "art-left" : "art-right"
      } ${isVisible ? "legacy-vertical__milestone--visible" : ""}`}
      aria-label={`Milestone ${milestone.year}: ${milestone.heading}`}
    >
      {/* 1. LEFT COLUMN */}
      <div className="legacy-vertical__col legacy-vertical__col--left">
        {isArtworkLeft ? artworkContent : narrativeContent("right")}
      </div>

      {/* 2. CENTER SPINE: Year Marker & Static Crimson Connector on Central Timeline */}
      <div className="legacy-vertical__center-anchor">
        <VerticalYear year={milestone.year} />
        <VerticalConnector direction={isArtworkLeft ? "left" : "right"} />
      </div>

      {/* 3. RIGHT COLUMN */}
      <div className="legacy-vertical__col legacy-vertical__col--right">
        {isArtworkLeft ? narrativeContent("left") : artworkContent}
      </div>
    </article>
  );
};

export default VerticalMilestone;
