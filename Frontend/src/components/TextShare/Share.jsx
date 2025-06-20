import React from "react";

function Share() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-md mx-auto shadow-md text-gray-900">
      {/* Textarea for Text Input */}
      <textarea
        placeholder="Enter text here"
        className="p-4 w-full bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="10"
      ></textarea>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-shadow shadow-lg">
          Share
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-shadow shadow-lg">
          Analyze
        </button>
      </div>

      {/* Share ID */}
      <div className="text-center mt-6">
        <h1 className="font-semibold text-lg">
          Share ID: <span className="text-green-600 font-mono">123456789</span>
        </h1>
      </div>
    </div>
  );
}

export default Share;
