import React, { useState } from 'react';
import Slider from "../components/Slider";
import { MdPayments } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from './../service/axiosConfig.js';

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const { barId, tables, imageUrl, date, hour } = location.state || { barId: null, tables: [], imageUrl: null, date: null, hour: null };


    const handlePayment = () => {
        const paymentData = {
          barId,
          tableId: tables,
          date: date,
          hour: hour,
          discount: "6639fa4de4dcb4fdce39a0c7",
          price: 100000,
          payment_method: 1,
        };
    
        axios.post('booking/create', paymentData)
            .then(response => {
            console.log('Booking successful:', response.data);
            navigate('/booking-success');
            })
            .catch(error => {
            console.error('Error creating booking:', error);
            alert('Có lỗi xảy ra khi tạo booking.');
            });
    };

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };


    return (
        <div>
            <div className='mt-36 text-3xl font-bold font-sans'>
                <h1>Thông tin đặt bàn</h1>
            </div>
            <Slider img={imageUrl} /> 
            <div className='flex justify-center mt-10'>
                <div className='w-[850px] h-[180px] bg-gradient-to-r from-slate-950 to-gray-700 rounded-[40px] flex shadow-md'>
                    <div className='w-10/12 h-full  rounded-l-[40px] flex items-center justify-start px-5 cursor-pointer'>
                        <div className='h-3/4 w-3/4  flex flex-col items-start justify-center px-5 gap-4'>
                            <div className='text-xl text-white'>
                                <p>Ưu đãi</p>
                            </div>
                            <div className='font-bold text-xl text-white'>
                                <p>XT-2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-[1px] bg-gray-400"></div>
                    <div className='w-1/4 h-full rounded-r-[40px] flex justify-center items-center'>
                        <div className='w-3/4 h-3/4 rounded-full bg-slate-200 shadow-2xl cursor-pointer'>
                            <div className='flex justify-center items-center w-full h-full text-xl font-bold '>
                                <p>Chọn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <div className='w-[550px] h-[250px] bg-slate-50 shadow-md rounded-3xl flex justify-center items-center'>
                    <div className='h-[200px] w-[500px] flex items-center gap-10 justify-center px-10'>
                        <div className='flex flex-col gap-4'>
                            <MdPayments className='h-5 w-5 text-black'></MdPayments>
                            <MdPayments className='h-5 w-5 text-black'></MdPayments>
                            <MdPayments className='h-5 w-5 text-black'></MdPayments>

                        </div>
                        <div className='flex flex-col items-start gap-3'>
                            <p>Thanh toán tại chỗ</p>
                            <p>Momo</p>
                            <p>Chuyển khoản ngân hàng</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <input type='checkbox' className='h-5 w-5 rounded-full' key={`cash`} checked={selectedPaymentMethod === 'cash'} onChange={() => handlePaymentMethodChange('cash')}></input>
                            <input type='checkbox' className='h-5 w-5 rounded-full' key={`momo`} checked={selectedPaymentMethod === 'momo'} onChange={() => handlePaymentMethodChange('momo')}></input>
                            <input type='checkbox' className='h-5 w-5 rounded-full' key={`bank`} checked={selectedPaymentMethod === 'bank'} onChange={() => handlePaymentMethodChange('bank')}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handlePayment} className={`mt-20 flex justify-center`}>
                <div className="h-[40px] w-[150px] text-lg rounded-[10px] md:h-[78px] md:w-[298px] bg-black flex items-center justify-center md:rounded-[20px] md:text-4xl cursor-pointer text-white shadow-md">
                    <p>Đặt bàn</p>
                </div>
            </div>
        </div>
    );
  
}

export default Payment;
