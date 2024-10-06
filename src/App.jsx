import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import {Ground} from './Components/Ground'; // Ensure this is the correct import for your Ground component
import { Player } from './Components/Player';
import { FPV } from './Components/FPV';
import { ForestGen } from './Components/ForestGenerator';
import { SkyCycle } from './Components/ChangeDayNight';
import { TimeMachine2 } from './models/TimeMachine2';
import { Hindu } from './models/HinduTempleModel';
import { EntryCircle } from './models/EntryCircle';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Suspense } from "react"
import { KeyboardControls } from '@react-three/drei';
import { Hut } from './models/Hut';
import { Axes } from './Components/AxesHelper';
import { MyPlayer } from './Components/MyPlayer';
import { Pond } from './models/Pond';
import { Cart } from './models/Cart';
import { Peackock } from './models/Peackock';
import { Tiger } from './models/Tiger';
import { FaunaGen } from './Components/FaunaGenerator';
import { CarryCart } from './models/Cart1';

function App() {  
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
      <Canvas>
        <SkyCycle />
        <ambientLight /> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -10, 0]} debug>
        <Player />          
        <TimeMachine2 position={[40, 0,9]} rotation={[0, Math.PI/2, 0]} scale={[.5, .5, .5]}/> 
        <EntryCircle position={[40, 0, 12]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        <ForestGen /> 
        <FaunaGen />
        <Hindu position={[30, 0, 40]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}/>
        <Pond position={[-69, -3.2, 10]} rotation={[-Math.PI/26, -Math.PI / 2, -Math.PI/15]} scale={[.05, .05, .05]} />
        <Ground position={[0,0,0]}/>
        <Hut position={[-30, 1.5, 36]} rotation={[0, Math.PI / 2, 0]} scale={[1.7,1.7,1.7]}/>
        <Cart position={[-15, 0, 39]} rotation={[0, Math.PI/2 , 0]} scale={[.3,.3,.3]}/>  
        <CarryCart position={[-10, 0, 39]} rotation={[0, -Math.PI , 0]} scale={[1,1,1]}/>  
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

export default App;
