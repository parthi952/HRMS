import { useState, useEffect } from "react";
import { EmpLeaveTable } from "../../../Components/Layout/table/EmpLeaveTable";


interface LeaveHistory {
  apply_date: string;
  from_date: string;
  to_date: string;
  number_of_days: number;
  approve_status: string;
  reason: string;
}

interface Empleaves {
  empid: string;
  name: string;
  total_leave: number;
  used_leave: number;
  available_leaves: number;
   leave_history: LeaveHistory[];
}

export const EMPleaves = () => {
  const [Data, setData] = useState<Empleaves[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Empleaves | null>(null);

  const fetchEmpleave = async () => {
    try {
      const response = await fetch("http://localhost:3001/Total_leaves");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  useEffect(() => {
    fetchEmpleave();
  }, []);

  
  const columns = [
    { header: "Employee ID", accessor: "empid" },
    { header: "Employee Name", accessor: "name" },
    { header: "Total Days", accessor: "total_leave" },
    { header: "Used Days", accessor: "used_leave" },
    { header: "Available Days", accessor: "available_leaves" },
  ];

  return (
    <section className="p-4 relative">
      <h2 className="text-2xl font-bold mb-4">Leave Management</h2>

      <EmpLeaveTable
        columns={columns}
        data={Data}
        onRowClick={(row) => setSelectedEmployee(row)}
      />

          {/* Floating card */}
      {selectedEmployee && (
        <div className="absolute top-10 right-10 bg-white shadow-lg p-6 rounded-lg w-96 z-50">
          <h3 className="text-xl font-bold mb-2">{selectedEmployee.name}</h3>
          <p className="font-bold">  Employee ID:  {selectedEmployee.empid}</p>
            <p className="font-bold">  Total Leaves:  {selectedEmployee.total_leave}</p>
            <p className="font-bold">  Used Leaves:  {selectedEmployee.used_leave}</p>
            <p className="font-bold">  Available Leaves:  {selectedEmployee.available_leaves}</p>

          <h4 className="mt-4 font-semibold">Leave History:</h4>
          <ul className="mt-2 max-h-64 overflow-y-auto">
            {selectedEmployee.leave_history.map((leave, index) => (
              <li key={index} className="border-b py-1">
                  <p className="font-bold">  Applied:  {leave.apply_date}</p>
                  <p className="font-bold">  From:  {leave.from_date}   To:  {leave.to_date}</p>
                  <p className="font-bold">  Days:  {leave.number_of_days}</p>
                  <p className="font-bold">  Status:  {leave.approve_status}</p>
                  <p className="font-bold">  Reason:  {leave.reason}</p>
              </li>
            ))}
          </ul>

          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedEmployee(null)}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};
