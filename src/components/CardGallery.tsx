import { HANAFUDA_DECK, MONTH_NAMES } from '@/lib/hanafuda';
import { CARD_IMAGES } from '@/lib/cardImages';
import { cn } from '@/lib/utils';

const MONTH_FLOWERS = [
  '', 'Pine', 'Plum', 'Cherry', 'Wisteria', 'Iris', 'Peony',
  'Bush Clover', 'Susuki', 'Chrysanthemum', 'Maple', 'Willow', 'Paulownia'
];

export function CardGallery() {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header with blue accent bar */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-1 bg-secondary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            CARD GALLERY
          </h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl text-sm">
          All 48 cards of the Hanafuda deck, organized by their twelve months. Each month features a seasonal flower with four unique cards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {months.map((month) => {
            const cards = HANAFUDA_DECK.filter(c => c.month === month);
            return (
              <div
                key={month}
                className="border-2 border-secondary bg-card p-5 hover:border-primary transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2 py-0.5">{String(month).padStart(2, '0')}</span>
                  <h3 className="text-sm font-mono font-bold text-foreground uppercase">{MONTH_FLOWERS[month]}</h3>
                  <span className="text-[10px] text-muted-foreground ml-auto font-mono">
                    {MONTH_NAMES[month]?.split(' - ')[0]}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {cards.map((card) => (
                    <div key={card.id} className="group relative">
                      <div className="aspect-[2/3] overflow-hidden border-2 border-border hover:border-primary hover:scale-105 transition-all duration-200">
                        <img
                          src={CARD_IMAGES[card.id]}
                          alt={card.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        <div className="bg-card text-foreground text-[10px] px-2 py-1 border-2 border-secondary whitespace-nowrap font-mono">
                          {card.name}
                          <span className={cn(
                            'ml-1 font-bold',
                            card.type === 'bright' && 'text-primary',
                            card.type === 'animal' && 'text-secondary',
                            card.type === 'ribbon' && 'text-accent',
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
          })}
        </div>
      </div>
    </section>
  );
}
