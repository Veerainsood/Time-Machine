

import { DesCityModel } from "./Models/DesCityModel";
import { Canvas } from '@react-three/fiber';

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



function DestroyedCity() {  


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
          <DesCityModel position={[40, 0, 14]} rotation={[0, Math.PI/2, 0]} scale={[1, 1, 1]}/>


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

export default DestroyedCity;
