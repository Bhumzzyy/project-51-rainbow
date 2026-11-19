/**
 * ============================================================================
 * 51 RAINBOW HERO BANNER — MASTER PRODUCT POSITION & OVERLAP CONFIGURATION
 * ============================================================================
 *
 * This is the SINGLE dedicated configuration file to adjust, position, resize,
 * rotate, mirror, and layer all 15 product artwork assets in the hero section.
 *
 * ----------------------------------------------------------------------------
 * 5-LAYER COMPOSITION PAINT ORDER ARCHITECTURE:
 * ----------------------------------------------------------------------------
 * Layer 1 (z-index: 2) : Background waves (Chocolate-Caramel #03 & Heritage Red #01)
 * Layer 2 (z-index: 5) : Rear products (`layer: "rear"`) tucked behind foreground waves
 * Layer 3 (z-index: 10): Foreground waves (Warm Vanilla Ivory #02 & Silky Cream #05)
 * Layer 4 (z-index: 15): Foreground products (`layer: "foreground"` | `"middle"`) overlapping waves
 * Layer 5 (z-index: 30): Central Editorial Typography (`EXPLORE THE PRODUCTS`)
 *
 * ----------------------------------------------------------------------------
 * MASTER SPREADSHEET OF ALL 15 PRODUCTS:
 * ----------------------------------------------------------------------------
 * #  | Product ID                 | Layer      | zIndex | Left | Top | Width | Rotation | FlipX | Mobile
 * ---+----------------------------+------------+--------+------+-----+-------+----------+-------+-------
 * 1  | hero-cone-top-left         | middle (4) | 12     | 1%   | 3%  | 14%   | -5deg    | No    | Yes
 * 2  | hero-fruit-bowl-left       | rear (2)   | 11     | 16%  | 13% | 11vw  | +4deg    | No    | No
 * 3  | hero-vibrant-tub-left      | rear (2)   | 7      | 6%   | 70% | 9%    | -3deg    | No    | No
 * 4  | hero-falooda-left          | middle (4) | 13     | 1%   | 67% | 10%   | +3deg    | No    | No
 * 5  | hero-coco-left             | middle (4) | 11     | 23%  | 72% | 9%    | -4deg    | No    | No
 * 6  | hero-smoothie-left         | fg (4)     | 17     | 12%  | 67% | 11%   | -2deg    | No    | No
 * 7  | hero-bonbons-left          | rear (2)   | 9      | 0%   | 78% | 8%    | +5deg    | No    | No
 * 8  | hero-cake-right            | middle (4) | 12     | 69%  | 4%  | 15%   | +4deg    | Yes   | Yes
 * 9  | hero-brownie-sundae-right  | rear (2)   | 11     | 35%  | 71% | 10%   | -5deg    | No    | No
 * 10 | hero-brownie-tub-right     | rear (2)   | 7      | 85%  | 15% | 12%   | +3deg    | No    | No
 * 11 | hero-thickshake-right      | middle (4) | 14     | 85%  | 61% | 11%   | -4deg    | No    | No
 * 12 | hero-milkshake-right       | middle (4) | 16     | 90%  | 71% | 9%    | +4deg    | No    | No
 * 13 | hero-sundae-right          | fg (4)     | 17     | 72%  | 67% | 12%   | +3deg    | No    | No
 * 14 | hero-live-bowl-right       | rear (2)   | 10     | 53%  | 74% | 10%   | -3deg    | No    | No
 * 15 | hero-family-tub-right      | rear (2)   | 8      | 79%  | 75% | 10%   | -5deg    | No    | No
 *
 * ----------------------------------------------------------------------------
 * HOW TO ADJUST PRODUCTS (QUICK GUIDE):
 * ----------------------------------------------------------------------------
 * 1. MOVE HORIZONTALLY (left / right):
 *    - Increase `left` (e.g. "8%" -> "12%") to move a product RIGHT.
 *    - Decrease `left` (e.g. "12%" -> "8%") to move a product LEFT.
 *
 * 2. MOVE VERTICALLY (up / down):
 *    - Increase `top` (e.g. "67%" -> "72%") to move a product DOWN.
 *    - Decrease `top` (e.g. "72%" -> "67%") to move a product UP.
 *
 * 3. RESIZE A PRODUCT:
 *    - Adjust `width` (e.g. "10%", "14%", or "clamp(120px, 11vw, 175px)").
 *    - Increase value to make larger, decrease to make smaller.
 *    - Aspect ratios are automatically preserved with `object-fit: contain`.
 *
 * 4. ROTATE A PRODUCT:
 *    - Positive values rotate clockwise: `rotation: 5`
 *    - Negative values rotate counter-clockwise: `rotation: -5`
 *
 * 5. HORIZONTAL MIRRORING:
 *    - `flipX: true` horizontally flips artwork (points slice/spoons inward).
 *    - `flipX: false` for original asset orientation.
 *
 * 6. LAYER ASSIGNMENT & STACKING:
 *    - `layer: "rear"` puts product in Layer 2 (behind vanilla wave #02).
 *    - `layer: "foreground"` or `"middle"` puts product in Layer 4 (in front of waves).
 *    - `zIndex` controls stacking order within that layer.
 *
 * 7. MOBILE / TABLET VISIBILITY & OVERRIDES:
 *    - `mobileVisible: true` displays on mobile screens (< 768px).
 *    - `tabletLeft`, `tabletTop`, `tabletWidth` for tablet viewports.
 *
 * 8. ANIMATION SETTINGS:
 *    - `floatAmount`: Vertical float travel distance in px.
 *    - `floatDuration`: Floating cycle period in seconds.
 *    - `animationDelay`: Entrance stagger delay.
 * ============================================================================
 */

