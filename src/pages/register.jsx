import React, { useState } from 'react';


export default function Register() {
    const [formData, setFormData] = useState({
    });
  
    const handleChange = (e) => {
       setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  
      console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8000/api/user/register',
        {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data);
    }
    return (
        <div className="mt-44">
          <div className="p-3 h-[500px] w-[480px] mx-auto bg-white rounded-3xl shadow-md">
            <div className="flex justify-center mt-[-50px]">
              <div className="h-32 w-[360px] flex justify-center items-center bg-gradient-to-r from-black to-gray-800 rounded-3xl shadow-md">
                <h3 class="block antialiased tracking-normal font-sans text-3xl font-extrabold leading-snug text-white">Sign Up</h3>
              </div>
            </div>
            <div className="flex justify-center w-full h-full mt-10">
              <div className="w-full h-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                      Đăng kí
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

