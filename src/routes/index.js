// src/routes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Login from '../pages/login';
import Register from '../pages/register';
import Payment from '../pages/Payment';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> {/* Define your Route with the correct path and element */}
      <Route path='/detail' element={<Detail />} /> {/* Define your Route with the correct path and element */}
      <Route path='/login' element={<Login />} /> {/* Define your Route with the correct path and element */}
      <Route path='/register' element={<Register />} /> {/* Define your Route with the correct path and element */}
      <Route path='/payment' element={<Payment />} /> {/* Define your Route with the correct path and element */}
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default AppRoutes;