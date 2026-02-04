import { useState, useRef } from 'react';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { RulesSection } from '@/components/RulesSection';
import { KoiKoiGame } from '@/components/KoiKoiGame';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const rulesRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleLearnClick = () => {
    rulesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToMenu = () => {
    setIsPlaying(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isPlaying) {
    return <KoiKoiGame onBack={handleBackToMenu} />;
  }

  return (
    <div className="min-h-screen">
      <Hero onPlayClick={handlePlayClick} onLearnClick={handleLearnClick} />
      <AboutSection />
      <div ref={rulesRef}>
        <RulesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
