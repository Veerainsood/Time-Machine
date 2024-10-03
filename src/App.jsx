import { Sky } from '@react-three/drei'
import './App.css'
import {Canvas} from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import {Ground} from './Components/Ground'
import { Player } from './Components/Player'
import { FPV } from './Components/FPV'
import { TreeModel } from './models/TreeModel'
import { CharModel } from './models/Character'
function App() {  

  return (
    <>
    <Canvas shadows>
    <Sky sunPosition={[100,100,20]}/>
    <ambientLight />
    <FPV />
    <Physics gravity={[0, -100, 0]}>
      <Player/>
      <TreeModel position={[1, 0, 3]} rotation={[0, Math.PI / 2, 0]} scale={[.5, .5, .5]}/>
      <TreeModel position={[5, 0, 19]} rotation={[0, Math.PI / 2, 0]} scale={[.5, .5, .5]}/>
      <TreeModel position={[4, 0, 12]} rotation={[0, Math.PI / 2, 0]} scale={[.5, .5, .5]}/>
      <TreeModel position={[20, 0, 16]} rotation={[0, Math.PI / 2, 0]} scale={[.5, .5, .5]}/>
      <TreeModel position={[7, 0, 9]} rotation={[0, Math.PI / 2, 0]} scale={[.5, .5, .5]}/>
      <CharModel position={[10, 0, 1]} rotation={[0, Math.PI / 2, 0]} scale={[.014, .014, .014]}/>
      <CharModel position={[23, 0, 4]} rotation={[0, Math.PI / 2, 0]} scale={[.014, .014, .014]}/>
      <Ground/>
    </Physics>
    </Canvas>
    <div className='absolute centered cursor'>+</div>
    </>
  )
}

export default App
