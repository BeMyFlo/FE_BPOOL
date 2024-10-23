import React from 'react';
import { useFetchData } from '../hooks/useEffectData';

function CitySelectorPopup({ onClose, onSelect }) {
  const { data, loading, error, setData } = useFetchData(`/city`);

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
          {data.map((city) => (
            <li
              key={city.id}
              className="cursor-pointer py-2 px-4 hover:bg-gray-200"
              onClick={() => {
                onSelect(city);
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
