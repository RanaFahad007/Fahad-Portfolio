import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { techOrbitNodes } from '../data/skills';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useTheme } from '../context/ThemeContext';

function OrbitNode({ position, name, isDark }) {
  const meshRef = useRef();
  const textRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position);
    }
  });

  const nodeColor = isDark ? '#38BDF8' : '#0284C7';
  const textColor = isDark ? '#F8FAFC' : '#0F172A';

  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color={nodeColor}
            emissive={nodeColor}
            emissiveIntensity={isDark ? 0.4 : 0.2}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        <Text
          ref={textRef}
          position={[0, 0.36, 0]}
          fontSize={0.2}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.015}
          outlineColor={isDark ? '#0B0F17' : '#FFFFFF'}
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}

function OrbitSphereGroup({ isDark }) {
  const groupRef = useRef();

  const nodesWithPositions = useMemo(() => {
    const total = techOrbitNodes.length;
    const radius = 3.0;
    const phiSpan = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    return techOrbitNodes.map((node, i) => {
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phiSpan * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...node,
        position: [x * radius, y * radius, z * radius],
      };
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central nucleus */}
      <mesh>
        <octahedronGeometry args={[1.0, 1]} />
        <meshStandardMaterial
          color={isDark ? '#38BDF8' : '#0284C7'}
          wireframe
          transparent
          opacity={isDark ? 0.25 : 0.2}
        />
      </mesh>

      {/* Orbit nodes */}
      {nodesWithPositions.map((node, idx) => (
        <OrbitNode
          key={idx}
          position={node.position}
          name={node.name}
          isDark={isDark}
        />
      ))}
    </group>
  );
}

export default function SkillsOrbit() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const prefersReducedMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="w-full h-[400px] sm:h-[460px] rounded-card border border-theme-border bg-theme-surface/50 relative overflow-hidden"
      aria-label="3D interactive skills sphere"
    >
      <div className="absolute top-3 left-4 z-10 px-3 py-1 rounded-full bg-theme-surface/80 border border-theme-border text-xs text-theme-muted font-medium pointer-events-none backdrop-blur-sm">
        Interactive 3D Sphere - Drag to rotate
      </div>
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 48 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.9 : 1.4} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 1.2 : 1.5} color={isDark ? '#38BDF8' : '#0284C7'} />
        <OrbitSphereGroup isDark={isDark} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
}
