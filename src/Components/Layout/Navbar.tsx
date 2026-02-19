import { Bell } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Left */}
      <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
        HRMS Admin Panel
      </h1>

      {/* Right */}
      <div className="flex items-center gap-6">
        
        {/* Notification */}
        <button className="relative hover:text-blue-200 transition">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Admin Info */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="Admin"
            className="w-9 h-9 rounded-full border-2 border-white"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-blue-100">Administrator</p>
          </div>
        </div>

      </div>
    </header>
  );
};
