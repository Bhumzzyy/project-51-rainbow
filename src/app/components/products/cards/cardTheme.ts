// Flavour-matched appetizing dessert color palette for 51 Rainbow product cards
export interface CardColorTheme {
  bg: string;
  lip: string;
}

export function getProductCardTheme(name: string, categorySlug?: string): CardColorTheme {
  const n = name.toLowerCase();

  // 1. Specific Flavour Matching - Rich, appetizing pastel tones with 2-tone darker lips
  if (n.includes('dry fruit') || n.includes('dryfruit') || n.includes('american') || n.includes('anjeer') || n.includes('draksh') || n.includes('dracksh') || n.includes('khazana') || n.includes('almond')) {
    return { bg: '#FFEBD4', lip: '#F2BE8D' }; // Warm almond cream
  }
  if (n.includes('kesar') || n.includes('pista') || n.includes('pistachio')) {
    return { bg: '#EAF6DE', lip: '#BEDFA0' }; // Royal pistachio green
  }
  if (n.includes('chocolate') || n.includes('choco') || n.includes('fudge') || n.includes('cocoa') || n.includes('brownie') || n.includes('mud') || n.includes('rocher') || n.includes('ferrero')) {
    return { bg: '#F5E7E2', lip: '#D9BCB2' }; // Soft cocoa mauve
  }
  if (n.includes('strawberry') || n.includes('rose') || n.includes('cherry') || (n.includes('berry') && !n.includes('blue') && !n.includes('black'))) {
    return { bg: '#FFE5EE', lip: '#F8A8C3' }; // Fresh strawberry pink
  }
  if (n.includes('butterscotch') || n.includes('caramel') || n.includes('toffee') || n.includes('biscoff')) {
    return { bg: '#FFF2D2', lip: '#F5CE7C' }; // Rich caramel cream
  }
  if (n.includes('black currant') || n.includes('blackcurrant') || n.includes('currant')) {
    return { bg: '#EFE3FA', lip: '#CFB5EB' }; // Berry lilac
  }
  if (n.includes('vanilla') || n.includes('tender') || n.includes('coconut')) {
    return { bg: '#FFF6E8', lip: '#ECD9B7' }; // Pure vanilla ivory
  }
  if (n.includes('cookie') || n.includes('oreo') || n.includes('cream')) {
    return { bg: '#EEF3F8', lip: '#BDD2E6' }; // Cookies & cream oat blue
  }
  if (n.includes('mango') || n.includes('alphonso')) {
    return { bg: '#FFF1D0', lip: '#F8CF75' }; // Golden mango yellow
  }
  if (n.includes('rajbhog') || n.includes('saffron') || n.includes('kesar raj')) {
    return { bg: '#FFF3DC', lip: '#F5D38C' }; // Royal saffron ivory
  }
  if (n.includes('bubblegum') || n.includes('bubble')) {
    return { bg: '#EBF4FF', lip: '#B9D5FC' }; // Sweet bubblegum blue
  }
  if (n.includes('paan') || n.includes('guava') || n.includes('chilli')) {
    return { bg: '#EAF6E6', lip: '#BEDFB5' }; // Guava chilli fresh mint
  }
  if (n.includes('sitaphal') || n.includes('custard')) {
    return { bg: '#EFF7ED', lip: '#CDE5CB' }; // Pale custard sage
  }
  if (n.includes('blueberry')) {
    return { bg: '#EFE5F8', lip: '#D3BFE4' }; // Wild blueberry purple
  }
  if (n.includes('mawa') || n.includes('malai') || n.includes('rabdi') || n.includes('kulfi')) {
    return { bg: '#FFF5E6', lip: '#F0D1A8' }; // Rich mawa cream
  }

  // 2. Category Fallbacks
  if (categorySlug === 'falooda') {
    return { bg: '#FFE8F0', lip: '#F8ADC6' }; // Royal rose falooda pink
  }
  if (categorySlug === 'thickshakes') {
    return { bg: '#FFF0D6', lip: '#F5CD82' }; // Thick shake golden cream
  }
  if (categorySlug === 'waffles') {
    return { bg: '#FFEEDC', lip: '#F0C79A' }; // Warm waffle golden
  }
  if (categorySlug === 'coco') {
    return { bg: '#F6E8E5', lip: '#DCBFB8' }; // Cold coco dusty cocoa
  }
  if (categorySlug === 'smoothies') {
    return { bg: '#FFF1D6', lip: '#F7CE88' }; // Tropical smoothie peach
  }
  if (categorySlug === 'milkshakes') {
    return { bg: '#EBF6FC', lip: '#BEDEF2' }; // Chilled shake breeze
  }
  if (categorySlug === 'live-ice-cream') {
    return { bg: '#EFF8EE', lip: '#C8E6C5' }; // Fresh stone mint
  }
  if (categorySlug === 'cakes') {
    return { bg: '#FFEBF3', lip: '#F7B4CE' }; // Celebration cake pink
  }

  // 3. Default Warm Ice Cream Cream
  return { bg: '#FFF4E8', lip: '#F0D4B2' };
}
