import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import ProductDetails from './ProductDetails'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
          </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
