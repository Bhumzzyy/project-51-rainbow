import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Rainbow | Delightful Moments",
  description: "A warm and vibrant lifestyle brand experience with playful design and joyful color.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${shrikhand.variable} ${recoleta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
