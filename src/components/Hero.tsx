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
      
      {/* Large coral sun circle */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full translate-x-1/4 -translate-y-1/4 animate-sun-pulse" />
      <div className="absolute top-16 right-4 w-[300px] h-[300px] md:w-[380px] md:h-[380px] bg-primary/30 rounded-full translate-x-1/4 -translate-y-1/4" />
      
      {/* Decorative botanical shapes - left */}
      <svg className="absolute bottom-0 left-0 w-48 md:w-72 text-secondary/20 animate-wave-sway" viewBox="0 0 200 300" fill="currentColor">
        <ellipse cx="60" cy="280" rx="35" ry="130" transform="rotate(-8 60 280)" />
        <ellipse cx="120" cy="270" rx="30" ry="120" transform="rotate(5 120 270)" />
        <ellipse cx="170" cy="285" rx="28" ry="110" transform="rotate(12 170 285)" />
      </svg>
      
      {/* Decorative botanical shapes - right */}
      <svg className="absolute bottom-0 right-12 w-40 md:w-56 text-secondary/15 animate-wave-sway" style={{ animationDelay: '2s' }} viewBox="0 0 200 300" fill="currentColor">
        <ellipse cx="80" cy="280" rx="32" ry="125" transform="rotate(-5 80 280)" />
        <ellipse cx="140" cy="275" rx="28" ry="115" transform="rotate(8 140 275)" />
      </svg>

      {/* Seigaiha wave band */}
      <div className="absolute bottom-0 left-0 right-0 h-24 seigaiha opacity-60" />

      {/* Small floating gold dots */}
      <div className="absolute top-[30%] left-[15%] w-2 h-2 rounded-full bg-accent/40 animate-float" />
      <div className="absolute top-[45%] right-[20%] w-3 h-3 rounded-full bg-accent/30 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[60%] left-[35%] w-1.5 h-1.5 rounded-full bg-primary/25 animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container relative z-10 text-center px-4">
        {/* Japanese title */}
        <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-6xl md:text-8xl font-display text-primary/25">
            花札
          </span>
        </div>
        
        {/* Main title */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gold">Hanafuda</span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-foreground/70 mb-4 font-light animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          The Art of Japanese Flower Cards
        </p>
        
        {/* Koi-Koi badge */}
        <div 
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm text-foreground/60">Featuring the beloved <strong className="text-primary">Koi-Koi</strong> variant</span>
        </div>
        
        {/* Description */}
        <p 
          className="max-w-2xl mx-auto text-muted-foreground mb-12 animate-fade-in"
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-lg px-8 py-6 shadow-lg hover:shadow-xl rounded-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Play Koi-Koi
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onLearnClick}
            className="border-secondary/40 text-secondary hover:bg-secondary/10 text-lg px-8 py-6 rounded-xl"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Learn the Rules
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ animationDelay: '1s' }}
        >
          <div className="w-6 h-10 border-2 border-primary/25 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
