import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useTheme } from '../context/ThemeContext';

// Subtle, calm particle nodes
function CalmParticles({ count = 280, isDark }) {
  const pointsRef = useRef();
  const currentDarkness = useRef(isDark ? 1 : 0);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 1;
    }
    return [pos];
  }, [count]);

  const darkColor = useMemo(() => new THREE.Color('#38BDF8'), []);
  const lightColor = useMemo(() => new THREE.Color('#0284C7'), []);
  const activeColor = useMemo(() => new THREE.Color(), []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    // Slow, calm orbit
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.01;

    // Smooth color lerping on theme change
    const target = isDark ? 1 : 0;
    currentDarkness.current = THREE.MathUtils.lerp(currentDarkness.current, target, 0.05);
    activeColor.lerpColors(lightColor, darkColor, currentDarkness.current);

    if (pointsRef.current.material) {
      pointsRef.current.material.color.copy(activeColor);
      pointsRef.current.material.opacity = isDark ? 0.45 : 0.3;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={isDark ? '#38BDF8' : '#0284C7'}
        transparent
        opacity={isDark ? 0.45 : 0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Elegant 3D Geometric Form (Fewer, larger, slower-moving objects)
function GeometricCore({ mouse, isDark }) {
  const groupRef = useRef();
  const torusRef = useRef();
  const icosaRef = useRef();
  const ringRef = useRef();
  const currentDarkness = useRef(isDark ? 1 : 0);

  const darkMatColor = useMemo(() => new THREE.Color('#38BDF8'), []);
  const lightMatColor = useMemo(() => new THREE.Color('#0284C7'), []);
  const activeMatColor = useMemo(() => new THREE.Color(), []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Smooth subtle mouse parallax
    const targetX = mouse.current.x * 1.2;
    const targetY = mouse.current.y * 1.2;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 2.2 + targetX * 0.4, 0.04);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY * 0.4, 0.04);

    // Slow, gentle rotation
    if (icosaRef.current) {
      icosaRef.current.rotation.y += delta * 0.12;
      icosaRef.current.rotation.x += delta * 0.08;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.15;
      torusRef.current.rotation.z -= delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.05;
    }

    // Material theme transitions
    const target = isDark ? 1 : 0;
    currentDarkness.current = THREE.MathUtils.lerp(currentDarkness.current, target, 0.06);
    activeMatColor.lerpColors(lightMatColor, darkMatColor, currentDarkness.current);

    if (icosaRef.current?.material) {
      icosaRef.current.material.color.copy(activeMatColor);
      icosaRef.current.material.opacity = isDark ? 0.85 : 0.75;
    }
    if (torusRef.current?.material) {
      torusRef.current.material.color.copy(activeMatColor);
    }
  });

  return (
    <group ref={groupRef} position={[2.2, 0, -1.5]}>
      {/* Central Low-Poly Icosahedron */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={icosaRef} scale={1.35}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={isDark ? '#38BDF8' : '#0284C7'}
            wireframe
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Outer Torus Accent */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh ref={torusRef} scale={0.75} position={[-1.6, 1.2, 0.4]}>
          <torusGeometry args={[0.9, 0.22, 16, 48]} />
          <meshStandardMaterial
            color={isDark ? '#38BDF8' : '#0284C7'}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={isDark ? 0.7 : 0.6}
          />
        </mesh>
      </Float>

      {/* Orbit Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0.2, 0]} scale={2.6}>
        <ringGeometry args={[1.2, 1.23, 64]} />
        <meshBasicMaterial
          color={isDark ? '#38BDF8' : '#0284C7'}
          side={THREE.DoubleSide}
          transparent
          opacity={isDark ? 0.25 : 0.2}
        />
      </mesh>
    </group>
  );
}

// Camera controller tracking subtle scroll
function CameraRig({ mouse }) {
  useFrame((state) => {
    const scrollY = window.scrollY || 0;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollRatio = scrollY / maxScroll;

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 5.8 + scrollRatio * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -scrollRatio * 2, 0.05);
    state.camera.rotation.y = THREE.MathUtils.lerp(state.camera.rotation.y, (mouse.current.x * 0.08) + (scrollRatio * 0.2), 0.05);
  });
  return null;
}

export default function HeroScene() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mouse = useRef({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-300"
      aria-hidden="true"
      role="presentation"
    >
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 48 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        aria-label="3D animated canvas showing geometric algorithms and particle field"
      >
        <ambientLight intensity={isDark ? 0.8 : 1.3} />
        <directionalLight
          position={[8, 8, 5]}
          intensity={isDark ? 1.4 : 1.8}
          color={isDark ? '#38BDF8' : '#0284C7'}
        />
        <pointLight
          position={[-6, -6, -4]}
          intensity={isDark ? 0.6 : 0.8}
          color={isDark ? '#0EA5E9' : '#0369A1'}
        />

        <CalmParticles count={isMobile ? 120 : 260} isDark={isDark} />
        <GeometricCore mouse={mouse} isDark={isDark} />
        <CameraRig mouse={mouse} />
      </Canvas>
    </div>
  );
}
