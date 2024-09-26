import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo (2).png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { LuToggleRight } from "react-icons/lu";
import { RiToggleFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
  const [theme, setTheme] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme) {
      element.classList.remove("light");
      element.classList.add("dark");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-50">
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <a href='#' className='flex justify-center items-center gap-2'>
            <div>
              <img src={logo} className='w-10' />
            </div>
            <div className='font-bold text-xl'>Shopspy</div>
          </a>

          <div className='flex justify-between items-center gap-4'>
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button
              onClick={() => alert("hello")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">Order</span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <div className='flex justify-center items-center py-1 px-4 bg-gradient-to-t from-primary to-secondary rounded-full cursor-pointer'>
              {theme ? (
                <RiToggleFill className='text-2xl text-white' onClick={() => setTheme(false)} />
              ) : (
                <LuToggleRight className='text-2xl text-white' onClick={() => setTheme(true)} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center gap-10'>
        <ul className='sm:flex justify-center items-center flex-row gap-10 hidden'>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Men Wear</li></a>
          <a href="#"><li>Top Rated</li></a>
          <a href="#"><li>Kid Wear</li></a>
          <a href="#"><li>Electronics</li></a>
        </ul>

        {/* Dropdown Section */}
        <div className='relative sm:flex hidden flex-row justify-center items-center cursor-pointer group'>
          <a href='#' className='flex items-center'>Trending items</a>
          <IoMdArrowDropdown className='transition-transform duration-200 group-hover:rotate-180' />

          <div className="absolute z-10 hidden group-hover:block group-focus-within:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-8 left-0">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Boxers</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lady shoot</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earrings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shoes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
