
type Column =
  | { header: string; accessor: string }
  | { header: string; type: "action" };

type TableProps = {
  columns: Column[];
  data: Record<string, any>[];
  onRowClick?: (row: any) => void
};

export const EmpLeaveTable = ({ columns, data ,onRowClick}: TableProps) => {


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
           <tr
  key={rowIndex}
  className="border-t cursor-pointer hover:bg-gray-100"
  onClick={() => onRowClick && onRowClick(row)} 
>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="p-3">
                  {"accessor" in col ? row[col.accessor] : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
