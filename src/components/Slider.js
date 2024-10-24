import React from 'react';

function Slider({ img }) {  // Nhận props img
  return (
    <div className='flex justify-center'>
      <img 
        className='h-5/6 w-5/6 md:h-[700px] md:w-[1175px] rounded-3xl md:mt-14 p-3' 
        src={img} // Sử dụng props img
        alt='Image not available' 
      />
    </div>
  );
}

export default Slider;
