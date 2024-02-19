import React from "react";

const SaveButton = () => {
  return (
    <div>
      <button
        type="button"
        className="flex justify-center w-32 py-1 border
        border-purple-200 text-xs font-medium rounded shadow-sm text-white bg-violet-200
       focus:outline-none"
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;
