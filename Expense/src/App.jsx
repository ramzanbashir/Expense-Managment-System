import React, { useState } from "react";
import SummaryCard from "../src/components/SummeryCard";
import TransactionForm from "../src/components/TransactionForm";
import TransactionList from "../src/components/TransactionalList";

function ExpenseManager() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (type, amount) => {
    if (type === "income") {
      setIncome(income + amount);
      setTransactions([...transactions, { type, value: amount }]);
    } else {
      setExpense(expense + amount);
      setTransactions([...transactions, { type, value: amount }]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-3xl flex flex-col items-center justify-center">
<h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-wide">
  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
    Expense Management System
  </span>
</h1>


        {/* Summary */}
        <div className="flex flex-wrap gap-6 mb-6 justify-center">
          <SummaryCard
            title="Total Income"
            value={`+ Rs. ${income}`}
            color="text-green-600"
          />
          <SummaryCard
            title="Total Expense"
            value={`- Rs. ${expense}`}
            color="text-red-500"
          />
          <SummaryCard
            title="Balance"
            value={`Rs. ${income - expense}`}
            color="text-blue-600"
          />
        </div>

        {/* Form */}
        <div className="flex justify-center w-full mb-6">
          <TransactionForm onAdd={handleAdd} />
        </div>

        {/* Transactions */}
        <div className="flex justify-center w-full">
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default ExpenseManager;
