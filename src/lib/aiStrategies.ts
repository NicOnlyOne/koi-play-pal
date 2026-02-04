import { HanafudaCard, getMatchingCards, checkYaku, YAKU_LIST } from './hanafuda';

export type AIDifficulty = 'easy' | 'medium' | 'hard';

interface AIMove {
  cardToPlay: HanafudaCard;
  targetField: HanafudaCard | null;
}

// Easy AI: Random card selection, no strategy
function easyAI(hand: HanafudaCard[], field: HanafudaCard[]): AIMove {
  // Shuffle hand to pick randomly
  const shuffledHand = [...hand].sort(() => Math.random() - 0.5);
  
  for (const card of shuffledHand) {
    const matches = getMatchingCards(card, field);
    if (matches.length > 0) {
      // Pick random match
      const randomMatch = matches[Math.floor(Math.random() * matches.length)];
      return { cardToPlay: card, targetField: randomMatch };
    }
  }
  
  // No matches, play random card
  return { cardToPlay: shuffledHand[0], targetField: null };
}

// Medium AI: Prioritizes captures, prefers high-value cards
function mediumAI(hand: HanafudaCard[], field: HanafudaCard[]): AIMove {
  let bestMove: AIMove = { cardToPlay: hand[0], targetField: null };
  let bestScore = -1;
  
  for (const card of hand) {
    const matches = getMatchingCards(card, field);
    
    if (matches.length > 0) {
      for (const match of matches) {
        // Score based on combined card value
        const score = card.points + match.points;
        if (score > bestScore) {
          bestScore = score;
          bestMove = { cardToPlay: card, targetField: match };
        }
      }
    }
  }
  
  // If no captures possible, play lowest value card
  if (bestScore === -1) {
    const lowestCard = [...hand].sort((a, b) => a.points - b.points)[0];
    bestMove = { cardToPlay: lowestCard, targetField: null };
  }
  
  return bestMove;
}

// Hard AI: Strategic play considering yaku potential
function hardAI(hand: HanafudaCard[], field: HanafudaCard[], aiCapture: HanafudaCard[]): AIMove {
  let bestMove: AIMove = { cardToPlay: hand[0], targetField: null };
  let bestScore = -Infinity;
  
  for (const card of hand) {
    const matches = getMatchingCards(card, field);
    
    if (matches.length > 0) {
      for (const match of matches) {
        // Calculate strategic value
        let score = 0;
        
        // Base value from card points
        score += (card.points + match.points) * 2;
        
        // Check if this capture progresses toward a yaku
        const potentialCapture = [...aiCapture, card, match];
        const yakuProgress = calculateYakuProgress(potentialCapture);
        score += yakuProgress * 10;
        
        // Bonus for completing a yaku
        const completedYaku = checkYaku(potentialCapture);
        if (completedYaku.length > 0) {
          score += 100;
        }
        
        // Prefer brights and animals
        if (card.type === 'bright' || match.type === 'bright') score += 20;
        if (card.type === 'animal' || match.type === 'animal') score += 10;
        
        // Bonus for capturing special yaku cards
        const specialCards = [1, 9, 29, 41, 45, 21, 25, 37, 33]; // Brights + Boar-Deer-Butterfly + Sake
        if (specialCards.includes(match.id)) score += 15;
        
        if (score > bestScore) {
          bestScore = score;
          bestMove = { cardToPlay: card, targetField: match };
        }
      }
    } else {
      // No match - evaluate discarding this card
      let discardPenalty = 0;
      
      // Penalize discarding high-value cards
      discardPenalty -= card.points * 3;
      
      // Extra penalty for special cards
      if (card.type === 'bright') discardPenalty -= 50;
      if (card.type === 'animal') discardPenalty -= 20;
      
      if (discardPenalty > bestScore) {
        bestScore = discardPenalty;
        bestMove = { cardToPlay: card, targetField: null };
      }
    }
  }
  
  // If still no good move, play lowest value card to minimize loss
  if (bestScore <= -Infinity) {
    const lowestCard = [...hand].sort((a, b) => a.points - b.points)[0];
    bestMove = { cardToPlay: lowestCard, targetField: null };
  }
  
  return bestMove;
}

