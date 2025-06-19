import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape: React.FC<{ position: [number, number, number]; color: string; shape: 'sphere' | 'box' | 'torus' }> = ({ position, color, shape }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const ShapeComponent = shape === 'sphere' ? Sphere : shape === 'box' ? Box : Torus;

  return (
    <ShapeComponent ref={meshRef} position={position} args={shape === 'torus' ? [0.5, 0.2, 8, 16] : [0.5, 0.5, 0.5]}>
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </ShapeComponent>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <FloatingShape position={[-3, 2, -2]} color="#8b5cf6" shape="sphere" />
        <FloatingShape position={[3, -1, -1]} color="#3b82f6" shape="box" />
        <FloatingShape position={[-2, -2, -3]} color="#06b6d4" shape="torus" />
        <FloatingShape position={[2, 3, -2]} color="#ec4899" shape="sphere" />
        <FloatingShape position={[0, -3, -1]} color="#f59e0b" shape="box" />
      </Canvas>
    </div>
  );
};

export default FloatingElements;