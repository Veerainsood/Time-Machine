
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';

export function CharModel(props) {

  const [ref] = useBox(() => ({
    mass: 1, // Static object
    position: props.position, // Pass position from props
    args: [2, 3, 2], // Size of the box collider (adjust as needed)
  }));


  const { nodes, materials } = useGLTF('/character/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Human_Soldier_M_Human_Soldier_0.geometry} material={materials.M_Human_Soldier} />
      <mesh geometry={nodes.Human_Soldier_M_Human_Soldier_Extra_0.geometry} material={materials.M_Human_Soldier_Extra} />
    </group>
  )
}

useGLTF.preload('/character/scene.gltf')
