import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Sun, Moon, Eye } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

interface StickyNavProps {
  onPlayClick: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Rules', href: '#rules' },
  { label: 'Gallery', href: '#gallery' },
];

export function StickyNav({ onPlayClick }: StickyNavProps) {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();

  // Show nav after scrolling past hero
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('dark-wcag');
    else setTheme('light');
  };

  const themeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Eye;
  const themeLabel = theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'WCAG';
  const ThemeIcon = themeIcon;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      )}
    >
      <div className="mx-auto max-w-5xl px-4 py-2 mt-3">
        <div className="flex items-center justify-between gap-2 rounded-full bg-card/80 backdrop-blur-xl border border-border/60 shadow-lg px-2 py-1.5">
          {/* Logo */}
          <span className="text-sm font-display font-bold text-primary pl-3 whitespace-nowrap">花札</span>

          {/* Nav links */}
          <div className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm transition-colors',
                  activeSection === link.href.slice(1)
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            {/* Theme toggle */}
            <button
              onClick={cycleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              title={`Theme: ${themeLabel}`}
              aria-label={`Switch theme (current: ${themeLabel})`}
            >
              <ThemeIcon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{themeLabel}</span>
            </button>

            {/* Play CTA */}
            <Button
              size="sm"
              onClick={onPlayClick}
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs px-4 h-8"
            >
              <Play className="w-3 h-3 mr-1" />
              Play
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
