'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF } from '@react-three/drei';
import type { Group } from 'three';

const MODEL = '/3d/boneco.glb';
useGLTF.setDecoderPath('/draco/');

function Model({ pointer }: { pointer: React.RefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(MODEL);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const p = pointer.current ?? { x: 0, y: 0 };
    const targetY = -0.55 + p.x * 0.6 + Math.sin(t * 0.6) * 0.08;
    const targetX = p.y * 0.25;
    g.rotation.y += (targetY - g.rotation.y) * Math.min(1, delta * 3);
    g.rotation.x += (targetX - g.rotation.x) * Math.min(1, delta * 3);
    g.position.y = Math.sin(t * 0.9) * 0.04;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

// Boneco em 3D que segue o mouse. Só renderiza quadros quando está visível.
export default function Boneco3D({ className = '', poster = '/3d/boneco-render.webp' }: { className?: string; poster?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setEnabled(false);
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '200px' });
    io.observe(el);
    const onMove = (e: PointerEvent) => {
      pointer.current = { x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 };
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div ref={wrap} className={`boneco3d ${className}`} aria-hidden="true">
      {enabled ? (
        <Canvas
          frameloop={visible ? 'always' : 'never'}
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 5.2], fov: 30 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.35} />
          <directionalLight position={[-3, 4, 4]} intensity={2.2} />
          <directionalLight position={[3, 2, -3]} intensity={1.4} color="#ffd9d0" />
          <Suspense fallback={null}>
            <Model pointer={pointer} />
            <Environment resolution={128}>
              <Lightformer intensity={2} position={[0, 4, 3]} scale={[6, 2, 1]} />
              <Lightformer intensity={1} position={[-4, 0, 2]} scale={[2, 6, 1]} />
              <Lightformer intensity={0.6} color="#ffcfc7" position={[4, -1, -2]} scale={[3, 4, 1]} />
            </Environment>
          </Suspense>
        </Canvas>
      ) : (
        <img src={poster} alt="" />
      )}
    </div>
  );
}

useGLTF.preload(MODEL);
