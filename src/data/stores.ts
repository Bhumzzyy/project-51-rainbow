export interface Store {
  id: string;
  slug: string;
  name: string;
  area: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  lat: number;
  lng: number;
  verified: boolean;
  googleMapsQueryUrl: string;
}

export const STORES: Store[] = [
  {
    id: "1",
    slug: "parvat-patiya-surat",
    name: "51 Rainbow Ice Cream",
    area: "Parvat Patiya",
    address: "Aai Mata Chowk, Karunesh Nagar, D V Park Society, Parvat Patiya, Surat, Gujarat 395010",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395010",
    lat: 21.179589,
    lng: 72.866238,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Parvat+Patiya+Surat+395010"
  },
  {
    id: "2",
    slug: "varachha-hirabaug-surat",
    name: "51 Rainbow Ice Cream",
    area: "Varachha",
    address: "Sarti Complex, near Hirabaug Road, Varachha Main Rd, G-4, Surat, Gujarat 395006",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395006",
    lat: 21.213011,
    lng: 72.857258,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Varachha+Main+Rd+Hirabaug+Surat+395006"
  },
  {
    id: "3",
    slug: "ring-road-rustampura-surat",
    name: "SOH By 51 Rainbow Ice Cream",
    area: "Rustampura",
    address: "Century Building, 21st, Ring Rd, beside Empire State Building, opp. Ambedkar ji Pratima, Maan Darwaja, Rustampura, Surat, Gujarat 395002",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395002",
    lat: 21.185548,
    lng: 72.829448,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=SOH+By+51+Rainbow+Ice+Cream+Ring+Road+Rustampura+Surat+395002"
  },
  {
    id: "4",
    slug: "zampa-bazaar-surat",
    name: "51 Rainbow Ice Cream",
    area: "Zampa Bazaar",
    address: "Gachi Sheri, Zampa Bazaar, Mahidharpura, Bhagal, Surat, Gujarat 395003",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395003",
    lat: 21.202390,
    lng: 72.834464,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Zampa+Bazaar+Mahidharpura+Surat+395003"
  },
  {
    id: "5",
    slug: "chowk-bazar-gopipura-surat",
    name: "51 Rainbow Ice Cream",
    area: "Chowk Bazar",
    address: "36, 395008, 10/24/36, Chowk Bazar Rd, Chowk Bazar, Gopipura, Surat, Gujarat 395003",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395003",
    lat: 21.190190,
    lng: 72.822185,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Chowk+Bazar+Gopipura+Surat+395003"
  },
  {
    id: "6",
    slug: "railway-station-varachha-surat",
    name: "51Rainbow Icecream",
    area: "Railway Station Area",
    address: "Sunrise Restaurent, opp. Surat Railway Station, Sufi Baug, Railway Station Area, Varachha, Surat, Gujarat 395003",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395003",
    lat: 21.205056,
    lng: 72.840685,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Surat+Railway+Station+Varachha+395003"
  },
  {
    id: "7",
    slug: "udhana-darwaja-rustampura-surat",
    name: "51 Rainbow Icecream",
    area: "Udhana Darwaja",
    address: "109, Morcha Masjid Complex, Udhana Darwaja, Rustampura, Surat, Gujarat 395002",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395002",
    lat: 21.165091,
    lng: 72.839774,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Icecream+Udhana+Darwaja+Rustampura+Surat+395002"
  },
  {
    id: "8",
    slug: "hodi-bangla-bhagal-surat",
    name: "51 Rainbow Ice Cream",
    area: "Hodi Bangla",
    address: "Hodi Bangla, Char Rasta, beside Lucknowi Nihari, Near A Refai Badi Gadi, Surat, Gujarat 395003",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395003",
    lat: 21.198500,
    lng: 72.831500,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Hodi+Bangla+Char+Rasta+Surat+395003"
  },
  {
    id: "9",
    slug: "athwa-chowparty-surat",
    name: "51Rainbow Ice Cream & FastFood",
    area: "Athwa",
    address: "Jawaharlal Nehru Garden, Chowparty, Surat., Police Line, Athwa, Surat, Gujarat 395001",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395001",
    lat: 21.177939,
    lng: 72.803652,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Jawaharlal+Nehru+Garden+Chowparty+Athwa+Surat+395001"
  },
  {
    id: "10",
    slug: "bhari-mata-road-surat",
    name: "51rainbow icecream",
    area: "Bhari Mata Road",
    address: "10/4 Honest Industrial Estate, Bhari Mata Rd, Surat, Gujarat 395004",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395004",
    lat: 21.222675,
    lng: 72.821414,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Icecream+Bhari+Mata+Rd+Surat+395004"
  },
  {
    id: "11",
    slug: "baleshwar-kadodara-palsana",
    name: "51 Rainbow Icecream",
    area: "Baleshwar",
    address: "Shree Khodiyar Kathiyavadi Dhaba, Kadodara, Palsana Highway, Baleshwar, Gujarat 394305",
    city: "Baleshwar",
    state: "Gujarat",
    country: "India",
    pincode: "394305",
    lat: 21.085941,
    lng: 72.978046,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Icecream+Kadodara+Palsana+Highway+Baleshwar+Gujarat+394305"
  },
  {
    id: "12",
    slug: "vesu-aagam-emporio-surat",
    name: "51 Rainbow Ice creamss",
    area: "Vesu",
    address: "SF-210/211, 2nd Floor, Aagam Emporio, near J.H. Ambani School, Vesu, Surat, Gujarat 395007",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    pincode: "395007",
    lat: 21.137108,
    lng: 72.788677,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Ice+Cream+Aagam+Emporio+Vesu+Surat+395007"
  },
  {
    id: "13",
    slug: "dumas-chopati-sultanabad",
    name: "51 Rainbow Icecream & Mocktails",
    area: "Dumas",
    address: "Chopati, Sultanabad, Amdavadi, Dumas, Gujarat 394550",
    city: "Dumas",
    state: "Gujarat",
    country: "India",
    pincode: "394550",
    lat: 21.087885,
    lng: 72.712561,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Icecream+Chopati+Sultanabad+Dumas+Gujarat+394550"
  },
  {
    id: "14",
    slug: "bardoli-limda-chowk",
    name: "51 RAINBOW",
    area: "Bardoli",
    address: "Limda Chowk, Talavadi, Bardoli, Gujarat 394601",
    city: "Bardoli",
    state: "Gujarat",
    country: "India",
    pincode: "394601",
    lat: 21.133829,
    lng: 73.105390,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+RAINBOW+Limda+Chowk+Talavadi+Bardoli+Gujarat+394601"
  },
  {
    id: "15",
    slug: "kim-moti-naroli",
    name: "Al-Baik & 51 Rainbow ICECREAM Kim",
    area: "Kim",
    address: "NH No 48, Bharat Petrol Pump, Opp Dairy Don, Moti Naroli, Tal: Mangrol, Dist: Surat, NH No 48, Gujarat 394110",
    city: "Kim",
    state: "Gujarat",
    country: "India",
    pincode: "394110",
    lat: 21.399696,
    lng: 72.926590,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Al-Baik+51+Rainbow+Ice+Cream+Kim+Moti+Naroli+Gujarat+394110"
  },
  {
    id: "16",
    slug: "mckinney-ranch-texas-usa",
    name: "51 Rainbow Indian Grill & Momo House | Event Hall",
    area: "McKinney Ranch",
    address: "5151 McKinney Ranch Pkwy #110, McKinney, TX 75070, United States",
    city: "McKinney",
    state: "Texas",
    country: "United States",
    pincode: "75070",
    lat: 33.158775,
    lng: -96.682898,
    verified: true,
    googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=51+Rainbow+Indian+Grill+%26+Momo+House+5151+McKinney+Ranch+Pkwy+%23110+McKinney+TX+75070"
  }
];

