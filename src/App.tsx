import React from "react";
import {Router} from './utils/router'
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
