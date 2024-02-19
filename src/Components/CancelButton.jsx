import React from "react";

function CancelButton() {
  return (
    <div>
      <button
        type="button"
        className="flex justify-center w-32 py-1 border
        border-gray-400 text-xs font-medium rounded shadow-sm text-gray-500 bg-white
       focus:outline-none"
      >
        Cancel
      </button>
    </div>
  );
}

export default CancelButton;
