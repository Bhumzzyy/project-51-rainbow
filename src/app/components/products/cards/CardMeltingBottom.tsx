import React from 'react';

interface CardMeltingBottomProps {
  bg: string;
  lip: string;
  variant?: number;
  className?: string;
}

// Broad, organic melting wave paths with rounded downward drips of varied widths and depths
// Specifically designed for product card bottoms, perfectly closing from (0,0) to (320,0)
const CARD_PATHS = [
  {
    // Variant 0: 3 delicious rounded drips (left medium, deep center-left drip, right medium drip)
    path: `M 0,0 L 320,0 L 320,12 C 305,12 298,34 282,34 C 268,34 262,14 246,14 C 234,14 226,20 216,20 C 206,20 198,12 188,12 C 174,12 164,46 146,46 C 128,46 120,12 104,12 C 90,12 84,28 70,28 C 56,28 48,12 32,12 C 20,12 10,12 0,12 Z`
  },
  {
    // Variant 1: Alternate organic rhythm (deep left drip, gentle center wave, deep right drip)
    path: `M 0,0 L 320,0 L 320,14 C 308,14 298,42 278,42 C 260,42 254,14 238,14 C 224,14 218,24 204,24 C 190,24 182,12 168,12 C 152,12 144,32 130,32 C 118,32 110,12 94,12 C 80,12 72,44 54,44 C 38,44 30,14 16,14 C 10,14 4,14 0,14 Z`
  }
];

export default function CardMeltingBottom({
  bg,
  lip,
  variant = 0,
  className = ''
}: CardMeltingBottomProps) {
  const current = CARD_PATHS[Math.abs(variant) % CARD_PATHS.length];

  return (
    <div
      aria-hidden="true"
      className={`product-card-melting-wave ${className}`}
    >
      <svg
        viewBox="0 0 320 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="card-wave-svg"
      >
        {/* Layer 1: Darker lip along bottom drip edges (offset 5px down) */}
        <path
          d={current.path}
          fill={lip}
          transform="translate(0, 5)"
        />
        {/* Layer 2: Seamless continuation of card body */}
        <path
          d={current.path}
          fill={bg}
        />
      </svg>
    </div>
  );
}
