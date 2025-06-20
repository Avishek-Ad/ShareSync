import React from "react";

function Analytics() {
  return (
    <div className="flex flex-col gap-6 justify-between p-6 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-md mx-auto shadow-md text-gray-900">
      {/* Input for Text ID */}
      <div className="flex flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Text ID ..."
          className="px-3 w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-shadow shadow-lg">
          Analyze
        </button>
      </div>

      {/* Analytics Display */}
      <div className="flex flex-col gap-6 mt-6">
        <h1 className="font-semibold text-xl">
          Analytics of <span className="text-green-600">123456789</span>
        </h1>

        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Text:</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            libero pariatur laboriosam.
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <h1 className="font-semibold">Copied:</h1>
          <h1 className="text-6xl text-center font-semibold text-gray-900">
            10
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
