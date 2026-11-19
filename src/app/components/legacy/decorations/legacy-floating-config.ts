/**
 * ============================================================================
 * 51 RAINBOW ICE CREAM — LEGACY FLOATING DECORATIONS CONFIGURATION
 * ============================================================================
 *
 * Decorative floating illustrations have been removed per design refinement
 * to ensure a clean, uncluttered, focused historical timeline experience.
 */

export type FloatingAnimationType = "float" | "bounce" | "drift" | "static";

export interface FloatingDecorationConfig {
  id: string;
  src: string;
  alt: string;

  anchor: {
    type: "milestone" | "between";
    milestoneIndex: number;
    nextMilestoneIndex?: number;
    side: "top" | "bottom";
  };

  position: {
    x: number;
    y: number;
    unit: "px" | "%";
  };

  responsivePosition?: {
    tablet?: { x?: number; y?: number };
    mobile?: { x?: number; y?: number };
  };

  size: {
    desktop: number;
    tablet: number;
    mobile: number;
    maxWidth?: number;
  };

  transform: {
    rotate: number;
    scale: number;
    flipX: boolean;
    flipY: boolean;
  };

  appearance: {
    opacity: number;
    zIndex: number;
  };

  animation: {
    type: FloatingAnimationType;
    duration: number;
    delay: number;
    distanceX: number;
    distanceY: number;
    rotation: number;
    scale: number;
  };

  responsive: {
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
  };

  enabled: boolean;
}

/**
 * Empty configuration: Floating fruit, leaves, lemons, and ice cubes removed
 * to maintain a clean vintage storytelling timeline.
 */
export const FLOATING_DECORATIONS_CONFIG: FloatingDecorationConfig[] = [];
