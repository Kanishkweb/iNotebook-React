import * as React from "react";
// import { createRoot } from "react-dom/client";
// --Importing React Router-----------------------------
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// --Importing Custom Css------------------------------
import './App.css';
// --Importing Components-------------------------------
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from "./components/About";
import ErrorComponent from "./components/errorComponent";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


// ---------------------//------------------------//---------------------------//-------------------------//------------------//
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
    <Alert message="This is amazing react course." />
    <Navbar />
    </>
    ),
    errorElement:<ErrorComponent/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/login", 
        element:<Login/>
      },
      {
        path:"/signup", 
        element:<SignUp/>
      }
    ]
  }

])
function App() {
  return (
    <>
        <RouterProvider router={Router} />
    </>
  );
}


export default App;