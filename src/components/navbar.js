import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/img/logo-2.jpg';
import { MdOutlineMenu } from "react-icons/md";
import { AuthContext } from '../context/AuthContext';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import AvatarDropdown from './AvatarDropdown';

function Navbar() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClick = (name) => {
    if (selectedMenu === name) {
      setSelectedMenu(null);
    }
  };

  // Lấy token và trạng thái từ Redux store
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto h-20">
        <div className="p-4 flex justify-between items-center h-full">
          <div>
            <a href="/">
              <img className="h-7 md:h-[5rem]" src={Logo} alt="Mô tả hình ảnh" />
            </a>
          </div>
          <div className="hidden md:flex h-full items-center gap-16">
            <Link to="/" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110">
              <div className={`${location.search === '?type=1' ? 'underline font-bold hover:text-gray-800' : 'font-bold hover:text-gray-800'}`} onClick={(e) => handleMenuClick('TRANG CHỦ')}>
                TRANG CHỦ
              </div>
            </Link>
            {/* Dropdown for ĐẶT BÀN */}
            <div className="relative">
              {/* Button to toggle menu with arrow */}
              <div onClick={toggleMenu} className="cursor-pointer font-bold hover:text-gray-800 flex items-center px-4 py-2 rounded-md">
                ĐẶT BÀN
                <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg z-50 w-40 border border-gray-200">
                  <Link to="/bar/?type=1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <div className={`${location.search === '?type=1' ? 'underline font-bold' : 'font-bold'}`}>
                      BIDA LỖ
                    </div>
                  </Link>
                  <Link to="/bar/?type=2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <div className={`${location.search === '?type=2' ? 'underline font-bold' : 'font-bold'}`}>
                      BIDA 3 BĂNG
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* Check if the user is logged in */}
          <div className="hidden md:flex items-center gap-5">
            {isAuthenticated ? (
                <AvatarDropdown />
            ) : (
              // Show Login and Register when not logged in
              <>
                <Link to="/login" className="hover:underline font-normal">
                  <div className="h-10 w-20 bg-gray flex justify-center items-center rounded-xl shadow-md bg-gradient-to-r from-black to-gray-700">
                    <div className="text-white">Login</div>
                  </div>
                </Link>
                <Link to="/register" className="hover:underline font-normal">
                  <div>Register</div>
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden rounded-full shadow-2xl bg-slate-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <MdOutlineMenu className="w-10 h-10 p-2"/>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="fixed bottom-0 w-full h-96">
            <div className="bg-red-300 flex flex-col justify-evenly md:hidden space-y-2 h-full w-full rounded-t-[30px]">
              <Link to="/?type=1" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110 p-3">
                <div className={`${location.search === '?type=1' ? 'text-yellow-600 font-bold hover:text-yellow-700' : 'font-bold hover:text-yellow-700'}`}>BIDA LỖ</div>
              </Link>
              <Link to="/?type=2" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110 p-3">
                <div className={`${location.search === '?type=2' ? 'text-yellow-600 font-bold hover:text-yellow-700' : 'font-bold hover:text-yellow-700'}`}>BIDA 3 BĂNG</div>
              </Link>
                <Link to="/login" className="hover:underline font-normal p-3">
                  <div>Login</div>
                </Link>
              <Link to="/register" className="hover:underline font-normal p-3">
                <div>Register</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
