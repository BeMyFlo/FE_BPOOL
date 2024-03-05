// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product'; // Import the Product component
import Navbar from './components/navbar';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter> {/* Wrap the entire application with BrowserRouter */}
      <div className="App">
        {/* Component */}
        <Navbar></Navbar>
        {/* Route */}
        <Routes>  
            <Route path='/' element={<Home />} /> {/* Define your Route with the correct path and element */}
            <Route path='/product' element={<Product />} /> {/* Define your Route with the correct path and element */}
            <Route path='/login' element={<Login />} /> {/* Define your Route with the correct path and element */}
            <Route path='/register' element={<Register />} /> {/* Define your Route with the correct path and element */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
