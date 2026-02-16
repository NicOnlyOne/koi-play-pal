import { Button } from '@/components/ui/button';
import { FallingPetals } from './FallingPetals';
import { Play, BookOpen } from 'lucide-react';

interface HeroProps {
  onPlayClick: () => void;
  onLearnClick: () => void;
}

export function Hero({ onPlayClick, onLearnClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FallingPetals />
      
      {/* Rising sun rays background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] animate-rising-sun" style={{
          background: `conic-gradient(from 0deg, hsl(0 85% 50% / 0.08) 0deg, transparent 15deg, hsl(0 85% 50% / 0.08) 30deg, transparent 45deg, hsl(0 85% 50% / 0.08) 60deg, transparent 75deg, hsl(0 85% 50% / 0.08) 90deg, transparent 105deg, hsl(0 85% 50% / 0.08) 120deg, transparent 135deg, hsl(0 85% 50% / 0.08) 150deg, transparent 165deg, hsl(0 85% 50% / 0.08) 180deg, transparent 195deg, hsl(0 85% 50% / 0.08) 210deg, transparent 225deg, hsl(0 85% 50% / 0.08) 240deg, transparent 255deg, hsl(0 85% 50% / 0.08) 270deg, transparent 285deg, hsl(0 85% 50% / 0.08) 300deg, transparent 315deg, hsl(0 85% 50% / 0.08) 330deg, transparent 345deg, hsl(0 85% 50% / 0.08) 360deg)`,
          borderRadius: '50%',
        }} />
      </div>

      {/* Blue decorative border box */}
      <div className="absolute top-8 left-8 border-2 border-secondary px-4 py-6 hidden md:block">
        <p className="text-secondary text-xs font-mono uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>
          メインページ
        </p>
      </div>
      
      <div className="container relative z-10 text-center px-4">
        {/* Japanese title */}
        <div className="mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-6xl md:text-8xl font-display text-primary/20">
            花札
          </span>
        </div>
        
        {/* Main title */}
        <h1 
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-6 animate-fade-in tracking-tight"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-primary">HANAFUDA</span>
        </h1>
        
        {/* Subtitle in blue box */}
        <div 
          className="inline-block bg-secondary text-secondary-foreground px-6 py-3 mb-6 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-sm md:text-base font-mono uppercase tracking-widest">
            The Art of Japanese Flower Cards
          </p>
        </div>
        
        {/* Koi-Koi badge */}
        <div 
          className="inline-flex items-center gap-2 border-2 border-primary px-4 py-2 mb-8 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="w-2 h-2 bg-primary" />
          <span className="text-sm text-foreground/70 font-mono">Featuring <strong className="text-primary">KOI-KOI</strong></span>
        </div>
        
        {/* Description */}
        <p 
          className="max-w-xl mx-auto text-muted-foreground mb-12 animate-fade-in text-sm leading-relaxed"
          style={{ animationDelay: '0.5s' }}
        >
          Experience the centuries-old Japanese card game featuring 48 beautifully illustrated cards 
          representing the twelve months of the year. Match cards, collect combinations, and shout "Koi-Koi" 
          to continue your winning streak.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <Button 
            size="lg" 
            onClick={onPlayClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-lg px-8 py-6 font-mono uppercase tracking-wider border-0 rounded-none"
          >
            <Play className="w-5 h-5 mr-2" />
            Play Koi-Koi
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onLearnClick}
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 font-mono uppercase tracking-wider rounded-none"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Learn Rules
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-primary/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
