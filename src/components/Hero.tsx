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

      {/* Large white arc at top */}
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] md:w-[1400px] md:h-[700px] bg-white rounded-[50%] opacity-90" />

      {/* Decorative lanterns */}
      <div className="absolute top-20 left-[10%] animate-lantern hidden md:block">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-primary" />
          <div className="w-10 h-14 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center">
            <div className="w-6 h-8 rounded-full bg-card border border-primary/20" />
          </div>
        </div>
      </div>
      <div className="absolute top-32 right-[12%] animate-lantern hidden md:block" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center">
          <div className="w-1 h-6 bg-primary" />
          <div className="w-8 h-12 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center">
            <div className="w-5 h-7 rounded-full bg-card border border-primary/20" />
          </div>
        </div>
      </div>

      {/* Seigaiha wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 wave-pattern opacity-40" />
      
      <div className="container relative z-10 text-center px-4 pt-16">
        {/* Japanese title */}
        <div className="mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-5xl md:text-7xl text-primary/30" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            花札
          </span>
        </div>
        
        {/* Main title */}
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4 animate-fade-in tracking-tight"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-gold drop-shadow-lg">Hanafuda</span>
        </h1>
        
        {/* Subtitle in pink pill */}
        <div 
          className="inline-block bg-card text-card-foreground px-8 py-3 rounded-full mb-6 animate-fade-in shadow-lg"
          style={{ animationDelay: '0.3s' }}
        >
          <p className="text-sm md:text-base font-medium">
            ✿ The Art of Japanese Flower Cards ✿
          </p>
        </div>
        
        {/* Koi-Koi badge */}
        <div 
          className="flex justify-center mb-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium shadow-md">
            <span>🎴</span>
            <span>Featuring <strong>Koi-Koi</strong></span>
          </div>
        </div>
        
        {/* Description */}
        <p 
          className="max-w-xl mx-auto text-foreground/80 mb-12 animate-fade-in text-sm md:text-base leading-relaxed"
          style={{ animationDelay: '0.5s' }}
        >
          Experience the centuries-old Japanese card game featuring 48 beautifully illustrated cards 
          representing the twelve months. Match cards, collect combinations, and shout "Koi-Koi!"
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <Button 
            size="lg" 
            onClick={onPlayClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Play className="w-5 h-5 mr-2" />
            Play Koi-Koi
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onLearnClick}
            className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 text-lg px-8 py-6 rounded-full"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Learn the Rules
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-foreground/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
