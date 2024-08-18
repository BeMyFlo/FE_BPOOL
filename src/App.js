// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Routes from './routes/index'; // Import the routes

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Component */}
        <Navbar />
        {/* Route */}
        <div className='my-20'>
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;