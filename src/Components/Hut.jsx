

import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Correct import for GLTFLoader
import * as THREE from 'three'; // Import THREE
export const Hut = () =>  {
    const model = useLoader(GLTFLoader, "/Moodels/HutMain2.glb");

   
    const diffu = useTexture("/public/Texture/plank_flooring_02_diff_1k.png");

    // Traverse the model's children to apply the texture
    model.scene.traverse((child) => {
        if (child.isMesh) {
            child.material.map = diffu; // Apply the texture to the mesh material
            child.material.needsUpdate = true; // Notify Three.js to update the material
            
        }
    });

     return <primitive object={ model.scene}
     position={[15, 0, 25]}
     scale={[0.2, 0.2, 0.2]} />
   
   }