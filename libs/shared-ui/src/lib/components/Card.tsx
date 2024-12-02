import React from 'react';

interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  isDark?: boolean;
}

const Card: React.FC<CardProps> = ({ balance, cardHolder, validThru, cardNumber, isDark = false }) => {
  return (
    <div
      className={`p-6 rounded-xl flex flex-col justify-between h-[250px] ${
        isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs font-normal font-lato ">Balance</p>
          <h3 className="text-xl font-semibold">{balance}</h3>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600">💳</span>
        </div>
      </div>

      <div className="mt-4 w-3/4 flex items-center justify-between">
  <div>
    <p className="text-sm font-light">CARD HOLDER</p>
    <p className="font-medium">{cardHolder}</p>
  </div>
  <div>
    <p className="text-sm font-light">VALID THRU</p>
    <p className="font-medium">{validThru}</p>
  </div>
</div>

      <div className="mt-6 flex justify-between items-center">
        <p className="font-mono text-lg">{cardNumber}</p>
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
