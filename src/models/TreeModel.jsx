/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/tree/jacaranda_tree_1k.gltf -o src/models/TreeModel.js 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';

export function TreeModel(props) {
  const { nodes, materials } = useGLTF('/tree/jacaranda_tree_1k.gltf');

  const [ref] = useBox(() => ({
    mass: 0, // Static object
    type:'Static',
    position: props.position, // Pass position from props
    args: [1, 5, 1], // Size of the box collider (adjust as needed)
  }));

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.jacaranda_tree_trunk.geometry} material={materials.jacaranda_tree_trunk} />
      <mesh geometry={nodes.jacaranda_tree_branches.geometry} material={materials.jacaranda_tree_branches} />
      <mesh geometry={nodes.Plane5958.geometry} material={materials.jacaranda_tree_branches} />
      <mesh geometry={nodes.Plane5958_1.geometry} material={materials.jacaranda_tree_leaves} />
    </group>
  )
}

useGLTF.preload('/tree/jacaranda_tree_1k.gltf')