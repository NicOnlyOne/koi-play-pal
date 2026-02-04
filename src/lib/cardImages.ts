// Card image imports for all 48 Hanafuda cards

// January - Pine
import januaryCrane from '@/assets/cards/january-crane.jpg';
import januaryRibbon from '@/assets/cards/january-ribbon.jpg';
import januaryPlain from '@/assets/cards/january-plain.jpg';

// February - Plum
import februaryWarbler from '@/assets/cards/february-warbler.jpg';
import februaryRibbon from '@/assets/cards/february-ribbon.jpg';
import februaryPlain from '@/assets/cards/february-plain.jpg';

// March - Cherry
import marchCurtain from '@/assets/cards/march-curtain.jpg';
import marchRibbon from '@/assets/cards/march-ribbon.jpg';
import marchPlain from '@/assets/cards/march-plain.jpg';

// April - Wisteria
import aprilCuckoo from '@/assets/cards/april-cuckoo.jpg';
import aprilRibbon from '@/assets/cards/april-ribbon.jpg';
import aprilPlain from '@/assets/cards/april-plain.jpg';

// May - Iris
import mayBridge from '@/assets/cards/may-bridge.jpg';
import mayRibbon from '@/assets/cards/may-ribbon.jpg';
import mayPlain from '@/assets/cards/may-plain.jpg';

// June - Peony
import juneButterflies from '@/assets/cards/june-butterflies.jpg';
import juneRibbon from '@/assets/cards/june-ribbon.jpg';
import junePlain from '@/assets/cards/june-plain.jpg';

// July - Bush Clover
import julyBoar from '@/assets/cards/july-boar.jpg';
import julyRibbon from '@/assets/cards/july-ribbon.jpg';
import julyPlain from '@/assets/cards/july-plain.jpg';

// August - Susuki
import augustMoon from '@/assets/cards/august-moon.jpg';
import augustGeese from '@/assets/cards/august-geese.jpg';
import augustPlain from '@/assets/cards/august-plain.jpg';

// September - Chrysanthemum
import septemberSake from '@/assets/cards/september-sake.jpg';
import septemberRibbon from '@/assets/cards/september-ribbon.jpg';
import septemberPlain from '@/assets/cards/september-plain.jpg';

// October - Maple
import octoberDeer from '@/assets/cards/october-deer.jpg';
import octoberRibbon from '@/assets/cards/october-ribbon.jpg';
import octoberPlain from '@/assets/cards/october-plain.jpg';

// November - Willow
import novemberRainman from '@/assets/cards/november-rainman.jpg';
import novemberSwallow from '@/assets/cards/november-swallow.jpg';
import novemberRibbon from '@/assets/cards/november-ribbon.jpg';
import novemberLightning from '@/assets/cards/november-lightning.jpg';

// December - Paulownia
import decemberPhoenix from '@/assets/cards/december-phoenix.jpg';
import decemberPlain from '@/assets/cards/december-plain.jpg';

// Card back
import cardBack from '@/assets/cards/card-back.jpg';

// Map card IDs to their images
export const CARD_IMAGES: Record<number, string> = {
  // January - Pine (松)
  1: januaryCrane,      // Pine with Crane (Bright)
  2: januaryRibbon,     // Pine with Poetry Ribbon
  3: januaryPlain,      // Pine Plain 1
  4: januaryPlain,      // Pine Plain 2
  
  // February - Plum (梅)
  5: februaryWarbler,   // Plum with Bush Warbler (Animal)
  6: februaryRibbon,    // Plum with Poetry Ribbon
  7: februaryPlain,     // Plum Plain 1
  8: februaryPlain,     // Plum Plain 2
  
  // March - Cherry (桜)
  9: marchCurtain,      // Cherry with Curtain (Bright)
  10: marchRibbon,      // Cherry with Poetry Ribbon
  11: marchPlain,       // Cherry Plain 1
  12: marchPlain,       // Cherry Plain 2
  
  // April - Wisteria (藤)
  13: aprilCuckoo,      // Wisteria with Cuckoo (Animal)
  14: aprilRibbon,      // Wisteria with Red Ribbon
  15: aprilPlain,       // Wisteria Plain 1
  16: aprilPlain,       // Wisteria Plain 2
  
  // May - Iris (菖蒲)
  17: mayBridge,        // Iris with Bridge (Animal)
  18: mayRibbon,        // Iris with Red Ribbon
  19: mayPlain,         // Iris Plain 1
  20: mayPlain,         // Iris Plain 2
  
  // June - Peony (牡丹)
  21: juneButterflies,  // Peony with Butterflies (Animal)
  22: juneRibbon,       // Peony with Blue Ribbon
  23: junePlain,        // Peony Plain 1
  24: junePlain,        // Peony Plain 2
  
  // July - Bush Clover (萩)
  25: julyBoar,         // Bush Clover with Boar (Animal)
  26: julyRibbon,       // Bush Clover with Red Ribbon
  27: julyPlain,        // Bush Clover Plain 1
  28: julyPlain,        // Bush Clover Plain 2
  
  // August - Susuki (芒)
  29: augustMoon,       // Susuki with Moon (Bright)
  30: augustGeese,      // Susuki with Geese (Animal)
  31: augustPlain,      // Susuki Plain 1
  32: augustPlain,      // Susuki Plain 2
  
  // September - Chrysanthemum (菊)
  33: septemberSake,    // Chrysanthemum with Sake Cup (Animal)
  34: septemberRibbon,  // Chrysanthemum with Blue Ribbon
  35: septemberPlain,   // Chrysanthemum Plain 1
  36: septemberPlain,   // Chrysanthemum Plain 2
  
  // October - Maple (紅葉)
  37: octoberDeer,      // Maple with Deer (Animal)
  38: octoberRibbon,    // Maple with Blue Ribbon
  39: octoberPlain,     // Maple Plain 1
  40: octoberPlain,     // Maple Plain 2
  
  // November - Willow (柳)
  41: novemberRainman,  // Willow with Rain Man (Bright)
  42: novemberSwallow,  // Willow with Swallow (Animal)
  43: novemberRibbon,   // Willow with Ribbon
  44: novemberLightning, // Willow with Lightning (Plain)
  
  // December - Paulownia (桐)
  45: decemberPhoenix,  // Paulownia with Phoenix (Bright)
  46: decemberPlain,    // Paulownia Plain 1
  47: decemberPlain,    // Paulownia Plain 2
  48: decemberPlain,    // Paulownia Plain 3
};

export const CARD_BACK_IMAGE = cardBack;
