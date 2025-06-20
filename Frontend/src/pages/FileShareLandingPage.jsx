import React, { useState, useRef, useEffect } from "react";
import Share from "../components/FileShare/Share";
import Receive from "../components/FileShare/Receive";
import Analytics from "../components/FileShare/Analytics";

function FileShareLandingPage() {
  const [visibleSection, setVisibleSection] = useState(null);
  const shareRef = useRef(null);
  const receiveRef = useRef(null);
  const analyticsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      visibleSection &&
      !shareRef.current?.contains(event.target) &&
      !receiveRef.current?.contains(event.target) &&
      !analyticsRef.current?.contains(event.target)
    ) {
      setVisibleSection(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibleSection]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <div className="flex flex-col justify-center items-center gap-10 my-20">
        <h1 className="text-5xl font-bold underline text-blue-700">
          File Share
        </h1>

        <div className="flex flex-col gap-5 w-64">
          <button
            onClick={() =>
              setVisibleSection(visibleSection === "share" ? null : "share")
            }
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-xl shadow hover:bg-blue-50 hover:shadow-md transition text-center"
          >
            Share
          </button>
          <button
            onClick={() =>
              setVisibleSection(visibleSection === "receive" ? null : "receive")
            }
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-xl shadow hover:bg-blue-50 hover:shadow-md transition text-center"
          >
            Receive
          </button>
          <button
            onClick={() =>
              setVisibleSection(
                visibleSection === "analytics" ? null : "analytics"
              )
            }
            className="bg-white text-blue-600 font-medium py-2 px-4 rounded-xl shadow hover:bg-blue-50 hover:shadow-md transition text-center"
          >
            Analytics
          </button>
        </div>

        {/* Render the selected section */}
        {visibleSection === "share" && (
          <div ref={shareRef} className="absolute top-10 mt-5 w-[90%] max-w-xl">
            <Share />
          </div>
        )}
        {visibleSection === "receive" && (
          <div
            ref={receiveRef}
            className="absolute top-10 mt-5 w-[90%] max-w-xl"
          >
            <Receive />
          </div>
        )}
        {visibleSection === "analytics" && (
          <div
            ref={analyticsRef}
            className="absolute top-10 mt-5 w-[90%] max-w-xl"
          >
            <Analytics />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileShareLandingPage;
