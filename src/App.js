// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes/index.js';
import Notification from './components/Notification.js';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Component */}
        <Navbar />
        <Notification />
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