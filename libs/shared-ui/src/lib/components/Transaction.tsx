import React from 'react';

interface TransactionProps {
  icon: React.ReactNode;
  description: string;
  date: string;
  amount: string;
  isPositive: boolean;
}

const Transaction: React.FC<TransactionProps> = ({
  icon,
  description,
  date,
  amount,
  isPositive,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full ">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{description}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p
        className={`font-semibold text-lg ${
          isPositive ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {isPositive ? '+' : '-'}
        {amount}
      </p>
    </div>
  );
};

export default Transaction;
