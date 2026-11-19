// Timeline Engine
export * from "./timeline/LegacySection";
export * from "./timeline/LegacyTimelineViewport";
export * from "./timeline/LegacyTimelineTrack";

// Milestones
export * from "./milestones/LegacyMilestone";
export * from "./milestones/LegacyMilestoneImage";
export * from "./milestones/LegacyYear";
export * from "./milestones/LegacyConnector";

// Decorations
export * from "./decorations/LegacyDecorations";
export * from "./decorations/LegacyMilestoneSvg";
export * from "./decorations/LegacyFloatingDecorations";
export * from "./decorations/legacy-floating-config";

// Canonical Historical Data
export * from "@/data/legacy-data";

// Default Export
export { LegacySection as default, LegacySection as LegacyPage } from "./timeline/LegacySection";
