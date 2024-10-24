// Importing components for different routes
import Forest from "./3DForest"; // 3D Forest environment
import { createBrowserRouter ,RouterProvider} from "react-router-dom"; // React Router DOM for handling routing
import DateTimePicker from "./Components/Timetravel"; // Component for selecting date and time
import LoginMachine from "./login/Login"; // Login page component
import Register from "./Register/Register"; // Register page component
import NavigationPage from "./Navigation/NavigationPage"; // Component for navigation page
import SaveForest from "./SaveForest/SaveForest"; // Component for saving the forest state

// Defining the routes for the application
const router = createBrowserRouter(
  [
    {
      path:"/3D", // Route for 3D forest environment
      element:<Forest/>
    }
    ,
    {
      path:"/", // Default route for the login page
      element:<LoginMachine/>
    },
    {
      path:"/timeTravel", // Route for the time travel date picker
      element:<DateTimePicker/>
    }
    ,
    {
      path:"/Register", // Route for the registration page
      element:<Register/>
    }
    ,
    {
      path:"/NavigationPage", // Route for the navigation page
      element:<NavigationPage/>
    }
    ,
    {
      path:"/SaveForest", // Route for saving the forest state
      element:<SaveForest/>
    }
  ]
);

// Main App component to set up routing
function App(){
    return (
      <RouterProvider router={router}/> // Providing the router to handle navigation between components
    )
}

export default App; // Exporting the App component as default
