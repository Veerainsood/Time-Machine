import * as THREE from "three";
import { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";

// Constants for player speed and jump velocity
const SPEED = 10;
const JUMP_VELOCITY = 7.5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export function Player() {
    const ref = useRef(); // Reference to the player's RigidBody
    const isJumpingRef = useRef(false); // Reference to track if the player is jumping
    const { camera } = useThree(); // Access the camera from Three.js context
    const [, get] = useKeyboardControls(); // Get keyboard controls state
    
    useFrame(() => {
        if (ref.current) { // Ensure the player's RigidBody reference is available
            const { forward, backward, left, right, jump } = get(); // Destructure movement input from keyboard controls
            const velocity = ref.current.linvel(); // Get the current linear velocity of the player
            const position = ref.current.translation(); // Get the player's current position

            // Make the camera follow the player
            if (position) {
                camera.position.set(position.x, position.y + 1, position.z); // Adjust camera position relative to player
            }

            // Movement logic based on keyboard input
            frontVector.set(0, 0, backward - forward); // Determine forward/backward movement
            sideVector.set(left - right, 0, 0); // Determine left/right movement
            direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation); // Calculate movement direction and speed

            // Set horizontal velocity (X and Z axes) for the player
            ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

            // Jump logic (simplified, without ground detection)
            if (jump && !isJumpingRef.current) { // If jump input is detected and the player is not already jumping
                ref.current.setLinvel({ x: velocity.x, y: JUMP_VELOCITY, z: velocity.z }); // Set upward velocity to make the player jump
                isJumpingRef.current = true; // Set jumping state to true
            }
            
            if (!jump && isJumpingRef.current) { // If jump input is released
                isJumpingRef.current = false; // Reset jumping state
            }
        }
    });

    return (
        <RigidBody 
            ref={ref} 
            colliders={false} // Disable default colliders
            mass={1} // Set the player's mass
            type="dynamic" // Make the player's RigidBody dynamic for physics interactions
            position={[3, 10, 0]} // Initial spawn position of the player
            enabledRotations={[false, false, false]} // Disable all rotations to keep the player upright
        >
            <CapsuleCollider args={[0.75, 0.5]} /> {/* Use a CapsuleCollider for the player */}
        </RigidBody>
    );
}
