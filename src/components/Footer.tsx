import { Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-animations';
import { cn } from '@/lib/utils';

export function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <footer className="py-16 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-8 seigaiha opacity-20" />
      <div className="absolute inset-0 asanoha opacity-[0.35] pointer-events-none" />
      <div className="sumi-divider max-w-md mx-auto mb-10 relative z-10" />
      
      <div
        ref={ref}
        className={cn(
          'container px-4 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🌿</div>
          <h3 className="text-2xl font-display text-gold mb-2">Hanafuda</h3>
          <p className="text-muted-foreground mb-6">
            The Art of Japanese Flower Cards
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for the love of traditional games</span>
          </div>
          
          <p className="text-xs text-muted-foreground/50 mt-6">
            花札 • はなふだ • Flower Cards
          </p>

          <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground/40">
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <a href="https://niconlyone.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">niconlyone.com</a>
            <span>•</span>
            <a href="/design-system" className="hover:text-primary transition-colors">Design System</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
