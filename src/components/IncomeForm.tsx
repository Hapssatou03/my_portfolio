import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

interface IncomeFormProps {
  onAddIncome: (income: {
    amount: number;
    description: string;
    category: string;
  }) => void;
}

// Predefined income categories
const INCOME_CATEGORIES = [
  "Salary",
  "Freelance",
  "Business",
  "Investments",
  "Rental",
  "Gifts",
  "Other",
];

const IncomeForm: React.FC<IncomeFormProps> = ({ onAddIncome }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(INCOME_CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState("");
  const [useCustomCategory, setUseCustomCategory] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    onAddIncome({
      amount: parseFloat(amount),
      description,
      category: useCustomCategory ? customCategory : category,
    });

    setAmount("");
    setDescription("");
    setCategory(INCOME_CATEGORIES[0]);
    setCustomCategory("");
    setUseCustomCategory(false);
  };

  return (
    <div className="text-gray-200">
      <div className="flex items-center mb-6">
        <PlusCircle size={24} className="text-primary mr-2" />
        <h2 className="text-2xl font-bold text-primary">Add Income</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount ($)
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
            placeholder="Monthly salary"
            required
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              className="block text-gray-300 text-sm font-bold"
              htmlFor="category"
            >
              Category
            </label>
            <div className="flex items-center">
              <input
                id="customCategory"
                type="checkbox"
                checked={useCustomCategory}
                onChange={() => setUseCustomCategory(!useCustomCategory)}
                className="mr-2 accent-primary"
              />
              <label htmlFor="customCategory" className="text-sm text-gray-400">
                Custom category
              </label>
            </div>
          </div>

          {useCustomCategory ? (
            <input
              type="text"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              className="w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="Enter custom category"
              required
            />
          ) : (
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 bg-secondary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
              required
            >
              {INCOME_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-secondary-dark font-bold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50 transition-colors"
        >
          Add Income
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
