import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '../components/slider.js';
import Filter from '../components/filter.js';
import ListBar from '../components/list-bar.js';

function Home() {
    return (
      <div className=''>
        <Filter></Filter>
        <ListBar></ListBar>
      </div>
    );
  
}

export default Home;
