import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNotification } from '../redux/notificationSlice';
import userApi from '../api/user/userApi';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await userApi.signup(formData);
            if (res) {
                dispatch(setNotification({ message: "Đăng ký thành công!", type: "success" }));
                navigate("/login");
            } else {
                dispatch(setNotification({ message: "Đăng ký thất bại. Vui lòng kiểm tra lại thông tin!", type: "fail" }));
            }
        } catch (error) {
            dispatch(setNotification({ message: "Đã xảy ra lỗi khi đăng ký!", type: "fail" }));
            console.error("Đã xảy ra lỗi", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
      <div className="relative mt-44">
        <div className="p-3 md:h-[500px] md:w-[480px] md:mx-auto bg-white md:rounded-3xl md:shadow-md">
            <div className="flex justify-center mt-[-50px]">
                <div className="h-32 w-[200px] md:w-[360px] flex justify-center items-center bg-gradient-to-r from-black to-gray-800 rounded-3xl shadow-md">
                    <h3 className="block antialiased tracking-normal font-sans text-3xl font-extrabold leading-snug text-white">Sign Up</h3>
                </div>
            </div>
            <div className="flex justify-center w-full h-full mt-10">
                <div className="w-full h-full">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
                                <div className="spinner"></div>
                            </div>
                        )}
                        <div className="flex justify-center">
                            <input
                                type="text"
                                placeholder="Username"
                                className="border p-3 rounded-lg w-3/4"
                                id="username"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-center">
                            <input
                                type="text"
                                placeholder="Email"
                                className="border p-3 rounded-lg w-3/4"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-center">
                            <input
                                type="password"
                                placeholder="Password"
                                className="border p-3 rounded-lg w-3/4"
                                id="password"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-black p-4 rounded-xl text-cyan-50 font-semibold w-3/4 shadow-md"
                                disabled={isLoading}
                            >
                                Đăng kí
                            </button>
                        </div>
                        <div className="flex justify-center gap-2">
                            <p>Already have an account?</p>
                            <a href="/login" className="font-bold">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
}
