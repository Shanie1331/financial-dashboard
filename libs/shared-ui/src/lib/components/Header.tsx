import React, { FC } from 'react';

const Header: FC<{title:string; isTitleVisible: boolean}> = ({title, isTitleVisible}) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md h-[100px]">
      {/* Left Section: Logo and Page Title */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        {isTitleVisible && <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
            <span className="text-white text-lg">✓</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Soar Task</span>
        </div>}
        {/* Page Title */}
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>

      {/* Right Section: Search and Icons */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="w-64 px-4 py-2 border border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute top-2/4 left-4 transform -translate-y-2/4 text-gray-400">
            🔍
          </span>
        </div>

        {/* Icons */}
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200">
          ⚙️
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200">
          🔔
        </button>
        {/* Profile Picture */}
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
