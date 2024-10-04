import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon";
import { useEffect, useRef } from "react";
import { PointLight, Vector3 } from "three";
import { useKeyBoard } from "../hooks/useKeyBoard";

const JUMP_FORCE = 10;
const SPEED = 4;


export const Player = () => {
    const {moveBackward,moveForward,moveRight,moveLeft,jump} = useKeyBoard()
    const { camera } = useThree();
    const [ref,api] = useSphere(() => ({//affected by physics and gravity
        mass: 1,
        type: 'Dynamic',
        position: [1,1,1]
    }))
    //for position
    
    const pos = useRef([1,1,1])// we need this sphere to follow useSphere ref.
    useEffect(()=>{
        api.position.subscribe((position)=> pos.current = position)
    })
    
    //for vel
    const velocity = useRef([0,0,0])// we need this sphere to follow useSphere ref.
    useEffect(()=>{
        api.velocity.subscribe((velocity)=> velocity.current = velocity)
    })


    useFrame(()=>{//updates the camera pos at every frane
        camera.position.copy(new Vector3(pos.current[0],pos.current[1],pos.current[2]))//this vector sets the new camera position to the position of the player
        
       

        const direction = new Vector3()
        const frontVec  = new Vector3(
            0,  //x
            0, //z
            (moveBackward ? 1 : 0 ) - ( moveForward ? 1 : 0 ) //y
        )
        const sideVec   = new Vector3(
            (moveLeft ? 1 : 0 ) - ( moveRight ? 1 : 0 ),//x
            0,
            0,//y
        )
        
        direction
            .subVectors(frontVec,sideVec)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation) 
        
        api.velocity.set(direction.x,velocity.current[1],direction.z)

        if(jump && Math.abs(velocity.current[1])<1)
        {
            api.velocity.set(velocity.current[0],JUMP_FORCE,velocity.current[2]);
        }
    })
    return (
        <mesh ref={ref}/>
    )
}