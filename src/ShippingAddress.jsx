import React from "react";

function ShippingAddress() {
  return (
    <div className="py-1">
      <textarea
        className="bg-gray-200 text-black font-semibold ml-6 h-28 outline-none w-full border border-gray-400 text-xs px-2 pt-2 rounded"
        placeholder="Enter shipping address"
      ></textarea>
    </div>
  );
}

export default ShippingAddress;
