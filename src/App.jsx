import React from 'react';
import './App.css'
import {
  RouterProvider,
} from "react-router-dom";
import { BroswerRoute } from './components/Navigation/Router';

function App() {

  return (
    <React.StrictMode>
    <RouterProvider router={BroswerRoute} />
  </React.StrictMode>
    
  )
}

export default App
