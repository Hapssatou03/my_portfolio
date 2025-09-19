import React, { useState, useEffect } from 'react';
import {
  Wallet, PlusCircle, MinusCircle, BarChart3, LogIn, UserPlus, LogOut
} from 'lucide-react';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import TransactionList from './components/TransactionList';

// ---------- Types ----------
type AuthMode = 'login' | 'register';
type ActiveView = 'dashboard' | 'income' | 'expense';

type User = {
  id: number;
  email: string;
  name: string;
};

type Credentials = {
  email: string;
  password: string;
};

type IncomeInput = {
  amount: number | string;
  description: string;
  category: string;
};

type ExpenseInput = {
  amount: number | string;
  description: string;
  category: string;
};

type Transaction = {
  id: number;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
  date: string; // ISO
};

// ---------- Mock user ----------
const mockUser: User = {
  id: 1,
  email: 'user@example.com',
  name: 'Demo User',
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [showAuthForm, setShowAuthForm] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);

  // ---------- Auth ----------
  const handleLogin = (credentials: Credentials) => {
    console.log('Login with:', credentials);
    setUser(mockUser);
    setIsAuthenticated(true);
    setShowAuthForm(false);
  };

  const handleRegister = (userData: Credentials & { name?: string }) => {
    console.log('Register with:', userData);
    setUser(mockUser);
    setIsAuthenticated(true);
    setShowAuthForm(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setActiveView('dashboard');
  };

  // ---------- Transactions ----------
  const normalizeAmount = (a: number | string) =>
    typeof a === 'string' ? parseFloat(a) : a;

  const handleAddIncome = (income: IncomeInput) => {
    const newIncome: Transaction = {
      id: Date.now(),
      amount: normalizeAmount(income.amount),
      description: income.description,
      category: income.category,
      type: 'income',
      date: new Date().toISOString(),
    };
    setTransactions((prev) => [newIncome, ...prev]);
  };

  const handleAddExpense = (expense: ExpenseInput) => {
    const newExpense: Transaction = {
      id: Date.now(),
      amount: normalizeAmount(expense.amount),
      description: expense.description,
      category: expense.category,
      type: 'expense',
      date: new Date().toISOString(),
    };
    setTransactions((prev) => [newExpense, ...prev]);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // ---------- Balance ----------
  useEffect(() => {
    const newBalance = transactions.reduce((acc, t) => {
      return t.type === 'income' ? acc + t.amount : acc - t.amount;
    }, 0);
    setBalance(newBalance);
  }, [transactions]);

  // ---------- Demo data ----------
  useEffect(() => {
    if (isAuthenticated && transactions.length === 0) {
      const sampleTransactions: Transaction[] = [
        {
          id: 1,
          amount: 2000,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'income',
          date: new Date().toISOString(),
        },
        {
          id: 2,
          amount: 100,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'expense',
          date: new Date().toISOString(),
        },
        {
          id: 3,
          amount: 100,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'expense',
          date: new Date().toISOString(),
        },
        {
          id: 4,
          amount: 100,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'expense',
          date: new Date().toISOString(),
        },
      ];
      setTransactions(sampleTransactions);
    }
  }, [isAuthenticated, transactions.length]);

  return (
    <div className="min-h-screen bg-secondary-light">
      {/* Header */}
      <header className="bg-secondary-dark text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wallet size={24} className="text-primary" />
            <h1 className="text-xl font-bold text-primary">SPENDY</h1>
          </div>
          <div>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="hidden md:inline text-gray-300">{user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-secondary hover:bg-secondary-light px-3 py-1 rounded-md transition-colors border border-primary text-primary"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setShowAuthForm(true);
                    setAuthMode('login');
                  }}
                  className="flex items-center space-x-1 bg-secondary hover:bg-secondary-light px-3 py-1 rounded-md transition-colors border border-primary text-primary"
                >
                  <LogIn size={16} />
                  <span>Login</span>
                </button>
                <button
                  onClick={() => {
                    setShowAuthForm(true);
                    setAuthMode('register');
                  }}
                  className="flex items-center space-x-1 bg-primary hover:bg-primary-dark text-secondary-dark px-3 py-1 rounded-md transition-colors"
                >
                  <UserPlus size={16} />
                  <span>Register</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {showAuthForm ? (
          <AuthForm
            mode={authMode}
            onLogin={handleLogin}
            onRegister={handleRegister}
            onCancel={() => setShowAuthForm(false)}
          />
        ) : (
          <>
            {isAuthenticated ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1 bg-secondary-dark rounded-lg shadow-md p-4">
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => setActiveView('dashboard')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${
                            activeView === 'dashboard'
                              ? 'bg-primary text-secondary-dark'
                              : 'text-gray-300 hover:bg-secondary'
                          }`}
                        >
                          <BarChart3 size={20} />
                          <span>Dashboard</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveView('income')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${
                            activeView === 'income'
                              ? 'bg-primary text-secondary-dark'
                              : 'text-gray-300 hover:bg-secondary'
                          }`}
                        >
                          <PlusCircle size={20} />
                          <span>Add Income</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setActiveView('expense')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${
                            activeView === 'expense'
                              ? 'bg-primary text-secondary-dark'
                              : 'text-gray-300 hover:bg-secondary'
                          }`}
                        >
                          <MinusCircle size={20} />
                          <span>Add Expense</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 bg-secondary-dark rounded-lg shadow-md p-6">
                  {activeView === 'dashboard' && (
                    <Dashboard balance={balance} transactions={transactions} />
                  )}
                  {activeView === 'income' && (
                    <IncomeForm onAddIncome={handleAddIncome} />
                  )}
                  {activeView === 'expense' && (
                    <ExpenseForm onAddExpense={handleAddExpense} />
                  )}

                  {activeView !== 'dashboard' && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-primary mb-4">
                        Recent Transactions
                      </h3>
                      <TransactionList
                        transactions={transactions.slice(0, 5)}
                        onDelete={handleDeleteTransaction}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-primary mb-4">Welcome to SPENDY</h2>
                <p className="text-gray-300 mb-8">Your personal expense management solution</p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => {
                      setShowAuthForm(true);
                      setAuthMode('login');
                    }}
                    className="bg-secondary-dark hover:bg-secondary text-primary px-6 py-2 rounded-md transition-colors border border-primary"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setShowAuthForm(true);
                      setAuthMode('register');
                    }}
                    className="bg-primary border border-primary text-secondary-dark hover:bg-primary-dark px-6 py-2 rounded-md transition-colors"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-secondary-dark text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © 2025 <span className="text-primary">SPENDY</span> - Expense Management
            Application
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
