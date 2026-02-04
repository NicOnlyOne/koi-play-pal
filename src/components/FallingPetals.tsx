import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
      size: 8 + Math.random() * 12,
      opacity: 0.3 + Math.random() * 0.4,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-sakura"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
            animation: `petal-fall ${petal.duration}s linear ${petal.delay}s infinite`,
          }}
        >
          ✿
        </div>
      ))}
    </div>
  );
}
