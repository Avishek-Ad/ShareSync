import React from "react";

function Receive() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-md mx-auto shadow-md text-gray-900">
      {/* Input and Button */}
      <div className="flex flex-row gap-3 justify-center">
        <input
          type="text"
          placeholder="Text ID..."
          className="px-3 py-2 w-full max-w-xs bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition shadow">
          Receive
        </button>
      </div>

      {/* Received Text */}
      <div className="flex flex-col gap-4 mt-6">
        <h2 className="font-semibold text-lg">Received Text:</h2>
        <p className="text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro
          ullam iusto impedit excepturi obcaecati blanditiis minus et dolor
          voluptatem!
        </p>

        {/* Copy Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition shadow">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Receive;
