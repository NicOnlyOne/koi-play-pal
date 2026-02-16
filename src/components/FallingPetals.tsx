import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  type: 'lotus' | 'dot';
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const items: Petal[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      size: 10 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.2,
      type: Math.random() > 0.5 ? 'lotus' : 'dot',
    }));
    setPetals(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `leaf-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.type === 'lotus' ? '🌸' : '✦'}
        </div>
      ))}
    </div>
  );
}
