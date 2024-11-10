/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/deer_001.glb -o ./src/models/Deer.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

export function Deer(props) {
  const { scene } = useGLTF('/deer_001.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      {/* <RigidBody type='fixed'> */}
      <primitive object={nodes.Root} />
      <skinnedMesh geometry={nodes.deer_001.geometry} material={materials.material} skeleton={nodes.deer_001.skeleton} />
      {/* </RigidBody> */}
    </group>
  )
}

useGLTF.preload('/deer_001.glb')