import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MdAnalytics, MdDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"board" | "analytics">("board");

  const pathname = location.pathname;



  useEffect(() => {
    // keep active tab in sync with current route
    // (defer updates to avoid synchronous state updates warnings)
    if (pathname === "/analytics") {
      queueMicrotask(() => setActiveTab("analytics"));
    } else if (pathname === "/board") {
      queueMicrotask(() => setActiveTab("board"));
    }
  }, [pathname]);

  return (
   <div className="sticky top-0 z-50 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
  <div className="flex items-center justify-between">
    
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <button
        onClick={() => navigate("/board")}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
          activeTab === "board"
            ? "bg-slate-900 text-white"
            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        <MdDashboard size={20} />
        My Board
      </button>

      <button
        onClick={() => navigate("/analytics")}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
          activeTab === "analytics"
            ? "bg-slate-900 text-white"
            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        <MdAnalytics size={20} />
        Analytics
      </button>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-5">
      <button
        onClick={() => navigate("/profile")}
        className="rounded-full transition hover:scale-105"
      >
        <FaUserCircle
          className="text-slate-700 hover:text-slate-900"
          size={42}
        />
      </button>
    </div>
  </div>
</div>
  );
};

export default Header;

