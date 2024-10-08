import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

export default function AvatarDropdown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <button
        type="button"
        className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Toggle dashboard menu</span>
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar"
          className="h-10 w-10 rounded-full cursor-pointer object-cover"
        />
      </button>

      {menuOpen && (
        <div className="absolute right-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
          <div className="p-2">
            <Link
              to="/profile"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              My profile
            </Link>

            <Link
              to="/billing"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Billing summary
            </Link>

            <Link
              to="/team-settings"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Team settings
            </Link>
          </div>

          <div className="p-2">
            <button
              onClick={() => {
                dispatch(logout());
                localStorage.removeItem('authToken');
              }}
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
              role="menuitem"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
