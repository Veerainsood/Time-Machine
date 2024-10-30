import React, { Suspense } from 'react'; // Import React and Suspense for lazy loading
import { Canvas } from '@react-three/fiber'; // Import Canvas from react-three-fiber for rendering 3D scene
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls for user interaction with the 3D scene
import Forest from './Forest.jsx'; // Import the Forest component which represents the 3D model
import "./NavigationPage.css" // Import CSS for styling

// NavigationPage component definition
export default function NavigationPage(){

    return(
      <>
      <link rel='stylesheet' href="./NavigationPage.css" /> {/* Link to external CSS stylesheet */}
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}> {/* Set up the 3D Canvas with camera position and field of view */}
        <ambientLight /> {/* Add ambient lighting to the scene */}
        <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} /> 
        {/* OrbitControls to allow users to pan and rotate, but disable zooming */}
        <Suspense fallback={null}> {/* Suspense to handle lazy loading of the Forest component */}
          <Forest />  {/* Render the 3D Forest component */}
        </Suspense>
      </Canvas>
      </>
    );
}
