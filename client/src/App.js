import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import ErrorComponent from "./components/errorComponent";
import Alert from "./components/Alert";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
    <Alert message="This is amazing react course0" />
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
      // {
      //   path:"/contact", 
      //   element:<Contact/>
      // }
    ]
  }

])
function App() {
  return (
    <>
      <NoteState>
        <RouterProvider router={Router} />
        </NoteState>
    </>
  );
}


export default App;