import React from "react";

function Result({ value }) {
  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md h-full w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="result" className="text-sm font-medium text-gray-700">
          Result
        </label>
        <input
          type="url"
          id="result"
          value={value}
          readOnly
          placeholder="Result akan muncul di sini..."
          className="text-gray-700 mt-1 py-2 px-2 block w-full border border-gray-300 rounded-md bg-gray-100 shadow-sm"
        />
      </div>
    </div>
  );
}

export default Result;
