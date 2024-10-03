import React from 'react';
import { useGLTF } from '@react-three/drei';

export function ForestLandScape(props) {
  const { nodes, materials } = useGLTF('/forest model.glb');
  return (
    <group {...props} dispose={null} position={[0, 0, 0]}> {/* Position the entire group at the bottom */}
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Forest ground']}
        position={[0, 0, 0]} 
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 1, 0]} 
        rotation={[0, Math.PI / 9, 0]}
        scale={[0.35, 1, 0.35]}
      />
    </group>
  );
}

useGLTF.preload('/forest model.glb');
