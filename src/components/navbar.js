import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/img/logo-2.jpg';
import { MdOutlineMenu } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import AvatarDropdown from './AvatarDropdown';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Lấy trạng thái từ Redux
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Toggle cho menu di động
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto h-20">
        <div className="p-4 flex justify-between items-center h-full">
          <div>
            <a href="/">
              <img className="h-16 md:h-[5rem]" src={Logo} alt="Logo" />
            </a>
          </div>

          {/* Menu chính cho Web */}
          <div className="hidden md:flex h-full items-center gap-16">
            <Link to="/" className="hover:text-primaryColor font-semibold hover:-translate-y-1 hover:scale-110">
              <div className={`${location.pathname === '/' ? 'underline font-bold' : 'font-bold'} hover:text-gray-800`}>
                TRANG CHỦ
              </div>
            </Link>
            {/* Dropdown cho Đặt Bàn */}
            <div className="relative">
              <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="cursor-pointer font-bold hover:text-gray-800 flex items-center px-4 py-2 rounded-md">
                ĐẶT BÀN
                <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg z-50 w-40 border border-gray-200">
                  <Link to="/bar/?type=1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Bida Lỗ
                  </Link>
                  <Link to="/bar/?type=2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Bida 3 Băng
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Kiểm tra trạng thái đăng nhập */}
          <div className="hidden md:flex items-center gap-5">
            {isAuthenticated ? (
              <AvatarDropdown />
            ) : (
              <>
                <Link to="/login" className="hover:underline font-normal">
                  <div className="h-10 w-20 bg-gray flex justify-center items-center rounded-xl shadow-md bg-gradient-to-r from-black to-gray-700">
                    <div className="text-white">Login</div>
                  </div>
                </Link>
                <Link to="/register" className="hover:underline font-normal">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-2xl p-2">
              <MdOutlineMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dọc */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-25 flex">
          <div className="w-64 bg-white h-full shadow-md">
            <div className="px-4 py-6">
              <div>
                <a href="/">
                  <img className="h-16 md:h-[5rem]" src={Logo} alt="Logo" />
                </a>
              </div>
              <ul className="mt-6 space-y-1">
                <li>
                  <Link 
                    to="/" 
                    className={`block rounded-lg px-4 py-2 text-sm font-medium ${location.pathname === '/' ? 'text-gray-700 bg-gray-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
                  >
                    TRANG CHỦ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/bar/?type=1" 
                    className={`block rounded-lg px-4 py-2 text-sm font-medium ${location.pathname === "/bar/" && location.search === "?type=1" ? 'text-gray-700 bg-gray-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
                  >
                    Bida Lỗ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/bar/?type=2" 
                    className={`block rounded-lg px-4 py-2 text-sm font-medium ${location.pathname === "/bar/" && location.search === "?type=2" ? 'text-gray-700 bg-gray-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
                  >
                    Bida 3 Băng
                  </Link>
                </li>
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() => dispatch(logout())}
                      className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-red-700 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link 
                        to="/login" 
                        className={`block rounded-lg px-4 py-2 text-sm font-medium ${location.pathname === '/login' ? 'text-gray-700 bg-gray-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/register" 
                        className={`block rounded-lg px-4 py-2 text-sm font-medium ${location.pathname === '/register' ? 'text-gray-700 bg-gray-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="flex-1" onClick={toggleMobileMenu} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
