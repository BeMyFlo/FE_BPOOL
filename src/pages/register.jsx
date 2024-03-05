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
        <div className='p-3 max-w-2xl mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>REGISTER</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <input type='text' placeholder='Username' className='border p-3 rounded-lg w-full' id='username' onChange={handleChange}></input>
            <input type='text' placeholder='Email' className='border p-3 rounded-lg w-full' id='email' onChange={handleChange}></input>
            <input type='text' placeholder='Password' className='border p-3 rounded-lg w-full' id='password' onChange={handleChange}></input>
            <button className='bg-sky-800 p-4 rounded-lg text-cyan-50 font-semibold'>Đăng kí</button>
        </form>
        </div>
    )
}

