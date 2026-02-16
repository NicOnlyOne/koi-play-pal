import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  type: 'leaf' | 'petal' | 'dot';
}

export function FallingPetals() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const items: Leaf[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      size: 8 + Math.random() * 14,
      opacity: 0.12 + Math.random() * 0.2,
      type: i % 3 === 0 ? 'petal' : i % 3 === 1 ? 'leaf' : 'dot',
    }));
    setLeaves(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={leaf.type === 'leaf' ? 'absolute text-secondary' : leaf.type === 'petal' ? 'absolute text-primary' : 'absolute text-accent'}
          style={{
            left: `${leaf.left}%`,
            top: '-20px',
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            animation: `leaf-fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          {leaf.type === 'leaf' ? '🍃' : leaf.type === 'petal' ? '✿' : '●'}
        </div>
      ))}
    </div>
  );
}
