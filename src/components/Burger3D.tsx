import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float } from '@react-three/drei';
import type { Group } from 'three';

/**
 * Stylized 3D burger built from primitives (no external model files needed,
 * so the site stays fully static). Swap for a GLTF model via drei's
 * useGLTF if you get a real asset later.
 */
function Burger() {
  const group = useRef<Group>(null);

  // Idle rotation + subtle mouse parallax
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.35;
    // Ease toward the pointer for a soft parallax tilt
    group.current.rotation.x +=
      (pointer.y * 0.25 - group.current.rotation.x) * 0.05;
    group.current.rotation.z +=
      (pointer.x * 0.15 - group.current.rotation.z) * 0.05;
  });

  return (
    <group ref={group} dispose={null} scale={1.15}>
      {/* Bottom bun */}
      <mesh position={[0, -0.72, 0]} castShadow>
        <cylinderGeometry args={[1.05, 0.95, 0.42, 48]} />
        <meshStandardMaterial color="#e8a34c" roughness={0.6} />
      </mesh>
      {/* Patty */}
      <mesh position={[0, -0.38, 0]} castShadow>
        <cylinderGeometry args={[1.12, 1.12, 0.3, 48]} />
        <meshStandardMaterial color="#6b3a24" roughness={0.9} />
      </mesh>
      {/* Cheese — a thin, slightly rotated box so corners droop past the patty */}
      <mesh position={[0, -0.2, 0]} rotation={[0, Math.PI / 7, 0]} castShadow>
        <boxGeometry args={[2.15, 0.08, 2.15]} />
        <meshStandardMaterial color="#f6b93b" roughness={0.4} />
      </mesh>
      {/* Tomato slices */}
      <mesh position={[0.35, -0.08, 0.2]} castShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.1, 32]} />
        <meshStandardMaterial color="#d63031" roughness={0.5} />
      </mesh>
      <mesh position={[-0.4, -0.08, -0.15]} castShadow>
        <cylinderGeometry args={[0.55, 0.55, 0.1, 32]} />
        <meshStandardMaterial color="#d63031" roughness={0.5} />
      </mesh>
      {/* Lettuce — a squashed, wavy torus reads as ruffled leaves */}
      <mesh position={[0, 0.04, 0]} scale={[1, 0.25, 1]} castShadow>
        <torusGeometry args={[0.85, 0.42, 16, 48]} />
        <meshStandardMaterial color="#4caf50" roughness={0.8} />
      </mesh>
      {/* Top bun */}
      <mesh position={[0, 0.42, 0]} castShadow>
        <sphereGeometry args={[1.08, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#e8a34c" roughness={0.55} />
      </mesh>
      {/* Sesame seeds scattered on the top bun */}
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        const radius = 0.35 + (i % 3) * 0.22;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = 0.42 + Math.sqrt(Math.max(0, 1.08 ** 2 - x * x - z * z)) * 0.95;
        return (
          <mesh key={i} position={[x, y, z]} scale={[1, 0.5, 0.7]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color="#fdf3d8" roughness={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Burger3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 5], fov: 40 }}
      dpr={[1, 2]}
      aria-label="Rotating 3D burger illustration"
      role="img"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 4]} intensity={1.4} castShadow />
        <pointLight position={[-4, 2, -3]} intensity={12} color="#f97316" />
        <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.6}>
          <Burger />
        </Float>
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.55}
          scale={8}
          blur={2.4}
          far={3}
          color="#000000"
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
