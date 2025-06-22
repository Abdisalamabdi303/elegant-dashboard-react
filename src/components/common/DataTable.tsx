
import React from 'react';

interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column) => (
              <th key={column.key} className="text-left py-3 px-4 font-semibold text-gray-700">
                {column.label}
              </th>
            ))}
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              {columns.map((column) => (
                <td key={column.key} className="py-3 px-4 text-gray-900">
                  {column.key === 'status' ? (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row[column.key] === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {row[column.key]}
                    </span>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
