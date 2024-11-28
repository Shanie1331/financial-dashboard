import React from 'react';

interface TransactionProps {
  icon: React.ReactNode;
  description: string;
  date: string;
  amount: string;
  isPositive: boolean;
}

const Transaction: React.FC<TransactionProps> = ({ icon, description, date, amount, isPositive }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center space-x-4">
        <div className="text-xl">{icon}</div>
        <div>
          <h4 className="font-medium">{description}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className={`font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '+' : '-'}{amount}
      </p>
    </div>
  );
};

export default Transaction;
