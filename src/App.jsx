import React from 'react';
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  RouterProvider,
} from "react-router-dom";
import { BroswerRoute } from './components/Navigation/Router';

function App() {

  return (
    <MantineProvider theme={{
      fontFamily: 'Inter',
    }}>
      <React.StrictMode>
        <RouterProvider router={BroswerRoute} />
      </React.StrictMode>
    </MantineProvider>

  )
}

export default App
