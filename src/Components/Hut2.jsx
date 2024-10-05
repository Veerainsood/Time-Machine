import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Correct import for GLTFLoader


export const Hut_two = () => {
    // Load the GLTF model
    const model = useLoader(GLTFLoader, "/Moodels/Hut3.glb");
    // Load the diffuse texture (correct path)
    const diffu = useTexture("/public/Texture/plank_flooring_02_diff_1k.png");

    // Traverse the model's children to apply the texture
    model.scene.traverse((child) => {
        if (child.isMesh) {
            child.material.map = diffu; // Apply the texture to the mesh material
            child.material.needsUpdate = true; // Notify Three.js to update the material
            
            // Optionally, set the wrapping and fi
             
        }
    });

    return (
        <primitive 
            object={model.scene}
            position={[10, 0, 35]} // Set the position of the hut
            scale={[0.35, 0.35, 0.35]} // Scale down the hut size
        />
    );
};
