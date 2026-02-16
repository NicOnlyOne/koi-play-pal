import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-foreground/10">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🌸</div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Hanafuda</h3>
          <p className="text-foreground/60 mb-6 text-sm">
            The Art of Japanese Flower Cards
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-foreground/50">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-card fill-card" />
            <span>for traditional games</span>
          </div>
          
          <p className="text-xs text-foreground/30 mt-6">
            花札 • はなふだ • Flower Cards
          </p>
        </div>
      </div>
    </footer>
  );
}
