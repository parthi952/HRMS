interface Column {
  header: string;
  accessor?: string;
  type?: string;
}

export const Table = ({
  columns,
  TB,
  getStatusColor,
  onEdit,
}: {
  columns: Column[];
  TB: any[];
  getStatusColor: (status: string) => string;
  onEdit: (row: any) => void;
}) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-200">
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="p-3 text-left">{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TB.map((row) => (
          <tr key={row.id} className="border-t">
            {columns.map((col, index) => (
              <td key={index} className="p-3">
                {col.type === "action" ? (
                  <button
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition-colors"
                    onClick={() => onEdit(row)}
                  >
                    Edit
                  </button>
                ) : col.accessor === "status" ? (
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(row.status)}`}>
                    {row.status}
                  </span>
                ) : (
                  // Use the accessor to grab the value, or empty string if accessor is missing
                  <span>{col.accessor ? row[col.accessor] : ""}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};