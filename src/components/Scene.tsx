// Scene.jsx
import React from 'react';
import { ambientLight, directionalLight } from '@react-three/fiber';
import Spider from './Spider';
import Thread from './Thread';
import CloudGroup from './CloudGroup';

const Scene = () => {
  // const texture = useTexture('/public/assets/cloudy-img.jpg');
  // const { scene } = useThree();

  // useEffect(() => {
  //   scene.background = texture;
  // }, [scene, texture]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Spider />
      <Thread />
      <CloudGroup />
    </>
  );
};

export default Scene;
