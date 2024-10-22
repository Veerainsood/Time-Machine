/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: KIFIR (https://sketchfab.com/kifir)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/building-constructor-low-poly-7e6950ddfdae475ebe5c5762f143ec11
Title: Building constructor Low poly
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Building_One(props) {
  const { nodes, materials } = useGLTF('/building_constructor_low_poly.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-4408.145, 0, -3250]}>
        <group position={[8.145, 0, 150]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.building_los_base_tile_0.geometry}
            material={materials.base_tile}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.building_los_unikal_text_0.geometry}
            material={materials.unikal_text}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/building_constructor_low_poly.glb')