import { useState, useCallback, useEffect } from 'react';
import { 
  GameState, 
  initializeGame, 
  getMatchingCards, 
  checkYaku,
  HanafudaCard,
  GamePhase 
} from '@/lib/hanafuda';
import { HanafudaCardComponent } from './HanafudaCard';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, RotateCcw, Trophy, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KoiKoiGameProps {
  onBack: () => void;
}

export function KoiKoiGame({ onBack }: KoiKoiGameProps) {
  const [game, setGame] = useState<GameState>(initializeGame);
  const [showYakuDialog, setShowYakuDialog] = useState(false);
  const [pendingYaku, setPendingYaku] = useState<ReturnType<typeof checkYaku>>([]);

  const handleCardFromHand = useCallback((card: HanafudaCard) => {
    if (game.phase !== 'select-hand' || game.currentPlayer !== 'player') return;
    
    const matches = getMatchingCards(card, game.field);
    
    if (matches.length === 0) {
      // No match - card goes to field
      setGame(prev => ({
        ...prev,
        playerHand: prev.playerHand.filter(c => c.id !== card.id),
        field: [...prev.field, card],
        phase: 'draw',
        message: 'Draw a card from the deck',
      }));
    } else if (matches.length === 1) {
      // Exactly one match - auto capture
      setGame(prev => ({
        ...prev,
        playerHand: prev.playerHand.filter(c => c.id !== card.id),
        field: prev.field.filter(c => c.id !== matches[0].id),
        playerCapture: [...prev.playerCapture, card, matches[0]],
        phase: 'draw',
        message: 'Draw a card from the deck',
      }));
    } else {
      // Multiple matches - select one
      setGame(prev => ({
        ...prev,
        selectedCard: card,
        phase: 'select-field',
        message: 'Select a card to capture',
      }));
    }
  }, [game.phase, game.currentPlayer, game.field]);

  const handleFieldCardSelect = useCallback((fieldCard: HanafudaCard) => {
    if (!game.selectedCard) return;
    
    if (game.phase === 'select-field') {
      setGame(prev => ({
        ...prev,
        playerHand: prev.playerHand.filter(c => c.id !== prev.selectedCard!.id),
        field: prev.field.filter(c => c.id !== fieldCard.id),
        playerCapture: [...prev.playerCapture, prev.selectedCard!, fieldCard],
        selectedCard: null,
        phase: 'draw',
        message: 'Draw a card from the deck',
      }));
    } else if (game.phase === 'draw-field') {
      setGame(prev => ({
        ...prev,
        field: prev.field.filter(c => c.id !== fieldCard.id),
        playerCapture: [...prev.playerCapture, prev.drawnCard!, fieldCard],
        drawnCard: null,
        phase: 'check-yaku',
        message: 'Checking for yaku...',
      }));
    }
  }, [game.selectedCard, game.phase]);

  const handleDraw = useCallback(() => {
    if (game.phase !== 'draw' || game.deck.length === 0) return;
    
    const drawnCard = game.deck[0];
    const matches = getMatchingCards(drawnCard, game.field);
    
    if (matches.length === 0) {
      setGame(prev => ({
        ...prev,
        deck: prev.deck.slice(1),
        field: [...prev.field, drawnCard],
        phase: 'check-yaku',
        message: 'Checking for yaku...',
      }));
    } else if (matches.length === 1) {
      setGame(prev => ({
        ...prev,
        deck: prev.deck.slice(1),
        field: prev.field.filter(c => c.id !== matches[0].id),
        playerCapture: [...prev.playerCapture, drawnCard, matches[0]],
        phase: 'check-yaku',
        message: 'Checking for yaku...',
      }));
    } else {
      setGame(prev => ({
        ...prev,
        deck: prev.deck.slice(1),
        drawnCard: drawnCard,
        phase: 'draw-field',
        message: 'Select a card to capture with drawn card',
      }));
    }
  }, [game.phase, game.deck, game.field]);

  // Check for yaku after player turn
  useEffect(() => {
    if (game.phase !== 'check-yaku') return;
    
    const yakuFound = checkYaku(game.playerCapture);
    
    if (yakuFound.length > 0) {
      setPendingYaku(yakuFound);
      setShowYakuDialog(true);
    } else {
      // No yaku, switch to AI
      setGame(prev => ({
        ...prev,
        phase: 'ai-turn',
        currentPlayer: 'ai',
        message: 'Computer is thinking...',
      }));
    }
  }, [game.phase, game.playerCapture]);

  const handleKoiKoi = useCallback((callKoiKoi: boolean) => {
    setShowYakuDialog(false);
    
    if (callKoiKoi) {
      // Continue playing
      setGame(prev => ({
        ...prev,
        phase: 'ai-turn',
        currentPlayer: 'ai',
        message: 'Koi-Koi! Computer is thinking...',
        koiKoiChoice: true,
      }));
    } else {
      // End round and score
      const points = pendingYaku.reduce((sum, y) => sum + y.yaku.points + y.extraPoints, 0);
      setGame(prev => ({
        ...prev,
        playerScore: prev.playerScore + (prev.koiKoiChoice ? points * 2 : points),
        phase: 'game-over',
        message: `You scored ${prev.koiKoiChoice ? points * 2 : points} points!`,
      }));
    }
  }, [pendingYaku]);

  // AI turn logic
  useEffect(() => {
    if (game.phase !== 'ai-turn' || game.aiHand.length === 0) {
      if (game.aiHand.length === 0 && game.playerHand.length === 0) {
        setGame(prev => ({ ...prev, phase: 'game-over', message: 'Round over!' }));
      }
      return;
    }

    const aiPlay = () => {
      // Simple AI: play first card that can match, or first card
      let cardToPlay = game.aiHand[0];
      let matchingField: HanafudaCard | null = null;

      for (const card of game.aiHand) {
        const matches = getMatchingCards(card, game.field);
        if (matches.length > 0) {
          cardToPlay = card;
          // Prefer capturing high-value cards
          matchingField = matches.reduce((best, curr) => 
            curr.points > best.points ? curr : best, matches[0]);
          break;
        }
      }

      const matches = getMatchingCards(cardToPlay, game.field);

      setGame(prev => {
        let newField = prev.field;
        let newAiCapture = prev.aiCapture;
        let newAiHand = prev.aiHand.filter(c => c.id !== cardToPlay.id);

        if (matchingField) {
          newField = prev.field.filter(c => c.id !== matchingField!.id);
          newAiCapture = [...prev.aiCapture, cardToPlay, matchingField!];
        } else {
          newField = [...prev.field, cardToPlay];
        }

        return {
          ...prev,
          aiHand: newAiHand,
          field: newField,
          aiCapture: newAiCapture,
          message: matchingField 
            ? `Computer captured ${cardToPlay.name}` 
            : `Computer played ${cardToPlay.name}`,
        };
      });

      // AI draws
      setTimeout(() => {
        if (game.deck.length === 0) {
          setGame(prev => ({
            ...prev,
            phase: prev.playerHand.length > 0 ? 'select-hand' : 'game-over',
            currentPlayer: 'player',
            message: prev.playerHand.length > 0 ? 'Your turn - select a card' : 'Game over!',
          }));
          return;
        }

        const drawnCard = game.deck[0];
        const drawMatches = getMatchingCards(drawnCard, game.field);

        setGame(prev => {
          let newField = prev.field;
          let newAiCapture = prev.aiCapture;
          const newDeck = prev.deck.slice(1);

          if (drawMatches.length > 0) {
            const matchToCapture = drawMatches.reduce((best, curr) => 
              curr.points > best.points ? curr : best, drawMatches[0]);
            newField = prev.field.filter(c => c.id !== matchToCapture.id);
            newAiCapture = [...prev.aiCapture, drawnCard, matchToCapture];
          } else {
            newField = [...prev.field, drawnCard];
          }

          // Check AI yaku
          const aiYaku = checkYaku(newAiCapture);
          
          if (aiYaku.length > 0) {
            const aiPoints = aiYaku.reduce((sum, y) => sum + y.yaku.points + y.extraPoints, 0);
            return {
              ...prev,
              deck: newDeck,
              field: newField,
              aiCapture: newAiCapture,
              aiScore: prev.aiScore + aiPoints,
              phase: 'game-over',
              message: `Computer scored ${aiPoints} points with ${aiYaku[0].yaku.name}!`,
            };
          }

          return {
            ...prev,
            deck: newDeck,
            field: newField,
            aiCapture: newAiCapture,
            phase: prev.playerHand.length > 0 ? 'select-hand' : 'game-over',
            currentPlayer: 'player',
            message: prev.playerHand.length > 0 ? 'Your turn - select a card' : 'Game over!',
          };
        });
      }, 800);
    };

    const timeout = setTimeout(aiPlay, 1000);
    return () => clearTimeout(timeout);
  }, [game.phase, game.aiHand, game.field, game.deck]);

  const handleNewGame = () => {
    setGame(initializeGame());
    setPendingYaku([]);
  };

  const matchableCards = game.selectedCard 
    ? getMatchingCards(game.selectedCard, game.field)
    : game.drawnCard 
    ? getMatchingCards(game.drawnCard, game.field)
    : [];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={onBack} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-display text-gold">Koi-Koi</h1>
            <p className="text-sm text-muted-foreground">Round {game.round}</p>
          </div>
          <Button variant="ghost" onClick={handleNewGame} className="text-muted-foreground hover:text-foreground">
            <RotateCcw className="w-4 h-4 mr-2" />
            New Game
          </Button>
        </div>

        {/* Score display */}
        <div className="flex justify-between mb-6">
          <div className="glass rounded-lg px-4 py-2">
            <span className="text-sm text-muted-foreground">You</span>
            <p className="text-xl font-bold text-primary">{game.playerScore} pts</p>
          </div>
          <div className="glass rounded-lg px-4 py-2 text-right">
            <span className="text-sm text-muted-foreground">Computer</span>
            <p className="text-xl font-bold text-secondary">{game.aiScore} pts</p>
          </div>
        </div>

        {/* Game message */}
        <div className="text-center mb-4">
          <p className={cn(
            "text-lg px-4 py-2 rounded-full inline-block",
            game.currentPlayer === 'player' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'
          )}>
            {game.message}
          </p>
        </div>

        {/* AI Hand (face down) */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2 text-center">Computer's Hand ({game.aiHand.length})</p>
          <div className="flex justify-center gap-1 flex-wrap">
            {game.aiHand.map((card) => (
              <HanafudaCardComponent key={card.id} card={card} faceDown size="sm" />
            ))}
          </div>
        </div>

        {/* Field */}
        <div className="glass rounded-2xl p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-3 text-center">Field</p>
          <div className="flex justify-center gap-2 flex-wrap min-h-[120px]">
            {game.field.map((card) => (
              <HanafudaCardComponent 
                key={card.id} 
                card={card}
                onClick={() => handleFieldCardSelect(card)}
                selected={matchableCards.some(m => m.id === card.id)}
                disabled={
                  (game.phase !== 'select-field' && game.phase !== 'draw-field') ||
                  !matchableCards.some(m => m.id === card.id)
                }
              />
            ))}
            {game.field.length === 0 && (
              <p className="text-muted-foreground self-center">No cards on field</p>
            )}
          </div>
        </div>

        {/* Draw pile and drawn card */}
        <div className="flex justify-center gap-4 mb-6">
          {game.deck.length > 0 && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Deck ({game.deck.length})</p>
              <button 
                onClick={handleDraw}
                disabled={game.phase !== 'draw'}
                className="transition-transform hover:scale-105 disabled:opacity-50"
              >
                <HanafudaCardComponent card={game.deck[0]} faceDown />
              </button>
            </div>
          )}
          {game.drawnCard && (
            <div className="text-center">
              <p className="text-sm text-primary mb-2">Drawn Card</p>
              <HanafudaCardComponent card={game.drawnCard} selected />
            </div>
          )}
        </div>

        {/* Player hand */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2 text-center">Your Hand</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {game.playerHand.map((card) => (
              <HanafudaCardComponent 
                key={card.id} 
                card={card}
                onClick={() => handleCardFromHand(card)}
                selected={game.selectedCard?.id === card.id}
                disabled={game.phase !== 'select-hand'}
              />
            ))}
          </div>
        </div>

        {/* Captured cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-xl p-4">
            <p className="text-sm text-muted-foreground mb-2">Your Captures ({game.playerCapture.length})</p>
            <div className="flex gap-1 flex-wrap">
              {game.playerCapture.map((card) => (
                <HanafudaCardComponent key={card.id} card={card} size="sm" disabled />
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-4">
            <p className="text-sm text-muted-foreground mb-2">Computer's Captures ({game.aiCapture.length})</p>
            <div className="flex gap-1 flex-wrap">
              {game.aiCapture.map((card) => (
                <HanafudaCardComponent key={card.id} card={card} size="sm" disabled />
              ))}
            </div>
          </div>
        </div>

        {/* Yaku Dialog */}
        <Dialog open={showYakuDialog} onOpenChange={setShowYakuDialog}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display text-primary flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Yaku Complete!
              </DialogTitle>
              <DialogDescription className="text-foreground/80">
                You've completed a scoring combination!
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {pendingYaku.map((y, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-display text-lg text-foreground">{y.yaku.name}</h3>
                      <p className="text-sm text-secondary">{y.yaku.japaneseName}</p>
                    </div>
                    <span className="text-2xl font-bold text-primary">
                      {y.yaku.points + y.extraPoints} pts
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{y.yaku.description}</p>
                </div>
              ))}
              
              <div className="flex gap-3 mt-6">
                <Button 
                  onClick={() => handleKoiKoi(false)} 
                  variant="outline" 
                  className="flex-1 border-border"
                >
                  End Round
                </Button>
                <Button 
                  onClick={() => handleKoiKoi(true)} 
                  className="flex-1 bg-gradient-to-r from-primary to-chrysanthemum"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Koi-Koi!
                </Button>
              </div>
              <p className="text-xs text-center text-muted-foreground">
                Koi-Koi doubles your points if you score again, but you risk losing everything!
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Game Over */}
        {game.phase === 'game-over' && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="glass rounded-2xl p-8 max-w-md w-full mx-4 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-display text-gold mb-2">Round Over!</h2>
              <p className="text-foreground/80 mb-6">{game.message}</p>
              
              <div className="flex justify-center gap-8 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">You</p>
                  <p className="text-3xl font-bold text-primary">{game.playerScore}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Computer</p>
                  <p className="text-3xl font-bold text-secondary">{game.aiScore}</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button onClick={onBack} variant="outline" className="flex-1">
                  Back to Menu
                </Button>
                <Button onClick={handleNewGame} className="flex-1 bg-gradient-to-r from-primary to-chrysanthemum">
                  Play Again
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
