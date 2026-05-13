import { Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-animations';
import { cn } from '@/lib/utils';

export function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <footer className="py-16 border-t border-border/50 relative overflow-hidden">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div
        ref={ref}
        className={cn(
          'container px-4 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-5 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-lg">花</span>
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-foreground">
                  Hanafuda
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
                The Art of Japanese Flower Cards. Experience the timeless tradition 
                of Koi-Koi with modern playability.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span>for the love of traditional games</span>
              </div>
            </div>

            {/* Link Groups */}
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="text-foreground font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center">
                <span className="w-1 h-3 bg-primary mr-2 rounded-full" />
                Game
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/#play" className="text-muted-foreground hover:text-foreground transition-colors">
                    Play
                  </a>
                </li>
                <li>
                  <a href="/#rules" className="text-muted-foreground hover:text-foreground transition-colors">
                    Rules
                  </a>
                </li>
                <li>
                  <a href="/#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                    Card Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-foreground font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center">
                <span className="w-1 h-3 bg-primary mr-2 rounded-full" />
                About
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/design-system" className="text-muted-foreground hover:text-foreground transition-colors">
                    Design System
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-foreground font-semibold text-xs uppercase tracking-[0.2em] mb-5 flex items-center">
                <span className="w-1 h-3 bg-primary mr-2 rounded-full" />
                Connect
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://niconlyone.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    niconlyone.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs text-muted-foreground/60">
              <span>© {new Date().getFullYear()}</span>
              <span className="hidden md:inline">•</span>
              <a
                href="https://niconlyone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                niconlyone.com
              </a>
              <span className="hidden md:inline">•</span>
              <a href="/design-system" className="hover:text-primary transition-colors">
                Design System
              </a>
            </div>
            <p className="text-xs text-muted-foreground/40 tracking-wider">
              花札 • はなふだ • Flower Cards
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
