import { HanafudaCard as CardType } from '@/lib/hanafuda';
import { cn } from '@/lib/utils';

interface HanafudaCardProps {
  card: CardType;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  faceDown?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Using semantic gradients based on card month
const getMonthGradient = (month: number): string => {
  // These use HSL values from our design system color palette
  const gradients: Record<number, string> = {
    1: 'from-pine via-pine/80 to-muted', // Pine - green
    2: 'from-sakura-dark via-sakura-dark/80 to-muted', // Plum - pink
    3: 'from-sakura via-sakura/80 to-muted', // Cherry - pink
    4: 'from-wisteria via-wisteria/80 to-muted', // Wisteria - purple
    5: 'from-secondary via-secondary/80 to-muted', // Iris - blue-ish
    6: 'from-sakura-dark via-sakura-dark/80 to-muted', // Peony - magenta
    7: 'from-pine via-pine/80 to-muted', // Bush Clover - green
    8: 'from-chrysanthemum via-chrysanthemum/80 to-muted', // Susuki - amber
    9: 'from-primary via-primary/80 to-muted', // Chrysanthemum - gold
    10: 'from-maple via-maple/80 to-muted', // Maple - orange-red
    11: 'from-pine via-pine/80 to-muted', // Willow - teal-green
    12: 'from-muted-foreground via-muted-foreground/80 to-muted', // Paulownia - slate
  };
  return gradients[month] || 'from-muted to-background';
};

// Type badges removed - using inline conditional classes with design tokens

export function HanafudaCardComponent({
  card,
  onClick,
  selected = false,
  disabled = false,
  faceDown = false,
  size = 'md',
  className,
}: HanafudaCardProps) {
  const sizeClasses = {
    sm: 'w-14 h-20 text-xl',
    md: 'w-20 h-28 text-2xl',
    lg: 'w-24 h-36 text-3xl',
  };

  if (faceDown) {
    return (
      <div
        className={cn(
          sizeClasses[size],
          'rounded-lg flex items-center justify-center',
          'bg-gradient-to-br from-accent to-accent/80',
          'border-2 border-accent/50',
          'shadow-lg',
          className
        )}
      >
        <div className="w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center">
          <span className="text-primary text-sm">花</span>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        sizeClasses[size],
        'rounded-lg relative overflow-hidden transition-all duration-200',
        'bg-gradient-to-br',
        getMonthGradient(card.month),
        'border-2',
        selected ? 'border-primary ring-2 ring-primary/50 scale-105' : 'border-border',
        !disabled && 'hover:scale-105 hover:border-primary/50 cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed',
        'shadow-lg hover:shadow-xl',
        'group',
        className
      )}
    >
      {/* Card content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-1">
        <span className="leading-none">{card.image}</span>
        
        {/* Type badge */}
        <div
          className={cn(
            'absolute bottom-1 left-1/2 -translate-x-1/2',
            'px-1.5 py-0.5 rounded text-[8px] font-medium uppercase tracking-wider',
            card.type === 'bright' && 'bg-primary/30 text-primary',
            card.type === 'animal' && 'bg-secondary/30 text-secondary',
            card.type === 'ribbon' && 'bg-accent/30 text-accent',
            card.type === 'plain' && 'bg-muted text-muted-foreground'
          )}
        >
          {card.type === 'bright' && '★'}
          {card.type === 'animal' && '◆'}
          {card.type === 'ribbon' && '▬'}
          {card.type === 'plain' && '○'}
        </div>
      </div>

      {/* Month indicator */}
      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-background/40 flex items-center justify-center">
        <span className="text-[8px] text-foreground/80">{card.month}</span>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/0 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
