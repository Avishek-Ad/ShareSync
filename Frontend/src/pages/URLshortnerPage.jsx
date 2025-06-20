import { useContext, useState } from "react";
import { URLContext } from "../Contexts/URLContext.jsx";

export const URLshortnerPage = () => {
  const { shortenURL, isLoading, urlData } = useContext(URLContext);
  const [url, setUrl] = useState("");

  const copyUrl = () => {
    navigator.clipboard
      .writeText(urlData?.shortURL)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <div className="flex flex-col justify-center items-center gap-10 my-20">
        <h1 className="text-5xl font-bold underline text-blue-700">
          URL Shortener
        </h1>

        <div className="flex flex-row gap-2">
          <input
            className="md:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="url"
            placeholder="Enter URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            onClick={() => shortenURL(url)}
            disabled={isLoading}
            className="bg-blue-500 text-white px-4 py-2 font-medium rounded-lg shadow hover:bg-blue-600 transition disabled:opacity-50"
          >
            {isLoading ? "Shortening..." : "Shorten"}
          </button>
        </div>

        {/* Results */}
        {urlData && (
          <div className="flex flex-col bg-white border border-gray-300 rounded-2xl shadow-lg p-6 w-[90%] max-w-xl">
            <h2 className="font-semibold mb-2">Original URL:</h2>
            <p className="mb-4 text-blue-700 break-all">
              {urlData?.urlData?.originalURL}
            </p>

            <h2 className="font-semibold">Short URL:</h2>
            <p className="mb-4 text-green-700 break-all">{urlData?.shortURL}</p>

            <h2 className="font-semibold">Expires at:</h2>
            <p className="mb-6 text-red-600">
              {new Date(urlData?.urlData?.expiresAt).toLocaleString()}
            </p>

            <div className="text-center mb-6">
              <h2 className="font-semibold mb-1">Usage:</h2>
              <p className="text-6xl font-bold text-gray-800">
                {urlData?.urlData?.clicks}
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={copyUrl}
                className="bg-blue-500 text-white px-4 py-2 font-medium rounded-lg hover:bg-blue-600 transition"
              >
                Copy Short URL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
