import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t-3 border-secondary">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-display text-primary mb-2">HANAFUDA</h3>
          <p className="text-muted-foreground mb-6 font-mono text-sm uppercase tracking-wider">
            The Art of Japanese Flower Cards
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for traditional games</span>
          </div>
          
          <p className="text-xs text-muted-foreground/50 mt-6 font-mono">
            花札 • はなふだ • Flower Cards
          </p>
        </div>
      </div>
    </footer>
  );
}
