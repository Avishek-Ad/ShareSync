import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <div className="flex flex-col justify-center items-center gap-10 my-20">
        <h1 className="text-5xl font-bold underline text-blue-700">
          {/* Welcome to Boring Stuff */}
          ShareSync: Text & File Exchange
        </h1>
        <h2 className="text-xl font-medium text-gray-700">Features:</h2>
        <div className="flex flex-col gap-6 w-64">
          <Link
            to="/url"
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-xl shadow hover:bg-blue-50 hover:shadow-md transition duration-200 text-center"
          >
            URL Shortener
          </Link>
          <Link
            to="/file"
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-xl shadow hover:bg-blue-50 hover:shadow-md transition duration-200 text-center"
          >
            File Share
          </Link>
          <Link
            to="/text"
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-xl shadow hover:bg-blue-50 hover:shadow-md transition duration-200 text-center"
          >
            Text Share
          </Link>
        </div>
      </div>
    </div>
  );
};
