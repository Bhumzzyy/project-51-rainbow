import type { Metadata } from "next";
import VerticalSection from "@/app/components/legacy/vertical/VerticalSection";
import "@/styles/legacy-tokens.css";

export const metadata: Metadata = {
  title: "Our Heritage Journey | 51 RAINBOW — 1980 to 2026 Vertical Timeline",
  description:
    "Explore the 51 Rainbow Ice Cream vertical heritage timeline from our humble Baraf Gola cart in 1980 to 90+ franchises in 2026. Handcrafted recipes, natural ingredients, pure happiness.",
  openGraph: {
    title: "Our Heritage Journey | 51 RAINBOW — 1980 to 2026 Vertical Timeline",
    description:
      "Explore the 51 Rainbow Ice Cream vertical heritage timeline from our humble Baraf Gola cart in 1980 to 90+ franchises in 2026. Handcrafted recipes, natural ingredients, pure happiness.",
    images: ["/assets/legacy/legacy-baraf-gola.webp"],
  },
};

export default function VerticalLegacyPage() {
  return (
    <main className="legacy-vertical-wrapper relative w-full min-h-screen bg-[#FFFCEE] text-[#28231F] selection:bg-[#B9272F] selection:text-white">
      <VerticalSection />
    </main>
  );
}