export function getCountries(): string[] {
  return Array.from(new Set(STORES.map(s => s.country))).sort();
}

export function getStates(country?: string): string[] {
  const filtered = country ? STORES.filter(s => s.country.toLowerCase() === country.toLowerCase()) : STORES;
  return Array.from(new Set(filtered.map(s => s.state))).sort();
}

export function getCities(state?: string): string[] {
  const filtered = state && state !== "all" ? STORES.filter(s => s.state.toLowerCase() === state.toLowerCase()) : STORES;
  return Array.from(new Set(filtered.map(s => s.city))).sort();
}

export function getPincodes(city?: string): string[] {
  const filtered = city && city !== "all" ? STORES.filter(s => s.city.toLowerCase() === city.toLowerCase()) : STORES;
  return Array.from(new Set(filtered.map(s => s.pincode))).sort();
}

export interface StoreFilterCriteria {
  country?: string;
  state?: string;
  city?: string;
  pincode?: string;
  search?: string;
}

export function filterStores(stores: Store[], criteria: StoreFilterCriteria): Store[] {
  return stores.filter(store => {
    if (criteria.country && criteria.country !== "all" && store.country.toLowerCase() !== criteria.country.toLowerCase()) {
      return false;
    }
    if (criteria.state && criteria.state !== "all" && store.state.toLowerCase() !== criteria.state.toLowerCase()) {
      return false;
    }
    if (criteria.city && criteria.city !== "all" && store.city.toLowerCase() !== criteria.city.toLowerCase()) {
      return false;
    }
    if (criteria.pincode && criteria.pincode !== "all" && store.pincode !== criteria.pincode) {
      return false;
    }
    if (criteria.search && criteria.search.trim() !== "") {
      const q = criteria.search.toLowerCase().trim();
      const match =
        store.name.toLowerCase().includes(q) ||
        store.area.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q) ||
        store.city.toLowerCase().includes(q) ||
        store.pincode.includes(q);
      if (!match) return false;
    }
    return true;
  });
}
