
type Column = {
  header: string;
  accessor: string;
};

type TableProps = {
  columns: Column[];
  data: Record<string, any>[];
  LinkTo : string;
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-green-100 text-green-700";
    case "inactive":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};


export const EmpLeaveTable = ({ columns, data, }: TableProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full">
        {/* Header */}
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-3 text-left">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, rowIndex) => (

            <tr key={rowIndex} className="border-t" >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="p-3">
                  {col.accessor === "status" ? (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        row[col.accessor]
                      )}`}
                    >
                      {row[col.accessor]}
                    </span>
                  ) : (
                    row[col.accessor]
                  )}
                </td>
              ))}
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};
