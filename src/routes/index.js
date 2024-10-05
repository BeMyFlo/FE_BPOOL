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
      <Route path='/bar' element={<Home />} />
      <Route path='/detail' element={<Detail />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/payment' element={<Payment />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default AppRoutes;