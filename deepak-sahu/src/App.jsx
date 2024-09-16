import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  

  return (
   <ChakraProvider>
    <div className="mainapp">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
     </div>
   </ChakraProvider>
  )
}

export default App
