import React from 'react';

interface CardProps {
  title: string;
  balance: string;
  cardNumber: string;
}

const Card: React.FC<CardProps> = ({ title, balance, cardNumber }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">Balance: {balance}</p>
      <p className="text-sm text-gray-500">Card Number: {cardNumber}</p>
    </div>
  );
};

export default Card;
