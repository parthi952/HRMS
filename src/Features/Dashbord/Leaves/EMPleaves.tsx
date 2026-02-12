import { useEffect, useState } from "react";
import { EmpLeaveTable } from "../../../Components/Layout/table/EmpLeaveTable";

interface Empleaves {
  empid: string;
  name: string;
  total_leave: number;
  used_leave: number;
  available_leaves: number;
}

const API_URL ="http://localhost:3001/Total_leaves"

export const EMPleaves = () => {
  const [Data, setData] = useState<Empleaves[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Empleaves | null>(null);

  const fetchEmpleave = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  // ✅ useEffect instead of useState
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
        <div className="absolute top-10 right-10 bg-white shadow-lg p-6 rounded-lg w-80 z-50">
          <h3 className="text-xl font-bold mb-2">{selectedEmployee.name}</h3>
          <p className="font-bold">Employee ID: {selectedEmployee.empid}</p>
          <div>
            <table>
            </table>
          <p>Total Leaves:{selectedEmployee.total_leave}</p>
          <p>Used Leaves: {selectedEmployee.used_leave}</p>
          <p>Available Leaves: {selectedEmployee.available_leaves}</p>
          </div>
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
