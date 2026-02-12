import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("/");

  const Sidebar = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Employees", path: "/employee" },
    { label: "Attendance", path: "/attendance" },
    { label: "Leaves", path: "/leaves" },
    { label: "Department", path: "/department" }
  ];

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white shadow-lg">
      
      {/* Navigation */}
      <nav className="mt-4 flex flex-col gap-2 px-3">
        {Sidebar.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setActiveTab(link.path)}
            className={`px-4 py-2 rounded-md transition-all duration-200
              ${
                activeTab === link.path
                  ? "bg-blue-600 shadow-md"
                  : "hover:bg-gray-800"
              }`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
};
