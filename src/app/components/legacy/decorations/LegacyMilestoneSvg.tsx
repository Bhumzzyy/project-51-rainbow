"use client";

import React from "react";

interface MilestoneSvgProps {
  milestoneId: string;
  className?: string;
}

export const LegacyMilestoneSvg: React.FC<MilestoneSvgProps> = ({
  milestoneId,
  className = "w-full h-auto max-w-[420px]",
}) => {
  switch (milestoneId) {
    case "milestone-01":
      // Traditional Baraf Gola Street Cart
      return (
        <svg viewBox="0 0 400 300" fill="none" className={className} aria-label="Baraf Gola Cart Illustration">
          <circle cx="200" cy="150" r="110" fill="#E98745" fillOpacity="0.22" />
          <path d="M70 230 H330" stroke="#28231F" strokeWidth="3" strokeLinecap="round" />
          <path d="M100 120 L120 70 H280 L300 120 Z" fill="#FFF9D6" stroke="#28231F" strokeWidth="2.5" />
          <line x1="120" y1="70" x2="120" y2="120" stroke="#28231F" strokeWidth="1.5" />
          <line x1="160" y1="70" x2="160" y2="120" stroke="#28231F" strokeWidth="1.5" />
          <line x1="200" y1="70" x2="200" y2="120" stroke="#28231F" strokeWidth="1.5" />
          <line x1="240" y1="70" x2="240" y2="120" stroke="#28231F" strokeWidth="1.5" />
          <line x1="280" y1="70" x2="280" y2="120" stroke="#28231F" strokeWidth="1.5" />
          <rect x="115" y="120" width="170" height="70" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          {/* Cart Shaver Machine */}
          <rect x="175" y="130" width="50" height="50" fill="#FFF9D6" stroke="#28231F" strokeWidth="2" />
          <circle cx="200" cy="155" r="14" stroke="#28231F" strokeWidth="2" />
          <line x1="200" y1="130" x2="200" y2="122" stroke="#28231F" strokeWidth="3" />
          <circle cx="200" cy="120" r="4" fill="#B9272F" />
          {/* Wheels */}
          <circle cx="140" cy="225" r="28" fill="#FAF8F0" stroke="#28231F" strokeWidth="3" />
          <circle cx="140" cy="225" r="6" fill="#28231F" />
          <line x1="112" y1="225" x2="168" y2="225" stroke="#28231F" strokeWidth="1.5" />
          <line x1="140" y1="197" x2="140" y2="253" stroke="#28231F" strokeWidth="1.5" />
          <circle cx="260" cy="225" r="28" fill="#FAF8F0" stroke="#28231F" strokeWidth="3" />
          <circle cx="260" cy="225" r="6" fill="#28231F" />
          <line x1="232" y1="225" x2="288" y2="225" stroke="#28231F" strokeWidth="1.5" />
          <line x1="260" y1="197" x2="260" y2="253" stroke="#28231F" strokeWidth="1.5" />
        </svg>
      );

    case "milestone-02":
      // Vintage Sharbat Glass
      return (
        <svg viewBox="0 0 300 360" fill="none" className={className} aria-label="Sharbat Glass Illustration">
          <circle cx="150" cy="180" r="105" fill="#E98745" fillOpacity="0.22" />
          <path d="M100 80 L115 280 H185 L200 80 Z" fill="#FFF9D6" stroke="#28231F" strokeWidth="2.5" />
          <path d="M110 160 L116 270 H184 L190 160 Z" fill="#E98745" fillOpacity="0.6" stroke="#28231F" strokeWidth="1.5" />
          <line x1="150" y1="40" x2="140" y2="270" stroke="#B9272F" strokeWidth="3" strokeLinecap="round" />
          <path d="M165 75 Q185 60 195 75 Q175 90 165 75" fill="#28231F" />
          <path d="M165 75 Q150 55 135 68 Q155 80 165 75" fill="#28231F" />
          {/* Base */}
          <ellipse cx="150" cy="290" rx="45" ry="10" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
        </svg>
      );

    case "milestone-03":
      // Manufacturing Facility
      return (
        <svg viewBox="0 0 400 300" fill="none" className={className} aria-label="Manufacturing Facility Illustration">
          <circle cx="200" cy="150" r="115" fill="#E98745" fillOpacity="0.22" />
          <path d="M80 230 H320" stroke="#28231F" strokeWidth="3" />
          <rect x="110" y="110" width="55" height="110" rx="10" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <rect x="180" y="90" width="60" height="130" rx="12" fill="#FFF9D6" stroke="#28231F" strokeWidth="2.5" />
          <rect x="255" y="120" width="50" height="100" rx="8" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          {/* Pipes */}
          <path d="M135 110 V70 H210 V90" stroke="#28231F" strokeWidth="2.5" fill="none" />
          <path d="M210 70 H280 V120" stroke="#28231F" strokeWidth="2.5" fill="none" />
          <line x1="285" y1="230" x2="285" y2="50" stroke="#28231F" strokeWidth="3" />
          <path d="M285 50 Q295 40 300 48 T315 35" stroke="#28231F" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        </svg>
      );

    case "milestone-04":
      // Thick Shake in Fountain Glass
      return (
        <svg viewBox="0 0 300 360" fill="none" className={className} aria-label="Thick Shake Illustration">
          <circle cx="150" cy="180" r="105" fill="#E98745" fillOpacity="0.22" />
          <path d="M105 100 Q150 120 195 100 L175 270 H125 Z" fill="#FFF9D6" stroke="#28231F" strokeWidth="2.5" />
          {/* Cream swirl */}
          <path d="M115 100 Q150 60 185 100" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <path d="M130 75 Q150 45 170 75" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <circle cx="150" cy="45" r="9" fill="#B9272F" />
          {/* Straw */}
          <line x1="165" y1="30" x2="135" y2="260" stroke="#E98745" strokeWidth="4" strokeLinecap="round" />
          {/* Pedestal Base */}
          <path d="M135 270 L125 300 H175 L165 270 Z" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
        </svg>
      );

    case "milestone-05":
      // Sabras Sharbat Bottles
      return (
        <svg viewBox="0 0 360 300" fill="none" className={className} aria-label="Sabras Bottles Illustration">
          <circle cx="180" cy="150" r="110" fill="#E98745" fillOpacity="0.22" />
          {/* Left Bottle */}
          <rect x="110" y="110" width="55" height="120" rx="8" fill="#B9272F" fillOpacity="0.8" stroke="#28231F" strokeWidth="2" />
          <rect x="125" y="70" width="25" height="40" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <rect x="120" y="140" width="35" height="50" fill="#FFF9D6" stroke="#28231F" strokeWidth="1.5" />
          {/* Right Bottle */}
          <rect x="195" y="110" width="55" height="120" rx="8" fill="#E98745" fillOpacity="0.85" stroke="#28231F" strokeWidth="2" />
          <rect x="210" y="70" width="25" height="40" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <rect x="205" y="140" width="35" height="50" fill="#FFF9D6" stroke="#28231F" strokeWidth="1.5" />
        </svg>
      );

    case "milestone-06":
      // 51 Rainbow Tub with Scoops
      return (
        <svg viewBox="0 0 340 320" fill="none" className={className} aria-label="Ice Cream Tub Illustration">
          <circle cx="170" cy="160" r="105" fill="#E98745" fillOpacity="0.22" />
          {/* Tub */}
          <path d="M95 180 L115 280 H225 L245 180 Z" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          <rect x="125" y="210" width="90" height="45" rx="4" fill="#FFF9D6" stroke="#28231F" strokeWidth="1.5" />
          <text x="170" y="238" textAnchor="middle" fill="#28231F" fontSize="16" fontWeight="bold" fontFamily="sans-serif">51</text>
          {/* Scoops */}
          <circle cx="140" cy="160" r="32" fill="#B9272F" fillOpacity="0.75" stroke="#28231F" strokeWidth="2" />
          <circle cx="200" cy="160" r="32" fill="#E98745" fillOpacity="0.75" stroke="#28231F" strokeWidth="2" />
          <circle cx="170" cy="130" r="30" fill="#FFF9D6" stroke="#28231F" strokeWidth="2" />
        </svg>
      );

    case "milestone-07":
      // Surat Store Front
      return (
        <svg viewBox="0 0 420 280" fill="none" className={className} aria-label="Surat Store Illustration">
          <circle cx="210" cy="140" r="110" fill="#E98745" fillOpacity="0.22" />
          <path d="M60 230 H360" stroke="#28231F" strokeWidth="3" />
          <rect x="110" y="110" width="200" height="120" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          {/* Signboard */}
          <rect x="95" y="80" width="230" height="40" fill="#28231F" />
          <text x="210" y="105" textAnchor="middle" fill="#FFF9D6" fontSize="14" fontWeight="bold" letterSpacing="2">51 RAINBOW</text>
          {/* Glass windows */}
          <rect x="125" y="135" width="60" height="75" stroke="#28231F" strokeWidth="2" fill="#FFF9D6" fillOpacity="0.5" />
          <rect x="195" y="135" width="45" height="95" stroke="#28231F" strokeWidth="2" fill="#FAF8F0" />
          <rect x="250" y="135" width="45" height="75" stroke="#28231F" strokeWidth="2" fill="#FFF9D6" fillOpacity="0.5" />
        </svg>
      );

    case "milestone-08":
      // Franchise Partnership Handshake
      return (
        <svg viewBox="0 0 360 260" fill="none" className={className} aria-label="Franchise Handshake Illustration">
          <circle cx="180" cy="130" r="95" fill="#E98745" fillOpacity="0.22" />
          <path d="M70 160 L140 120 L180 145 L150 185 Z" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          <path d="M290 160 L220 120 L180 145 L210 185 Z" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          <circle cx="180" cy="145" r="18" fill="#FFF9D6" stroke="#28231F" strokeWidth="2" />
          <line x1="165" y1="140" x2="195" y2="150" stroke="#28231F" strokeWidth="2" />
          <line x1="165" y1="150" x2="195" y2="140" stroke="#28231F" strokeWidth="2" />
        </svg>
      );

    case "milestone-09":
      // Live Ice Cream on Cold Slab
      return (
        <svg viewBox="0 0 360 280" fill="none" className={className} aria-label="Live Ice Cream Illustration">
          <circle cx="180" cy="140" r="105" fill="#E98745" fillOpacity="0.22" />
          {/* Cold Stone Round Pan */}
          <ellipse cx="180" cy="190" rx="120" ry="45" fill="#FAF8F0" stroke="#28231F" strokeWidth="3" />
          <ellipse cx="180" cy="190" rx="95" ry="32" fill="#FFF9D6" stroke="#28231F" strokeWidth="1.5" />
          {/* Spatulas */}
          <path d="M150 140 L165 190" stroke="#28231F" strokeWidth="5" strokeLinecap="round" />
          <rect x="155" y="180" width="22" height="15" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <path d="M210 140 L195 190" stroke="#28231F" strokeWidth="5" strokeLinecap="round" />
          <rect x="183" y="180" width="22" height="15" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
        </svg>
      );

    case "milestone-10":
      // Expanding Beyond Borders (USA, KSA, UAE)
      return (
        <svg viewBox="0 0 400 280" fill="none" className={className} aria-label="Global Expansion Illustration">
          <circle cx="200" cy="140" r="105" fill="#E98745" fillOpacity="0.22" />
          <path d="M60 230 H340" stroke="#28231F" strokeWidth="3" />
          {/* Statue of Liberty Torch/Silhouette (USA) */}
          <path d="M100 230 V160 L108 135 H112 L120 160 V230 Z" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <circle cx="110" cy="120" r="5" fill="#B9272F" />
          {/* Burj Khalifa (UAE) */}
          <path d="M190 230 L198 80 L200 45 L202 80 L210 230 Z" fill="#FFF9D6" stroke="#28231F" strokeWidth="2.5" />
          {/* Mosque Dome (KSA) */}
          <path d="M255 230 V180 Q275 150 295 180 V230 Z" fill="#FAF8F0" stroke="#28231F" strokeWidth="2" />
          <line x1="275" y1="150" x2="275" y2="135" stroke="#28231F" strokeWidth="2" />
        </svg>
      );

    case "milestone-11":
      // India Map with 70+ Franchise Markers
      return (
        <svg viewBox="0 0 340 320" fill="none" className={className} aria-label="India Franchises Map Illustration">
          <circle cx="170" cy="160" r="110" fill="#E98745" fillOpacity="0.22" />
          {/* Stylized outline of India */}
          <path
            d="M170 65 L195 90 L185 120 L230 150 L210 190 L180 250 L160 210 L130 180 L120 140 L150 110 Z"
            fill="#FAF8F0"
            stroke="#28231F"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Franchise Pins */}
          {[
            [165, 105], [180, 130], [150, 145], [170, 160], [195, 165],
            [145, 175], [175, 195], [165, 220],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="4.5" fill="#B9272F" />
              <circle cx={cx} cy={cy} r="1.5" fill="#FFF9D6" />
            </g>
          ))}
        </svg>
      );

    case "milestone-12":
      // Fresh Soft Serve Ice Cream
      return (
        <svg viewBox="0 0 280 340" fill="none" className={className} aria-label="Fresh Ice Cream Illustration">
          <circle cx="140" cy="170" r="100" fill="#E98745" fillOpacity="0.22" />
          {/* Cup */}
          <path d="M85 185 L100 280 H180 L195 185 Z" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          <text x="140" y="240" textAnchor="middle" fill="#28231F" fontSize="13" fontWeight="bold">51 Fresh</text>
          {/* Swirl */}
          <path
            d="M90 185 Q140 160 190 185 Q175 140 180 120 Q140 95 160 80 Q140 55 140 60 Q120 85 110 110 Q105 145 90 185 Z"
            fill="#FFF9D6"
            stroke="#28231F"
            strokeWidth="2"
          />
        </svg>
      );

    case "milestone-13":
      // Layered Ice Cream Cake
      return (
        <svg viewBox="0 0 340 300" fill="none" className={className} aria-label="Ice Cream Cake Illustration">
          <circle cx="170" cy="150" r="105" fill="#E98745" fillOpacity="0.22" />
          {/* Plate */}
          <ellipse cx="170" cy="245" rx="125" ry="20" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          {/* Cake Tier */}
          <path d="M75 170 V225 Q170 260 265 225 V170 Z" fill="#FFF9D6" stroke="#28231F" strokeWidth="2.5" />
          <ellipse cx="170" cy="170" rx="95" ry="30" fill="#28231F" />
          {/* Chocolate drip */}
          <path d="M75 170 Q95 200 110 175 Q130 205 150 175 Q170 210 190 175 Q210 205 230 175 Q250 200 265 170" fill="#28231F" />
          {/* Toppings / Strawberries */}
          <circle cx="140" cy="145" r="14" fill="#B9272F" stroke="#28231F" strokeWidth="1.5" />
          <circle cx="170" cy="140" r="16" fill="#B9272F" stroke="#28231F" strokeWidth="1.5" />
          <circle cx="200" cy="145" r="14" fill="#B9272F" stroke="#28231F" strokeWidth="1.5" />
        </svg>
      );

    case "milestone-14":
      // Modern 90+ Franchises Store
      return (
        <svg viewBox="0 0 420 280" fill="none" className={className} aria-label="Modern 2026 Flagship Store Illustration">
          <circle cx="210" cy="140" r="115" fill="#E98745" fillOpacity="0.22" />
          <path d="M50 230 H370" stroke="#28231F" strokeWidth="3" />
          {/* Store Canopy */}
          <path d="M80 110 L110 70 H310 L340 110 Z" fill="#E98745" fillOpacity="0.85" stroke="#28231F" strokeWidth="2.5" />
          <rect x="75" y="110" width="270" height="40" fill="#FAF8F0" stroke="#28231F" strokeWidth="2.5" />
          <text x="210" y="136" textAnchor="middle" fill="#28231F" fontSize="16" fontWeight="bold" letterSpacing="3">51 RAINBOW</text>
          {/* Glass Doors & Windows */}
          <rect x="90" y="150" width="240" height="80" fill="#FFF9D6" fillOpacity="0.4" stroke="#28231F" strokeWidth="2" />
          <line x1="170" y1="150" x2="170" y2="230" stroke="#28231F" strokeWidth="2" />
          <line x1="250" y1="150" x2="250" y2="230" stroke="#28231F" strokeWidth="2" />
          {/* Balloons */}
          <circle cx="65" cy="120" r="10" fill="#B9272F" />
          <circle cx="55" cy="135" r="9" fill="#E98745" />
          <circle cx="355" cy="120" r="10" fill="#B9272F" />
          <circle cx="365" cy="135" r="9" fill="#E98745" />
        </svg>
      );

    default:
      return (
        <div className="w-full h-48 bg-[#FFF9D6] border border-[#28231F]/20 rounded-md flex items-center justify-center p-6 text-center">
          <span className="font-serif text-lg font-bold text-[#28231F]">51 Rainbow Heritage</span>
        </div>
      );
  }
};
