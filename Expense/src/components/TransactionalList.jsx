import React from "react";
function TransactionList({ transactions }) {
  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-4 w-96">
      <h3 className="text-gray-800 font-semibold mb-2">Transactions</h3>
      <ul className="divide-y">
        {transactions.length === 0 ? (
          <p className="text-gray-400">No transactions yet</p>
        ) : (
          transactions.map((t, index) => (
            <li key={index} className="py-1">
              {t.type === "income" ? (
                <span className="text-green-600 font-medium">
                  + Rs. {t.value}
                </span>
              ) : (
                <span className="text-red-500 font-medium">
                  - Rs. {t.value}
                </span>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TransactionList;