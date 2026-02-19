import { useEffect, useState } from "react";
import { Button } from "../../Components/Common/Button";
import { FormFiled } from "../../Components/Common/FormFiled";
import { Selection } from "../../Components/Common/Selection";
import { CustomDatePicker } from "../../Components/Common/CustomDatePicker.tsx";
import { Table } from "../../Components/table/EmployeeTable";

const API_URL = "http://localhost:3001/employees";

export type Employee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  status: string;
};

export const Employee = () => {
  const [FlotCard, setFlotCard] = useState(false);
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const departmentOptions = [
    { label: "HR", value: "HR" },
    { label: "IT", value: "IT" },
    { label: "Finance", value: "Finance" },
  ];

  const ActiveStatus = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  const [formData, setFormData] = useState<Employee>({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    status: "Active",
    dateOfJoining: "",
  });

  const columns = [
    { header: "Employee ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Department", accessor: "department" },
    { header: "Designation", accessor: "designation" },
    { header: "Status", accessor: "status" },
    { header: "Joining Date", accessor: "dateOfJoining" },
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed");
        const json = await res.json();
        setData(json);
      } catch {
        setError("API not reachable");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const Action = () => setFlotCard(true);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onDateChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const saved = await res.json();
      setData((prev) => [...prev, saved]);

      setFormData({
        id: "",
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        status: "Active",
        dateOfJoining: "",
      });

      setFlotCard(false);
    } catch {
      alert("Failed to add employee");
    }
  };

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="p-6 bg-gray-100 min-h-screen space-y-6">

      {/* ---------- Header ---------- */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Employees</h1>
        <p className="text-gray-500">
          Manage all employees in your organization
        </p>
      </div>

      {/* ---------- Summary Cards ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Employees</p>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Active</p>
          <p className="text-2xl font-bold text-green-600">
            {data.filter((e) => e.status === "Active").length}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Inactive</p>
          <p className="text-2xl font-bold text-red-600">
            {data.filter((e) => e.status === "Inactive").length}
          </p>
        </div>
      </div>

      {/* ---------- Action Bar ---------- */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
        <input
          type="text"
          placeholder="Search employee..."
          className="border px-4 py-2 rounded-lg w-1/3"
        />
        <Button B_name="Add Employee" ClickToAction={Action} />
      </div>

      {/* ---------- Table ---------- */}
      {data.length === 0 ? (
        <div className="bg-white p-10 rounded-xl shadow text-center text-gray-500">
          No employees found. Click <b>Add Employee</b> to get started.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow p-4">
          <Table columns={columns} data={data} />
        </div>
      )}

      {/* ---------- Modal ---------- */}
      {FlotCard && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-lg relative">

            <button
              onClick={() => setFlotCard(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h1 className="text-2xl font-bold mb-2">Add Employee</h1>
            <p className="text-gray-500 mb-6">
              Enter employee details carefully
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormFiled name="id" value={formData.id} Lable="Employee Code" in_PlaceHolder="EMP001" onChange={onChange} />
              <FormFiled name="name" value={formData.name} Lable="Name" in_PlaceHolder="Employee name" onChange={onChange} />
              <FormFiled name="designation" value={formData.designation} Lable="Designation" in_PlaceHolder="Developer" onChange={onChange} />

              <Selection label="Status" name="status" options={ActiveStatus} value={formData.status} onChange={onChange} placeholder="Select status" />
              <Selection label="Department" name="department" options={departmentOptions} value={formData.department} onChange={onChange} placeholder="Select department" />

              <FormFiled name="email" value={formData.email} Lable="Email" in_PlaceHolder="employee@mail.com" onChange={onChange} />
              <CustomDatePicker name="dateOfJoining" value={formData.dateOfJoining} Lable="Joining Date" onChange={onDateChange} />
              <FormFiled name="phone" value={formData.phone} Lable="Phone" in_PlaceHolder="9876543210" onChange={onChange} />
            </div>

            <div className="mt-6 flex justify-end border-t pt-4">
              <Button B_name="Submit" ClickToAction={onSubmit} />
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
