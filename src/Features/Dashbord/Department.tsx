

export const Department = () => {
  return (
    <div>
         <h2 className="text-2xl font-bold mb-4">Departments</h2>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">+ Add Department</button>
                            {/*  table */}
                            <div className="bg-white rounded-lg shadow overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-3 text-left">Department</th>
                                            <th className="p-3 text-left">Head</th>
                                            <th className="p-3 text-left">Employees</th>
                                            <th className="p-3 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="p-3">IT</td>
                                            <td className="p-3">Jane Smith</td>
                                            <td className="p-3">25</td>
                                            <td className="p-3 space-x-2"><button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button><button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    </div>
  )
}
