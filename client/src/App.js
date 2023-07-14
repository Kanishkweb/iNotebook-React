import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from "./components/About";
import ErrorComponent from "./components/errorComponent";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Alert message="This is an amazing react course." />
      </>
    ),
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home  />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ]
  }
]);

function App() {


  return (
    <>
      <RouterProvider router={Router}/>
    </>
  );
}

export default App;
