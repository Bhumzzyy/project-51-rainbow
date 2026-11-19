export interface CategoryTheme {
  bg: string;
  waveDarker?: string;
  accent: string;
  cardBg: string;
  badgeBg: string;
  text: string;
  softBg: string;
  gradient: string;
  dripColor: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  folder: string;
  tagline: string;
  composition: string;
  compositionFallback: string;
  bannerImage: string;
  theme: CategoryTheme;
  productCount: number;
}

export const CATEGORIES: ProductCategory[] = [
  {
    id: "scoop",
    name: "Artisan Scoops",
    subtitle: "Small-batch, hand-scooped pure indulgence made with 100% real milk.",
    slug: "scoop",
    folder: "Scoop",
    tagline: "Signature 51 Rainbow Scoops",
    composition: "/images/51_images/compositions/scoop-composition.webp",
    compositionFallback: "/images/51_images/compositions/scoop-composition.webp",
    bannerImage: "/images/product_categories_banner/artisan-scoops-banner.webp",
    theme: {
      bg: "#FFC5A8",
      waveDarker: "#EAA988",
      accent: "#D84315",
      cardBg: "#FFFFFF",
      badgeBg: "#FFE3D4",
      text: "#2C1810",
      softBg: "#FFF1E8",
      gradient: "linear-gradient(180deg, #FFC5A8 0%, #FFB694 100%)",
      dripColor: "#EAA988"
    },
    productCount: 25
  },
  {
    id: "falooda",
    name: "Royal Faloodas",
    subtitle: "Silky vermicelli, fragrant rose, sabja seeds, and rich scoops in tall chilled glasses.",
    slug: "falooda",
    folder: "falooda",
    tagline: "Centuries of Sweet Refreshment",
    composition: "/images/51_images/compositions/falooda-composition.webp",
    compositionFallback: "/images/51_images/compositions/falooda-composition.webp",
    bannerImage: "/images/product_categories_banner/royal-falooda-banner.webp",
    theme: {
      bg: "#F28DA7",
      waveDarker: "#D9738D",
      accent: "#C2185B",
      cardBg: "#FFFFFF",
      badgeBg: "#FCD5DF",
      text: "#2C1810",
      softBg: "#FDE8EE",
      gradient: "linear-gradient(180deg, #F28DA7 0%, #EA7A97 100%)",
      dripColor: "#D9738D"
    },
    productCount: 10
  },
  {
    id: "thickshakes",
    name: "Gourmet Thickshakes",
    subtitle: "Insanely thick, loaded shakes crafted with real ice cream and decadent crunches.",
    slug: "thickshakes",
    folder: "Thickshake",
    tagline: "Zero Ice. 100% Thick Cream.",
    composition: "/images/51_images/compositions/thickshakes-composition.webp",
    compositionFallback: "/images/51_images/compositions/thickshakes-composition.webp",
    bannerImage: "/images/product_categories_banner/gourmet-thickshakes-banner.webp",
    theme: {
      bg: "#F7D778",
      waveDarker: "#DEBE5C",
      accent: "#8D5B00",
      cardBg: "#FFFFFF",
      badgeBg: "#FEEBB0",
      text: "#2C1810",
      softBg: "#FFF5D4",
      gradient: "linear-gradient(180deg, #F7D778 0%, #F3CA5A 100%)",
      dripColor: "#DEBE5C"
    },
    productCount: 35
  },
  {
    id: "sundaes",
    name: "Signature Sundaes",
    subtitle: "Towering creations of warm brownies, rich sauces, nutty clusters, and cool scoops.",
    slug: "sundaes",
    folder: "sundaes",
    tagline: "The Ultimate Dessert Celebration",
    composition: "/images/51_images/compositions/sundaes-composition.webp",
    compositionFallback: "/images/51_images/compositions/sundaes-composition.webp",
    bannerImage: "/images/product_categories_banner/signature-sundaes-banner.webp",
    theme: {
      bg: "#D2B8F2",
      waveDarker: "#BA9FE0",
      accent: "#6A1B9A",
      cardBg: "#FFFFFF",
      badgeBg: "#EBDCFB",
      text: "#2C1810",
      softBg: "#F5ECFE",
      gradient: "linear-gradient(180deg, #D2B8F2 0%, #C4A4EA 100%)",
      dripColor: "#BA9FE0"
    },
    productCount: 7
  },
  {
    id: "cakes",
    name: "Ice Cream Cakes",
    subtitle: "Layered masterpieces combining moist sponge cake with velvety ice cream.",
    slug: "cakes",
    folder: "cake",
    tagline: "Slice Into Ice Cream Magic",
    composition: "/images/51_images/compositions/cakes-composition.webp",
    compositionFallback: "/images/51_images/compositions/cakes-composition.webp",
    bannerImage: "/images/product_categories_banner/strawberry-ice-cream-cake-banner.webp",
    theme: {
      bg: "#F6A4B5",
      waveDarker: "#DD8A9B",
      accent: "#AD1457",
      cardBg: "#FFFFFF",
      badgeBg: "#FCE1E7",
      text: "#2C1810",
      softBg: "#FDF0F3",
      gradient: "linear-gradient(180deg, #F6A4B5 0%, #EE90A3 100%)",
      dripColor: "#DD8A9B"
    },
    productCount: 8
  },
  {
    id: "waffles",
    name: "Belgian Waffles",
    subtitle: "Crispy, golden-baked waffles drizzled with warm sauces and topped with cool scoops.",
    slug: "waffles",
    folder: "waffle",
    tagline: "Warm Crunch Meets Cool Cream",
    composition: "/images/51_images/compositions/waffles-composition.webp",
    compositionFallback: "/images/51_images/compositions/waffles-composition.webp",
    bannerImage: "/images/product_categories_banner/belgian-waffles-banner.webp",
    theme: {
      bg: "#A9DDF2",
      waveDarker: "#8DC4DB",
      accent: "#0277BD",
      cardBg: "#FFFFFF",
      badgeBg: "#D8F1FB",
      text: "#2C1810",
      softBg: "#ECF8FD",
      gradient: "linear-gradient(180deg, #A9DDF2 0%, #95D1E9 100%)",
      dripColor: "#8DC4DB"
    },
    productCount: 8
  },
  {
    id: "brownie-desserts",
    name: "Brownie Dessert Tubs",
    subtitle: "Fudgy, gooey brownie tubs layered with rich Belgian chocolate, Biscoff, and Nutella.",
    slug: "brownie-desserts",
    folder: "brownie desert",
    tagline: "Gooey, Fudgy, Spoonable Joy",
    composition: "/images/51_images/compositions/brownie-desserts-composition.webp",
    compositionFallback: "/images/51_images/compositions/brownie-desserts-composition.webp",
    bannerImage: "/images/product_categories_banner/lavender-brownie-banner.webp",
    theme: {
      bg: "#B8DDA0",
      waveDarker: "#9EC584",
      accent: "#2E7D32",
      cardBg: "#FFFFFF",
      badgeBg: "#DCF2CE",
      text: "#2C1810",
      softBg: "#EDFAE5",
      gradient: "linear-gradient(180deg, #B8DDA0 0%, #A5CE8A 100%)",
      dripColor: "#9EC584"
    },
    productCount: 6
  },
  {
    id: "coco",
    name: "Surti Cold Coco",
    subtitle: "Surat’s world-famous thick, silky chocolate potion served frosty cold.",
    slug: "coco",
    folder: "coco",
    tagline: "Surat’s Pride in a Chilled Glass",
    composition: "/images/51_images/compositions/coco-composition.webp",
    compositionFallback: "/images/51_images/compositions/coco-composition.webp",
    bannerImage: "/images/product_categories_banner/coco-chocolate-drink-banner.webp",
    theme: {
      bg: "#F0B5C4",
      waveDarker: "#D897A6",
      accent: "#880E4F",
      cardBg: "#FFFFFF",
      badgeBg: "#FCE0E7",
      text: "#2C1810",
      softBg: "#FDF0F4",
      gradient: "linear-gradient(180deg, #F0B5C4 0%, #E6A2B3 100%)",
      dripColor: "#D897A6"
    },
    productCount: 5
  },
  {
    id: "smoothies",
    name: "Fruit Smoothies",
    subtitle: "Blended with real sun-ripened berries, tropical fruits, and chilled goodness.",
    slug: "smoothies",
    folder: "smoothies",
    tagline: "Vibrant, Pure & Refreshing",
    composition: "/images/51_images/compositions/smoothies-composition.webp",
    compositionFallback: "/images/51_images/compositions/smoothies-composition.webp",
    bannerImage: "/images/product_categories_banner/fresh-fruit-smoothies-banner.webp",
    theme: {
      bg: "#FAD36E",
      waveDarker: "#E0B64C",
      accent: "#E65100",
      cardBg: "#FFFFFF",
      badgeBg: "#FEEBC0",
      text: "#2C1810",
      softBg: "#FFF5DD",
      gradient: "linear-gradient(180deg, #FAD36E 0%, #F5C44F 100%)",
      dripColor: "#E0B64C"
    },
    productCount: 7
  },
  {
    id: "fresh-cream",
    name: "Fresh Fruit Cream",
    subtitle: "Thick, unpasteurized natural cream mixed with sweet hand-cut seasonal fruits.",
    slug: "fresh-cream",
    folder: "fresh cream",
    tagline: "Pure Seasonal Bliss",
    composition: "/images/51_images/compositions/fresh-cream-composition.webp",
    compositionFallback: "/images/51_images/compositions/fresh-cream-composition.webp",
    bannerImage: "/images/product_categories_banner/fresh-cream-fruit-banner.webp",
    theme: {
      bg: "#D8BFF5",
      waveDarker: "#BFA2E0",
      accent: "#512DA8",
      cardBg: "#FFFFFF",
      badgeBg: "#EDE0FB",
      text: "#2C1810",
      softBg: "#F6EEFE",
      gradient: "linear-gradient(180deg, #D8BFF5 0%, #C9ABEB 100%)",
      dripColor: "#BFA2E0"
    },
    productCount: 3
  },
  {
    id: "milkshakes",
    name: "Classic Milkshakes & Specials",
    subtitle: "Traditional nut-infused shakes, rich lassi, and beloved fruit salads.",
    slug: "milkshakes",
    folder: "milkshakes",
    tagline: "Time-Honoured Sips",
    composition: "/images/51_images/compositions/milkshakes-composition.webp",
    compositionFallback: "/images/51_images/compositions/milkshakes-composition.webp",
    bannerImage: "/images/product_categories_banner/classic-milkshakes-banner.webp",
    theme: {
      bg: "#B2E1F5",
      waveDarker: "#95C8DE",
      accent: "#00838F",
      cardBg: "#FFFFFF",
      badgeBg: "#DCF3FD",
      text: "#2C1810",
      softBg: "#EEFAFE",
      gradient: "linear-gradient(180deg, #B2E1F5 0%, #9ED5EC 100%)",
      dripColor: "#95C8DE"
    },
    productCount: 4
  },
  {
    id: "live-ice-cream",
    name: "Live Stone Ice Cream",
    subtitle: "Custom frozen treats hand-crafted on a sub-zero cold marble stone.",
    slug: "live-ice-cream",
    folder: "live ice cream",
    tagline: "Crafted Live in Front of You",
    composition: "/images/51_images/compositions/live-ice-cream-composition.webp",
    compositionFallback: "/images/51_images/compositions/live-ice-cream-composition.webp",
    bannerImage: "/images/product_categories_banner/live-stone-ice-cream-banner.webp",
    theme: {
      bg: "#BBE7B5",
      waveDarker: "#9ECE96",
      accent: "#33691E",
      cardBg: "#FFFFFF",
      badgeBg: "#DEF5DA",
      text: "#2C1810",
      softBg: "#EEFAEC",
      gradient: "linear-gradient(180deg, #BBE7B5 0%, #A7DE9F 100%)",
      dripColor: "#9ECE96"
    },
    productCount: 2
  },
  {
    id: "party-tubs",
    name: "Family Party Tubs (750ml)",
    subtitle: "Bring the 51 Rainbow party home with our super-saver 750ml ice cream tubs.",
    slug: "party-tubs",
    folder: "750 ml container mockup/750Ml Ice Cream Box Png",
    tagline: "Super Saver Takeaway Tubs",
    composition: "/images/51_images/compositions/party-tubs-composition.webp",
    compositionFallback: "/images/51_images/compositions/party-tubs-composition.webp",
    bannerImage: "/images/product_categories_banner/family-size-strawberry-ice-cream-banner.webp",
    theme: {
      bg: "#FEDFB0",
      waveDarker: "#E5C28F",
      accent: "#BF360C",
      cardBg: "#FFFFFF",
      badgeBg: "#FEF0D8",
      text: "#2C1810",
      softBg: "#FFF8EC",
      gradient: "linear-gradient(180deg, #FEDFB0 0%, #F5D099 100%)",
      dripColor: "#E5C28F"
    },
    productCount: 13
  }
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllCategorySlugs(): string[] {
  return CATEGORIES.map((c) => c.slug);
}
