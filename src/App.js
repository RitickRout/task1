import './App.css';
import Login from './pages/Login';
import  {Signup}  from './pages/Signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },{
    path:"/signup",
    element:<Signup/>
  }
]);



function App() {

return <>
<RouterProvider router={router} />
</>
}

export default App;
