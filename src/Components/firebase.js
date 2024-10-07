// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDSvSG1u_9YUU_l4exELQbMIJx02jIb-JU",
  authDomain: "forest-degradation-3d.firebaseapp.com",
  projectId: "forest-degradation-3d",
  storageBucket: "forest-degradation-3d.appspot.com",
  messagingSenderId: "501709393838",
  appId: "1:501709393838:web:dd4bc09fdcf0c65452c23f",
  measurementId: "G-XYZQLGHNSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);