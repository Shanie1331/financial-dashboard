import React, { useEffect } from 'react';
import {
  Card,
  Transaction,
  WeeklyActivityChart,
  ExpenseStatisticsChart,
  BalanceHistoryChart,
  QuickTransfer,
} from '@financial-dashboard/shared-ui';
import { mockCards, mockTransactions } from '@financial-dashboard/shared-utils';

interface DashboardProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Dashboard: React.FC<DashboardProps> = ({ setTitle }) => {
  useEffect(() => {
    setTitle('Overview');
  }, [setTitle]);

  // return null

  return (
    <div className=" p-10">
      <div className={'gap-6 pb-8'} style={{ display: 'flex', flex: 1 }}>
        <div style={{ display: 'flex', flex: 7, flexDirection: 'column' }}>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#343C6A]">My Cards</h3>
            <button
              className="text-base text-[#343C6A] font-semibold"
              onClick={() => console.log('Navigating to all cards')}
            >
              See All
            </button>
          </div>
          <div className="flex justify-between flex-wrap gap-8">
            {mockCards.map((card, index) => (
              <div key={index} className="flex-1">
                <Card
                  balance={card.balance}
                  cardHolder={card.cardHolder}
                  validThru={card.validThru}
                  cardNumber={card.cardNumber}
                  isDark={card.isDark}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flex: 3, flexDirection: 'column' }}>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#343C6A]">
              Recent Transactions
            </h3>
          </div>
          <div className="space-y-8 bg-white p-6 text-base rounded-3xl h-[250px]">
            {mockTransactions.map((transaction, index) => (
              <Transaction
                key={index}
                icon={transaction.icon}
                description={transaction.description}
                date={transaction.date}
                amount={transaction.amount}
                isPositive={transaction.isPositive}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={'gap-6 pb-8'} style={{ display: 'flex', flex: 1 }}>
        <div style={{ display: 'flex', flex: 7, flexDirection: 'column' }}>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#343C6A]">
              Weekly Activity
            </h3>
          </div>
          <WeeklyActivityChart />
        </div>
        <div style={{ display: 'flex', flex: 3, flexDirection: 'column' }}>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#343C6A]">
              Expense Statistics
            </h3>
          </div>
          <ExpenseStatisticsChart />
        </div>
      </div>

      <div className={'gap-6 pb-8'} style={{ display: 'flex', flex: 1 }}>
        <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#343C6A]">
              Quick Transfer
            </h3>
          </div>
          <QuickTransfer />
        </div>
        <div style={{ display: 'flex', flex: 6, flexDirection: 'column' }}>
          <div className="flex justify-between mb-4">
            <h3 className="text-2xl font-semibold text-[#343C6A]">
              Balance History
            </h3>
          </div>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
