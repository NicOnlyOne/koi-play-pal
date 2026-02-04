import { Button } from '@/components/ui/button';
import { FallingPetals } from './FallingPetals';
import { Sparkles, Play, BookOpen } from 'lucide-react';

interface HeroProps {
  onPlayClick: () => void;
  onLearnClick: () => void;
}

export function Hero({ onPlayClick, onLearnClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FallingPetals />
      
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sakura/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 text-center px-4">
        {/* Japanese title */}
        <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-6xl md:text-8xl font-display text-primary opacity-30">
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
          className="text-xl md:text-2xl text-foreground/80 mb-4 font-light animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          The Art of Japanese Flower Cards
        </p>
        
        {/* Koi-Koi badge */}
        <div 
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/70">Featuring the beloved <strong className="text-secondary">Koi-Koi</strong> variant</span>
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
            className="bg-gradient-to-r from-primary to-chrysanthemum text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Play Koi-Koi
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onLearnClick}
            className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6"
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
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
