// App.jsx
'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from '../src/components/Scene';

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <OrbitControls enableDamping />
      <Scene />
    </Canvas>
  );
};

export default App;
