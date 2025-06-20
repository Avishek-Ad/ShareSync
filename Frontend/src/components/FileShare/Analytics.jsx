import React from "react";

function Analytics() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-md mx-auto shadow-md text-gray-900">
      {/* Input and Button */}
      <div className="flex flex-row gap-3 justify-center">
        <input
          type="text"
          placeholder="File ID..."
          className="px-3 py-2 w-full max-w-xs bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition shadow">
          Analyze
        </button>
      </div>

      {/* Analytics Display */}
      <div className="flex flex-col gap-5 mt-4">
        <h2 className="text-lg font-semibold">
          Analytics of{" "}
          <span className="text-green-700 font-mono">123456789</span>
        </h2>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">File:</h3>
          <p className="text-gray-700">example_file.pdf</p>
        </div>

        <div className="flex flex-col items-center gap-2 mt-4">
          <h3 className="font-semibold">Downloads:</h3>
          <span className="text-6xl font-bold text-blue-600">10</span>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
