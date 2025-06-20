import React from "react";

function Receive() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-md mx-auto shadow-md">
      {/* Input Section */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter File ID..."
          className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition">
          Receive
        </button>
      </div>

      {/* File Info Section */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Received File</h2>
        <p className="text-gray-700">filename_example.pdf</p>
      </div>

      {/* Download Section */}
      <div className="flex flex-col items-center gap-3 text-center mt-4">
        <p className="text-sm text-gray-600">
          If the download hasn't started automatically,
        </p>
        <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition">
          Download
        </button>
      </div>
    </div>
  );
}

export default Receive;
