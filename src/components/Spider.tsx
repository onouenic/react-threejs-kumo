// Spider.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Spider = () => {
  const spiderRef = useRef<THREE.Group>(null);
  const legOffsets = [0.4, 0.0, -0.6, -1.0];

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (spiderRef.current) {
      spiderRef.current.position.y = Math.sin(elapsedTime * 1.2) * 2 + 5;
    }
  });

  return (
    <group ref={spiderRef}>
      {/* Corpo */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      {/* Cabeça */}
      <mesh position={[0, -1.8, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      {/* Olhos */}
      <mesh position={[0.3, -2.2, 0.5]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.3, -2.2, 0.5]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Pernas */}
      {legOffsets.map((yOffset, index) => (
        <mesh
          key={`leg-right-${index}`}
          position={[1.5, yOffset, 0]}
          rotation={[Math.PI / 6, 0, Math.PI / 4]}
        >
          <cylinderGeometry args={[0.1, 0.1, 2.5, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
      {legOffsets.map((yOffset, index) => (
        <mesh
          key={`leg-left-${index}`}
          position={[-1.5, yOffset, 0]}
          rotation={[Math.PI / 6, 0, -Math.PI / 4]}
        >
          <cylinderGeometry args={[0.1, 0.1, 2.5, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
    </group>
  );
};

export default Spider;
