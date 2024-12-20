// Destroted city jsx file 
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DesCityModel(props) {
  const { nodes, materials } = useGLTF('/DestroyedCity.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.856, -14.557]} scale={0.01}>
        <group position={[0, 652.299, 1455.725]} rotation={[Math.PI / 2, 0, 0]} scale={37.472}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036.geometry}
            material={materials['Blasted01.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_1.geometry}
            material={materials['BlastedGlass.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_2.geometry}
            material={materials['Blasted02.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_3.geometry}
            material={materials.BurgerBase01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_4.geometry}
            material={materials.BurgerSigns02}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_5.geometry}
            material={materials.BurgerSigns03}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_6.geometry}
            material={materials.Burger01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_7.geometry}
            material={materials.BurgerGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_8.geometry}
            material={materials.BurgerSigns01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_9.geometry}
            material={materials.GasStation01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_10.geometry}
            material={materials.GasStation03}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_11.geometry}
            material={materials.GasStation02}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_12.geometry}
            material={materials.GasStation00}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_13.geometry}
            material={materials.GasStation04}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_14.geometry}
            material={materials.GasStation06}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_15.geometry}
            material={materials.MegaBlock01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_16.geometry}
            material={materials.MegaBlockGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_17.geometry}
            material={materials.B1GLASS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_18.geometry}
            material={materials.B1BGLASS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_19.geometry}
            material={materials.Rubble01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_20.geometry}
            material={materials.HotelM1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_21.geometry}
            material={materials.HotelM1gLASS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_22.geometry}
            material={materials.HotelB1Outside}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_23.geometry}
            material={materials.HOTELBSignage}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_24.geometry}
            material={materials.HotelB1Inside}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_25.geometry}
            material={materials.HotelB1GLASS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_26.geometry}
            material={materials.HotelC1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_27.geometry}
            material={materials.HotelC1GLASS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_28.geometry}
            material={materials.HOTELA1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_29.geometry}
            material={materials.HOTELA1GLASS}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_30.geometry}
            material={materials['RoadBase.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_31.geometry}
            material={materials['GroundBase.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_32.geometry}
            material={materials['TBA02.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_33.geometry}
            material={materials['TBA02windows.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_34.geometry}
            material={materials.G02}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_35.geometry}
            material={materials.G03}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_36.geometry}
            material={materials.BRIDGE}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_37.geometry}
            material={materials['1']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_38.geometry}
            material={materials['2']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_39.geometry}
            material={materials['3']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_40.geometry}
            material={materials['4']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_41.geometry}
            material={materials['5']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_42.geometry}
            material={materials['6']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_43.geometry}
            material={materials['7']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_44.geometry}
            material={materials['8']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_45.geometry}
            material={materials['9']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_46.geometry}
            material={materials['10']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_47.geometry}
            material={materials['11']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_48.geometry}
            material={materials['12']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_49.geometry}
            material={materials.Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_50.geometry}
            material={materials.light1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh036_51.geometry}
            material={materials.light2}
          />
        </group>
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.agua2} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['agua2.001']}
        position={[57.282, 0, 0]}
      />
      <group position={[57.282, 2.856, -14.557]} scale={0.01}>
        <group position={[0, 652.299, 1455.725]} rotation={[Math.PI / 2, 0, 0]} scale={37.472}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials['Blasted01.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials['BlastedGlass.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_2.geometry}
            material={materials['Blasted02.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_3.geometry}
            material={materials['BurgerBase01.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_4.geometry}
            material={materials['BurgerSigns02.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_5.geometry}
            material={materials['BurgerSigns03.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_6.geometry}
            material={materials['Burger01.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_7.geometry}
            material={materials['BurgerGlass.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_8.geometry}
            material={materials['BurgerSigns01.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_9.geometry}
            material={materials['GasStation01.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_10.geometry}
            material={materials['GasStation03.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_11.geometry}
            material={materials['GasStation02.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_12.geometry}
            material={materials['GasStation00.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_13.geometry}
            material={materials['GasStation04.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_14.geometry}
            material={materials['GasStation06.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_15.geometry}
            material={materials['MegaBlock01.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_16.geometry}
            material={materials['MegaBlockGlass.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_17.geometry}
            material={materials['B1GLASS.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_18.geometry}
            material={materials['B1BGLASS.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_19.geometry}
            material={materials['Rubble01.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_20.geometry}
            material={materials['HotelM1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_21.geometry}
            material={materials['HotelM1gLASS.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_22.geometry}
            material={materials['HotelB1Outside.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_23.geometry}
            material={materials['HOTELBSignage.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_24.geometry}
            material={materials['HotelB1Inside.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_25.geometry}
            material={materials['HotelB1GLASS.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_26.geometry}
            material={materials['HotelC1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_27.geometry}
            material={materials['HotelC1GLASS.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_28.geometry}
            material={materials['HOTELA1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_29.geometry}
            material={materials['HOTELA1GLASS.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_30.geometry}
            material={materials['RoadBase.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_31.geometry}
            material={materials['GroundBase.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_32.geometry}
            material={materials['TBA02.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_33.geometry}
            material={materials['TBA02windows.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_34.geometry}
            material={materials['G02.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_35.geometry}
            material={materials['G03.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_36.geometry}
            material={materials['BRIDGE.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_37.geometry}
            material={materials['1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_38.geometry}
            material={materials['2.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_39.geometry}
            material={materials['3.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_40.geometry}
            material={materials['4.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_41.geometry}
            material={materials['5.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_42.geometry}
            material={materials['6.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_43.geometry}
            material={materials['7.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_44.geometry}
            material={materials['8.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_45.geometry}
            material={materials['9.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_46.geometry}
            material={materials['10.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_47.geometry}
            material={materials['11.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_48.geometry}
            material={materials['12.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_49.geometry}
            material={materials['Mat.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_50.geometry}
            material={materials['light1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_51.geometry}
            material={materials['light2.001']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/DestroyedCity.glb')