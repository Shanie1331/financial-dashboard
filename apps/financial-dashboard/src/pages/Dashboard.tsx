import React from 'react';
import {
  Card,
  Transaction,
  WeeklyActivityChart,
  ExpenseStatisticsChart,
  BalanceHistoryChart,
  QuickTransfer,
  Sidebar,
  Header,
} from '@financial-dashboard/shared-ui';
import { mockCards, mockTransactions } from '@financial-dashboard/shared-utils';

const Dashboard = () => {
  return (
        <div className="p-4 space-y-6">
          Cards Section
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">My Cards</h3>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => console.log('Navigating to all cards')}
              >
                See All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockCards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  balance={card.balance}
                  cardNumber={card.cardNumber}
                />
              ))}
            </div>
          </div>

          Recent Transactions
          <div>
            <h3 className="text-xl font-bold mb-2">Recent Transactions</h3>
            <div className="space-y-2">
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

          Weekly Activity & Expense Statistics
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <WeeklyActivityChart />
            <ExpenseStatisticsChart />
          </div>

          Quick Transfer & Balance History
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <QuickTransfer />
            <BalanceHistoryChart />
          </div>
        </div>
  );
};

export default Dashboard;
