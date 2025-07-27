

import React from 'react';
import { FaUtensils, FaShoppingBag } from 'react-icons/fa';


const formatUSD = (amount) => `$${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;


const transactions = [
  {
    name: 'Central Burger',
    category: 'Cafe and Restaurant',
    amount: -189.36,
    icon: <FaUtensils className="text-gray-400" />,
    color: 'text-purple-500',
  },
  {
    name: 'Great Coffee',
    category: 'Cafe and Restaurant',
    amount: -189.36,
    icon: <FaUtensils className="text-gray-400" />,
    color: 'text-purple-500',
  },
  {
    name: 'Grocery Delivery',
    category: 'Food Delivery',
    amount: 350.0,
    icon: <FaShoppingBag className="text-gray-400" />,
    color: 'text-cyan-500',
  },
];

const TransactionHistory = () => {
  return (
    <div className="w-full mb-10">

      <h2 className="text-lg font-bold mb-4">Transaction history</h2>

     
      <div className="flex space-x-6 text-sm font-medium text-gray-500 border-b pb-2 mb-4">
        <span className="text-black border-b-2 border-black pb-1">All</span>
        <span>Income</span>
        <span>Expense</span>
      </div>

   
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              {tx.icon}
              <div>
                <p className="font-medium">{tx.name}</p>
                <p className="text-gray-400">{tx.category}</p>
              </div>
            </div>
            <p className={`font-bold ${tx.color}`}>
              {tx.amount > 0 ? '+' : '-'}{formatUSD(Math.abs(tx.amount))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
