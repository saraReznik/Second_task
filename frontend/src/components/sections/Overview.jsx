import React, { useEffect, useState } from 'react';
import axios from '../../services/axiosInstance';

const formatUSD = (amount) =>
  `$${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 0 })}`;

const cardsConfig = [
  {
    title: 'Payments',
    apiValue: '/api/Payment/sum',
    apiChange: '/api/Payment/percentage-change',
    format: 'usd',
    colorUp: 'bg-blue-500',
    colorDown: 'bg-red-500',
  },
  {
    title: 'Invoices',
    apiValue: '/api/Invoice/num', 
    apiChange: '/api/Invoice/percentage-change',
    format: 'number',
    colorUp: 'bg-purple-500',
    colorDown: 'bg-red-500',
  },
];

const Overview = () => {
  const [cardData, setCardData] = useState(
    cardsConfig.map(() => ({ value: 0, change: null }))
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          cardsConfig.map(async (card) => {
            const valueRes = await axios.get(card.apiValue);

            let change = null;
            if (card.apiChange) {
              const changeRes = await axios.get(card.apiChange);
              change = changeRes.data;
            }

            return {
              value: valueRes.data,
              change: change,
            };
          })
        );
        setCardData(results);
      } catch (err) {
        console.error('API fetch error:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-black mb-3">Overview</h2>
      <div className="flex gap-4 flex-wrap">
        {cardsConfig.map((card, index) => {
          const value =
            card.format === 'usd'
              ? formatUSD(cardData[index].value)
              : cardData[index].value;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow px-5 py-4 w-[300px] h-[100px] flex items-start justify-between"
            >
              <div className="leading-tight">
                <p className="text-sm font-semibold text-black mb-1">{card.title}</p>
                <p className="text-3xl font-extrabold text-black">{value}</p>
              </div>
              {cardData[index].change !== null && (
                <span
                  className={`
                    ${cardData[index].change >= 0 ? card.colorUp : card.colorDown}
                    text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1
                  `}
                >
                  <span className="text-xs">
                    {cardData[index].change >= 0 ? '↑' : '↓'}
                  </span>
                  {`${cardData[index].change > 0 ? '+' : ''}${cardData[index].change}%`}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
