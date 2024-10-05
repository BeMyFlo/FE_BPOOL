import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function HourSelectorPopup({ selectedDate, onClose, onSelect }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4 text-center">Chọn giờ</h2>
        <div className="flex justify-center">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              onSelect(date);
              onClose();
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
            timeFormat="h:mm aa"
            className="border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

export default HourSelectorPopup;
