import { Sky, Stars } from '@react-three/drei';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import {Ground} from './Components/Ground'; // Ensure this is the correct import for your Ground component
import { Player } from './Components/Player';
import { FPV } from './Components/FPV';
import { TreeModel } from './models/TreeModel';
import { CharModel } from './models/Character';
import { TimeMachine } from './models/TimeMachine';
import { ForestGen } from './Components/ForestGenerator';
import { Tree2Model } from './models/Tree2';
function App() {  
  return (
    <>
      <Canvas shadows>
        <Sky sunPosition={[0, 0, 0]} turbidity={1}/>
        <Stars />
        <ambientLight /> 
        <FPV />
        <Physics gravity={[0, -100, 0]}>
          <Player />
          <TreeModel position={[1, 0, 3]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 0.5, 0.5]} />
          <TreeModel position={[5, 0, 19]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 0.5, 0.5]} />
          <TreeModel position={[4, 0, 12]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 0.5, 0.5]} />
          <TreeModel position={[20, 0, 16]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 0.5, 0.5]} />
          <TreeModel position={[7, 0, 9]} rotation={[0, Math.PI / 2, 0]} scale={[0.5, 0.5, 0.5]} />
          <CharModel position={[10, 0, 1]} rotation={[0, Math.PI / 2, 0]} scale={[0.014, 0.014, 0.014]} />
          <CharModel position={[23, 0, 4]} rotation={[0, Math.PI / 2, 0]} scale={[0.014, 0.014, 0.014]} />
          <TimeMachine position={[20, 2,9]} rotation={[0, Math.PI/2, 0]} scale={[3, 3, 3]}/>
           {/* <Tree2Model position={[20, 2,9]} rotation={[0, Math.PI/2, 0]} scale={[1, 1, 1]}/> */}
           <ForestGen />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
