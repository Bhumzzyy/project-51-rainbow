import type { Metadata } from "next";
import { LegacySection } from "@/app/components/legacy/timeline/LegacySection";
import "@/styles/legacy-tokens.css";

export const metadata: Metadata = {
  title: "Our Legacy | 51 RAINBOW — Heritage from 1980 to 2026",
  description:
    "Explore the 51 Rainbow Ice Cream legacy from our humble Baraf Gola cart in 1980 to 90+ franchises in 2026. Handcrafted recipes, natural ingredients, pure happiness.",
  openGraph: {
    title: "Our Legacy | 51 RAINBOW — Heritage from 1980 to 2026",
    description:
      "Explore the 51 Rainbow Ice Cream legacy from our humble Baraf Gola cart in 1980 to 90+ franchises in 2026. Handcrafted recipes, natural ingredients, pure happiness.",
    images: ["/assets/legacy/legacy-baraf-gola.webp"],
  },
};

export default function LegacyPage() {
  return (
    <main className="legacy-wrapper relative w-full min-h-screen bg-[#FFFCEE] text-[#28231F] selection:bg-[#B9272F] selection:text-white">
      <LegacySection />
    </main>
  );
}
