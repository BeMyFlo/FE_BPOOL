import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '.././assets/img/logo.png';
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto h-20">
        <div className="p-4 flex justify-between items-center h-full">
          <div>
            <img className="h-7 md:h-12" src={Logo} alt="Mô tả hình ảnh" />
          </div>
          <div className="hidden md:flex h-full items-center gap-12">
            <Link to="/?type=1" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110">
              <div className={`${location.search === '?type=1' ? 'text-yellow-600 font-bold hover:text-yellow-700' : 'font-bold hover:text-yellow-700'}`}>BIDA LỖ</div>
            </Link>
            <Link to="/?type=2" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110">
              <div className={`${location.search === '?type=2' ? 'text-yellow-600 font-bold hover:text-yellow-700' : 'font-bold hover:text-yellow-700'}`}>BIDA 3 BĂNG</div>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <Link to="/login" className="hover:underline font-normal">
              <div>Login</div>
            </Link>
            <Link to="/register" className="hover:underline font-normal">
              <div>Register</div>
            </Link>
          </div>
          <div className="md:hidden rounded-full shadow-2xl bg-slate-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <MdOutlineMenu className="w-10 h-10 p-2"/>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="flex justify-center items-center mt-2">
            <div className="bg-slate-50 flex flex-col justify-evenly md:hidden space-y-2 h-36 w-5/6 rounded-md">
              <Link to="/?type=1" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110 p-3">
                <div className={`${location.search === '?type=1' ? 'text-yellow-600 font-bold hover:text-yellow-700' : 'font-bold hover:text-yellow-700'}`}>BIDA LỖ</div>
              </Link>
              <div className="border-b border-gray-400"></div>
              <Link to="/?type=2" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110 p-3">
                <div className={`${location.search === '?type=2' ? 'text-yellow-600 font-bold hover:text-yellow-700' : 'font-bold hover:text-yellow-700'}`}>BIDA 3 BĂNG</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
