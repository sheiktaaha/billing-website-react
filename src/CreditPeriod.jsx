import React from "react";

function CreditPeriod() {
  return (
    <div>
      <span className=" text-black w-80 h-8  py-2 font-bold  text-xs">
        <input
          type="text"
          className="rounded border border-gray-400 text-black w-80 h-8 px-2 py-2 font-normal  text-xs  focus: outline-none"
          placeholder="30"
        />
        <label className="rounded font-normal text-xs border border-l-0 border-gray-400 h-8 py-[7px] px-1 bg-gray-200 text-gray-400">
          Days
        </label>
      </span>
    </div>
  );
}

export default CreditPeriod;
