// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/LoginContext';
import { UserIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const { isLogin } = useLogin();

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleNavbar = () => setNavbarOpen(!isNavbarOpen);
  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-gray-800 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://via.placeholder.com/100"
            alt="Logo"
            className="h-8"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Sport<span className=" font-bold">Nation</span>
          </span>
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavbarOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="text-white flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-inherit md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-inherit rounded hover:bg-gray-100 hover:text-gray-950 md:hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:-translate-y-1 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block py-2 px-3 text-inherit rounded hover:bg-gray-100 hover:text-gray-950 md:hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:-translate-y-1 md:p-0"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 text-inherit rounded hover:bg-gray-100 hover:text-gray-950 md:hover:text-gray-50 md:hover:bg-transparent md:border-0 md:hover:-translate-y-1 md:p-0"
              >
                Products
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-inherit rounded text-gray-50 hover:text-gray-950 md:hover:text-inherit hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <UserIcon className="w-5 h-5 md:m-auto hover:scale-125" />
              </button>
              {/* <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } z-10 md:absolute font-normal mx-auto bg-white divide-y divide-gray-100 rounded-lg shadow md:w-44 dark:bg-gray-700 dark:divide-gray-600`}
              ></div> */}
              <div
                className={`${
                  isDropdownOpen ? 'block md:mt-5' : 'hidden'
                } relative md:absolute right-0 z-10 font-normal divide-y rounded-lg shadow-none md:shadow w-44 bg-inherit md:bg-gray-700 divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/earnings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                </ul>
                <div className="py-1">
                  {isLogin ? (
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Log out
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
