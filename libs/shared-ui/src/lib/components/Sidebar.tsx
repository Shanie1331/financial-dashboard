import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: '🏠', path: '/' },
    { name: 'Transactions', icon: '💸', path: '/transactions' },
    { name: 'Accounts', icon: '👤', path: '/accounts' },
    { name: 'Investments', icon: '📈', path: '/investments' },
    { name: 'Credit Cards', icon: '💳', path: '/credit-cards' },
    { name: 'Loans', icon: '🏦', path: '/loans' },
    { name: 'Services', icon: '🛠️', path: '/services' },
    { name: 'My Privileges', icon: '💡', path: '/privileges' },
    { name: 'Setting', icon: '⚙️', path: '/settings' },
  ];

  return (
    <div>
      <div className="lg:hidden flex items-center  h-[100px]  px-4 py-2 bg-white border-b">
        <button
          className="text-3xl text-gray-700 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-white border-r transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform lg:translate-x-0 z-50`}
      >
        <div className="flex items-center w-full h-[100px] px-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
              <span className="text-white text-xl">✓</span>
            </div>
            <span className="text-2xl font-bold text-[#343C6A]">Soar Task</span>
          </div>
        </div>

        <ul className="flex flex-col">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex p-4 rounded-md ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-gray-500 hover:text-black '
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                
                <div
                  className={`absolute left-0 top-0 h-full w-1.5 rounded-r-lg ${
                    location.pathname === item.path ? 'bg-black' : ''
                  }`}
                ></div>

                <span className="text-2xl ml-8">{item.icon}</span>
                <span className="font-medium ml-4">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
