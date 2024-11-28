import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '🏠', active: true },
    { name: 'Transactions', icon: '💸', active: false },
    { name: 'Accounts', icon: '👤', active: false },
    { name: 'Investments', icon: '📈', active: false },
    { name: 'Credit Cards', icon: '💳', active: false },
    { name: 'Loans', icon: '🏦', active: false },
    { name: 'Services', icon: '🛠️', active: false },
    { name: 'My Privileges', icon: '💡', active: false },
    { name: 'Setting', icon: '⚙️', active: false },
  ];

  return (
    <div className="items-center justify-between bg-white shadow-md flex flex-col">
      <div className="flex items-center w-full h-[100px]">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
            <span className="text-white text-lg">✓</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Soar Task</span>
        </div>
      </div>
      <ul className="flex w-full flex-col">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex p-2 rounded-md cursor-pointer  ${
                item.active ? 'text-black' : 'text-gray-400 hover:text-black '
              }`}
            >
                {item.active && <div className="w-[5px] bg-black rounded-r-lg" ></div>}
              <span className="text-xl p-2">{item.icon}</span>
              <span className="text-base font-medium p-2">{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
