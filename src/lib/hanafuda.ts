// Hanafuda Card Types and Game Logic

export interface HanafudaCard {
  id: number;
  month: number;
  name: string;
  type: 'bright' | 'animal' | 'ribbon' | 'plain';
  points: number;
  image: string;
}

// All 48 Hanafuda cards organized by month
export const HANAFUDA_DECK: HanafudaCard[] = [
  // January - Pine (松)
  { id: 1, month: 1, name: 'Pine with Crane', type: 'bright', points: 20, image: '🌲🦢' },
  { id: 2, month: 1, name: 'Pine with Poetry Ribbon', type: 'ribbon', points: 5, image: '🌲📜' },
  { id: 3, month: 1, name: 'Pine Plain 1', type: 'plain', points: 1, image: '🌲' },
  { id: 4, month: 1, name: 'Pine Plain 2', type: 'plain', points: 1, image: '🌲' },
  
  // February - Plum (梅)
  { id: 5, month: 2, name: 'Plum with Bush Warbler', type: 'animal', points: 10, image: '🌸🐦' },
  { id: 6, month: 2, name: 'Plum with Poetry Ribbon', type: 'ribbon', points: 5, image: '🌸📜' },
  { id: 7, month: 2, name: 'Plum Plain 1', type: 'plain', points: 1, image: '🌸' },
  { id: 8, month: 2, name: 'Plum Plain 2', type: 'plain', points: 1, image: '🌸' },
  
  // March - Cherry (桜)
  { id: 9, month: 3, name: 'Cherry with Curtain', type: 'bright', points: 20, image: '🌸🎪' },
  { id: 10, month: 3, name: 'Cherry with Poetry Ribbon', type: 'ribbon', points: 5, image: '🌸📜' },
  { id: 11, month: 3, name: 'Cherry Plain 1', type: 'plain', points: 1, image: '🌸' },
  { id: 12, month: 3, name: 'Cherry Plain 2', type: 'plain', points: 1, image: '🌸' },
  
  // April - Wisteria (藤)
  { id: 13, month: 4, name: 'Wisteria with Cuckoo', type: 'animal', points: 10, image: '💜🐦' },
  { id: 14, month: 4, name: 'Wisteria with Red Ribbon', type: 'ribbon', points: 5, image: '💜🎀' },
  { id: 15, month: 4, name: 'Wisteria Plain 1', type: 'plain', points: 1, image: '💜' },
  { id: 16, month: 4, name: 'Wisteria Plain 2', type: 'plain', points: 1, image: '💜' },
  
  // May - Iris (菖蒲)
  { id: 17, month: 5, name: 'Iris with Bridge', type: 'animal', points: 10, image: '💠🌉' },
  { id: 18, month: 5, name: 'Iris with Red Ribbon', type: 'ribbon', points: 5, image: '💠🎀' },
  { id: 19, month: 5, name: 'Iris Plain 1', type: 'plain', points: 1, image: '💠' },
  { id: 20, month: 5, name: 'Iris Plain 2', type: 'plain', points: 1, image: '💠' },
  
  // June - Peony (牡丹)
  { id: 21, month: 6, name: 'Peony with Butterflies', type: 'animal', points: 10, image: '🌺🦋' },
  { id: 22, month: 6, name: 'Peony with Blue Ribbon', type: 'ribbon', points: 5, image: '🌺🔵' },
  { id: 23, month: 6, name: 'Peony Plain 1', type: 'plain', points: 1, image: '🌺' },
  { id: 24, month: 6, name: 'Peony Plain 2', type: 'plain', points: 1, image: '🌺' },
  
  // July - Bush Clover (萩)
  { id: 25, month: 7, name: 'Bush Clover with Boar', type: 'animal', points: 10, image: '🌿🐗' },
  { id: 26, month: 7, name: 'Bush Clover with Red Ribbon', type: 'ribbon', points: 5, image: '🌿🎀' },
  { id: 27, month: 7, name: 'Bush Clover Plain 1', type: 'plain', points: 1, image: '🌿' },
  { id: 28, month: 7, name: 'Bush Clover Plain 2', type: 'plain', points: 1, image: '🌿' },
  
  // August - Susuki (芒)
  { id: 29, month: 8, name: 'Susuki with Moon', type: 'bright', points: 20, image: '🌾🌕' },
  { id: 30, month: 8, name: 'Susuki with Geese', type: 'animal', points: 10, image: '🌾🦆' },
  { id: 31, month: 8, name: 'Susuki Plain 1', type: 'plain', points: 1, image: '🌾' },
  { id: 32, month: 8, name: 'Susuki Plain 2', type: 'plain', points: 1, image: '🌾' },
  
  // September - Chrysanthemum (菊)
  { id: 33, month: 9, name: 'Chrysanthemum with Sake Cup', type: 'animal', points: 10, image: '🌼🍶' },
  { id: 34, month: 9, name: 'Chrysanthemum with Blue Ribbon', type: 'ribbon', points: 5, image: '🌼🔵' },
  { id: 35, month: 9, name: 'Chrysanthemum Plain 1', type: 'plain', points: 1, image: '🌼' },
  { id: 36, month: 9, name: 'Chrysanthemum Plain 2', type: 'plain', points: 1, image: '🌼' },
  
  // October - Maple (紅葉)
  { id: 37, month: 10, name: 'Maple with Deer', type: 'animal', points: 10, image: '🍁🦌' },
  { id: 38, month: 10, name: 'Maple with Blue Ribbon', type: 'ribbon', points: 5, image: '🍁🔵' },
  { id: 39, month: 10, name: 'Maple Plain 1', type: 'plain', points: 1, image: '🍁' },
  { id: 40, month: 10, name: 'Maple Plain 2', type: 'plain', points: 1, image: '🍁' },
  
  // November - Willow (柳)
  { id: 41, month: 11, name: 'Willow with Rain Man', type: 'bright', points: 20, image: '🌳🌧️' },
  { id: 42, month: 11, name: 'Willow with Swallow', type: 'animal', points: 10, image: '🌳🐦' },
  { id: 43, month: 11, name: 'Willow with Ribbon', type: 'ribbon', points: 5, image: '🌳🎀' },
  { id: 44, month: 11, name: 'Willow with Lightning', type: 'plain', points: 1, image: '🌳⚡' },
  
  // December - Paulownia (桐)
  { id: 45, month: 12, name: 'Paulownia with Phoenix', type: 'bright', points: 20, image: '🌳🔥' },
  { id: 46, month: 12, name: 'Paulownia Plain 1', type: 'plain', points: 1, image: '🌳' },
  { id: 47, month: 12, name: 'Paulownia Plain 2', type: 'plain', points: 1, image: '🌳' },
  { id: 48, month: 12, name: 'Paulownia Plain 3', type: 'plain', points: 1, image: '🌳' },
];

