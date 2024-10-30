/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/pond_with_waterfalls.glb -o src/models/Pond.jsx 
Author: reramil (https://sketchfab.com/reramil)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pond-with-waterfalls-868ea8df42be4476bbea5ba119c58717
Title: Pond with waterfalls
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Pond(props) {
  const { nodes, materials } = useGLTF('/pond_with_waterfalls.glb')
  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' colliders='cuboid'>
      <mesh geometry={nodes.Plane002_Material006_0.geometry} material={materials['Material.006']} position={[-31.246, 5.314, 105.759]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </RigidBody>
      <mesh geometry={nodes.Plane003_water_0.geometry} material={materials.water} position={[-41.214, -2.653, 303.005]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <RigidBody type='fixed' colliders='trimesh'>
      <mesh geometry={nodes.Cube010_Material007_0.geometry} material={materials['Material.007']} position={[-678.535, -74.391, 42.255]} rotation={[-Math.PI / 2, 0, -0.555]} scale={[10.312, 100, 100]} />
      </RigidBody>
      <mesh geometry={nodes.Plane134_riples_0.geometry} material={materials.riples} position={[410.242, 4.455, 360.54]} rotation={[-Math.PI / 2, 0, 1.506]} scale={[179.883, 102.029, 179.883]} />
      <instancedMesh args={[nodes.Plane030_Material006_0.geometry, materials['Material.006'], 15]} instanceMatrix={nodes.Plane030_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane032_Material006_0.geometry, materials['Material.006'], 2]} instanceMatrix={nodes.Plane032_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane033_Material006_0.geometry, materials['Material.006'], 4]} instanceMatrix={nodes.Plane033_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane014_Material006_0.geometry, materials['Material.006'], 13]} instanceMatrix={nodes.Plane014_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane015_Material006_0.geometry, materials['Material.006'], 10]} instanceMatrix={nodes.Plane015_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane035_Material006_0.geometry, materials['Material.006'], 20]} instanceMatrix={nodes.Plane035_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane042_Material006_0.geometry, materials['Material.006'], 2]} instanceMatrix={nodes.Plane042_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane043_Material006_0.geometry, materials['Material.006'], 5]} instanceMatrix={nodes.Plane043_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane045_Material006_0.geometry, materials['Material.006'], 10]} instanceMatrix={nodes.Plane045_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane051_Material006_0.geometry, materials['Material.006'], 4]} instanceMatrix={nodes.Plane051_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane064_Material006_0.geometry, materials['Material.006'], 80]} instanceMatrix={nodes.Plane064_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Icosphere034_Material006_0.geometry, materials['Material.006'], 3]} instanceMatrix={nodes.Icosphere034_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane077_Material006_0.geometry, materials['Material.006'], 2]} instanceMatrix={nodes.Plane077_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane128_Material006_0.geometry, materials['Material.006'], 3]} instanceMatrix={nodes.Plane128_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane147_Material006_0.geometry, materials['Material.006'], 75]} instanceMatrix={nodes.Plane147_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane148_Material006_0.geometry, materials['Material.006'], 79]} instanceMatrix={nodes.Plane148_Material006_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane135_riples_0.geometry, materials.riples, 2]} instanceMatrix={nodes.Plane135_riples_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder002_Material006_0.geometry, materials['Material.006'], 3]} instanceMatrix={nodes.Cylinder002_Material006_0.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/pond_with_waterfalls.glb')
