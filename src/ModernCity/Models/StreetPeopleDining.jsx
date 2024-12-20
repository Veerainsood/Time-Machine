/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/peopleComp.glb -o ./src/ModernCity/Models/StreetPeopleDining.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function StreetPeople(props) {
  const { nodes, materials } = useGLTF('/peopleComp.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_88.geometry} material={materials.hidrante1} scale={0.01} />
      <mesh geometry={nodes.Object_982.geometry} material={materials.elise} position={[-2.311, 0.483, -2.758]} rotation={[0, -0.034, 0]} scale={0.686} />
      <mesh geometry={nodes.Object_1006.geometry} material={materials.Tire} position={[-2.311, 0.442, -2.758]} rotation={[0, -0.034, 0]} scale={0.686} />
      <mesh geometry={nodes.Object_878.geometry} material={materials['suelo1.001']} position={[0, 0, -2.427]} scale={[0.007, 0.01, 0.006]} />
      <instancedMesh args={[nodes.Object_447.geometry, materials.matera1, 2]} instanceMatrix={nodes.Object_447.instanceMatrix} />
      <instancedMesh args={[nodes.Object_67.geometry, materials.aiStandardSurface11, 5]} instanceMatrix={nodes.Object_67.instanceMatrix} />
      <instancedMesh args={[nodes.Object_50.geometry, materials.matera1, 9]} instanceMatrix={nodes.Object_50.instanceMatrix} />
      <instancedMesh args={[nodes.Object_6.geometry, materials.silla1, 19]} instanceMatrix={nodes.Object_6.instanceMatrix} />
      <instancedMesh args={[nodes.Object_49.geometry, materials.base_matera1, 9]} instanceMatrix={nodes.Object_49.instanceMatrix} />
      <instancedMesh args={[nodes.Object_7.geometry, materials.mesa1, 5]} instanceMatrix={nodes.Object_7.instanceMatrix} />
      <instancedMesh args={[nodes.Object_8.geometry, materials.sombrilla1, 5]} instanceMatrix={nodes.Object_8.instanceMatrix} />
      <instancedMesh args={[nodes.Object_149.geometry, materials.mata1, 24]} instanceMatrix={nodes.Object_149.instanceMatrix} />
      <instancedMesh args={[nodes.Object_150.geometry, materials.mata1, 78]} instanceMatrix={nodes.Object_150.instanceMatrix} />
      <instancedMesh args={[nodes.Object_123.geometry, materials.mata1, 30]} instanceMatrix={nodes.Object_123.instanceMatrix} />
      <instancedMesh args={[nodes.Object_449.geometry, materials.Grass, 2]} instanceMatrix={nodes.Object_449.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/peopleComp.glb')
