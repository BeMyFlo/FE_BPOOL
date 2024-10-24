import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { setNotification } from '../redux/notificationSlice';
import userApi from '../api/user/userApi';

function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('authToken', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await userApi.signin({ username: formData.username, password: formData.password });
      if (response.token) {
        const token = response.token;
        const user = response.user;
        setAuthToken(token);
        dispatch(setUser({ user, token }));

        // Thông báo thành công và chuyển hướng
        dispatch(setNotification({ message: "Đăng nhập thành công!", type: "success" }));
        navigate("/");
      } else {
        // Thông báo thất bại
        dispatch(setNotification({ message: "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!", type: "fail" }));
      }
    } catch (error) {
      dispatch(setNotification({ message: "Đã xảy ra lỗi khi đăng nhập!", type: "fail" }));
      console.error("Đã xảy ra lỗi", error);
    }
  };

  return (
    <div className="mt-44">
      <div className="p-3 h-[500px] w-[480px] mx-auto bg-white rounded-3xl shadow-md">
        <div className="flex justify-center mt-[-50px]">
          <div className="h-32 w-[360px] flex justify-center items-center bg-gradient-to-r from-black to-gray-800 rounded-3xl shadow-md">
            <h3 className="block antialiased tracking-normal font-sans text-3xl font-extrabold leading-snug text-white">Sign In</h3>
          </div>
        </div>
        <div className="flex justify-center w-full h-full mt-10">
          <div className="w-full h-full">
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
                  type="password"
                  placeholder="Password"
                  className="border p-3 rounded-lg w-3/4"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center">
                <div className="w-3/4 h-9 flex gap-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-5 w-5 rounded-3xl" />
                  </div>
                  <div className="flex items-center">
                    <p className="text-black">Remember me</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-black p-4 rounded-xl text-cyan-50 font-semibold w-3/4 shadow-md">
                  Đăng nhập
                </button>
              </div>
              <div className="flex justify-center gap-2">
                  <p>Don't have an account?</p>
                  <a href="/register" className="font-bold">Sign Up</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