export interface ProductPlacementConfig {
  id: string;
  src: string;
  alt: string;
  // Positioning in percentage coordinates (0% = top/left, 100% = bottom/right)
  left: string;
  top: string;
  // Width with responsive clamp (e.g. clamp(min, preferred, max))
  width: string;
  // Responsive tablet overrides
  tabletLeft?: string;
  tabletTop?: string;
  tabletWidth?: string;
  // Responsive mobile overrides
  mobileLeft?: string;
  mobileTop?: string;
  mobileWidth?: string;
  // Transforms & layering
  rotation: number;
  flipX: boolean;
  zIndex: number;
  opacity?: number;
  layer?: "rear" | "middle" | "foreground";
  // Responsive visibility
  desktopOnly?: boolean;
  mobileVisible: boolean;
  // Animation settings
  floatAmount?: number;
  floatDuration?: number;
  animationDelay?: number;
}

export const PRODUCTS_HERO_CONFIG: ProductPlacementConfig[] = [
  // ==========================================================================
  // LEFT SIDE COMPOSITIONS (7 Products with Natural Depth & Overlap)
  // ==========================================================================

  // 1. PRIMARY TOP-LEFT: Artisan 3-Scoop Waffle Cone with Pistachio & Strawberry
  {
    id: "hero-cone-top-left",
    src: "/images/assets/products/scoop-pistachio-strawberry-vanilla-splash.webp",
    alt: "51 Rainbow handcrafted 3-scoop waffle cone with pistachio and strawberry splash",
    left: "0.5%",
    top: "2%",
    width: "16%",
    tabletLeft: "0.5%",
    tabletTop: "2%",
    tabletWidth: "clamp(130px, 14vw, 180px)",
    mobileLeft: "-2%",
    mobileTop: "1%",
    mobileWidth: "105px",
    rotation: -5,
    flipX: false,
    zIndex: 12,
    layer: "middle",
    mobileVisible: true,
    floatAmount: -6,
    floatDuration: 5.2,
    animationDelay: 0.1,
  },

  // 2. REAR ACCENT: Fresh Fruit Cream Bowl with Berries & Fruits
  // Positioned inward and nestled slightly behind the cone & falooda (5–12% overlap)
  {
    id: "hero-fruit-bowl-left",
    src: "/images/assets/products/fresh-fruit-cream-bowl-splash.webp",
    alt: "Fresh fruit cream bowl with strawberries, kiwi, and grapes",
    left: "18%",
    top: "10%",
    width: "13.5%",
    tabletLeft: "11%",
    tabletTop: "15%",
    tabletWidth: "clamp(100px, 10vw, 140px)",
    rotation: 4,
    flipX: false,
    zIndex: 11,
    layer: "rear",
    desktopOnly: false,
    mobileVisible: false,
    floatAmount: 5,
    floatDuration: 5.8,
    animationDelay: 0.25,
  },

  // 3. REAR ACCENT: Vibrant Ice Cream Tub with Festive Splashes
  // Positioned along the outer left perimeter
  {
    id: "hero-vibrant-tub-left",
    src: "/images/assets/products/Vibrant Ice Cream Tub Dessert Splash.webp",
    alt: "Vibrant 51 Rainbow red ice cream tub with colorful splash",
    left: "1.5%",
    top: "76%",
    width: "clamp(115px, 12vw, 175px)",
    tabletLeft: "3%",
    tabletTop: "73%",
    tabletWidth: "clamp(100px, 12vw, 145px)",
    mobileLeft: "2%",
    mobileTop: "72%",
    mobileWidth: "100px",
    rotation: -4,
    flipX: true,
    zIndex: 18,
    layer: "foreground",
    desktopOnly: false,
    mobileVisible: false,
    floatAmount: -3,
    floatDuration: 6.2,
    animationDelay: 0.35,
  },

  // 4. PRIMARY MID-LEFT: Royal Rose Falooda Glass with Rose Petals & Sweet Vermicelli
  // Placed with comfortable breathing room below the cone
  {
    id: "hero-falooda-left",
    src: "/images/assets/products/falooda-rose-splash.webp",
    alt: "Royal rose falooda tall chilled glass with vivid rose syrup splash",
    left: "8%",
    top: "38%",
    width: "13%",
    tabletLeft: "0%",
    tabletTop: "38%",
    tabletWidth: "clamp(115px, 12vw, 160px)",
    rotation: 3,
    flipX: false,
    zIndex: 13,
    layer: "middle",
    mobileVisible: false,
    floatAmount: 6,
    floatDuration: 5.6,
    animationDelay: 0.2,
  },

  // 5. MID-LOWER ACCENT: Surti Cold Coco Mocha Glass
  // Tucked between falooda and mango smoothie
  {
    id: "hero-coco-left",
    src: "/images/assets/products/coco-chocolate-mocha-splash.webp",
    alt: "Surti cold coco glass with thick chocolate mocha splash",
    left: "24%",
    top: "70%",
    width: "14%",
    tabletLeft: "-1%",
    tabletTop: "62%",
    tabletWidth: "clamp(100px, 10.5vw, 140px)",
    rotation: -4,
    flipX: false,
    zIndex: 11,
    layer: "middle",
    mobileVisible: false,
    floatAmount: -5,
    floatDuration: 5.4,
    animationDelay: 0.4,
  },

  // 6. FOREGROUND LOWER-LEFT: Tropical Mango Mint Smoothie
  // Overlaps the bottom wave ribbons in front (zIndex: 16) for realistic scene depth!
  {
    id: "hero-smoothie-left",
    src: "/images/assets/products/smoothie-mango-mint-splash.webp",
    alt: "Tropical golden mango smoothie with fresh mint leaves and splash",
    left: "13%",
    top: "70%",
    width: "13%",
    tabletLeft: "5%",
    tabletTop: "52%",
    tabletWidth: "clamp(125px, 13.5vw, 175px)",
    rotation: -3,
    flipX: false,
    zIndex: 17,
    layer: "foreground",
    mobileVisible: true,
    floatAmount: -6,
    floatDuration: 5.0,
    animationDelay: 0.15,
  },

  // 7. WAVE REGION ACCENT: Chocolate Bonbons & Sweet Truffle Delights
  // Resting gently near the chocolate wave ribbon
  {
    id: "hero-bonbons-left",
    src: "/images/assets/products/more-delights-bonbons-splash.webp",
    alt: "51 Rainbow chocolate dessert bonbons and truffle delights",
    left: "-2%",
    top: "55%",
    width: "9%",
    tabletLeft: "15%",
    tabletTop: "70%",
    tabletWidth: "clamp(85px, 8vw, 115px)",
    rotation: 5,
    flipX: false,
    zIndex: 9,
    layer: "rear",
    desktopOnly: false,
    mobileVisible: false,
    floatAmount: 4,
    floatDuration: 6.4,
    animationDelay: 0.5,
  },

  // ==========================================================================
  // RIGHT SIDE COMPOSITIONS (8 Products with Natural Depth & Overlap)
  // ==========================================================================

  // 8. PRIMARY TOP-RIGHT: Strawberry Vanilla Celebration Ice Cream Cake Slice
  // Horizontally mirrored (flipX: true) so delicious slice points toward center
  {
    id: "hero-cake-right",
    src: "/images/assets/products/cake-strawberry-vanilla-splash.webp",
    alt: "Layered strawberry vanilla ice cream cake with fruit drip",
    left: "64%",
    top: "3%",
    width: "17%",
    tabletLeft: "82%",
    tabletTop: "2%",
    tabletWidth: "clamp(130px, 14vw, 185px)",
    mobileLeft: "76%",
    mobileTop: "1%",
    mobileWidth: "105px",
    rotation: 4,
    flipX: true,
    zIndex: 12,
    layer: "middle",
    mobileVisible: true,
    floatAmount: 6,
    floatDuration: 5.0,
    animationDelay: 0.1,
  },

  // 9. REAR ACCENT: Decadent Chocolate Brownie Sundae Glass
  // Tucked slightly inward and behind the cake slice (5–12% overlap)
  {
    id: "hero-brownie-sundae-right",
    src: "/images/assets/products/Decadent Chocolate Brownie Sundae Splash.webp",
    alt: "Decadent chocolate brownie sundae with chocolate cream swirls",
    left: "36%",
    top: "70%",
    width: "15%",
    tabletLeft: "73%",
    tabletTop: "15%",
    tabletWidth: "clamp(100px, 10.5vw, 145px)",
    rotation: -5,
    flipX: false,
    zIndex: 11,
    layer: "rear",
    desktopOnly: false,
    mobileVisible: false,
    floatAmount: -5,
    floatDuration: 5.7,
    animationDelay: 0.3,
  },

  // 10. REAR ACCENT: Fudgy Brownie Dessert Tub with Rich Drips
  // Positioned along the outer right perimeter
  {
    id: "hero-brownie-tub-right",
    src: "/images/assets/products/brownie-dessert-splash.webp",
    alt: "Warm gooey brownie dessert tub with chocolate fudge splash",
    left: "82%",
    top: "7%",
    width: "16%",
    tabletLeft: "89%",
    tabletTop: "22%",
    tabletWidth: "clamp(95px, 9.5vw, 130px)",
    rotation: 3,
    flipX: false,
    zIndex: 7,
    layer: "rear",
    desktopOnly: false,
    mobileVisible: true,
    floatAmount: 5,
    floatDuration: 6.1,
    animationDelay: 0.35,
  },

  // 11. PRIMARY MID-RIGHT: Gourmet Chocolate Thickshake with Brownie Chunks & Wafers
  {
    id: "hero-thickshake-right",
    src: "/images/assets/products/thickshake-chocolate-splash.webp",
    alt: "Loaded chocolate thickshake with brownie chunks and wafer sticks",
    left: "87%",
    top: "62%",
    width: "13%",
    tabletLeft: "84%",
    tabletTop: "38%",
    tabletWidth: "clamp(115px, 12vw, 160px)",
    rotation: -4,
    flipX: false,
    zIndex: 14,
    layer: "middle",
    mobileVisible: false,
    floatAmount: -6,
    floatDuration: 6.0,
    animationDelay: 0.2,
  },

  // 12. MID-LOWER ACCENT: Chilled Vanilla Milkshake with Cream Swirls
  // Positioned beside the thickshake and sundae
  {
    id: "hero-milkshake-right",
    src: "/images/assets/products/milkshake-vanilla-cream-splash.webp",
    alt: "Chilled vanilla cream milkshake with rich velvety splash",
    left: "80%",
    top: "33%",
    width: "13%",
    tabletLeft: "87%",
    tabletTop: "60%",
    tabletWidth: "clamp(100px, 10.5vw, 140px)",
    rotation: 4,
    flipX: false,
    zIndex: 16,
    layer: "middle",
    mobileVisible: false,
    floatAmount: 5,
    floatDuration: 5.5,
    animationDelay: 0.45,
  },

  // 13. FOREGROUND LOWER-RIGHT: Signature Chocolate Caramel Sundae with Fudge Drip
  // Overlaps the bottom wave ribbons in front (zIndex: 16) for realistic scene depth!
  {
    id: "hero-sundae-right",
    src: "/images/assets/products/sundae-chocolate-caramel-splash.webp",
    alt: "Towering chocolate caramel sundae bowl with cherries and chocolate chips",
    left: "66%",
    top: "64%",
    width: "14%",
    tabletLeft: "74%",
    tabletTop: "52%",
    tabletWidth: "clamp(130px, 14vw, 185px)",
    rotation: 3,
    flipX: false,
    zIndex: 17,
    layer: "foreground",
    mobileVisible: false,
    floatAmount: 5,
    floatDuration: 5.3,
    animationDelay: 0.15,
  },

  // 14. WAVE REGION ACCENT: Live Stone Marble Cold Ice Cream Bowl
  // Resting into the bottom wave ribbons
  {
    id: "hero-live-bowl-right",
    src: "/images/assets/products/live-ice-cream-bowl-splash.webp",
    alt: "Live marble stone ice cream bowl with crunchy waffle stick",
    left: "53%",
    top: "72%",
    width: "12%",
    tabletLeft: "66%",
    tabletTop: "68%",
    tabletWidth: "clamp(95px, 9.5vw, 130px)",
    rotation: -3,
    flipX: false,
    zIndex: 10,
    layer: "rear",
    desktopOnly: false,
    mobileVisible: false,
    floatAmount: -4,
    floatDuration: 5.9,
    animationDelay: 0.5,
  },

  // 15. LOWER-RIGHT CORNER ACCENT: 750ml Family Party Tub
  // Tucked along the bottom-right corner in the wave landscape
  {
    id: "hero-family-tub-right",
    src: "/images/assets/products/family-tub-splash.webp",
    alt: "51 Rainbow 750ml family ice cream tub with scoop splash",
    left: "77%",
    top: "70%",
    width: "11%",
    tabletLeft: "88%",
    tabletTop: "73%",
    tabletWidth: "clamp(90px, 9vw, 125px)",
    rotation: -5,
    flipX: false,
    zIndex: 8,
    layer: "rear",
    desktopOnly: false,
    mobileVisible: false,
    floatAmount: 4,
    floatDuration: 6.3,
    animationDelay: 0.55,
  },
];
