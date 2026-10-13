'use client';
import React, { useEffect, useRef } from 'react';

export default function WireframeGeometry() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes = containerRef.current?.querySelectorAll('.wireframe-shape');
    if (!shapes) return;

    shapes.forEach((shape, i) => {
      const el = shape as HTMLElement;
      const duration = 18 + i * 6;
      const direction = i % 2 === 0 ? 1 : -1;
      el.style.animation = `rotateWireframe ${duration}s linear infinite ${direction > 0 ? 'normal' : 'reverse'}`;
      el.style.animationDelay = `${i * 2.5}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <style jsx>{`
        @keyframes rotateWireframe {
          from { transform: rotateZ(0deg) rotateX(15deg); }
          to { transform: rotateZ(360deg) rotateX(15deg); }
        }
      `}</style>
      {/* Wireframe icosahedron-like shape */}
      <svg className="wireframe-shape absolute opacity-[0.07]" style={{ top: '8%', right: '10%', width: '220px', height: '220px', filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.15))' }} viewBox="0 0 200 200" fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeLinecap="round">
        <polygon points="100,20 160,60 140,150 60,150 40,60" />
        <line x1="100" y1="20" x2="100" y2="110" />
        <line x1="160" y1="60" x2="100" y2="110" />
        <line x1="140" y1="150" x2="100" y2="110" />
        <line x1="60" y1="150" x2="100" y2="110" />
        <line x1="40" y1="60" x2="100" y2="110" />
        <line x1="100" y1="20" x2="60" y2="150" />
        <line x1="160" y1="60" x2="40" y2="60" />
      </svg>
      {/* Second wireframe - octahedron-like */}
      <svg className="wireframe-shape absolute opacity-[0.05]" style={{ bottom: '15%', left: '8%', width: '180px', height: '180px', filter: 'drop-shadow(0 0 15px rgba(139,92,246,0.12))' }} viewBox="0 0 200 200" fill="none" stroke="#8B5CF6" strokeWidth="0.7" strokeLinecap="round">
        <polygon points="100,10 160,110 100,160 40,110" />
        <line x1="100" y1="10" x2="100" y2="160" />
        <line x1="40" y1="110" x2="160" y2="110" />
        <line x1="100" y1="10" x2="40" y2="110" />
        <line x1="100" y1="10" x2="160" y2="110" />
      </svg>
      {/* Third wireframe - small tetrahedron */}
      <svg className="wireframe-shape absolute opacity-[0.06]" style={{ top: '55%', left: '20%', width: '120px', height: '120px', filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.1))' }} viewBox="0 0 120 120" fill="none" stroke="#22D3EE" strokeWidth="0.7" strokeLinecap="round">
        <polygon points="60,10 110,90 10,90" />
        <line x1="60" y1="10" x2="60" y2="70" />
        <line x1="110" y1="90" x2="60" y2="70" />
        <line x1="10" y1="90" x2="60" y2="70" />
      </svg>
    </div>
  );
}
