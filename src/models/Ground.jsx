import {usePlane } from "@react-three/cannon"
import { useTexture } from "@react-three/drei";
import { NearestFilter, RepeatWrapping } from "three"

const Ground = () => {
    const difff =useTexture("./Texture/coast_sand_rocks_02_diff_1k.png")
    const hgj = useTexture ("./Texture/coast_sand_rocks_02_rough_1k.png")
    const [ref] = usePlane(() => ({
              rotation: [-Math.PI/2,0,0] , position:[0,0,0]
          }))

    return (
      <mesh ref = {ref} receiveShadow>
        <planeGeometry attach= 'geometry' args={[50,50]}/>
        <meshStandardMaterial  attach ='materail' color={"green"}   /> {/* Ground color */}
      </mesh>
    );
  };
  export default Ground ;
