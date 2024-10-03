import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

export function CharModel(props) {
  // Create a box collider for the entire character
  const [ref] = useBox(() => ({
    mass: 0, // You can set this to a positive value if you want it to be affected by gravity
    position: props.position,
    args: [1, 2, 1], // Adjust the size of the box collider as needed (width, height, depth)
  }));

  const { nodes, materials } = useGLTF('/character/scene.gltf');

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Human_Soldier_M_Human_Soldier_0.geometry} material={materials.M_Human_Soldier} />
      <mesh geometry={nodes.Human_Soldier_M_Human_Soldier_Extra_0.geometry} material={materials.M_Human_Soldier_Extra} />
    </group>
  );
}

useGLTF.preload('/character/scene.gltf');
