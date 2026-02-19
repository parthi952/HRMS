import React from "react";
import IMG from "../../assets/Empleaves.png";

import { LeaveSection } from "./Leaves/LeaveSection";

const Leaves: React.FC = () => {
  
const SummaryCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-gray-500 text-sm">{title}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

  return (
    <section className="min-h-screen bg-gray-100 p-6 space-y-8">

      {/* ---------- Header ---------- */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Leave Management
        </h1>
        <p className="text-gray-500 mt-1">
          Manage employee leaves, approvals, balances and events
        </p>
      </div>

      {/* ---------- Summary ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <SummaryCard title="Total Employees" value="150" />
        <SummaryCard title="Pending Requests" value="12" />
        <SummaryCard title="Approved Leaves" value="38" />
        <SummaryCard title="Upcoming Events" value="5" />
      </div>

      {/* ---------- Main Sections ---------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <LeaveSection
          title="Employee Leaves"
          description="View and manage employee leave history and records."
          path="/employeeleave"
          action="View Leaves"
          IMG={IMG}
        />

        <LeaveSection
          title="Leave Requests"
          description="Approve or reject employee leave requests."
          path="/leaverequests"
          action="Review Requests"
          IMG={IMG}
        />

        <LeaveSection
          title="Leave Balance"
          description="Track available and used leave balances."
          path="/leavebalance"
          action="Check Balance"
          IMG={IMG}
        />

        <LeaveSection
          title="Events & Holidays"
          description="Manage company events and holiday calendar."
          path="/Events"
          action="View Events"
          IMG={IMG}
        />

      </div>

      {/* ---------- Info Footer ---------- */}
      <div className="bg-white rounded-xl p-6 shadow">
        <h3 className="font-semibold text-lg mb-2">
          About Leave Management
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Leave Management helps HR teams track employee leave usage, approve
          requests efficiently, monitor balances, and manage organization-wide
          events and holidays.
        </p>
      </div>

    </section>
  );
};

export default Leaves;

/* ---------- Components ---------- */
