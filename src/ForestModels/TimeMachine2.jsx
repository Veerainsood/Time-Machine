/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/compressedMachine.glb -o src/models/TimeMachine2.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function TimeMachine2(props) {
  const { nodes, materials } = useGLTF('/compressedMachine.glb')
  return (
    <RigidBody type='fixed' colliders='hull'>
    <group {...props} dispose={null}>
      <mesh geometry={nodes.alarm_clock_01001_M_clock_0.geometry} material={materials.M_clock} position={[0, 3.316, -2.728]} rotation={[-1.862, 0, 0]} scale={35.41} />
      <mesh geometry={nodes.alarm_clock_01003_M_back_machine_0.geometry} material={materials.M_back_machine} position={[-3.401, 3.381, -1.963]} rotation={[-1.739, 0, 0]} />
      <mesh geometry={nodes.alarm_clock_01011_M_back_machine_2_0.geometry} material={materials.M_back_machine_2} position={[3.07, 3.535, -2.6]} rotation={[-Math.PI / 2, 0.301, Math.PI / 2]} />
      <mesh geometry={nodes.BezierCurve_M_front_machine_0.geometry} material={materials.M_front_machine} position={[0, 0.616, 5.387]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.cable_M_back_machine_2001_0.geometry} material={materials['M_back_machine_2.001']} position={[2.397, 5.544, -3.887]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.cable009_M_back_machine002_0.geometry} material={materials['M_back_machine.002']} position={[-3.207, 4.43, -4.558]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.chesterfield_base002_M_seat_0.geometry} material={materials.M_seat} position={[-0.008, 4.726, -1.065]} rotation={[-0.168, 0, 0]} scale={1.249} />
      <mesh geometry={nodes.Cube002_M_Main_0.geometry} material={materials.M_Main} position={[0, 0.026, 3.117]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Gem_M_back_machine001_0.geometry} material={materials['M_back_machine.001']} position={[-2.607, 5.701, -5.809]} rotation={[-Math.PI / 2, -0.182, 0]} scale={[0.69, 0.69, 1.488]} />
      <mesh geometry={nodes.Sphere_M_glass_0.geometry} material={materials.M_glass} position={[-2.663, 6.006, -5.809]} rotation={[-Math.PI / 2, -0.182, 0]} scale={0.796} />
      <mesh geometry={nodes.alarm_clock_01_M_clock_0001.geometry} material={materials['M_clock.001']} position={[0, 3.316, -2.772]} rotation={[-1.862, 0, 0]} scale={35.41} />
      <instancedMesh args={[nodes.buttons_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.buttons_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.cable007_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.cable007_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.chesterfield_base_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.chesterfield_base_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Circle001_M_front_machine_0.geometry, materials.M_front_machine, 2]} instanceMatrix={nodes.Circle001_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube003_M_Main_0.geometry, materials.M_Main, 6]} instanceMatrix={nodes.Cube003_M_Main_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube011_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.Cube011_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder003_M_clock_0.geometry, materials.M_clock, 8]} instanceMatrix={nodes.Cylinder003_M_clock_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder005_M_front_machine_0.geometry, materials.M_front_machine, 2]} instanceMatrix={nodes.Cylinder005_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder012_M_clock_0.geometry, materials.M_clock, 10]} instanceMatrix={nodes.Cylinder012_M_clock_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder035_M_Main_0.geometry, materials.M_Main, 2]} instanceMatrix={nodes.Cylinder035_M_Main_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder036_M_back_machine_2_0.geometry, materials.M_back_machine_2, 6]} instanceMatrix={nodes.Cylinder036_M_back_machine_2_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder038_M_front_machine_0.geometry, materials.M_front_machine, 2]} instanceMatrix={nodes.Cylinder038_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Gear007_M_clock_0.geometry, materials.M_clock, 2]} instanceMatrix={nodes.Gear007_M_clock_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.Plane_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane001_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.Plane001_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane006_M_Main_0.geometry, materials.M_Main, 2]} instanceMatrix={nodes.Plane006_M_Main_0.instanceMatrix} />
      <instancedMesh args={[nodes.Sphere003_M_front_machine_0.geometry, materials.M_front_machine, 3]} instanceMatrix={nodes.Sphere003_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Sphere004_M_front_machine_0.geometry, materials.M_front_machine, 5]} instanceMatrix={nodes.Sphere004_M_front_machine_0.instanceMatrix} />
    </group>
    </RigidBody>
  )
}

useGLTF.preload('/compressedMachine.glb')
