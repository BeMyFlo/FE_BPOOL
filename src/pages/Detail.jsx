import React, { useState, useEffect } from 'react';
import Slider from "../components/slider";
import { useParams, useNavigate } from 'react-router-dom'; // Thay đổi useHistory thành useNavigate
import DateSelectorPopup from '../components/DateSelectorPopup';
import HourSelectorPopup from '../components/HourSelectorPopup';
import { format } from 'date-fns';
import axios from './../service/axiosConfig.js';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [colors, setColors] = useState([]);
  const [selected, setSelected] = useState('booking');
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [showHourPopup, setShowHourPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedTables, setSelectedTables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/bar/${id}`);

        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          throw new Error('Dữ liệu không hợp lệ');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (data && data.tables) {
      // Tạo màu sắc cho mỗi table
      setColors(Array(data.tables.length).fill('bg-green-600'));
    }
  }, [data]);

  const handleClick = (index) => {
    const tableId = data.tables[index];

    const newColors = colors.map((color, i) =>
      i === index ? (color === 'bg-green-600' ? 'bg-red-600' : 'bg-green-600') : color
    );

    setColors(newColors);

    if (selectedTables.includes(tableId)) {
      setSelectedTables(selectedTables.filter((id) => id !== tableId));
    } else {
      setSelectedTables([...selectedTables, tableId]);
    }
  };

  // Hàm xử lý khi bấm "Đặt bàn"
  const handleBooking = () => {
    if (selectedTables.length > 0) {
      const imageUrl = data.imageUrl;
      console.log(data.imageUrl);
      navigate('/payment', { state: { barId: id, tables: selectedTables, imageUrl: imageUrl, date: selectedDate, hour: selectedHour } });
    } else {
      alert('Vui lòng chọn ít nhất một bàn trước khi đặt.');
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Lỗi: {error.message}</div>;
  }

  return (
    <div className="mt-20">
      {/* Hình */}
      <Slider img={data.imageUrl} />
      {/* Tên quán */}
      <div>
        <h1 className="text-3xl md:text-6xl text-center font-bold text-black md:mt-10">{data.name}</h1>
      </div>
      {/* Menu con */}
      <div className="flex flex-row justify-center gap-10 mt-6">
        <div
          className={`hover:text-grayText ${selected === 'booking' ? 'bg-primaryGray rounded-2xl shadow-xl cursor-pointer' : ''}`}
          onClick={() => setSelected('booking')}
        >
          <div className="h-[46px] w-[116px] flex items-center justify-center ">
            <p className={`font-bold font-inter text-2xl cursor-pointer ${selected === 'booking' ? 'text-grayText' : ''}`}>Đặt bàn</p>
          </div>
        </div>
        <div
          className={`hover:text-grayText ${selected === 'describe' ? 'bg-primaryGray rounded-2xl shadow-xl' : ''}`}
          onClick={() => setSelected('describe')}
        >
          <div className="h-[46px] w-[116px] flex items-center justify-center ">
            <p className={`font-bold font-inter text-2xl cursor-pointer ${selected === 'describe' ? 'text-grayText' : ''}`}>Mô tả</p>
          </div>
        </div>
      </div>
      {/* Thông tin chi tiết */}
      <div className={`mt-6 mx-8 content-center ${selected === 'booking' ? 'hidden' : ''}`}>
        <p>{data.content}</p>
      </div>
      <div className={`flex justify-center mt-6 ${selected === 'describe' ? 'hidden' : ''}`}>
        <div className="h-[60px] w-[300px] md:h-[95px] md:w-[560px] bg-lightYellow rounded-[40px] flex justify-center items-center shadow-xl">
          <div className="p-2 bg-lightYellow h-[60px] w-[300px] md:h-[90px] md:w-[530px] flex gap-1 rounded-[40px]">
            <div className="bg-lightYellow h-full w-1/2 rounded-xl flex items-center" onClick={() => setShowDatePopup(true)}>
              <div className="flex flex-col items-start p-2 cursor-pointer">
                <p className="font-bold">Ngày</p>
                <p className="">{format(selectedDate, 'dd/MM/yyyy')}</p>
              </div>
            </div>
            <div className="h-full w-[1px] bg-gray-400"></div>
            <div className="bg-lightYellow h-full w-1/2 rounded-xl flex items-center" onClick={() => setShowHourPopup(true)}>
              <div className="flex flex-col items-start p-2">
                <p className="font-bold">Giờ</p>
                <p className="">{selectedHour ? selectedHour.toLocaleTimeString() : 'Chưa chọn giờ'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Các ô chọn bàn */}
      <div className={`flex flex-col h-full w-full mt-10 justify-center md:h-full md:w-full ${selected === 'describe' ? 'hidden' : ''}`}>
        <div className="grid grid-cols-2 gap-2 px-5 mr-4 md:flex md:flex-row justify-center items-center md:gap-5 md:p-2">
          <div className="flex items-center md:mb-2 justify-center md:justify-start">
            <div className="h-4 w-4 bg-blue-500 rounded-full mr-2"></div>
            <p>Bida lỗ</p>
          </div>
          <div className="flex items-center md:mb-2 justify-center md:justify-start">
            <div className="h-4 w-4 bg-green-600 rounded-full mr-2"></div>
            <p>Bida 3 băng</p>
          </div>
          <div className="flex items-center md:mb-2 justify-center md:justify-start">
            <div className="h-4 w-4 bg-gray-300 rounded-full mr-2"></div>
            <p>Hết bàn</p>
          </div>
          <div className="flex items-center md:mb-2 justify-center md:justify-start">
            <div className="h-4 w-4 bg-red-600 rounded-full mr-2"></div>
            <p>Đang chọn</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-2 md:gap-3 mt-6 justify-center w-fit">
            {colors.map((color, index) => (
              <div key={data.tables[index]} className="flex justify-center"> {/* Sử dụng id làm key */}
                <div
                  className={`h-10 w-10 md:h-16 md:w-16 ${color} rounded-xl shadow-lg cursor-pointer hover:${color === 'bg-green-600' ? 'bg-yellow-500' : 'bg-red-500'}`}
                  onClick={() => handleClick(index)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`mt-10 flex justify-center ${selected === 'describe' ? 'hidden' : ''}`}>
        <div
          className="h-[40px] w-[150px] text-lg rounded-[10px] md:h-[78px] md:w-[298px] shadow-xl bg-gradient-to-r from-black to-gray-700 flex items-center justify-center md:rounded-[20px] md:text-4xl cursor-pointer text-white"
          onClick={handleBooking} // Gọi hàm khi bấm nút
        >
          <p>Đặt bàn</p>
        </div>
      </div>
      {showDatePopup && (
        <DateSelectorPopup
          selectedDate={selectedDate}
          onClose={() => setShowDatePopup(false)}
          onSelect={(date) => setSelectedDate(date)}
        />
      )}
      {showHourPopup && (
        <HourSelectorPopup
          selectedHour={selectedHour}
          onClose={() => setShowHourPopup(false)}
          onSelect={(hour) => setSelectedHour(hour)}
        />
      )}
    </div>
  );
}

export default Detail;
