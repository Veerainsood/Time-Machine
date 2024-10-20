import { Canvas } from '@react-three/fiber';
import {  useEffect } from 'react';
import React, { useState } from 'react';
import { Physics, RigidBody } from '@react-three/rapier';
import {Ground} from '../Components/Ground'; // Ensure this is the correct import for your Ground component
import { Player } from '../Components/Player';
import { FPV } from '../Components/FPV';
import { SkyCycle } from '../Components/ChangeDayNight';
import { TimeMachine2 } from '../ForestModels/TimeMachine2';
import { EntryCircle } from '../ForestModels/EntryCircle';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Suspense } from "react"
import { KeyboardControls } from '@react-three/drei';
import { Axes } from '../Components/AxesHelper';
import "../../src/CompCSS/ThreeD.css"
import { CityModel2 } from './Models/CityModel2';
import { Market } from './Models/SuperMarket';
import { Building_One } from './Models/Building_One';
import { BasketBallStad } from './Models/basketBallStad';
import { Disco } from './Models/Disco';
import { McDonalds } from './Models/mcDonalds';
import { House } from './Models/House';
import { HyperCar1 } from './Models/CarHyper1';
import * as THREE from 'three';
import { HyperCar2 } from './Models/CarHyper2';
import { GreyTheater } from './Models/GreyTheater';
import { CarPackSix } from './Models/CarPackSix';
import { TheaterBig } from './Models/TheaterBig';
import { Modern_VILLA } from './Models/Modern_VILLA';
import { Trash } from './Models/Trash';
import { Gas_Station } from './Models/Gas_Station';

function City() {  


  return (
    <>    
  
    <link rel='stylesheet' href='../src/CompCSS/ThreeD.css'></link>

  
      <Suspense>
      <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
      <Canvas>
        <SkyCycle />
        <ambientLight /> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -3, 0]} debug>
        <Player />          
        <TimeMachine2 position={[40, 0,9]} rotation={[0, Math.PI/2, 0]} scale={[.5, .5, .5]}/> 
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => {
              console.log('hi');
              window.open("/timeTravel","_top");        
            }}
          >
        <EntryCircle position={[40, 0, 14]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        </RigidBody>
        <CityModel2 position={[40, 0, 14]} rotation={[0, Math.PI/2, 0]} scale={[1, 1, 1]}/>
        <Market position={[-7, -1.5, -157]} rotation={[0, Math.PI, 0]} scale={[4, 4, 4]}/>
        <BasketBallStad position={[-150, 1, -79]} rotation={[0, Math.PI, 0]} scale={[5, 5, 5]}/>
        <McDonalds position={[15, 0, -30]} rotation={[0, 0, 0]} scale={[1.3, 1.5, 1.5]}/>
        <House position={[-160,-5,260]} rotation={[0, 0, 0]} scale={[10,10, 10]}/>
        <pointLight position={[32, 10, 30]} intensity={1000} color="#fff" target={new THREE.Vector3(0, 0, -1)} />
        <HyperCar1 position={[30,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
        {/* <pointLight position={[35, 5, 30]} intensity={100} color="#fff" target={new THREE.Vector3(0, 0, -1)} /> */}
        <HyperCar2 position={[37,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
        <HyperCar1 position={[26,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
        <pointLight position={[25, 20, 90]} intensity={2000} color="#fff" target={new THREE.Vector3(0, 0, -1)} />
        <HyperCar2 position={[33.5,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
      <BasketBallStad position ={[30,0.5,63]} scale ={[3.5,3.5,3.5]}/>
      <Disco position ={[-80,0.5,-80]} scale ={[5.5,5.5,5.5]}/>
       {/* <pointLight position={[35, 5, 30]} intensity={100} color="#fff" target={new THREE.Vector3(0, 0, -1)} /> */}
       <GreyTheater position ={[25,0.4,190]} rotation={[0, 90, 0]} scale ={[0.8,0.8,0.8]} /> 
       <CarPackSix position ={[10,0.1,120]} rotation={[0, 0, 0]} scale ={[2.3,2.3,2.3]} />
       <TheaterBig position ={[15,2,350]} rotation={[0, 0, 0]} scale ={[1.4,1.4,1.4]} />
       <Building_One position ={[-100,0.1,380]} rotation={[0,0,0]} scale ={[0.007,0.007,0.007]} />
       <Modern_VILLA position ={[-70, -1, 50]} rotation={[0,359.7,0]} scale ={[2,2,2]} />
        <pointLight position={[35,10,-20]} intensity={1000} color="#fff" target={new THREE.Vector3(0, 0, -1)} />
        <Trash position ={[35, 0, -20]} rotation={[0,359.7,0]} scale ={[0.05,0.05,0.05]} />
        <Gas_Station position={[-147,-0.4,200]} rotation={[0, 69.12, 0]} scale={[2,2.5, 2]}/>
        </Physics>
      <PointerLockControls />
      </Canvas>
      </KeyboardControls>
      <Loader />
      </Suspense>    
     
      <div className='absolute centered cursor'>+</div>  
    </>
  );
}

export default City;
