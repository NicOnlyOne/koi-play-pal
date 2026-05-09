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

      {/* Kinpaku gold-leaf flecks layer */}
      <div className="absolute inset-0 kinpaku opacity-70 pointer-events-none" />

      {/* Ensō zen circle */}
      <div className="absolute top-16 right-[-4rem] md:right-[-2rem] w-[420px] h-[420px] md:w-[560px] md:h-[560px] enso animate-sun-pulse pointer-events-none" />
      <div className="absolute top-24 right-2 md:right-12 w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-primary/10 blur-2xl pointer-events-none" />

      {/* Vertical kanji column - tategaki */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 text-secondary/30 font-display text-2xl tracking-[0.5em] [writing-mode:vertical-rl] pointer-events-none select-none">
        <span>春夏秋冬</span>
      </div>

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
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.05s' }}>
          <span className="h-px w-10 bg-primary/40" />
          <span className="text-[0.7rem] tracking-[0.4em] uppercase text-primary/70 font-medium">Kyōto · Edo · 1600s</span>
          <span className="h-px w-10 bg-primary/40" />
        </div>

        {/* Japanese title */}
        <div className="mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
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
          className="text-xl md:text-2xl text-foreground/70 mb-4 font-light italic animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          The Art of Japanese Flower Cards
        </p>

        {/* Koi-Koi badge */}
        <div
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-sun-pulse" />
          <span className="text-sm text-foreground/60">Featuring the beloved <strong className="text-primary">Koi-Koi</strong> variant</span>
        </div>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed animate-fade-in"
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
            className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-base px-8 py-6 shadow-[0_8px_30px_hsl(var(--primary)/0.35)] hover:shadow-[0_12px_40px_hsl(var(--primary)/0.45)] hover:-translate-y-0.5 rounded-md tracking-wide"
          >
            <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Play Koi-Koi
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onLearnClick}
            className="border-secondary/40 text-secondary hover:bg-secondary/10 text-base px-8 py-6 rounded-md tracking-wide"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Learn the Rules
          </Button>
        </div>

        {/* Sumi divider */}
        <div className="sumi-divider max-w-xs mx-auto mt-16 animate-fade-in" style={{ animationDelay: '0.7s' }} />

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
