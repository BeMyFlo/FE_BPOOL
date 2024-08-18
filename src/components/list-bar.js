import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useFetchData } from '../hooks/useEffectData';

const ITEMS_PER_PAGE = 9;

//Các loại bàn
const TYPE_POOL = 1;
const TYPE_CAROM = 2;

function formatPrice(price) {
  if (price >= 1000) {
    return (price / 1000).toFixed(0) + 'K';
  }
  return price;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ListBar() {
  const query = useQuery();
  const type = query.get('type') || TYPE_POOL;
  const { data, loading, error, setData } = useFetchData(`/bar/?type=${type}`, [type]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error.message}</div>;
  }
  
  const toggleLike = (id) => {
    setData(prevData =>
      prevData.map(item =>
        item._id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div className='flex justify-center'>
      <div className='mt-5 md:mt-20 px-3 md:px-20 w-4/5'>
        <div className='flex flex-wrap justify-center md:justify-start w-full gap-x-3 gap-y-3'>
        {selectedItems.map((item) => (
          <div
            key={item._id}
            className='bg-white rounded-lg shadow-md overflow-hidden'
            style={{ width: '320px' }}
          >
            <Link to={`/detail/${item._id}`}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className='w-full h-72 object-cover shadow-lg'
              />
            </Link>
            <div className='p-4 flex flex-col items-start'>
              <Link to={`/detail/${item._id}`}>
                <h3 className='font-bold text-lg text-left'>{item.name}</h3>
              </Link>
              <div className='text-gray-500 text-left'>
                Khoảng cách: {item.distance} 10 km
              </div>
              <div className='text-gray-500 flex items-center text-left'>
                Đánh giá: {item.rating} 4.5/5
              </div>
              <p className='text-gray-500 text-left'>
                Địa chỉ: {item.address} Nguyễn Văn Đậu, P11, Q. Bình Thạnh
              </p>
              <div className='flex w-full justify-between'>
                <p className='text-red-500 font-bold text-left'>
                  Price: {formatPrice(item.price)} / h
                </p>
                <button
                  onClick={() => toggleLike(item._id)}
                  className='ml-1 mt-3 text-red-500'
                >
                  {item.liked ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className='flex justify-center mt-8'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleClick(index + 1)}
              className={`mx-1 px-3 py-1 border rounded shadow-md ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-blue-500'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListBar;
