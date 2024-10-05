import { Sky, Stars } from '@react-three/drei';
import { Canvas  } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import {Ground} from './Components/Ground'; // Ensure this is the correct import for your Ground component
import { MyPlayer } from './Components/MyPlayer';
import { FPV } from './Components/FPV';
import { TreeModel } from './models/TreeModel';
import { CharModel } from './models/Character';
import { TimeMachine } from './models/TimeMachine';
import { ForestGen } from './Components/ForestGenerator';
import { Tree2Model } from './models/Tree2';
import { SkyCycle } from './Components/ChangeDayNight';
import { Axes } from './Components/AxesHelper';
import { Hut } from './Components/Hut';
import { Hut_two } from './Components/Hut2';
import { Wood } from './Components/Wood';
import { Horse } from './Components/Horse';

function App() {  
  return (
    <>
      <Canvas shadows>
        <SkyCycle />
        <ambientLight /> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -300, 0]}>
          <MyPlayer />
           <Hut/>
          <Wood/>
          <Horse/>
          <Hut_two/>
          <CharModel position={[10, 0, 1]} rotation={[0, Math.PI / 2, 0]} scale={[0.014, 0.014, 0.014]} />
          <CharModel position={[23, 0, 4]} rotation={[0, Math.PI / 2, 0]} scale={[0.014, 0.014, 0.014]} />
          <TimeMachine position={[40, 2,9]} rotation={[0, Math.PI/2, 0]} scale={[3, 3, 3]}/>
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
