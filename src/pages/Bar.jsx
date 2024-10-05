import React, { useState } from 'react';
import CitySelectorPopup from '../components/CitySelectorPopup.js';
import Filter from '../components/filter.js';
import ListBar from '../components/list-bar.js';
import { CiFilter } from "react-icons/ci";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Bar() {
  const CITY_HO_CHI_MINH = 'Hồ Chí Minh';

  const [showCityPopup, setShowCityPopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className=''>
      {/* <Filter></Filter> */}
      <div className='flex justify-center'>
        <div className='md:mt-10 h-14 w-4/5 flex items-center'>
          <div className='ml-20 w-40 h-full rounded-[15px] flex items-center justify-center border-3 cursor-pointer hover:bg-gray-50' onClick={() => setShowCityPopup(true)}>
            <div className='flex justify-center items-center gap-2 mr-2'>
              <CiFilter className='text-2xl' />
              <p className='black text-xl'>Lọc</p>
            </div>
          </div>
        </div>
      </div>
      <ListBar selectedCity={selectedCity} />
      {showCityPopup && (
        <CitySelectorPopup
          onClose={() => setShowCityPopup(false)}
          onSelect={(city) => setSelectedCity(city)}
        />
      )}
    </div>
  );
}

export default Bar;