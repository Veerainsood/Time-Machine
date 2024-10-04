import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Machine = () => {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/TimeMachine.glb');
  const speed = 0.02; // Speed of the orbit
  let angle = 0; // Initial angle



  return (
    <group ref={ref} dispose={null}>
      <mesh
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        position={[-0.058, 0.219, -0.17]}
        rotation={[0,1,0]}
        scale={[2.5,2.5,2.5]}
      />
    </group>
  );
};

function LoginMachine() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <Machine />
      <OrbitControls autoRotateSpeed={1} autoRotate/>
    </Canvas>
  );
};

export default LoginMachine