export const MONTH_NAMES = [
  '', 'January - Pine', 'February - Plum', 'March - Cherry', 'April - Wisteria',
  'May - Iris', 'June - Peony', 'July - Bush Clover', 'August - Susuki',
  'September - Chrysanthemum', 'October - Maple', 'November - Willow', 'December - Paulownia'
];

export interface Yaku {
  name: string;
  japaneseName: string;
  points: number;
  description: string;
  check: (cards: HanafudaCard[]) => boolean;
}

export const YAKU_LIST: Yaku[] = [
  {
    name: 'Five Brights',
    japaneseName: '五光 (Gokō)',
    points: 15,
    description: 'All 5 bright cards',
    check: (cards) => cards.filter(c => c.type === 'bright').length === 5
  },
  {
    name: 'Four Brights',
    japaneseName: '四光 (Shikō)',
    points: 8,
    description: '4 brights (excluding Rain Man)',
    check: (cards) => {
      const brights = cards.filter(c => c.type === 'bright');
      return brights.length === 4 && !brights.some(c => c.id === 41);
    }
  },
  {
    name: 'Rainy Four Brights',
    japaneseName: '雨四光 (Ame-Shikō)',
    points: 7,
    description: '4 brights including Rain Man',
    check: (cards) => {
      const brights = cards.filter(c => c.type === 'bright');
      return brights.length === 4 && brights.some(c => c.id === 41);
    }
  },
  {
    name: 'Three Brights',
    japaneseName: '三光 (Sankō)',
    points: 6,
    description: '3 brights (excluding Rain Man)',
    check: (cards) => {
      const brights = cards.filter(c => c.type === 'bright');
      return brights.length === 3 && !brights.some(c => c.id === 41);
    }
  },
  {
    name: 'Boar-Deer-Butterfly',
    japaneseName: '猪鹿蝶 (Inoshikachō)',
    points: 5,
    description: 'Boar, Deer, and Butterfly animals',
    check: (cards) => [25, 37, 21].every(id => cards.some(c => c.id === id))
  },
  {
    name: 'Poetry Ribbons',
    japaneseName: '赤短 (Akatan)',
    points: 5,
    description: 'Three poetry ribbons (Pine, Plum, Cherry)',
    check: (cards) => [2, 6, 10].every(id => cards.some(c => c.id === id))
  },
  {
    name: 'Blue Ribbons',
    japaneseName: '青短 (Aotan)',
    points: 5,
    description: 'Three blue ribbons (Peony, Chrysanthemum, Maple)',
    check: (cards) => [22, 34, 38].every(id => cards.some(c => c.id === id))
  },
  {
    name: 'Animals',
    japaneseName: 'タネ (Tane)',
    points: 1,
    description: '5+ animal cards (+1 per extra)',
    check: (cards) => cards.filter(c => c.type === 'animal').length >= 5
  },
  {
    name: 'Ribbons',
    japaneseName: '短冊 (Tanzaku)',
    points: 1,
    description: '5+ ribbon cards (+1 per extra)',
    check: (cards) => cards.filter(c => c.type === 'ribbon').length >= 5
  },
  {
    name: 'Plains',
    japaneseName: 'カス (Kasu)',
    points: 1,
    description: '10+ plain cards (+1 per extra)',
    check: (cards) => cards.filter(c => c.type === 'plain').length >= 10
  },
  {
    name: 'Flower Viewing Sake',
    japaneseName: '花見酒 (Hanami-zake)',
    points: 3,
    description: 'Cherry Curtain + Chrysanthemum Sake Cup',
    check: (cards) => cards.some(c => c.id === 9) && cards.some(c => c.id === 33)
  },
  {
    name: 'Moon Viewing Sake',
    japaneseName: '月見酒 (Tsukimi-zake)',
    points: 3,
    description: 'Moon + Chrysanthemum Sake Cup',
    check: (cards) => cards.some(c => c.id === 29) && cards.some(c => c.id === 33)
  },
];

