export type MerchandiseCategory =
  | "Apparel"
  | "Bags"
  | "Drinkware"
  | "Stationery"
  | "Accessories"
  | "Gifts";

export interface MerchandiseItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: MerchandiseCategory;
}

export const merchandiseItems: MerchandiseItem[] = [
  { id: 1, name: "Baseball Cap", price: "₹499", image: "/merchandise/m1.png", category: "Apparel" },
  { id: 2, name: "Branded T-Shirt", price: "₹699", image: "/merchandise/m2.png", category: "Apparel" },
  { id: 3, name: "Branded Apron", price: "₹799", image: "/merchandise/m3.png", category: "Apparel" },
  { id: 4, name: "Canvas Tote Bag – Design 1", price: "₹399", image: "/merchandise/m4.png", category: "Bags" },
  { id: 5, name: "Canvas Tote Bag – Design 2", price: "₹449", image: "/merchandise/m5.png", category: "Bags" },
  { id: 6, name: "Insulated Travel Tumbler", price: "₹899", image: "/merchandise/m6.png", category: "Drinkware" },
  { id: 7, name: "Ceramic Coffee Mug", price: "₹349", image: "/merchandise/m7.png", category: "Drinkware" },
  { id: 8, name: "Spiral Notebook", price: "₹299", image: "/merchandise/m8.png", category: "Stationery" },
  { id: 9, name: "Logo Keychain", price: "₹199", image: "/merchandise/m9.png", category: "Accessories" },
  { id: 10, name: "Acrylic ID Card Holder", price: "₹149", image: "/merchandise/m10.png", category: "Accessories" },
  { id: 11, name: "Branded Lanyard", price: "₹199", image: "/merchandise/m11.png", category: "Accessories" },
  { id: 12, name: "Gift Card", price: "₹500 onwards*", image: "/merchandise/m12.png", category: "Gifts" },
  { id: 13, name: "Card Holder / Wallet", price: "₹299", image: "/merchandise/m13.png", category: "Accessories" },
  { id: 14, name: "Branded Folded Blanket", price: "₹999", image: "/merchandise/m14.png", category: "Gifts" },
  { id: 15, name: "Branded Gift Box", price: "₹299", image: "/merchandise/m15.png", category: "Gifts" },
  { id: 16, name: "Drawstring Backpack", price: "₹499", image: "/merchandise/m16.png", category: "Bags" },
  { id: 17, name: "Wrist Strap / Key Fob", price: "₹199", image: "/merchandise/m17.png", category: "Accessories" },
  { id: 18, name: "Logo Sticker", price: "₹49", image: "/merchandise/m18.png", category: "Accessories" },
  { id: 19, name: "Round Logo Badge / Pin", price: "₹99", image: "/merchandise/m19.png", category: "Accessories" },
  { id: 20, name: "Square Logo Sticker", price: "₹49", image: "/merchandise/m20.png", category: "Accessories" },
];