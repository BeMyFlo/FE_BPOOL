import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useFetchData } from '../hooks/useEffectData';
import { formatPrice } from '../utils/helper';
import Spinner from '../components/spinner';

const ITEMS_PER_PAGE = 9;

// Các loại bàn
const TYPE_POOL = 1;
const TYPE_CAROM = 2;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ListBar({ selectedCity }) {
  const query = useQuery();
  const type = query.get('type') || TYPE_POOL;

  //Xử lí việc like quán
  const [dataLike, setDataLike] = useState([]);

  // Lấy danh sách quán 
  const apiURL = selectedCity ? `/bar/?type=${type}&city=${selectedCity._id}` : `/bar/?type=${type}`;
  const { data, loading, error, setData } = useFetchData(apiURL, [type, selectedCity]);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setDataLike(selectedItems.map(item => ({ ...item, liked: item.liked || false })));
  }, [data]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Spinner />;
  }

  const toggleLike = (id) => {
    setDataLike(prevData =>
      prevData.map(item =>
        item._id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div className='flex justify-center'>
      <div className='mt-5 md:mt-8 px-3 md:px-20 w-4/5'>
        <div className='flex flex-wrap justify-center md:justify-start w-full gap-x-3 gap-y-3'>
          {dataLike.map((item) => (
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
        <div className="flex justify-center mt-8">
          <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
              <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => handleClick(index + 1)}
                  className={`block size-8 rounded border text-center leading-8 ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-900 border-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ListBar;
