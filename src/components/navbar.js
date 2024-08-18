import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '.././assets/img/logo-2.jpg';
import { MdOutlineMenu } from "react-icons/md";
import { AuthContext } from '../context/AuthContext';
function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuth, setAuth } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto h-20">
        <div className="p-4 flex justify-between items-center h-full">
          <div>
            <a href="/?type=1">
              <img className="h-7 md:h-[5rem]" src={Logo} alt="Mô tả hình ảnh" />
            </a>
          </div>
          <div className="hidden md:flex h-full items-center gap-12">
            <Link to="/?type=1" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110">
              <div className={`${location.search === '?type=1' ? 'underline font-bold hover:text-gray-800' : 'font-bold hover:text-gray-800'}`}>BIDA LỖ</div>
            </Link>
            <Link to="/?type=2" className="hover:text-primaryColor font-semibold font-custom hover:-translate-y-1 hover:scale-110">
              <div className={`${location.search === '?type=2' ? 'underline font-bold hover:text-gray-800' : 'font-bold hover:text-gray-800'}`}>BIDA 3 BĂNG</div>
            </Link>
          </div>
          {/* Check if the user is logged in */}
          <div className="hidden md:flex items-center gap-5">
            {isAuth ? (
              <div className="relative">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                    <button onClick={() => {
                      setAuth(false);
                      localStorage.removeItem('authToken');
                    }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
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
