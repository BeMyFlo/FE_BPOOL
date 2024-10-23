// src/routes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Bar from '../pages/bar';
import Detail from '../pages/detail';
import Login from '../pages/login';
import Register from '../pages/register';
import Payment from '../pages/payment';
import Home from '../pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/bar' element={<Bar />} /> {/* Define your Route with the correct path and element */}
      <Route path='/detail' element={<Detail />} /> {/* Define your Route with the correct path and element */}
      <Route path='/login' element={<Login />} /> {/* Define your Route with the correct path and element */}
      <Route path='/register' element={<Register />} /> {/* Define your Route with the correct path and element */}
      <Route path='/payment' element={<Payment />} /> {/* Define your Route with the correct path and element */}
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;