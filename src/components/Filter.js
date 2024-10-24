import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import CitySelectorPopup from './CitySelectorPopup';
import DateSelectorPopup from './DateSelectorPopup';
import { format } from 'date-fns';

function Filter() {
  const CITY_HO_CHI_MINH = 'Hồ Chí Minh';

  const [showCityPopup, setShowCityPopup] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState(CITY_HO_CHI_MINH);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="flex justify-center mt-24 md:mt-36">
      <div className="bg-slate-50 w-7/8 h-16 border rounded-3xl shadow-lg flex items-center px-6 md:w-2/3">
        <div className="flex-1 flex items-center justify-between">
          <div className="text-center cursor-pointer" onClick={() => setShowCityPopup(true)}>
            <div className="font-semibold">Khu vực</div>
            <div className="text-gray-500 text-sm md:text-base">{selectedCity}</div>
          </div>
          <span className="border-r border-gray-400 h-8 mx-4"></span>
          <div className="text-center cursor-pointer" onClick={() => setShowDatePopup(true)}>
            <div className="font-semibold">Ngày</div>
            <div className="text-gray-500 text-sm md:text-base">{format(selectedDate, 'dd/MM/yyyy')}</div>
          </div>
          <span className="border-r border-gray-400 h-8 mx-4"></span>
          <div className="text-center">
            <div className="font-semibold">Giờ</div>
            <div className="text-gray-500 text-sm md:text-base">6:00 AM</div>
          </div>
        </div>
        <div className="ml-4">
          <button className="group bg-gradient-to-r from-black to-gray-800 rounded-full h-10 w-10 flex items-center justify-center hover:bg-yellow-700 shadow-md">
            <FaSearch className="text-white group-hover:text-white" />
          </button>
        </div>
      </div>
      {showCityPopup && (
        <CitySelectorPopup
          onClose={() => setShowCityPopup(false)}
          onSelect={(city) => setSelectedCity(city)}
        />
      )}
      {showDatePopup && (
        <DateSelectorPopup
          selectedDate={selectedDate}
          onClose={() => setShowDatePopup(false)}
          onSelect={(date) => setSelectedDate(date)}
        />
      )}
    </div>
  );
}

export default Filter;
