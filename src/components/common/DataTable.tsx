
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
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="text-left py-4 px-6 font-bold text-gray-800 text-sm uppercase tracking-wider">
                  {column.label}
                </th>
              ))}
              <th className="text-left py-4 px-6 font-bold text-gray-800 text-sm uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                {columns.map((column) => (
                  <td key={column.key} className="py-4 px-6 text-gray-900">
                    {column.key === 'status' ? (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        row[column.key] === 'Active' || row[column.key] === 'Scheduled' || row[column.key] === 'Present'
                          ? 'bg-green-100 text-green-800' 
                          : row[column.key] === 'Completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {row[column.key]}
                      </span>
                    ) : (
                      <span className="font-medium">{row[column.key]}</span>
                    )}
                  </td>
                ))}
                <td className="py-4 px-6">
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-sm font-semibold transition-colors">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-sm font-semibold transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
