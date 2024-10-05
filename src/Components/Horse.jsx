import { useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Correct import for GLTFLoader


export const Horse = () => {
    // Load the GLTF model
    const model = useLoader(GLTFLoader, "/Moodels/Horse2.glb");
    // Load the diffuse texture (correct path)
    const diffu = useTexture("/public/Texture/rosewood_veneer1_diff_1k.png");

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
            position={[19, 0, 16]} // Set the position of the hut
            scale={[0.04, 0.04, 0.04]} // Scale down the hut size
        />
    );
};