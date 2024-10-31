// Thread.jsx
import React from 'react';

const Thread = () => (
  <line>
    <bufferGeometry>
      <bufferAttribute
        attach="attributes-position"
        array={new Float32Array([0, 10, 0, 0, 3, 0])}
        count={2}
        itemSize={3}
      />
    </bufferGeometry>
    <lineBasicMaterial color="white" />
  </line>
);

export default Thread;
