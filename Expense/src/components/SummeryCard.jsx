import React from "react";

function SummaryCard({ title, value, color }) {
  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-4 text-center w-40">
      <h3 className="text-gray-700 font-semibold">{title}</h3>
      <p className={`font-bold ${color}`}>{value}</p>
    </div>
  );
}

export default SummaryCard;