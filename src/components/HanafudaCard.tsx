import { HanafudaCard as CardType } from '@/lib/hanafuda';
import { CARD_IMAGES, CARD_BACK_IMAGE } from '@/lib/cardImages';
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
    sm: 'w-14 h-20',
    md: 'w-20 h-28',
    lg: 'w-24 h-36',
  };

  if (faceDown) {
    return (
      <div
        className={cn(
          sizeClasses[size],
          'rounded-lg overflow-hidden',
          'border-2 border-accent/50',
          'shadow-lg',
          className
        )}
      >
        <img 
          src={CARD_BACK_IMAGE} 
          alt="Card back"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const cardImage = CARD_IMAGES[card.id];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        sizeClasses[size],
        'rounded-lg relative overflow-hidden transition-all duration-200',
        'border-2',
        selected ? 'border-primary ring-2 ring-primary/50 scale-105' : 'border-border',
        !disabled && 'hover:scale-105 hover:border-primary/50 cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed',
        'shadow-lg hover:shadow-xl',
        'group',
        className
      )}
    >
      {/* Card image */}
      <img 
        src={cardImage} 
        alt={card.name}
        className="w-full h-full object-cover"
      />
      
      {/* Type indicator overlay */}
      <div
        className={cn(
          'absolute bottom-1 left-1/2 -translate-x-1/2',
          'px-1.5 py-0.5 rounded text-[8px] font-medium uppercase tracking-wider',
          'backdrop-blur-sm',
          card.type === 'bright' && 'bg-primary/60 text-primary-foreground',
          card.type === 'animal' && 'bg-secondary/60 text-secondary-foreground',
          card.type === 'ribbon' && 'bg-accent/60 text-accent-foreground',
          card.type === 'plain' && 'bg-muted/60 text-muted-foreground'
        )}
      >
        {card.type === 'bright' && '★'}
        {card.type === 'animal' && '◆'}
        {card.type === 'ribbon' && '▬'}
        {card.type === 'plain' && '○'}
      </div>

      {/* Month indicator */}
      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center">
        <span className="text-[8px] text-foreground font-medium">{card.month}</span>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/0 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
