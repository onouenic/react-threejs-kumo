// CloudGroup.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CloudGroup = () => {
  const cloudGroupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (cloudGroupRef.current) {
      cloudGroupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={cloudGroupRef} position={[0, -5, 0]}>
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 5,
            -5 + (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 5,
          ]}
          scale={1 + Math.random() * 1.2}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial color="white" transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
};

export default CloudGroup;
