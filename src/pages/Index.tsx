import { useState, useRef } from 'react';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { RulesSection } from '@/components/RulesSection';
import { KoiKoiGame } from '@/components/KoiKoiGame';
import { CardGallery } from '@/components/CardGallery';
import { Footer } from '@/components/Footer';
import { StickyNav } from '@/components/StickyNav';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleLearnClick = () => {
    document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' });
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
      <StickyNav onPlayClick={handlePlayClick} />
      <main>
        <Hero onPlayClick={handlePlayClick} onLearnClick={handleLearnClick} />
        <section id="about">
          <AboutSection />
        </section>
        <section id="rules">
          <RulesSection />
        </section>
        <section id="gallery">
          <CardGallery />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