export function shuffleDeck(deck: HanafudaCard[]): HanafudaCard[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function checkYaku(cards: HanafudaCard[]): { yaku: Yaku; extraPoints: number }[] {
  const results: { yaku: Yaku; extraPoints: number }[] = [];
  
  for (const yaku of YAKU_LIST) {
    if (yaku.check(cards)) {
      let extraPoints = 0;
      
      // Calculate extra points for cumulative yaku
      if (yaku.name === 'Animals') {
        extraPoints = cards.filter(c => c.type === 'animal').length - 5;
      } else if (yaku.name === 'Ribbons') {
        extraPoints = cards.filter(c => c.type === 'ribbon').length - 5;
      } else if (yaku.name === 'Plains') {
        extraPoints = cards.filter(c => c.type === 'plain').length - 10;
      }
      
      results.push({ yaku, extraPoints });
    }
  }
  
  return results;
}

export function getMatchingCards(card: HanafudaCard, field: HanafudaCard[]): HanafudaCard[] {
  return field.filter(f => f.month === card.month);
}

export type GamePhase = 'select-hand' | 'select-field' | 'draw' | 'draw-field' | 'check-yaku' | 'ai-turn' | 'game-over';

export interface GameState {
  playerHand: HanafudaCard[];
  aiHand: HanafudaCard[];
  field: HanafudaCard[];
  deck: HanafudaCard[];
  playerCapture: HanafudaCard[];
  aiCapture: HanafudaCard[];
  playerScore: number;
  aiScore: number;
  currentPlayer: 'player' | 'ai';
  phase: GamePhase;
  selectedCard: HanafudaCard | null;
  drawnCard: HanafudaCard | null;
  message: string;
  koiKoiChoice: boolean;
  round: number;
}

export function initializeGame(): GameState {
  const shuffled = shuffleDeck([...HANAFUDA_DECK]);
  
  return {
    playerHand: shuffled.slice(0, 8),
    aiHand: shuffled.slice(8, 16),
    field: shuffled.slice(16, 24),
    deck: shuffled.slice(24),
    playerCapture: [],
    aiCapture: [],
    playerScore: 0,
    aiScore: 0,
    currentPlayer: 'player',
    phase: 'select-hand',
    selectedCard: null,
    drawnCard: null,
    message: 'Select a card from your hand',
    koiKoiChoice: false,
    round: 1,
  };
}
