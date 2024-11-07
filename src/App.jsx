import Forest from "./3DForest";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import DateTimePicker from "./Components/Timetravel";
import LoginMachine from "./login/Login";
import Register from "./Register/Register";
import NavigationPage from "./Navigation/NavigationPage";
import SaveForest from "./SaveForest/SaveForest";
import City from "./ModernCity/City";
import FutureCity from "./FutureCity/FutureCity";
import { FutureCity2 } from "./FutureCity2/FutureCity2";
import FutureChoice from "./Components/SaveFutureOrNot";
import TwoBrightFutures from "./Components/TwoPossibleFutures";
import HomePage from "./HomePage/Home";
import { DestroyedCity } from "./DestroyedCity/DistroyedCity";
import Compost_Food_Waste from "./assets/Habbits/compost_food";
import EduVids from "./HomePage/EduVids";

const router = createBrowserRouter(
  [
    {
      path:"/Forest",
      element:<Forest/>
    },
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/EduVids",
      element:<EduVids/> 
    },
    {
      path:"/compost_food",
      element:<Compost_Food_Waste/>
    },
    {
      path:"/Destroyed",
      element:<DestroyedCity/>
    }
    ,
    {
      path:"/City",
      element:<City/>
    },
    {
      path:"/FutureCity",                                                                             
      element:<FutureCity/>
    }
    ,
    {
      path:"/FutureCity2",                                                                             
      element:<FutureCity2/>
    }
    ,
    {
      path:"/Login",
      element:<LoginMachine/>
    },
    {
      path:"/timeTravel",
      element:<DateTimePicker/>
    }
    ,
    {
      path:"/FutureChoice",
      element:<FutureChoice/>
    }
    ,
    {
      path:"/TwoBrightFuture",
      element:<TwoBrightFutures/>
    }
    ,
    {
      path:"/Register",
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
