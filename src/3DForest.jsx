// Importing necessary modules and components for the 3D environment
import { Canvas } from '@react-three/fiber'; // Provides a 3D canvas for rendering
import { Physics, RigidBody } from '@react-three/rapier'; // Physics engine for rigid bodies and interactions
import {Ground} from './Components/Ground'; // Ground component in the environment
import { Player } from './Components/Player'; // Player component for user control
import { FPV } from './Components/FPV'; // First-person view camera setup
import { ForestGen } from './Components/ForestGenerator'; // Component to generate forest elements
import { SkyCycle } from './Components/ChangeDayNight'; // Component for simulating day-night cycle
import { TimeMachine2 } from './models/TimeMachine2'; // 3D model of a time machine
import { Hindu } from './models/HinduTempleModel'; // 3D model of a Hindu temple
import { EntryCircle } from './models/EntryCircle'; // 3D model for entry circles in the scene
import { Loader, PointerLockControls } from '@react-three/drei'; // Loader for assets and pointer lock controls for better FPS experience
import { Suspense } from "react"; // Suspense component to delay rendering until components are ready
import { KeyboardControls } from '@react-three/drei'; // For configuring keyboard controls
import { Hut } from './models/Hut'; // 3D model of a hut
import { Axes } from './Components/AxesHelper'; // Helper for displaying axes
import { MyPlayer } from './Components/MyPlayer'; // Custom player component
import { Pond } from './models/Pond'; // 3D model of a pond
import { Cart } from './models/Cart'; // 3D model of a cart
import { Peackock } from './models/Peackock'; // 3D model of a peacock
import { Tiger } from './models/Tiger'; // 3D model of a tiger
import { FaunaGen } from './Components/FaunaGenerator'; // Component to generate fauna
import { CarryCart } from './models/Cart1'; // Alternative cart model

// Importing CSS for 3D environment
import "../src/CompCSS/ThreeD.css";
import { Mountain } from './Mountain'; // Mountain 3D model
import { MountainFog } from './MountainFog'; // Fog effect for mountains

// Function to render the 3D forest environment
function Forest() {  
  return (
    <>    
    <link rel='stylesheet' href='../src/CompCSS/ThreeD.css'></link> // Linking external CSS
      <Suspense> // Suspense to ensure components load before rendering
      <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] }, // Mapping keys for moving forward
            { name: "backward", keys: ["ArrowDown", "s", "S"] }, // Mapping keys for moving backward
            { name: "left", keys: ["ArrowLeft", "a", "A"] }, // Mapping keys for moving left
            { name: "right", keys: ["ArrowRight", "d", "D"] }, // Mapping keys for moving right
            { name: "jump", keys: ["Space"] }, // Mapping key for jumping
          ]}>
      <Canvas>
        <SkyCycle /> // Adding sky cycle for day-night transition
        <ambientLight /> // Adding ambient light to the scene
        <FPV /> // Setting up the first-person view
        <Axes/> // Displaying axes for orientation
        <Physics gravity={[0, -10, 0]} debug> // Physics engine with gravity applied
        <Player /> // Adding the player component for interaction        
        <TimeMachine2 position={[40, 0,9]} rotation={[0, Math.PI/2, 0]} scale={[.5, .5, .5]}/> // Positioning and scaling the time machine model
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => { // Trigger to open time travel page on interaction
              console.log('hi');
              window.open("/timeTravel","_top");        
            }}
          >
        <EntryCircle position={[40, 0, 14]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/> // Positioning and scaling entry circle
        </RigidBody>
        <RigidBody
            sensor
            type="fixed"           
            onIntersectionEnter={() => { // Trigger to open navigation page on interaction
              console.log('hi');
              window.open("/NavigationPage","_top");        
            }}
          >
        <EntryCircle position={[-21, 7, 27]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/> // Positioning and scaling another entry circle
        </RigidBody>
        <ForestGen /> // Generating forest elements
        <FaunaGen /> // Generating fauna elements
        <Hindu position={[30, 0, 40]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}/> // Positioning and scaling the Hindu temple model
        <Pond position={[-69, -3.2, 10]} rotation={[-Math.PI/26, -Math.PI / 2, -Math.PI/15]} scale={[.05, .05, .05]} /> // Positioning and scaling the pond
        <Ground position={[0,0,0]}/> // Ground component
        <Hut position={[-30, 1.5, 27]} rotation={[0, Math.PI / 2, 0]} scale={[1.7,1.7,1.7]}/> // Positioning and scaling the hut
        <Cart position={[-15, 0, 39]} rotation={[0, Math.PI/2 , 0]} scale={[.3,.3,.3]}/>  // Positioning and scaling the cart
        <CarryCart position={[-10, 0, 39]} rotation={[0, -Math.PI , 0]} scale={[1,1,1]}/> // Positioning and scaling an alternative cart
        <Mountain position={[75, -15, 15]} rotation={[0, -Math.PI/2 , 0]} scale={[1.5,1.5,1.5]} /> // Positioning and scaling a mountain
        <MountainFog position={[90, -25, 20]} rotation={[0, Math.PI/2 , 0]} scale={[2,2,2]} /> // Adding fog around mountain
        <MountainFog position={[69, -10, -34]} rotation={[0, Math.PI/2 , 0]} scale={[1,1,1]} /> // Additional fog placement
        <MountainFog position={[-25, -15, -60]} rotation={[0, 3*Math.PI/4 , 0]} scale={[1,1,1]} />   
        <MountainFog position={[39, -20, -60]} rotation={[0, 3*Math.PI/4 , 0]} scale={[2,2,2]} />   
        <MountainFog position={[-55, -15, -40]} rotation={[0, 3*Math.PI/4 , 0]} scale={[1,1,1]} />  
        <MountainFog position={[-105, -20, -50]} rotation={[0, 3*Math.PI/4 , 0]} scale={[2,2,2]} /> 
        <MountainFog position={[-145, -20, 20]} rotation={[0, 3*Math.PI/2 , 0]} scale={[2,2,2]} /> 
        <MountainFog position={[-145, -15, 5]} rotation={[0, Math.PI/6, 0]} scale={[1,1,1]} />  
        <Mountain position={[35, -30, 105]} rotation={[0, Math.PI/2, 0]} scale={[2,2,2]} />  
        <Mountain position={[-45, -20, 105]} rotation={[0, Math.PI/2, 0]} scale={[2,2,2]} />  
        </Physics>
      <PointerLockControls /> // Enables pointer lock for better navigation
      </Canvas>
      </KeyboardControls>
      <Loader /> // Loader to show while assets are being loaded
      </Suspense>    
      <div className='absolute centered cursor'>+</div> // Custom cursor in the center of the screen
    </>
  );
}

export default Forest; // Exporting the Forest component as default
