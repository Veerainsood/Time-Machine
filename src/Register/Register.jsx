import React, { useState } from 'react'; // Import React and useState hook for managing state
import { initializeApp } from 'firebase/app'; // Import function to initialize Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import authentication functions from Firebase
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './style.css'; // Import CSS for styling
import { TimeMachine2 } from '../models/TimeMachine2'; // Import the TimeMachine2 model
import { Physics } from '@react-three/rapier'; // Import Physics for 3D physics simulation
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls for user interaction
import { Canvas } from '@react-three/fiber'; // Import Canvas for rendering 3D graphics

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBADLgkoSxAj5D6XuL-nG76PAnri8yo5us",
  authDomain: "wanrakshak.firebaseapp.com",
  projectId: "wanrakshak",
  storageBucket: "wanrakshak.appspot.com",
  messagingSenderId: "51192366530",
  appId: "1:51192366530:web:2ffef819adbd61baca025b",
  measurementId: "G-V11LZJGL5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize Firebase app with configuration
const auth = getAuth(app); // Get Firebase authentication instance

function Register() {
  const [email, setEmail] = useState(''); // State for storing email
  const [password, setPassword] = useState(''); // State for storing password
  const navigate = useNavigate(); // Initialize navigation

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user; // Get user object
        alert('Account created successfully!'); // Alert success message
        // Navigate to the desired page after successful registration
        navigate('/NavigationPage'); // Redirect to NavigationPage
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code; // Get error code
        const errorMessage = error.message; // Get error message
        alert(`Error: ${errorMessage} (${errorCode})`); // Alert error message
      });
  };

  return (
    <div id="position"> {/* Main container for registration form */}
      <div className="wrapper"> {/* Wrapper for styling */}
        <form onSubmit={handleSubmit}> {/* Form submission handler */}
          <h2>Register</h2> {/* Registration title */}
          <div className="input-field"> {/* Email input field */}
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Enter Your Email'
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              required
            />
          </div>
          <div className="input-field"> {/* Password input field */}
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Enter Your Password'
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
              required
            />
          </div>
          <div className="forget"> {/* Remember me checkbox */}
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              <p>Remember me</p> {/* Label for checkbox */}
            </label>
          </div>
          <button id="submit" type="submit">Register</button> {/* Submit button */}
        </form>
      </div>
      <div id="canva"> {/* Container for 3D Canvas */}
          <Canvas> {/* Initialize Canvas for 3D rendering */}
            <ambientLight intensity={3} /> {/* Ambient light for scene illumination */}
            <pointLight position={[10, 10, 10]} /> {/* Point light source */}
            <Physics> {/* Physics simulation for 3D objects */}
            <TimeMachine2 scale={[0.4, 0.4, 0.4]} /> {/* Render TimeMachine2 model */}
            </Physics>
            <OrbitControls autoRotate autoRotateSpeed={1} /> {/* Controls for orbiting the scene */}
          </Canvas>
        </div>
    </div>
    
  );
};

export default Register; // Export the Register component
