import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import {Ground} from '../Components/Ground'; // Ensure this is the correct import for your Ground component
import { Player } from '../Components/Player';
import { FPV } from '../Components/FPV';
import { SkyCycle } from '../Components/ChangeDayNight';
import { TimeMachine2 } from '../ForestModels/TimeMachine2';
import { EntryCircle } from '../ForestModels/EntryCircle';
import { Loader, PointerLockControls, Stars } from '@react-three/drei';
import { Suspense } from "react"
import { KeyboardControls } from '@react-three/drei';
import { Axes } from '../Components/AxesHelper';
import styles from "../FutureCity/FutureCity.module.css"
import { Cityscape } from './Models/CityScape';

export function FutureCity2() {  
  return (
    <>    
      <Suspense>
      <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
      <div className={styles.canvas}>
      <Canvas>
        <Stars />
        <ambientLight intensity={1}/> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -10, 0]} debug>
        <Player />          
        <TimeMachine2 position={[9, 1,0]} rotation={[0, 0, 0]} scale={[.5, .5, .5]}/> 
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => {
              console.log('hi');
              window.open("/timeTravel","_top"); 
                  
            }}
          >
        <EntryCircle position={[14, 2.3, 0]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        </RigidBody>
        <Cityscape />
        </Physics>
      <PointerLockControls />
      </Canvas>
      </div>
      </KeyboardControls>
      <Loader />
      </Suspense>    
    </>
  );
}
