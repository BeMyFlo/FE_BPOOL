import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
      const response = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        setAuthToken(token);
        navigate("/");
      } else {
        console.error("Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi", error);
    }
  };

  return (
    <div className="p-3 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">LOGIN</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg w-full"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-sky-800 p-4 rounded-lg text-cyan-50 font-semibold">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default Login;
