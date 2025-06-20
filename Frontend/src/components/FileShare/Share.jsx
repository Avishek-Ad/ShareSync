import { useState } from "react";

function Share() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-100 border border-gray-300 rounded-lg w-full max-w-md mx-auto shadow-md text-gray-900">
      {/* Drag and Drop Upload */}
      <div className="flex flex-col items-center gap-4">
        <label
          className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-blue-400 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <span className="text-blue-600 text-lg font-semibold">
            Drag & drop or click
          </span>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {file && (
          <p className="text-sm text-gray-700 bg-gray-200 px-4 py-1 rounded shadow-inner font-mono">
            {file.name}
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 shadow hover:shadow-md transition">
          Share
        </button>
        <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 shadow hover:shadow-md transition">
          Analyze
        </button>
      </div>

      {/* Share ID Display */}
      <div className="text-center">
        <h2 className="text-lg font-semibold">
          Share ID:{" "}
          <span className="text-green-600 font-mono tracking-wide">
            123456789
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Share;
