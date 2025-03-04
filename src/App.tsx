import React, { useState, useEffect } from 'react';
import { Wallet, PlusCircle, MinusCircle, BarChart3, LogIn, UserPlus, LogOut } from 'lucide-react';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import TransactionList from './components/TransactionList';

// Mock user data for MVP (will be replaced with actual API calls)
const mockUser = {
  id: 1,
  email: 'user@example.com',
  name: 'Demo User'
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [activeView, setActiveView] = useState('dashboard');
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  // Mock authentication for MVP
  const handleLogin = (credentials) => {
    // In a real app, this would make an API call to authenticate
    console.log('Login with:', credentials);
    setUser(mockUser);
    setIsAuthenticated(true);
    setShowAuthForm(false);
  };

  const handleRegister = (userData) => {
    // In a real app, this would make an API call to register
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

  const handleAddIncome = (income) => {
    const newIncome = {
      ...income,
      id: Date.now(),
      type: 'income',
      date: new Date().toISOString()
    };
    setTransactions([newIncome, ...transactions]);
  };

  const handleAddExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now(),
      type: 'expense',
      date: new Date().toISOString()
    };
    setTransactions([newExpense, ...transactions]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Calculate balance whenever transactions change
  useEffect(() => {
    const newBalance = transactions.reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        return acc + parseFloat(transaction.amount);
      } else {
        return acc - parseFloat(transaction.amount);
      }
    }, 0);
    setBalance(newBalance);
  }, [transactions]);

  // Add some sample transactions for demo purposes
  useEffect(() => {
    if (isAuthenticated && transactions.length === 0) {
      const sampleTransactions = [
        {
          id: 1,
          amount: 2000,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'income',
          date: new Date().toISOString()
        },
        {
          id: 2,
          amount: 100,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'expense',
          date: new Date().toISOString()
        },
        {
          id: 3,
          amount: 100,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'expense',
          date: new Date().toISOString()
        },
        {
          id: 4,
          amount: 100,
          description: 'indigo ticket',
          category: 'Travel',
          type: 'expense',
          date: new Date().toISOString()
        }
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
                  onClick={() => { setShowAuthForm(true); setAuthMode('login'); }}
                  className="flex items-center space-x-1 bg-secondary hover:bg-secondary-light px-3 py-1 rounded-md transition-colors border border-primary text-primary"
                >
                  <LogIn size={16} />
                  <span>Login</span>
                </button>
                <button 
                  onClick={() => { setShowAuthForm(true); setAuthMode('register'); }}
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
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${activeView === 'dashboard' ? 'bg-primary text-secondary-dark' : 'text-gray-300 hover:bg-secondary'}`}
                        >
                          <BarChart3 size={20} />
                          <span>Dashboard</span>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveView('income')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${activeView === 'income' ? 'bg-primary text-secondary-dark' : 'text-gray-300 hover:bg-secondary'}`}
                        >
                          <PlusCircle size={20} />
                          <span>Add Income</span>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveView('expense')}
                          className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 ${activeView === 'expense' ? 'bg-primary text-secondary-dark' : 'text-gray-300 hover:bg-secondary'}`}
                        >
                          <MinusCircle size={20} />
                          <span>Add Expense</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Main Content Area */}
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
                  
                  {/* Transaction List (shown on all views) */}
                  {activeView !== 'dashboard' && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-primary mb-4">Recent Transactions</h3>
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
                    onClick={() => { setShowAuthForm(true); setAuthMode('login'); }}
                    className="bg-secondary-dark hover:bg-secondary text-primary px-6 py-2 rounded-md transition-colors border border-primary"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => { setShowAuthForm(true); setAuthMode('register'); }}
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
          <p>© 2025 <span className="text-primary">SPENDY</span> - Expense Management Application</p>
        </div>
      </footer>
    </div>
  );
}

export default App;