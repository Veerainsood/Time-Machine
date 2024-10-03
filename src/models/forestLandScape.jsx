import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import React from 'react';

export function Model(props) {
  const { nodes, materials } = useGLTF('/forest/scene.gltf');

  // Create a rigid body for the model
  const [ref] = useBox(() => ({
    mass: 0, // Set mass to 0 for static object
    position: props.position || [0, 0, 0], // Use props for dynamic positioning
    rotation: props.rotation || [0, 0, 0], // Use props for rotation
    args: [1, 1, 1], // Adjust these values according to your model's dimensions
  }));

  return (
    <group  {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh ref={ref} geometry={nodes.Object_2.geometry} material={materials.Floor} />
        <mesh ref={ref} geometry={nodes.Object_3.geometry} material={materials.Green_Elka} />
        <mesh ref={ref} geometry={nodes.Object_4.geometry} material={materials.Green_Elka} />
        <mesh ref={ref} geometry={nodes.Object_5.geometry} material={materials.Green_Elka} />
        <mesh ref={ref} geometry={nodes.Object_6.geometry} material={materials.Green_Elka} />
        <mesh ref={ref} geometry={nodes.Object_7.geometry} material={materials.Green_Elka} />
        <mesh ref={ref} geometry={nodes.Object_8.geometry} material={materials['Green_sosna.001']} />
        <mesh ref={ref} geometry={nodes.Object_9.geometry} material={materials['Green_sosna.001']} />
        <mesh ref={ref} geometry={nodes.Object_10.geometry} material={materials.Kust_1} />
        <mesh ref={ref} geometry={nodes.Object_11.geometry} material={materials.Kust_2} />
        <mesh ref={ref} geometry={nodes.Object_12.geometry} material={materials.Paporotnik} />
        <mesh ref={ref} geometry={nodes.Object_13.geometry} material={materials['Wood_tree.001']} />
        <mesh ref={ref} geometry={nodes.Object_14.geometry} material={materials['Wood_tree.002']} />
      </group>
    </group>
  );
}

useGLTF.preload('/forest/scene.gltf');
