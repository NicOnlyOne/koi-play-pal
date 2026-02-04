import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🌸</div>
          <h3 className="text-2xl font-display text-gold mb-2">Hanafuda</h3>
          <p className="text-muted-foreground mb-6">
            The Art of Japanese Flower Cards
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-sakura fill-sakura" />
            <span>for the love of traditional games</span>
          </div>
          
          <p className="text-xs text-muted-foreground/50 mt-6">
            花札 • はなふだ • Flower Cards
          </p>
        </div>
      </div>
    </footer>
  );
}
