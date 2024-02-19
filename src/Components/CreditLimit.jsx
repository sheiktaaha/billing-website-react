import React from "react";

function CreditLimit() {
  return (
    <div className="flex border border-gray-400 px-2 ml-6 w-80 h-8 gap-2 text-xs rounded">
      <p className="mt-1 text-gray-400">₹</p>{" "}
      <span className="text-xs mt-1 text-gray-400">0</span>
    </div>
  );
}

export default CreditLimit;
