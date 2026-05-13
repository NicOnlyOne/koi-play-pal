import { Button } from '@/components/ui/button';
import { CARD_IMAGES } from '@/lib/cardImages';
import { useMemo } from 'react';


interface HeroProps {
  onPlayClick: () => void;
  onLearnClick: () => void;
}

export function Hero({ onPlayClick, onLearnClick }: HeroProps) {
  const cardIds = useMemo(() => {
    const ids = Object.keys(CARD_IMAGES).map(Number);
    const shuffled = ids.sort(() => Math.random() - 0.5);
    return [shuffled[0], shuffled[1]];
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 sm:px-12 py-20">
      

      {/* Background blooms */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[820px] md:h-[820px] rounded-full border border-accent/15 pointer-events-none" />
      <div className="absolute kinpaku inset-0 opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left rail: vertical Japanese typography */}
        <aside className="hidden lg:flex lg:col-span-1 flex-col items-center gap-8 border-r border-secondary/15 pr-6 animate-fade-in">
          <span className="text-secondary font-semibold tracking-[0.4em] uppercase text-[0.65rem] [writing-mode:vertical-rl]">
            Est. 16th Century
          </span>
          <div className="h-20 w-px bg-accent/60" />
          <span className="text-primary text-5xl font-display font-bold [writing-mode:vertical-rl] tracking-[0.2em] select-none">
            花札
          </span>
        </aside>

        {/* Main content */}
        <div className="lg:col-span-7 relative z-10">
          <div className="flex items-center gap-4 mb-6 animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-medium tracking-[0.3em] uppercase text-xs sm:text-sm">
              The Art of Seasons
            </span>
          </div>

          <h1
            className="font-display text-7xl sm:text-8xl md:text-9xl text-secondary leading-[0.95] tracking-tight mb-8 animate-fade-in"
            style={{ animationDelay: '0.15s' }}
          >
            Hana<br />
            <span className="italic font-normal text-gold">fuda</span>
          </h1>

          <p
            className="max-w-md text-foreground/75 leading-relaxed text-lg mb-10 animate-fade-in"
            style={{ animationDelay: '0.25s' }}
          >
            Experience the elegance of Japan's legendary "Flower Cards." A game of intuition,
            strategy, and seasonal beauty passed through generations.
          </p>

          <div className="flex flex-wrap gap-5 animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <Button
              onClick={onPlayClick}
              className="group relative px-8 py-6 h-auto rounded-none bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-0.5 tracking-[0.2em] text-sm font-bold"
            >
              <span className="relative z-10">PLAY KOI-KOI</span>
              <span className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>

            <Button
              onClick={onLearnClick}
              variant="outline"
              className="px-8 py-6 h-auto rounded-none border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 tracking-[0.2em] text-sm font-medium"
            >
              LEARN THE RULES
            </Button>
          </div>
        </div>

        {/* Right: card composition */}
        <div className="lg:col-span-4 relative hidden lg:flex justify-end animate-fade-in" style={{ animationDelay: '0.45s' }}>
          <div className="relative w-64 h-96">
            {/* Card 1 */}
            <div className="absolute inset-0 bg-card border border-accent/30 shadow-[var(--shadow-card)] rotate-[-6deg] -translate-x-[20%] p-2 transition-transform duration-700 hover:-rotate-3 overflow-hidden">
              <img
                src={CARD_IMAGES[cardIds[0]]}
                alt="Hanafuda card"
                className="w-full h-full object-cover rounded-sm"
                loading="eager"
              />
            </div>
            {/* Card 2 */}
            <div className="absolute inset-0 bg-card border border-accent/30 shadow-[var(--shadow-hover)] rotate-[5deg] translate-y-8 p-2 z-20 transition-transform duration-700 hover:rotate-2 overflow-hidden">
              <img
                src={CARD_IMAGES[cardIds[1]]}
                alt="Hanafuda card"
                className="w-full h-full object-cover rounded-sm"
                loading="eager"
              />
            </div>
          </div>

          <div className="absolute -bottom-12 -right-12 w-48 h-48 border-[12px] border-accent/10 rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Bottom editorial rail */}
      <div className="absolute bottom-8 left-6 right-6 sm:left-12 sm:right-12 hidden md:flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-4">
          <span className="text-[0.625rem] text-accent tracking-[0.5em] font-bold">01 / 12 MONTHS</span>
          <div className="w-24 h-px bg-accent/30" />
        </div>
        <div className="text-[0.625rem] text-foreground/40 tracking-[0.3em] font-display italic">
          Timeless Tradition · Modern Play
        </div>
      </div>
    </section>
  );
}
