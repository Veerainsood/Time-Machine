/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ./public/compressedMachine.glb -o ./src/TT.jsx 
*/

import React,{useEffect, useState} from 'react'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { NavLink, useNavigate } from 'react-router-dom';

import firebaseApp from './firebase';
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
//import { useAuth } from './AuthProvider'; // Adjust the path based on your file structure
import  '../CompCSS/Login.css';

//const auth = getAuth(app);
//console.log('Auth',auth);
//const analytics = getAnalytics(app);
//</script>



function Machine(props) {
  //const [inputClickedEmai,setInpEmailClick] = useState(false);
 
  const { nodes, materials } = useGLTF('/compressedMachine.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.alarm_clock_01001_M_clock_0.geometry} material={materials.M_clock} position={[0, 3.316, -2.728]} rotation={[-1.862, 0, 0]} scale={35.41} />
      <mesh geometry={nodes.alarm_clock_01003_M_back_machine_0.geometry} material={materials.M_back_machine} position={[-3.401, 3.381, -1.963]} rotation={[-1.739, 0, 0]} />
      <mesh geometry={nodes.alarm_clock_01011_M_back_machine_2_0.geometry} material={materials.M_back_machine_2} position={[3.07, 3.535, -2.6]} rotation={[-Math.PI / 2, 0.301, Math.PI / 2]} />
      <mesh geometry={nodes.BezierCurve_M_front_machine_0.geometry} material={materials.M_front_machine} position={[0, 0.616, 5.387]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.cable_M_back_machine_2001_0.geometry} material={materials['M_back_machine_2.001']} position={[2.397, 5.544, -3.887]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.cable009_M_back_machine002_0.geometry} material={materials['M_back_machine.002']} position={[-3.207, 4.43, -4.558]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.chesterfield_base002_M_seat_0.geometry} material={materials.M_seat} position={[-0.008, 4.726, -1.065]} rotation={[-0.168, 0, 0]} scale={1.249} />
      <mesh geometry={nodes.Cube002_M_Main_0.geometry} material={materials.M_Main} position={[0, 0.026, 3.117]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Gem_M_back_machine001_0.geometry} material={materials['M_back_machine.001']} position={[-2.607, 5.701, -5.809]} rotation={[-Math.PI / 2, -0.182, 0]} scale={[0.69, 0.69, 1.488]} />
      <mesh geometry={nodes.Sphere_M_glass_0.geometry} material={materials.M_glass} position={[-2.663, 6.006, -5.809]} rotation={[-Math.PI / 2, -0.182, 0]} scale={0.796} />
      <mesh geometry={nodes.alarm_clock_01_M_clock_0001.geometry} material={materials['M_clock.001']} position={[0, 3.316, -2.772]} rotation={[-1.862, 0, 0]} scale={35.41} />
      <instancedMesh args={[nodes.buttons_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.buttons_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.cable007_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.cable007_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.chesterfield_base_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.chesterfield_base_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Circle001_M_front_machine_0.geometry, materials.M_front_machine, 2]} instanceMatrix={nodes.Circle001_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube003_M_Main_0.geometry, materials.M_Main, 6]} instanceMatrix={nodes.Cube003_M_Main_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube011_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.Cube011_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder003_M_clock_0.geometry, materials.M_clock, 8]} instanceMatrix={nodes.Cylinder003_M_clock_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder005_M_front_machine_0.geometry, materials.M_front_machine, 2]} instanceMatrix={nodes.Cylinder005_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder012_M_clock_0.geometry, materials.M_clock, 10]} instanceMatrix={nodes.Cylinder012_M_clock_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder035_M_Main_0.geometry, materials.M_Main, 2]} instanceMatrix={nodes.Cylinder035_M_Main_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder036_M_back_machine_2_0.geometry, materials.M_back_machine_2, 6]} instanceMatrix={nodes.Cylinder036_M_back_machine_2_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cylinder038_M_front_machine_0.geometry, materials.M_front_machine, 2]} instanceMatrix={nodes.Cylinder038_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Gear007_M_clock_0.geometry, materials.M_clock, 2]} instanceMatrix={nodes.Gear007_M_clock_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.Plane_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane001_M_seat_0.geometry, materials.M_seat, 2]} instanceMatrix={nodes.Plane001_M_seat_0.instanceMatrix} />
      <instancedMesh args={[nodes.Plane006_M_Main_0.geometry, materials.M_Main, 2]} instanceMatrix={nodes.Plane006_M_Main_0.instanceMatrix} />
      <instancedMesh args={[nodes.Sphere003_M_front_machine_0.geometry, materials.M_front_machine, 3]} instanceMatrix={nodes.Sphere003_M_front_machine_0.instanceMatrix} />
      <instancedMesh args={[nodes.Sphere004_M_front_machine_0.geometry, materials.M_front_machine, 5]} instanceMatrix={nodes.Sphere004_M_front_machine_0.instanceMatrix} />
    </group>
  )
}

export default function LoginMachine() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const { login } = auth;  // Access login function from AuthProvider
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Assuming email and password are from form inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Initialize Firebase Auth
    const auth = getAuth(firebaseApp);  // You don't need firebase.auth() with the modular approach
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User is signed in
        const user = userCredential.user;
        console.log("Signed in user:", user.email);
        
        // Navigate to the navigation page after sign-in
        navigate('/NavigationPage');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign in error:", errorCode, errorMessage);
        // Handle sign-in errors here
      });
  };

  
  // Function to handle form submission
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const Email = document.getElementById('email').value;
  //   const Password = document.getElementById('password').value;
  //   try {
  //     await login(email, password);
  //     navigate('/NavigationPage');  // Redirect after successful login
  //   } catch (error) {
  //     console.error('Error logging in:', error.message);
  //     // Handle login error (e.g., show an error message)
  //   }
  // }

  function handleGuestClick() {
    navigate('/NavigationPage');
  }

  return (
    <>
     <link rel='stylesheet' href='../CompCSS/Login.css'/>
      <div id="position">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-field">
              <input 
                id="email" 
                type="email" 
                placeholder='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}  // Set email state
                required 
              />
            </div>
            <div className="input-field">
              <input 
                id="password" 
                type="password" 
                placeholder='Enter Your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // Set password state
                required 
              />
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
            </div>
            <button id="submit" type="submit" >Log In</button>
            <div className="register">
              <p>Don't have an account? <a href="/Register">Register</a></p>
            </div>
            <button id="Guest" onClick={handleGuestClick}>Continue As Guest</button>
          </form>
        </div>
        {/* Three.js Canvas */}
        <div id="canva">
          <Canvas>
            <ambientLight intensity={3} />
            <pointLight position={[10, 10, 10]} />
            <Machine scale={[0.4, 0.4, 0.4]} />
            <OrbitControls autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
      </div>
    </>
  );
}
