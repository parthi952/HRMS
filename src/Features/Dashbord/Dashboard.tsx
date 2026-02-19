import {
  Users,
  UserCheck,
  UserMinus,
  Building2,
  Clock,
  PlusCircle,
} from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="p-6 bg-gray-100 min-h-screen space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, Admin 👋
          </h2>
          <p className="text-sm text-gray-500">
            Here’s what’s happening in your organization today
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex gap-3">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <PlusCircle size={18} />
            Add Employee
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Employees" value="150" icon={Users} />
        <KpiCard title="Present Today" value="138" icon={UserCheck} />
        <KpiCard title="On Leave" value="12" icon={UserMinus} />
        <KpiCard title="Departments" value="8" icon={Building2} />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Attendance Overview */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Attendance Overview
            </h3>
            <Clock className="text-gray-400" size={18} />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <StatMini label="On Time" value="120" color="text-green-600" />
            <StatMini label="Late" value="10" color="text-yellow-500" />
            <StatMini label="Absent" value="8" color="text-red-500" />
          </div>

          {/* Chart placeholder */}
          <div className="mt-6 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Attendance Chart (Coming Soon)
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>

          <div className="space-y-3">
            <QuickAction label="Add Employee" />
            <QuickAction label="Mark Attendance" />
            <QuickAction label="Apply Leave" />
            <QuickAction label="Create Department" />
          </div>
        </div>
      </div>

      {/* Recent Employees */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold text-lg mb-4">Recent Employees</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Department</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Joined</th>
              </tr>
            </thead>
            <tbody>
              {["Rahul", "Priya", "Arjun", "Kavya"].map((name) => (
                <tr key={name} className="border-t">
                  <td className="px-4 py-3 font-medium">{name}</td>
                  <td className="px-4 py-3">IT</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">Feb 2026</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};

/* ---------- Components ---------- */

const KpiCard = ({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: any;
}) => (
  <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-3xl font-bold mt-1">{value}</h3>
      </div>
      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
        <Icon size={24} />
      </div>
    </div>
  </div>
);

const StatMini = ({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const QuickAction = ({ label }: { label: string }) => (
  <button className="w-full text-left px-4 py-3 rounded-lg border hover:bg-gray-50 transition">
    {label}
  </button>
);