// Calculate progress toward various yaku
function calculateYakuProgress(cards: HanafudaCard[]): number {
  let progress = 0;
  
  // Count card types
  const brights = cards.filter(c => c.type === 'bright');
  const animals = cards.filter(c => c.type === 'animal');
  const ribbons = cards.filter(c => c.type === 'ribbon');
  const plains = cards.filter(c => c.type === 'plain');
  
  // Five Brights progress (need 5)
  progress += brights.length * 3;
  
  // Animals progress (need 5)
  if (animals.length >= 3) progress += animals.length * 2;
  
  // Ribbons progress (need 5)
  if (ribbons.length >= 3) progress += ribbons.length * 2;
  
  // Plains progress (need 10)
  if (plains.length >= 7) progress += plains.length;
  
  // Boar-Deer-Butterfly progress
  const inoshikacho = [21, 25, 37];
  const hasINS = inoshikacho.filter(id => cards.some(c => c.id === id)).length;
  if (hasINS >= 2) progress += hasINS * 5;
  
  // Poetry ribbons progress
  const poetryRibbons = [2, 6, 10];
  const hasPoetry = poetryRibbons.filter(id => cards.some(c => c.id === id)).length;
  if (hasPoetry >= 2) progress += hasPoetry * 4;
  
  // Blue ribbons progress
  const blueRibbons = [22, 34, 38];
  const hasBlue = blueRibbons.filter(id => cards.some(c => c.id === id)).length;
  if (hasBlue >= 2) progress += hasBlue * 4;
  
  // Sake viewing yaku progress
  const hasSakeCup = cards.some(c => c.id === 33);
  const hasCurtain = cards.some(c => c.id === 9);
  const hasMoon = cards.some(c => c.id === 29);
  if (hasSakeCup && (hasCurtain || hasMoon)) progress += 8;
  else if (hasSakeCup || hasCurtain || hasMoon) progress += 3;
  
  return progress;
}

// Select best field card when drawing matches multiple
export function selectBestDrawMatch(
  drawnCard: HanafudaCard, 
  matches: HanafudaCard[], 
  aiCapture: HanafudaCard[],
  difficulty: AIDifficulty
): HanafudaCard {
  if (difficulty === 'easy') {
    return matches[Math.floor(Math.random() * matches.length)];
  }
  
  // Medium and Hard: pick highest value or most strategic
  if (difficulty === 'medium') {
    return matches.reduce((best, curr) => 
      curr.points > best.points ? curr : best, matches[0]);
  }
  
  // Hard: consider yaku potential
  let bestMatch = matches[0];
  let bestScore = -Infinity;
  
  for (const match of matches) {
    const potentialCapture = [...aiCapture, drawnCard, match];
    let score = match.points * 2;
    score += calculateYakuProgress(potentialCapture) * 5;
    
    const completedYaku = checkYaku(potentialCapture);
    if (completedYaku.length > 0) score += 50;
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = match;
    }
  }
  
  return bestMatch;
}

// Main AI decision function
export function getAIMove(
  hand: HanafudaCard[], 
  field: HanafudaCard[], 
  aiCapture: HanafudaCard[],
  difficulty: AIDifficulty
): AIMove {
  switch (difficulty) {
    case 'easy':
      return easyAI(hand, field);
    case 'medium':
      return mediumAI(hand, field);
    case 'hard':
      return hardAI(hand, field, aiCapture);
    default:
      return mediumAI(hand, field);
  }
}

// AI Koi-Koi decision
export function shouldAIKoiKoi(
  aiCapture: HanafudaCard[],
  playerCapture: HanafudaCard[],
  aiHand: HanafudaCard[],
  difficulty: AIDifficulty,
  currentYakuPoints: number
): boolean {
  if (difficulty === 'easy') {
    // Easy AI: random decision, slightly favoring ending
    return Math.random() < 0.3;
  }
  
  if (difficulty === 'medium') {
    // Medium AI: only koi-koi if points are low and have cards left
    return currentYakuPoints <= 3 && aiHand.length >= 3;
  }
  
  // Hard AI: Strategic decision
  const progress = calculateYakuProgress(aiCapture);
  const playerProgress = calculateYakuProgress(playerCapture);
  
  // Risk assessment
  const risk = playerProgress > progress ? 0.7 : 0.4;
  
  // More likely to koi-koi with low points, lots of cards, and good progress
  if (currentYakuPoints <= 3 && aiHand.length >= 4 && progress > 15) {
    return Math.random() > risk;
  }
  
  if (currentYakuPoints >= 6) {
    // High value, usually end unless very promising
    return progress > 25 && Math.random() > 0.6;
  }
  
  // Medium points: balanced decision
  return aiHand.length >= 3 && progress > 10 && Math.random() > 0.5;
}
