import { HANAFUDA_DECK, MONTH_NAMES } from '@/lib/hanafuda';
import { CARD_IMAGES } from '@/lib/cardImages';
import { useScrollReveal } from '@/hooks/use-scroll-animations';
import { cn } from '@/lib/utils';

const MONTH_FLOWERS = [
  '', 'Pine', 'Plum', 'Cherry', 'Wisteria', 'Iris', 'Peony',
  'Bush Clover', 'Susuki', 'Chrysanthemum', 'Maple', 'Willow', 'Paulownia'
];

const MONTH_EMOJI = [
  '', '🌲', '🌺', '🌸', '💜', '🫐', '🌹',
  '🌿', '🌾', '🏵️', '🍁', '🌧️', '🎐'
];

function MonthCard({ month }: { month: number }) {
  const cards = HANAFUDA_DECK.filter(c => c.month === month);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'group rounded-xl bg-card/90 backdrop-blur-sm p-5 border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${(month % 3) * 80}ms` }}
    >
      {/* Month header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-lg">
          {MONTH_EMOJI[month]}
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-semibold text-primary">{String(month).padStart(2, '0')}</span>
            <h3 className="text-lg font-display font-semibold text-foreground">{MONTH_FLOWERS[month]}</h3>
          </div>
          <span className="text-[11px] text-muted-foreground">
            {MONTH_NAMES[month]?.split(' - ')[0]}
          </span>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-4 gap-2.5">
        {cards.map((card) => (
          <div key={card.id} className="group/card relative">
            <div className="aspect-[2/3] rounded-lg overflow-hidden border border-border/80 shadow-sm group-hover/card:shadow-md group-hover/card:scale-110 group-hover/card:border-primary/40 transition-all duration-300 group-hover/card:z-10 relative">
              <img
                src={CARD_IMAGES[card.id]}
                alt={card.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={cn(
                'absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity',
                card.type === 'bright' && 'bg-accent',
                card.type === 'animal' && 'bg-secondary',
                card.type === 'ribbon' && 'bg-primary',
                card.type === 'plain' && 'bg-muted-foreground',
              )} />
            </div>
            <div className="absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none z-20">
              <div className="bg-foreground text-background text-[10px] px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap">
                {card.name}
                <span className={cn(
                  'ml-1 font-semibold',
                  card.type === 'bright' && 'text-accent',
                  card.type === 'animal' && 'text-secondary',
                  card.type === 'ribbon' && 'text-primary',
                )}>
                  ({card.type})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardGallery() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 seigaiha opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={cn(
            'text-center mb-12 transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="text-primary/50 text-sm font-medium uppercase tracking-widest mb-2">Explore</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
            花札 Card Gallery
          </h2>
          <div className={cn(
            'h-0.5 bg-primary/40 mx-auto transition-all duration-1000 delay-300',
            headerVisible ? 'w-16' : 'w-0'
          )} />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            All 48 cards of the Hanafuda deck, organized by their twelve months. Each month features a seasonal flower with four unique cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {months.map((month) => (
            <MonthCard key={month} month={month} />
          ))}
        </div>
      </div>
    </section>
  );
}
