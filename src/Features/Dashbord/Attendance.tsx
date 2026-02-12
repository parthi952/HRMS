import { useEffect, useState } from 'react';
import { Table } from '../../Components/Layout/table/AttendanceTable';

interface AttendanceRecord {
  id: string;
  employee_id: string;
  employee_name: string;   // MUST exist
  attendance_date: string;
  check_in: string | null;
  check_out: string | null;
  status: string;
}



const API_URL = "http://localhost:3001/attendance";

export const Attendance = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [selection, setSelection] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [data, setData] = useState<AttendanceRecord[]>([]);

  // ✅ Move fetchAttendance outside useEffect
  const fetchAttendance = async () => {
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const updateStatus = async () => {
    if (!selectedId) return;

    try {
      const response = await fetch(`${API_URL}/${selectedId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: selection,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update attendance");
      }

      await fetchAttendance();   
      setShowEdit(false);
    } catch (error) {
      console.error("Error updating attendance:", error);
    }
  };

  const onEdit = (row: AttendanceRecord) => {
    setSelectedId(row.id);
    setSelection(row.status);
    setShowEdit(true);
  };

  const columns = [
    { header: "Employee ID", accessor: "employee_id" },
    { header:"Name", accessor:"employee_name"},

    { header: "Date", accessor: "attendance_date" },
    { header: "Check-In", accessor: "check_in" },
    { header: "Check-Out", accessor: "check_out" },
    { header: "Status", accessor: "status" },
    { header: "Action", type: "action" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "present": return "text-green-600 bg-green-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      case "absent": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance Management</h2>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <Table
          columns={columns}
          TB={data}
          getStatusColor={getStatusColor}
          onEdit={onEdit}
        />
      </div>

      {showEdit && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowEdit(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-4">Edit Status</h3>

            <select
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Pending">Pending</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowEdit(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={updateStatus}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
