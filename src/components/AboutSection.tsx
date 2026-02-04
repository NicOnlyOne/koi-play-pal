import { HANAFUDA_DECK } from '@/lib/hanafuda';
import { HanafudaCardComponent } from './HanafudaCard';

export function AboutSection() {
  // Show one card from each month
  const sampleCards = [1, 2, 3, 4].map(month => 
    HANAFUDA_DECK.find(c => c.month === month && c.type === 'bright') || 
    HANAFUDA_DECK.find(c => c.month === month && c.type === 'animal') ||
    HANAFUDA_DECK.find(c => c.month === month)!
  );

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-4xl text-primary/30 font-display">花札とは</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mt-2 mb-4">
              What is Hanafuda?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
          
          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">Hanafuda</strong> (花札, "flower cards") is a traditional Japanese 
                card game with roots dating back to the 16th century. The deck consists of 
                <strong className="text-secondary"> 48 cards</strong> divided into 12 suits, each representing a month 
                of the year and its associated flower or plant.
              </p>
              
              <p className="leading-relaxed">
                Originally designed to circumvent gambling laws that banned numbered cards, 
                Hanafuda evolved into a beloved family game with deep cultural significance. 
                The beautiful artwork on each card depicts seasonal flora, fauna, and 
                traditional Japanese imagery.
              </p>
              
              <p className="leading-relaxed">
                <strong className="text-primary">Koi-Koi</strong> is the most popular Hanafuda game variant. 
                Players match cards from their hand with cards on the field to collect 
                special combinations called <em className="text-secondary">yaku</em>. The name comes from the 
                phrase shouted when a player decides to continue playing for higher stakes 
                after making a scoring combination.
              </p>
            </div>
            
            {/* Card showcase */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl scale-110" />
                
                {/* Cards display */}
                <div className="relative grid grid-cols-2 gap-4 p-6">
                  {sampleCards.map((card, index) => (
                    <div 
                      key={card.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <HanafudaCardComponent card={card} size="lg" disabled />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Card types info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { type: 'Bright', count: 5, color: 'text-yellow-400', icon: '★', desc: '20 points each' },
              { type: 'Animal', count: 9, color: 'text-blue-400', icon: '◆', desc: '10 points each' },
              { type: 'Ribbon', count: 10, color: 'text-red-400', icon: '▬', desc: '5 points each' },
              { type: 'Plain', count: 24, color: 'text-gray-400', icon: '○', desc: '1 point each' },
            ].map((item, index) => (
              <div 
                key={item.type}
                className="glass rounded-xl p-4 text-center animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <span className={`text-3xl ${item.color}`}>{item.icon}</span>
                <h3 className="font-display text-lg mt-2 text-foreground">{item.type}</h3>
                <p className="text-sm text-muted-foreground">{item.count} cards</p>
                <p className="text-xs text-primary mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
