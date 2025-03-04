import React from 'react';
import { Trash2, TrendingUp, TrendingDown } from 'lucide-react';

interface Transaction {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  onDelete?: (id: number) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onDelete }) => {
  // Format date to a readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="overflow-x-auto">
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No transactions to display</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-secondary-light">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              {onDelete && (
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-secondary divide-y divide-gray-700">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-secondary-light">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {formatDate(transaction.date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {transaction.type === 'income' ? (
                      <TrendingUp size={16} className="text-primary mr-2" />
                    ) : (
                      <TrendingDown size={16} className="text-red-500 mr-2" />
                    )}
                    <span className="text-sm font-medium text-gray-200">
                      {transaction.description}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {transaction.category}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  transaction.type === 'income' ? 'text-primary' : 'text-red-500'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}${parseFloat(transaction.amount.toString()).toFixed(2)}
                </td>
                {onDelete && (
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onDelete(transaction.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;