import React from "react";
import { Plane, ExternalLink, Circle } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import TransactionList from "./TransactionList";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: "income" | "expense";
  date: string;
}

interface DashboardProps {
  balance: number;
  transactions: Transaction[];
}

const Dashboard: React.FC<DashboardProps> = ({ balance, transactions }) => {
  // Calculate total income and expenses
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$ ${amount.toFixed(0)}`;
  };

  // Chart data
  const chartData = {
    datasets: [
      {
        data: [totalExpenses, totalIncome],
        backgroundColor: ["#f87171", "#fecaca"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  // Chart options
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
  };

  // Get recent transactions
  const recentTransactions = transactions.slice(0, 4);

  return (
    <div className="text-gray-200">
      <h2 className="text-2xl font-bold text-white mb-6">Dashboard</h2>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-3xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side - Balance info */}
          <div className="space-y-8">
            <div className="border-b border-red-700 pb-4">
              <div className="flex items-center mb-1">
                <Circle size={12} fill="#ffffff" className="text-white mr-2" />
                <h3 className="text-lg font-medium text-white">
                  Available balance
                </h3>
              </div>
              <p className="text-3xl font-bold text-white ml-5">
                {formatCurrency(balance)}
              </p>
            </div>

            <div className="border-b border-red-700 pb-4">
              <div className="flex items-center mb-1">
                <Circle size={12} fill="#ffffff" className="text-white mr-2" />
                <h3 className="text-lg font-medium text-white">Spent</h3>
              </div>
              <p className="text-3xl font-bold text-white ml-5">
                {formatCurrency(totalExpenses)}
              </p>
            </div>

            <div>
              <div className="flex items-center mb-1">
                <Circle size={12} fill="#ffffff" className="text-white mr-2" />
                <h3 className="text-lg font-medium text-white">Earned</h3>
              </div>
              <p className="text-3xl font-bold text-white ml-5">
                {formatCurrency(totalIncome)}
              </p>
            </div>
          </div>

          {/* Right side - Chart */}
          <div className="flex items-center justify-center">
            <div className="h-48 w-48">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">
          Recent transactions
        </h3>
        <button className="bg-gray-700 p-2 rounded-full">
          <ExternalLink size={20} className="text-gray-400" />
        </button>
      </div>

      <div className="space-y-3">
        {recentTransactions.length > 0 ? (
          recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`flex items-center justify-between p-4 rounded-2xl ${
                transaction.type === "income"
                  ? "bg-gradient-to-r from-red-800 to-red-700"
                  : "bg-gradient-to-r from-red-800 to-red-700"
              }`}
            >
              <div className="flex items-center">
                <div className="bg-black p-3 rounded-full mr-3">
                  <Plane size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    {transaction.category}
                  </p>
                  <p className="text-sm text-red-300">
                    {transaction.description}
                  </p>
                </div>
              </div>
              <p
                className={`font-bold ${
                  transaction.type === "income" ? "text-white" : "text-white"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}$
                {parseFloat(transaction.amount.toString()).toFixed(0)}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>No transactions yet. Add income or expenses to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
