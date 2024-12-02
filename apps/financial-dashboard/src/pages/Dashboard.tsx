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
import useIsMobile from '../hooks/useIsMobile';

interface DashboardProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Dashboard: React.FC<DashboardProps> = ({ setTitle }) => {
  useEffect(() => {
    setTitle('Overview');
  }, [setTitle]);

  const isMobileView = useIsMobile()
  return (
    <div className="p-4 sm:p-10">
      <div className="flex flex-col lg:flex-row gap-6 pb-8">
        <div className="flex flex-col flex-[2]">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">
              My Cards
            </h3>
            <button
              className="hidden sm:block text-base text-[#343C6A] font-semibold"
              onClick={() => alert("Coming Soon")}
            >
              See All
            </button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {mockCards.map((card, index) => (
              <div key={index} className="w-full sm:w-[48%] lg:flex-1">
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
        <div className="flex flex-col flex-1">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">
              Recent Transactions
            </h3>
          </div>
          <div className="space-y-4 bg-white p-4 sm:p-6 text-base rounded-2xl sm:rounded-3xl h-auto sm:h-[250px]">
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
      <div className="flex flex-col lg:flex-row gap-6 pb-8">
        <div className="flex-[2]">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">
              Weekly Activity
            </h3>
          </div>
          <WeeklyActivityChart isMobileView={isMobileView}/>
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">
              Expense Statistics
            </h3>
          </div>
          <ExpenseStatisticsChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 pb-8">
        <div className="flex-1">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">
              Quick Transfer
            </h3>
          </div>
          <QuickTransfer isMobileView={isMobileView}/>
        </div>
        <div className="flex-[2]">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#343C6A]">
              Balance History
            </h3>
          </div>
          <BalanceHistoryChart isMobileView={isMobileView}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
