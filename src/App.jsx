import Forest from "./3DForest";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import LoginMachine from "./Components/Login";
import DateTimePicker from "./Components/Timetravel";

const router = createBrowserRouter(
  [
    {
      path:"/3D",
      element:<Forest/>
    }
    ,
    {
      path:"/",
      element:<LoginMachine/>
    },
    {
      path:"/timeTravel",
      element:<DateTimePicker/>
    }
  ]
);

function App(){
    return (
      <RouterProvider router={router}/>
    )
}

export default App;