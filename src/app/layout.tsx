import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/common/Navbar";
import SiteFooter from "./components/common/SiteFooter";
import "./globals.css";

const shrikhand = localFont({
  src: "../../public/fonts/shrikhand/shrikhand-regular.ttf",
  variable: "--font-shrikhand",
  display: "swap",
});

const recoleta = localFont({
  src: "../../public/fonts/recoleta/recoleta-regular.woff2",
  variable: "--font-recoleta",
  display: "swap",
});

/* MIGRATED from 51-rainbow-latest-bhumi: 7-weight Recoleta font instance for migrated pages */
const recoletaFull = localFont({
  src: [
    {
      path: "../../public/fonts/recoleta/Recoleta-Font/WOFF2/Recoleta Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/recoleta/Recoleta-Font/WOFF2/Recoleta Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/recoleta/Recoleta-Font/WOFF2/Recoleta Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/recoleta/Recoleta-Font/WOFF2/Recoleta Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/recoleta/Recoleta-Font/WOFF2/Recoleta SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/recoleta/Recoleta-Font/WOFF2/Recoleta Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/recoleta/Recoleta-Font/WOFF2/Recoleta Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-recoleta-full",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: "Rainbow | Delightful Moments",
  description: "A warm and vibrant lifestyle brand experience with playful design and joyful color.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${shrikhand.variable} ${recoleta.variable} ${recoletaFull.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
