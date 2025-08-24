import React, { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault(); // form submit reload na kare
    if (!amount || amount <= 0) {
      alert("Enter valid amount!");
      return;
    }
    onAdd(type, parseInt(amount));
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 items-center"
    >
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border rounded-md px-3 py-2 outline-none"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-md px-3 py-2"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
}
