import React from 'react';
import './App.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import {
  RouterProvider,
} from "react-router-dom";
import { BroswerRoute } from './components/Navigation/Router';

const theme = createTheme({
  fontFamily: 'Inter',
  white: 'rgba(255, 255, 255, 1)',
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

function App() {

  return (
    <MantineProvider theme={theme}>
      <React.StrictMode>
        <RouterProvider router={BroswerRoute} />
      </React.StrictMode>
    </MantineProvider>

  )
}

export default App
