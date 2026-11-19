// Generated automatically by scripts/generate-product-manifest.mjs
import { CategoryTheme } from './categories';

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  image: string;
  scoopImage?: string;
  cupImage?: string;
  hasSeparatedScoop?: boolean;
  theme: CategoryTheme;
  status: 'verified' | 'needs-review';
}

export interface ReviewAsset {
  filename: string;
  folder: string;
  categorySlug: string;
  fullPath: string;
  reason: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "scoop-american-dryfruit-ice-cream",
    "name": "American Dryfruit Ice Cream",
    "slug": "american-dryfruit-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/american dryfruit scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-lotus-biscoff-ice-cream",
    "name": "Lotus Biscoff Ice Cream",
    "slug": "lotus-biscoff-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/biscoff scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-black-current-ice-cream",
    "name": "Black Current Ice Cream",
    "slug": "black-current-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/black current scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-bubblegum-ice-cream",
    "name": "Bubblegum Ice Cream",
    "slug": "bubblegum-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/bubblegum scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-chocolate-chips-ice-cream",
    "name": "Chocolate Chips Ice Cream",
    "slug": "chocolate-chips-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/chocolate chips scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-chocolate-marble-ice-cream",
    "name": "Chocolate Marble Ice Cream",
    "slug": "chocolate-marble-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/chocolate marble scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-cookies-cream-ice-cream",
    "name": "Cookies Cream Ice Cream",
    "slug": "cookies-cream-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/cookies cream scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-dark-chocolate-ice-cream",
    "name": "Dark Chocolate Ice Cream",
    "slug": "dark-chocolate-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/dark chocolate scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-dryfruit-khazana-ice-cream",
    "name": "Dryfruit Khazana Ice Cream",
    "slug": "dryfruit-khazana-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/dryfruit khazana scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-fresh-blueberry-ice-cream",
    "name": "Fresh Blueberry Ice Cream",
    "slug": "fresh-blueberry-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/fresh blueberry scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-fresh-strawberry-ice-cream",
    "name": "Fresh Strawberry Ice Cream",
    "slug": "fresh-strawberry-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/fresh strawberry scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-guava-chilli-ice-cream",
    "name": "Guava Chilli Ice Cream",
    "slug": "guava-chilli-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/guava chilli scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-kaju-anjeer-ice-cream",
    "name": "Kaju Anjeer Ice Cream",
    "slug": "kaju-anjeer-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/kaju anjeer scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-kaju-draksh-ice-cream",
    "name": "Kaju Draksh Ice Cream",
    "slug": "kaju-draksh-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/kaju dracksh scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-kesar-pista-ice-cream",
    "name": "Kesar Pista Ice Cream",
    "slug": "kesar-pista-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/kesar pista scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-mango-ice-cream",
    "name": "Mango Ice Cream",
    "slug": "mango-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/mango scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-mawa-malai-ice-cream",
    "name": "Mawa Malai Ice Cream",
    "slug": "mawa-malai-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/mawa malai scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-mississippi-mud-ice-cream",
    "name": "Mississippi Mud Ice Cream",
    "slug": "mississippi-mud-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/mississippi mud scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-pista-rabdi-ice-cream",
    "name": "Pista Rabdi Ice Cream",
    "slug": "pista-rabdi-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/pista rabdi scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-rajbhog-ice-cream",
    "name": "Rajbhog Ice Cream",
    "slug": "rajbhog-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/rajbhog scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-roasted-almond-ice-cream",
    "name": "Roasted Almond Ice Cream",
    "slug": "roasted-almond-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/roasted almond scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-ferrero-rocher-ice-cream",
    "name": "Ferrero Rocher Ice Cream",
    "slug": "ferrero-rocher-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/rocher ferrero scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-rose-almond-ice-cream",
    "name": "Rose Almond Ice Cream",
    "slug": "rose-almond-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/rose almond scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-vanilla-ice-cream",
    "name": "Vanilla Ice Cream",
    "slug": "vanilla-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/vanilla scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "scoop-walnut-chocolate-brownie-ice-cream",
    "name": "Walnut Chocolate Brownie Ice Cream",
    "slug": "walnut-chocolate-brownie-ice-cream",
    "categorySlug": "scoop",
    "categoryName": "Artisan Scoops",
    "image": "/images/51_images/Scoop/walnut chocolate brownie scoop.webp",
    "theme": {
      "bg": "#FFF6ED",
      "accent": "#F15B2B",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE6D3",
      "text": "#2C1810",
      "softBg": "#FCEFE4",
      "gradient": "linear-gradient(135deg, #FFF6ED 0%, #FFE9D6 100%)",
      "dripColor": "#F15B2B"
    },
    "status": "verified"
  },
  {
    "id": "falooda-black-current-falooda",
    "name": "Black Current Falooda",
    "slug": "black-current-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/black-current-falooda.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-chocolate-falooda",
    "name": "Chocolate Falooda",
    "slug": "chocolate-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/chocolate_falooda.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-green-pista-falooda",
    "name": "Green Pista Falooda",
    "slug": "green-pista-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/green-pista_falooda.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-kaju-anjeer-falooda",
    "name": "Kaju Anjeer Falooda",
    "slug": "kaju-anjeer-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/kaju-anjeer_falooda.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-kesar-pista-falooda",
    "name": "Kesar Pista Falooda",
    "slug": "kesar-pista-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/kesar-pista_falooda.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-mastani-falooda",
    "name": "Mastani Falooda",
    "slug": "mastani-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/MASTANI-FALOODA.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-rajbhog-falooda",
    "name": "Rajbhog Falooda",
    "slug": "rajbhog-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/RAJBHOG FALOODA.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-rajwadi-falooda",
    "name": "Rajwadi Falooda",
    "slug": "rajwadi-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/rajwadi_falooda.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-red-rose-falooda",
    "name": "Red Rose Falooda",
    "slug": "red-rose-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/RED ROSE FALOODA.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "falooda-shalimar-falooda",
    "name": "Shalimar Falooda",
    "slug": "shalimar-falooda",
    "categorySlug": "falooda",
    "categoryName": "Royal Faloodas",
    "image": "/images/51_images/falooda/SHALIMAR-FALOODA.webp",
    "theme": {
      "bg": "#FFF0F5",
      "accent": "#E11D48",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7EE",
      "text": "#2C1810",
      "softBg": "#FFE4EE",
      "gradient": "linear-gradient(135deg, #FFF0F5 0%, #FFDFEB 100%)",
      "dripColor": "#E11D48"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-black-current-thickshake",
    "name": "Black Current Thickshake",
    "slug": "black-current-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/Black current-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-bubblegum-thickshake",
    "name": "Bubblegum Thickshake",
    "slug": "bubblegum-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/bubblegum-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-butterscotch-thickshake",
    "name": "Butterscotch Thickshake",
    "slug": "butterscotch-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/butterscotch-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-chocolate-chips-thickshake",
    "name": "Chocolate Chips Thickshake",
    "slug": "chocolate-chips-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/chocolate chips-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-choco-rock-brownie-thickshake",
    "name": "Choco Rock Brownie Thickshake",
    "slug": "choco-rock-brownie-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/chocorock brownie thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-coffee-caramel-thickshake",
    "name": "Coffee Caramel Thickshake",
    "slug": "coffee-caramel-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/coffee caramel-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-cookies-cream-thickshake",
    "name": "Cookies Cream Thickshake",
    "slug": "cookies-cream-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/cookies cream-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-dairy-milk-thickshake",
    "name": "Dairy Milk Thickshake",
    "slug": "dairy-milk-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/dairymilk-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-fresh-kiwi-thickshake",
    "name": "Fresh Kiwi Thickshake",
    "slug": "fresh-kiwi-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/fresh kiwi thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-fresh-mango-thickshake",
    "name": "Fresh Mango Thickshake",
    "slug": "fresh-mango-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/fresh mango thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-fresh-sitafal-thickshake",
    "name": "Fresh Sitafal Thickshake",
    "slug": "fresh-sitafal-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/fresh sitafal thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-fresh-strawberry-thickshake",
    "name": "Fresh Strawberry Thickshake",
    "slug": "fresh-strawberry-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/fresh strawberry-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-gulab-masti-thickshake",
    "name": "Gulab Masti Thickshake",
    "slug": "gulab-masti-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/gulab masti-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kaju-anjeer-thickshake",
    "name": "Kaju Anjeer Thickshake",
    "slug": "kaju-anjeer-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kaju anjeer-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kaju-badam-thickshake",
    "name": "Kaju Badam Thickshake",
    "slug": "kaju-badam-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kaju badam-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kaju-chocolate-thickshake",
    "name": "Kaju Chocolate Thickshake",
    "slug": "kaju-chocolate-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kaju chocolate-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kaju-draksh-thickshake",
    "name": "Kaju Draksh Thickshake",
    "slug": "kaju-draksh-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kaju draksh-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kaju-gulkand-thickshake",
    "name": "Kaju Gulkand Thickshake",
    "slug": "kaju-gulkand-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kaju gulkand-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kaju-mango-thickshake",
    "name": "Kaju Mango Thickshake",
    "slug": "kaju-mango-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kaju mango-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kesar-pista-thickshake",
    "name": "Kesar Pista Thickshake",
    "slug": "kesar-pista-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kesar pista-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-kit-kat-thickshake",
    "name": "Kit Kat Thickshake",
    "slug": "kit-kat-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/kit-kat-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-mango-malai-thickshake",
    "name": "Mango Malai Thickshake",
    "slug": "mango-malai-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/mango malai-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-mango-thickshake",
    "name": "Mango Thickshake",
    "slug": "mango-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/mango-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-mawa-malai-thickshake",
    "name": "Mawa Malai Thickshake",
    "slug": "mawa-malai-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/mawa malai-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-nutella-thickshake",
    "name": "Nutella Thickshake",
    "slug": "nutella-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/nutella-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-pan-masala-thickshake",
    "name": "Pan Masala Thickshake",
    "slug": "pan-masala-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/pan masala-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-pineapple-thickshake",
    "name": "Pineapple Thickshake",
    "slug": "pineapple-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/pineapple-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-pista-malai-thickshake",
    "name": "Pista Malai Thickshake",
    "slug": "pista-malai-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/pista malai thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-rajbhog-thickshake",
    "name": "Rajbhog Thickshake",
    "slug": "rajbhog-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/rajbhog-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-roasted-almond-thickshake",
    "name": "Roasted Almond Thickshake",
    "slug": "roasted-almond-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/roasted almond-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-ferrero-rocher-thickshake",
    "name": "Ferrero Rocher Thickshake",
    "slug": "ferrero-rocher-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/rocher ferrero -thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-rose-malai-thickshake",
    "name": "Rose Malai Thickshake",
    "slug": "rose-malai-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/rose malai-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-strawberry-thickshake",
    "name": "Strawberry Thickshake",
    "slug": "strawberry-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/strawberry-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-vanilla-thickshake",
    "name": "Vanilla Thickshake",
    "slug": "vanilla-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/vanilla-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "thickshakes-walnut-chocolate-thickshake",
    "name": "Walnut Chocolate Thickshake",
    "slug": "walnut-chocolate-thickshake",
    "categorySlug": "thickshakes",
    "categoryName": "Gourmet Thickshakes",
    "image": "/images/51_images/Thickshake/walnut chocolate-thickshake.webp",
    "theme": {
      "bg": "#F8F1EB",
      "accent": "#8B4513",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE1D5",
      "text": "#2C1810",
      "softBg": "#F3E5D8",
      "gradient": "linear-gradient(135deg, #F8F1EB 0%, #EEDDD0 100%)",
      "dripColor": "#8B4513"
    },
    "status": "verified"
  },
  {
    "id": "sundaes-brownie-sundae",
    "name": "Brownie Sundae",
    "slug": "brownie-sundae",
    "categorySlug": "sundaes",
    "categoryName": "Signature Sundaes",
    "image": "/images/51_images/sundaes/Brownie Sundae.webp",
    "theme": {
      "bg": "#FFF3EE",
      "accent": "#D92354",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE0E8",
      "text": "#2C1810",
      "softBg": "#FDE4DC",
      "gradient": "linear-gradient(135deg, #FFF3EE 0%, #FFE2D8 100%)",
      "dripColor": "#D92354"
    },
    "status": "verified"
  },
  {
    "id": "sundaes-chocolate-sundae",
    "name": "Chocolate Sundae",
    "slug": "chocolate-sundae",
    "categorySlug": "sundaes",
    "categoryName": "Signature Sundaes",
    "image": "/images/51_images/sundaes/Chocolate Sundae.webp",
    "theme": {
      "bg": "#FFF3EE",
      "accent": "#D92354",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE0E8",
      "text": "#2C1810",
      "softBg": "#FDE4DC",
      "gradient": "linear-gradient(135deg, #FFF3EE 0%, #FFE2D8 100%)",
      "dripColor": "#D92354"
    },
    "status": "verified"
  },
  {
    "id": "sundaes-fresh-gotala-new",
    "name": "Fresh Gotala New",
    "slug": "fresh-gotala-new",
    "categorySlug": "sundaes",
    "categoryName": "Signature Sundaes",
    "image": "/images/51_images/sundaes/Fresh Gotala New.webp",
    "theme": {
      "bg": "#FFF3EE",
      "accent": "#D92354",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE0E8",
      "text": "#2C1810",
      "softBg": "#FDE4DC",
      "gradient": "linear-gradient(135deg, #FFF3EE 0%, #FFE2D8 100%)",
      "dripColor": "#D92354"
    },
    "status": "verified"
  },
  {
    "id": "sundaes-hungama-sundae",
    "name": "Hungama Sundae",
    "slug": "hungama-sundae",
    "categorySlug": "sundaes",
    "categoryName": "Signature Sundaes",
    "image": "/images/51_images/sundaes/Hungama-Sundae.webp",
    "theme": {
      "bg": "#FFF3EE",
      "accent": "#D92354",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE0E8",
      "text": "#2C1810",
      "softBg": "#FDE4DC",
      "gradient": "linear-gradient(135deg, #FFF3EE 0%, #FFE2D8 100%)",
      "dripColor": "#D92354"
    },
    "status": "verified"
  },
  {
    "id": "sundaes-jelly-malai-pineapple-sundae",
    "name": "Jelly Malai Pineapple Sundae",
    "slug": "jelly-malai-pineapple-sundae",
    "categorySlug": "sundaes",
    "categoryName": "Signature Sundaes",
    "image": "/images/51_images/sundaes/Jelly Malai Pineapple Sundae.webp",
    "theme": {
      "bg": "#FFF3EE",
      "accent": "#D92354",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE0E8",
      "text": "#2C1810",
      "softBg": "#FDE4DC",
      "gradient": "linear-gradient(135deg, #FFF3EE 0%, #FFE2D8 100%)",
      "dripColor": "#D92354"
    },
    "status": "verified"
  },
  {
    "id": "sundaes-rocher-sundae",
    "name": "Rocher Sundae",
    "slug": "rocher-sundae",
    "categorySlug": "sundaes",
    "categoryName": "Signature Sundaes",
    "image": "/images/51_images/sundaes/Rocher Sundae.webp",
    "theme": {
      "bg": "#FFF3EE",
      "accent": "#D92354",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE0E8",
      "text": "#2C1810",
      "softBg": "#FDE4DC",
      "gradient": "linear-gradient(135deg, #FFF3EE 0%, #FFE2D8 100%)",
      "dripColor": "#D92354"
    },
    "status": "verified"
  },
  {
    "id": "sundaes-sabkuch-sundaes-new",
    "name": "Sabkuch Sundaes New",
    "slug": "sabkuch-sundaes-new",
    "categorySlug": "sundaes",
    "categoryName": "Signature Sundaes",
    "image": "/images/51_images/sundaes/Subkuvh Sundaes New.webp",
    "theme": {
      "bg": "#FFF3EE",
      "accent": "#D92354",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFE0E8",
      "text": "#2C1810",
      "softBg": "#FDE4DC",
      "gradient": "linear-gradient(135deg, #FFF3EE 0%, #FFE2D8 100%)",
      "dripColor": "#D92354"
    },
    "status": "verified"
  },
  {
    "id": "cakes-belgium-chocolate-cake",
    "name": "Belgium Chocolate Cake",
    "slug": "belgium-chocolate-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/BELGIUM CHOCOLATE copy.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "cakes-black-forest-cake",
    "name": "Black Forest Cake",
    "slug": "black-forest-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/black forest.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "cakes-chocolate-fudge-cake",
    "name": "Chocolate Fudge Cake",
    "slug": "chocolate-fudge-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/CHOCOLATE FUDGE Final copy.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "cakes-gold-cake",
    "name": "Gold Cake",
    "slug": "gold-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/GOLD CAKE copy.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "cakes-lotus-lotus-biscoff-cake",
    "name": "Lotus Lotus Biscoff Cake",
    "slug": "lotus-lotus-biscoff-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/lotus-biscoff.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "cakes-pistachio-kunafa-cake",
    "name": "Pistachio Kunafa Cake",
    "slug": "pistachio-kunafa-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/pistachio kunafa.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "cakes-red-velvet-cake",
    "name": "Red Velvet Cake",
    "slug": "red-velvet-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/red velvet.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "cakes-white-forest-cake",
    "name": "White Forest Cake",
    "slug": "white-forest-cake",
    "categorySlug": "cakes",
    "categoryName": "Ice Cream Cakes",
    "image": "/images/51_images/cake/white forest.webp",
    "theme": {
      "bg": "#FBF5F0",
      "accent": "#6B371E",
      "cardBg": "#FFFFFF",
      "badgeBg": "#EFE2D8",
      "text": "#2C1810",
      "softBg": "#F5EAE1",
      "gradient": "linear-gradient(135deg, #FBF5F0 0%, #F3E7DC 100%)",
      "dripColor": "#6B371E"
    },
    "status": "verified"
  },
  {
    "id": "waffles-cookie-cream-waffle",
    "name": "Cookie Cream Waffle",
    "slug": "cookie-cream-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/cookie cream waffle .webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "waffles-mango-waffle",
    "name": "Mango Waffle",
    "slug": "mango-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/mango waffle .webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "waffles-lotus-biscoff-waffle",
    "name": "Lotus Biscoff Waffle",
    "slug": "lotus-biscoff-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/waffle biscoff.webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "waffles-choco-coffee-waffle",
    "name": "Choco Coffee Waffle",
    "slug": "choco-coffee-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/waffle choco coffee.webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "waffles-chocolate-banana-waffle",
    "name": "Chocolate Banana Waffle",
    "slug": "chocolate-banana-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/waffle chocolate banana.webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "waffles-chocolate-chips-waffle",
    "name": "Chocolate Chips Waffle",
    "slug": "chocolate-chips-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/waffle chocolate chips.webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "waffles-kitkat-waffle",
    "name": "KitKat Waffle",
    "slug": "kitkat-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/waffle kitkat.webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "waffles-nutella-waffle",
    "name": "Nutella Waffle",
    "slug": "nutella-waffle",
    "categorySlug": "waffles",
    "categoryName": "Belgian Waffles",
    "image": "/images/51_images/waffle/waffle nutella.webp",
    "theme": {
      "bg": "#FFF9EB",
      "accent": "#D97706",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEEFC8",
      "text": "#2C1810",
      "softBg": "#FEF3D6",
      "gradient": "linear-gradient(135deg, #FFF9EB 0%, #FEF0CE 100%)",
      "dripColor": "#D97706"
    },
    "status": "verified"
  },
  {
    "id": "brownie-desserts-lotus-biscoff-brownie-tub",
    "name": "Lotus Biscoff Brownie Tub",
    "slug": "lotus-biscoff-brownie-tub",
    "categorySlug": "brownie-desserts",
    "categoryName": "Brownie Dessert Tubs",
    "image": "/images/51_images/brownie desert/biscoff--BROWNIE-TUB-MOCKUP.webp",
    "theme": {
      "bg": "#F5EFEA",
      "accent": "#4A2311",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E9DDD4",
      "text": "#2C1810",
      "softBg": "#EFE3DA",
      "gradient": "linear-gradient(135deg, #F5EFEA 0%, #E7D8CD 100%)",
      "dripColor": "#4A2311"
    },
    "status": "verified"
  },
  {
    "id": "brownie-desserts-chocolate-chips-brownie-tub",
    "name": "Chocolate Chips Brownie Tub",
    "slug": "chocolate-chips-brownie-tub",
    "categorySlug": "brownie-desserts",
    "categoryName": "Brownie Dessert Tubs",
    "image": "/images/51_images/brownie desert/chocolate-chips-BROWNIE-TUB-MOCKUP.webp",
    "theme": {
      "bg": "#F5EFEA",
      "accent": "#4A2311",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E9DDD4",
      "text": "#2C1810",
      "softBg": "#EFE3DA",
      "gradient": "linear-gradient(135deg, #F5EFEA 0%, #E7D8CD 100%)",
      "dripColor": "#4A2311"
    },
    "status": "verified"
  },
  {
    "id": "brownie-desserts-kitkat-brownie-tub",
    "name": "KitKat Brownie Tub",
    "slug": "kitkat-brownie-tub",
    "categorySlug": "brownie-desserts",
    "categoryName": "Brownie Dessert Tubs",
    "image": "/images/51_images/brownie desert/kitkat-BROWNIE-TUB-MOCKUP.webp",
    "theme": {
      "bg": "#F5EFEA",
      "accent": "#4A2311",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E9DDD4",
      "text": "#2C1810",
      "softBg": "#EFE3DA",
      "gradient": "linear-gradient(135deg, #F5EFEA 0%, #E7D8CD 100%)",
      "dripColor": "#4A2311"
    },
    "status": "verified"
  },
  {
    "id": "brownie-desserts-nutella-brownie-tub",
    "name": "Nutella Brownie Tub",
    "slug": "nutella-brownie-tub",
    "categorySlug": "brownie-desserts",
    "categoryName": "Brownie Dessert Tubs",
    "image": "/images/51_images/brownie desert/nutella-BROWNIE-TUB-MOCKUP.webp",
    "theme": {
      "bg": "#F5EFEA",
      "accent": "#4A2311",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E9DDD4",
      "text": "#2C1810",
      "softBg": "#EFE3DA",
      "gradient": "linear-gradient(135deg, #F5EFEA 0%, #E7D8CD 100%)",
      "dripColor": "#4A2311"
    },
    "status": "verified"
  },
  {
    "id": "brownie-desserts-pistachio-kunafa-brownie-tub",
    "name": "Pistachio Kunafa Brownie Tub",
    "slug": "pistachio-kunafa-brownie-tub",
    "categorySlug": "brownie-desserts",
    "categoryName": "Brownie Dessert Tubs",
    "image": "/images/51_images/brownie desert/pistachio-kunafa-BROWNIE-TUB-MOCKUP.webp",
    "theme": {
      "bg": "#F5EFEA",
      "accent": "#4A2311",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E9DDD4",
      "text": "#2C1810",
      "softBg": "#EFE3DA",
      "gradient": "linear-gradient(135deg, #F5EFEA 0%, #E7D8CD 100%)",
      "dripColor": "#4A2311"
    },
    "status": "verified"
  },
  {
    "id": "brownie-desserts-white-chocolate-chips-brownie-tub",
    "name": "White Chocolate Chips Brownie Tub",
    "slug": "white-chocolate-chips-brownie-tub",
    "categorySlug": "brownie-desserts",
    "categoryName": "Brownie Dessert Tubs",
    "image": "/images/51_images/brownie desert/white-chocolate-chips-BROWNIE-TUB-MOCKUP.webp",
    "theme": {
      "bg": "#F5EFEA",
      "accent": "#4A2311",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E9DDD4",
      "text": "#2C1810",
      "softBg": "#EFE3DA",
      "gradient": "linear-gradient(135deg, #F5EFEA 0%, #E7D8CD 100%)",
      "dripColor": "#4A2311"
    },
    "status": "verified"
  },
  {
    "id": "coco-coco",
    "name": "Coco",
    "slug": "coco",
    "categorySlug": "coco",
    "categoryName": "Surti Cold Coco",
    "image": "/images/51_images/coco/coco-glass-mockup.webp",
    "theme": {
      "bg": "#F3EDE7",
      "accent": "#3B1E08",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E4D7CC",
      "text": "#2C1810",
      "softBg": "#EAE1D7",
      "gradient": "linear-gradient(135deg, #F3EDE7 0%, #E3D5C7 100%)",
      "dripColor": "#3B1E08"
    },
    "status": "verified"
  },
  {
    "id": "coco-coco-with-choco-chips",
    "name": "Coco with Choco Chips",
    "slug": "coco-with-choco-chips",
    "categorySlug": "coco",
    "categoryName": "Surti Cold Coco",
    "image": "/images/51_images/coco/coco-glass-with-choco-chips-mockup.webp",
    "theme": {
      "bg": "#F3EDE7",
      "accent": "#3B1E08",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E4D7CC",
      "text": "#2C1810",
      "softBg": "#EAE1D7",
      "gradient": "linear-gradient(135deg, #F3EDE7 0%, #E3D5C7 100%)",
      "dripColor": "#3B1E08"
    },
    "status": "verified"
  },
  {
    "id": "coco-coco-with-ice-cream",
    "name": "Coco with Ice Cream",
    "slug": "coco-with-ice-cream",
    "categorySlug": "coco",
    "categoryName": "Surti Cold Coco",
    "image": "/images/51_images/coco/coco-glass-with-ice-cream-mockup.webp",
    "theme": {
      "bg": "#F3EDE7",
      "accent": "#3B1E08",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E4D7CC",
      "text": "#2C1810",
      "softBg": "#EAE1D7",
      "gradient": "linear-gradient(135deg, #F3EDE7 0%, #E3D5C7 100%)",
      "dripColor": "#3B1E08"
    },
    "status": "verified"
  },
  {
    "id": "coco-coco-with-kaju",
    "name": "Coco with Kaju",
    "slug": "coco-with-kaju",
    "categorySlug": "coco",
    "categoryName": "Surti Cold Coco",
    "image": "/images/51_images/coco/coco-glass-with-kaju-mockup.webp",
    "theme": {
      "bg": "#F3EDE7",
      "accent": "#3B1E08",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E4D7CC",
      "text": "#2C1810",
      "softBg": "#EAE1D7",
      "gradient": "linear-gradient(135deg, #F3EDE7 0%, #E3D5C7 100%)",
      "dripColor": "#3B1E08"
    },
    "status": "verified"
  },
  {
    "id": "coco-coco-with-nutella",
    "name": "Coco with Nutella",
    "slug": "coco-with-nutella",
    "categorySlug": "coco",
    "categoryName": "Surti Cold Coco",
    "image": "/images/51_images/coco/coco-glass-with-nutella-mockup.webp",
    "theme": {
      "bg": "#F3EDE7",
      "accent": "#3B1E08",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E4D7CC",
      "text": "#2C1810",
      "softBg": "#EAE1D7",
      "gradient": "linear-gradient(135deg, #F3EDE7 0%, #E3D5C7 100%)",
      "dripColor": "#3B1E08"
    },
    "status": "verified"
  },
  {
    "id": "smoothies-black-current-smoothie",
    "name": "Black Current Smoothie",
    "slug": "black-current-smoothie",
    "categorySlug": "smoothies",
    "categoryName": "Fruit Smoothies",
    "image": "/images/51_images/smoothies/black-current-smoothie.webp",
    "theme": {
      "bg": "#F0F9FF",
      "accent": "#0284C7",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E0F2FE",
      "text": "#2C1810",
      "softBg": "#E1F3FD",
      "gradient": "linear-gradient(135deg, #F0F9FF 0%, #DCF0FC 100%)",
      "dripColor": "#0284C7"
    },
    "status": "verified"
  },
  {
    "id": "smoothies-chocolate-smoothie",
    "name": "Chocolate Smoothie",
    "slug": "chocolate-smoothie",
    "categorySlug": "smoothies",
    "categoryName": "Fruit Smoothies",
    "image": "/images/51_images/smoothies/chocolate-smoothie.webp",
    "theme": {
      "bg": "#F0F9FF",
      "accent": "#0284C7",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E0F2FE",
      "text": "#2C1810",
      "softBg": "#E1F3FD",
      "gradient": "linear-gradient(135deg, #F0F9FF 0%, #DCF0FC 100%)",
      "dripColor": "#0284C7"
    },
    "status": "verified"
  },
  {
    "id": "smoothies-cookies-cream-smoothie",
    "name": "Cookies Cream Smoothie",
    "slug": "cookies-cream-smoothie",
    "categorySlug": "smoothies",
    "categoryName": "Fruit Smoothies",
    "image": "/images/51_images/smoothies/cookies-cream-smoothie.webp",
    "theme": {
      "bg": "#F0F9FF",
      "accent": "#0284C7",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E0F2FE",
      "text": "#2C1810",
      "softBg": "#E1F3FD",
      "gradient": "linear-gradient(135deg, #F0F9FF 0%, #DCF0FC 100%)",
      "dripColor": "#0284C7"
    },
    "status": "verified"
  },
  {
    "id": "smoothies-dark-chocolate-smoothie",
    "name": "Dark Chocolate Smoothie",
    "slug": "dark-chocolate-smoothie",
    "categorySlug": "smoothies",
    "categoryName": "Fruit Smoothies",
    "image": "/images/51_images/smoothies/dark-chocolate-smoothie.webp",
    "theme": {
      "bg": "#F0F9FF",
      "accent": "#0284C7",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E0F2FE",
      "text": "#2C1810",
      "softBg": "#E1F3FD",
      "gradient": "linear-gradient(135deg, #F0F9FF 0%, #DCF0FC 100%)",
      "dripColor": "#0284C7"
    },
    "status": "verified"
  },
  {
    "id": "smoothies-mango-smoothie",
    "name": "Mango Smoothie",
    "slug": "mango-smoothie",
    "categorySlug": "smoothies",
    "categoryName": "Fruit Smoothies",
    "image": "/images/51_images/smoothies/mango-smoothie.webp",
    "theme": {
      "bg": "#F0F9FF",
      "accent": "#0284C7",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E0F2FE",
      "text": "#2C1810",
      "softBg": "#E1F3FD",
      "gradient": "linear-gradient(135deg, #F0F9FF 0%, #DCF0FC 100%)",
      "dripColor": "#0284C7"
    },
    "status": "verified"
  },
  {
    "id": "smoothies-strawberry-smoothie",
    "name": "Strawberry Smoothie",
    "slug": "strawberry-smoothie",
    "categorySlug": "smoothies",
    "categoryName": "Fruit Smoothies",
    "image": "/images/51_images/smoothies/strawberry-smoothie.webp",
    "theme": {
      "bg": "#F0F9FF",
      "accent": "#0284C7",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E0F2FE",
      "text": "#2C1810",
      "softBg": "#E1F3FD",
      "gradient": "linear-gradient(135deg, #F0F9FF 0%, #DCF0FC 100%)",
      "dripColor": "#0284C7"
    },
    "status": "verified"
  },
  {
    "id": "smoothies-vanilla-smoothie",
    "name": "Vanilla Smoothie",
    "slug": "vanilla-smoothie",
    "categorySlug": "smoothies",
    "categoryName": "Fruit Smoothies",
    "image": "/images/51_images/smoothies/vanilla-smoothie.webp",
    "theme": {
      "bg": "#F0F9FF",
      "accent": "#0284C7",
      "cardBg": "#FFFFFF",
      "badgeBg": "#E0F2FE",
      "text": "#2C1810",
      "softBg": "#E1F3FD",
      "gradient": "linear-gradient(135deg, #F0F9FF 0%, #DCF0FC 100%)",
      "dripColor": "#0284C7"
    },
    "status": "verified"
  },
  {
    "id": "fresh-cream-mango-cream",
    "name": "Mango Cream",
    "slug": "mango-cream",
    "categorySlug": "fresh-cream",
    "categoryName": "Fresh Fruit Cream",
    "image": "/images/51_images/fresh cream/mango-cream.webp",
    "theme": {
      "bg": "#FFFBEB",
      "accent": "#EAB308",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEF3C7",
      "text": "#2C1810",
      "softBg": "#FEF7DA",
      "gradient": "linear-gradient(135deg, #FFFBEB 0%, #FEF2BF 100%)",
      "dripColor": "#EAB308"
    },
    "status": "verified"
  },
  {
    "id": "fresh-cream-sitafal-cream",
    "name": "Sitafal Cream",
    "slug": "sitafal-cream",
    "categorySlug": "fresh-cream",
    "categoryName": "Fresh Fruit Cream",
    "image": "/images/51_images/fresh cream/sitafal-cream.webp",
    "theme": {
      "bg": "#FFFBEB",
      "accent": "#EAB308",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEF3C7",
      "text": "#2C1810",
      "softBg": "#FEF7DA",
      "gradient": "linear-gradient(135deg, #FFFBEB 0%, #FEF2BF 100%)",
      "dripColor": "#EAB308"
    },
    "status": "verified"
  },
  {
    "id": "fresh-cream-strawberry-cream",
    "name": "Strawberry Cream",
    "slug": "strawberry-cream",
    "categorySlug": "fresh-cream",
    "categoryName": "Fresh Fruit Cream",
    "image": "/images/51_images/fresh cream/strawberry-cream.webp",
    "theme": {
      "bg": "#FFFBEB",
      "accent": "#EAB308",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FEF3C7",
      "text": "#2C1810",
      "softBg": "#FEF7DA",
      "gradient": "linear-gradient(135deg, #FFFBEB 0%, #FEF2BF 100%)",
      "dripColor": "#EAB308"
    },
    "status": "verified"
  },
  {
    "id": "milkshakes-badam-shake",
    "name": "Badam Shake",
    "slug": "badam-shake",
    "categorySlug": "milkshakes",
    "categoryName": "Classic Milkshakes & Specials",
    "image": "/images/51_images/milkshakes/badam-shake.webp",
    "theme": {
      "bg": "#FFF7ED",
      "accent": "#EA580C",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFEDD5",
      "text": "#2C1810",
      "softBg": "#FEE7CF",
      "gradient": "linear-gradient(135deg, #FFF7ED 0%, #FEE0BE 100%)",
      "dripColor": "#EA580C"
    },
    "status": "verified"
  },
  {
    "id": "milkshakes-fruit-salad",
    "name": "Fruit Salad",
    "slug": "fruit-salad",
    "categorySlug": "milkshakes",
    "categoryName": "Classic Milkshakes & Specials",
    "image": "/images/51_images/milkshakes/fruit-salad.webp",
    "theme": {
      "bg": "#FFF7ED",
      "accent": "#EA580C",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFEDD5",
      "text": "#2C1810",
      "softBg": "#FEE7CF",
      "gradient": "linear-gradient(135deg, #FFF7ED 0%, #FEE0BE 100%)",
      "dripColor": "#EA580C"
    },
    "status": "verified"
  },
  {
    "id": "milkshakes-kaju-anjeer-milkshake",
    "name": "Kaju Anjeer Milkshake",
    "slug": "kaju-anjeer-milkshake",
    "categorySlug": "milkshakes",
    "categoryName": "Classic Milkshakes & Specials",
    "image": "/images/51_images/milkshakes/kaju-anjeer-milkshake.webp",
    "theme": {
      "bg": "#FFF7ED",
      "accent": "#EA580C",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFEDD5",
      "text": "#2C1810",
      "softBg": "#FEE7CF",
      "gradient": "linear-gradient(135deg, #FFF7ED 0%, #FEE0BE 100%)",
      "dripColor": "#EA580C"
    },
    "status": "verified"
  },
  {
    "id": "milkshakes-lassi",
    "name": "Lassi",
    "slug": "lassi",
    "categorySlug": "milkshakes",
    "categoryName": "Classic Milkshakes & Specials",
    "image": "/images/51_images/milkshakes/lassi.webp",
    "theme": {
      "bg": "#FFF7ED",
      "accent": "#EA580C",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FFEDD5",
      "text": "#2C1810",
      "softBg": "#FEE7CF",
      "gradient": "linear-gradient(135deg, #FFF7ED 0%, #FEE0BE 100%)",
      "dripColor": "#EA580C"
    },
    "status": "verified"
  },
  {
    "id": "live-ice-cream-live-ice-cream",
    "name": "Live Ice Cream",
    "slug": "live-ice-cream",
    "categorySlug": "live-ice-cream",
    "categoryName": "Live Stone Ice Cream",
    "image": "/images/51_images/live ice cream/live-ice-cream-mockup.webp",
    "theme": {
      "bg": "#F0FDF4",
      "accent": "#0D9488",
      "cardBg": "#FFFFFF",
      "badgeBg": "#DCFCE7",
      "text": "#2C1810",
      "softBg": "#E3F8EB",
      "gradient": "linear-gradient(135deg, #F0FDF4 0%, #D4F7DF 100%)",
      "dripColor": "#0D9488"
    },
    "status": "verified"
  },
  {
    "id": "live-ice-cream-mango-live-ice-cream",
    "name": "Mango Live Ice Cream",
    "slug": "mango-live-ice-cream",
    "categorySlug": "live-ice-cream",
    "categoryName": "Live Stone Ice Cream",
    "image": "/images/51_images/live ice cream/mango-live-ice-cream-mockup.webp",
    "theme": {
      "bg": "#F0FDF4",
      "accent": "#0D9488",
      "cardBg": "#FFFFFF",
      "badgeBg": "#DCFCE7",
      "text": "#2C1810",
      "softBg": "#E3F8EB",
      "gradient": "linear-gradient(135deg, #F0FDF4 0%, #D4F7DF 100%)",
      "dripColor": "#0D9488"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-birthday-cake-tub-750ml",
    "name": "Birthday Cake Tub (750ml)",
    "slug": "birthday-cake-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Birthday Cake.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-bubblegum-tub-750ml",
    "name": "Bubblegum Tub (750ml)",
    "slug": "bubblegum-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Bubblegum.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-choco-rock-brownie-tub-750ml",
    "name": "Choco Rock Brownie Tub (750ml)",
    "slug": "choco-rock-brownie-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Choco Rock Brownie.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-dry-fruit-khazana-tub-750ml",
    "name": "Dry Fruit Khazana Tub (750ml)",
    "slug": "dry-fruit-khazana-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Dry Fruit Khazana.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-ferrero-rocher-tub-750ml",
    "name": "Ferrero Rocher Tub (750ml)",
    "slug": "ferrero-rocher-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Ferrero Rocher.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-fresh-mango-tub-750ml",
    "name": "Fresh Mango Tub (750ml)",
    "slug": "fresh-mango-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Fresh Mango.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-fresh-sitafal-tub-750ml",
    "name": "Fresh Sitafal Tub (750ml)",
    "slug": "fresh-sitafal-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Fresh Sitafal.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-fresh-strawberry-tub-750ml",
    "name": "Fresh Strawberry Tub (750ml)",
    "slug": "fresh-strawberry-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Fresh Strawberry.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-lotus-biscoff-tub-750ml",
    "name": "Lotus Biscoff Tub (750ml)",
    "slug": "lotus-biscoff-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Lotus Biscoff.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-mava-malai-tub-750ml",
    "name": "Mava Malai Tub (750ml)",
    "slug": "mava-malai-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Mava Malai.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-roasted-almond-tub-750ml",
    "name": "Roasted Almond Tub (750ml)",
    "slug": "roasted-almond-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Roasted Almond.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-sitafal-tub-750ml",
    "name": "Sitafal Tub (750ml)",
    "slug": "sitafal-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Sitafal.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  },
  {
    "id": "party-tubs-walnut-chocolate-fudge-tub-750ml",
    "name": "Walnut Chocolate Fudge Tub (750ml)",
    "slug": "walnut-chocolate-fudge-tub-750ml",
    "categorySlug": "party-tubs",
    "categoryName": "Family Party Tubs (750ml)",
    "image": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Walnut Chocolate Fudge.webp",
    "theme": {
      "bg": "#FDF2F8",
      "accent": "#BE185D",
      "cardBg": "#FFFFFF",
      "badgeBg": "#FCE7F3",
      "text": "#2C1810",
      "softBg": "#FADAEB",
      "gradient": "linear-gradient(135deg, #FDF2F8 0%, #F9CEE3 100%)",
      "dripColor": "#BE185D"
    },
    "status": "verified"
  }
];

export const REVIEW_ASSETS: ReviewAsset[] = [
  {
    "filename": "vanilla new thickshake cup mockup.jpg",
    "folder": "Thickshake",
    "categorySlug": "thickshakes",
    "fullPath": "/images/51_images/Thickshake/vanilla new thickshake cup mockup.webp",
    "reason": "Packaging mockup preview with background"
  },
  {
    "filename": "1.png",
    "folder": "sundaes",
    "categorySlug": "sundaes",
    "fullPath": "/images/51_images/sundaes/1.webp",
    "reason": "Numbered asset without flavour name in filename"
  },
  {
    "filename": "23.png",
    "folder": "sundaes",
    "categorySlug": "sundaes",
    "fullPath": "/images/51_images/sundaes/23.webp",
    "reason": "Numbered asset without flavour name in filename"
  },
  {
    "filename": "Fresh Gotala.png",
    "folder": "sundaes",
    "categorySlug": "sundaes",
    "fullPath": "/images/51_images/sundaes/Fresh Gotala.webp",
    "reason": "Older variation of Gotala Sundae (Fresh Gotala New is current)"
  },
  {
    "filename": "Lotus Biscoff Sundae (1).png",
    "folder": "sundaes",
    "categorySlug": "sundaes",
    "fullPath": "/images/51_images/sundaes/Lotus Biscoff Sundae (1).webp",
    "reason": "Duplicate export of Lotus Biscoff Sundae"
  },
  {
    "filename": "New Gotala.png",
    "folder": "sundaes",
    "categorySlug": "sundaes",
    "fullPath": "/images/51_images/sundaes/New Gotala.webp",
    "reason": "Older variation of Gotala Sundae (Fresh Gotala New is current)"
  },
  {
    "filename": "1.png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/1.webp",
    "reason": "Numbered asset without flavour name in filename"
  },
  {
    "filename": "Birthday Cake (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Birthday Cake (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Bubblegum (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Bubblegum (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Choco Rock Brownie (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Choco Rock Brownie (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Dry Fruit Khazana (v2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Dry Fruit Khazana (v2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Ferrero Rocher (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Ferrero Rocher (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Fresh Mango (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Fresh Mango (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Fresh Sitafal (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Fresh Sitafal (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Fresh Strawberry (v2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Fresh Strawberry (v2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Lotus Biscoff (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Lotus Biscoff (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Mava Malai (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Mava Malai (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Roasted Almond (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Roasted Almond (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "Walnut Chocolate Fudge (V2).png",
    "folder": "750 ml container mockup/750Ml Ice Cream Box Png",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750Ml Ice Cream Box Png/Walnut Chocolate Fudge (V2).webp",
    "reason": "Alternate packaging variation (V2) of existing product"
  },
  {
    "filename": "750-ml-container-mockup-1.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-1.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-10.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-10.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-11.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-11.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-12.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-12.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-13.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-13.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-14.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-14.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-15.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-15.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-16.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-16.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-17.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-17.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-2.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-2.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-3.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-3.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-4.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-4.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-5.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-5.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-6.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-6.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-7.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-7.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-8.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-8.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  },
  {
    "filename": "750-ml-container-mockup-9.png",
    "folder": "750 ml container mockup",
    "categorySlug": "party-tubs",
    "fullPath": "/images/51_images/750 ml container mockup/750-ml-container-mockup-9.webp",
    "reason": "Numbered container packaging mockup (1-17)"
  }
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
