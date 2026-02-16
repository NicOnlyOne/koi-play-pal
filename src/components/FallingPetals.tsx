import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  type: 'leaf' | 'dot';
}

export function FallingPetals() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const items: Leaf[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      size: 10 + Math.random() * 14,
      opacity: 0.15 + Math.random() * 0.25,
      type: Math.random() > 0.6 ? 'dot' : 'leaf',
    }));
    setLeaves(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={leaf.type === 'leaf' ? 'absolute text-secondary' : 'absolute text-primary'}
          style={{
            left: `${leaf.left}%`,
            top: '-20px',
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            animation: `leaf-fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          {leaf.type === 'leaf' ? '🍃' : '●'}
        </div>
      ))}
    </div>
  );
}
