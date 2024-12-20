/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/supermarket_final2.glb -o ./src/ModernCity/Models/superMarket.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Market(props) {
  const { nodes, materials } = useGLTF('/supermarket_final2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle011_Material035_0.geometry} material={materials['Material.035']} position={[11.555, 1.973, -22.068]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube227_car_0.geometry} material={materials.material} position={[10.765, 0.843, -9.104]} rotation={[-Math.PI / 2, 0, 0]} scale={0.741} />
      <mesh geometry={nodes.Text013__0.geometry} material={materials['Text.013__0']} position={[2.16, 3.541, -9.399]} rotation={[0, Math.PI / 2, 0]} scale={0.548} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.material_0} position={[0.719, 0.571, -10.194]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.Object_2.geometry} material={materials.textured_0} position={[-1.949, 1.501, -17.718]} rotation={[-Math.PI / 2, 0, -1.564]} />
      <instancedMesh args={[nodes.Circle009_Material035_0.geometry, materials['Material.035'], 2]} instanceMatrix={nodes.Circle009_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube025_Material035_0.geometry, materials['Material.035'], 3]} instanceMatrix={nodes.Cube025_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube169_Material035_0.geometry, materials['Material.035'], 4]} instanceMatrix={nodes.Cube169_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube170_Material035_0.geometry, materials['Material.035'], 6]} instanceMatrix={nodes.Cube170_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube179_Material035_0.geometry, materials['Material.035'], 12]} instanceMatrix={nodes.Cube179_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube181_Material035_0.geometry, materials['Material.035'], 26]} instanceMatrix={nodes.Cube181_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube189_Material035_0.geometry, materials['Material.035'], 4]} instanceMatrix={nodes.Cube189_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube210_Material035_0.geometry, materials['Material.035'], 4]} instanceMatrix={nodes.Cube210_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube230_car_0.geometry, materials.material, 2]} instanceMatrix={nodes.Cube230_car_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube238_Material035_0.geometry, materials['Material.035'], 4]} instanceMatrix={nodes.Cube238_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube247_Material035_0.geometry, materials['Material.035'], 3]} instanceMatrix={nodes.Cube247_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube266_Material035_0.geometry, materials['Material.035'], 2]} instanceMatrix={nodes.Cube266_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube267_Material035_0.geometry, materials['Material.035'], 2]} instanceMatrix={nodes.Cube267_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder008_Material035_0.geometry, materials['Material.035'], 8]} instanceMatrix={nodes.Cylinder008_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder012_Material035_0.geometry, materials['Material.035'], 4]} instanceMatrix={nodes.Cylinder012_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder016_Material035_0.geometry, materials['Material.035'], 2]} instanceMatrix={nodes.Cylinder016_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder017_Material035_0.geometry, materials['Material.035'], 4]} instanceMatrix={nodes.Cylinder017_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder025_Material035_0.geometry, materials['Material.035'], 23]} instanceMatrix={nodes.Cylinder025_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder032_Material035_0.geometry, materials['Material.035'], 46]} instanceMatrix={nodes.Cylinder032_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder045_Material035_0.geometry, materials['Material.035'], 7]} instanceMatrix={nodes.Cylinder045_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder127_Material035_0.geometry, materials['Material.035'], 2]} instanceMatrix={nodes.Cylinder127_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Icosphere001_Material035_0.geometry, materials['Material.035'], 14]} instanceMatrix={nodes.Icosphere001_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Icosphere003_Material035_0.geometry, materials['Material.035'], 5]} instanceMatrix={nodes.Icosphere003_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane013_Material035_0.geometry, materials['Material.035'], 6]} instanceMatrix={nodes.Plane013_Material035_0.instanceMatrix} />
      <instancedMesh args={[nodes.Supermarket_Chips_Shelf_Supermarket_Chips_Shelf_0.geometry, materials.Supermarket_Chips_Shelf, 2]} instanceMatrix={nodes.Supermarket_Chips_Shelf_Supermarket_Chips_Shelf_0.instanceMatrix} />
      <instancedMesh args={[nodes.Supermarket_Drinks_Shelf_Supermarket_Drinks_Shelf_0.geometry, materials.Supermarket_Drinks_Shelf, 3]} instanceMatrix={nodes.Supermarket_Drinks_Shelf_Supermarket_Drinks_Shelf_0.instanceMatrix} />
      <instancedMesh args={[nodes.Supermarket_Drinks_Shelf_Supermarket_Drinks_Shelf_0001.geometry, materials.Supermarket_Drinks_Shelf, 2]} instanceMatrix={nodes.Supermarket_Drinks_Shelf_Supermarket_Drinks_Shelf_0001.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/supermarket_final2.glb')
