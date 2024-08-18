import React, { useState, useEffect } from 'react';
import axios from './../service/axiosConfig.js';

function CitySelectorPopup({ onClose, onSelect }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('/city');
        console.log(response);
        if (response.data && Array.isArray(response.data.data)) {
          setCities(response.data.data);
        } else {
          throw new Error('Dữ liệu không hợp lệ');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error.message}</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Chọn Khu Vực</h2>
        <ul>
          {cities.map((city) => (
            <li
              key={city.id}
              className="cursor-pointer py-2 px-4 hover:bg-gray-200"
              onClick={() => {
                onSelect(city.name);
                onClose();
              }}
            >
              {city.name}
            </li>
          ))}
        </ul>
        <button
          className="mt-4 bg-black text-white py-2 px-4 rounded shadow-md"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

export default CitySelectorPopup;
