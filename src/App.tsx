import React from "react";
import {Router} from './utils/router'
import { RouterProvider } from "react-router-dom";
import '../src/App.css'

export function App() {
  return (
    <div className="App">
     <RouterProvider router={Router}/>
    </div>
  );
}
