
import React from 'react';
import { Edit3, Trash2, MoreHorizontal } from 'lucide-react';

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
    <div className="glass backdrop-blur-sm overflow-hidden rounded-2xl border border-white/20 shadow-premium bg-white/30">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-slate-50 to-slate-100 backdrop-blur-sm">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="text-left py-4 px-6 font-bold text-slate-800 text-sm uppercase tracking-wider border-b border-white/20">
                  {column.label}
                </th>
              ))}
              <th className="text-left py-4 px-6 font-bold text-slate-800 text-sm uppercase tracking-wider border-b border-white/20">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-white/20 transition-all duration-300 group">
                {columns.map((column) => (
                  <td key={column.key} className="py-4 px-6 text-slate-900">
                    {column.key === 'status' ? (
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border shadow-premium-sm ${
                        row[column.key] === 'Active' || row[column.key] === 'Scheduled' || row[column.key] === 'Present'
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200/50' 
                          : row[column.key] === 'Completed'
                          ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200/50'
                          : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200/50'
                      }`}>
                        {row[column.key]}
                      </span>
                    ) : (
                      <span className="font-medium">{row[column.key]}</span>
                    )}
                  </td>
                ))}
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 hover:from-blue-100 hover:to-cyan-100 rounded-lg text-sm font-semibold transition-all duration-300 shadow-premium-sm border border-blue-200/50 group-hover:scale-105">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gradient-to-r from-red-50 to-pink-50 text-red-600 hover:from-red-100 hover:to-pink-100 rounded-lg text-sm font-semibold transition-all duration-300 shadow-premium-sm border border-red-200/50 group-hover:scale-105">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gradient-to-r from-slate-50 to-gray-50 text-slate-600 hover:from-slate-100 hover:to-gray-100 rounded-lg text-sm font-semibold transition-all duration-300 shadow-premium-sm border border-slate-200/50 group-hover:scale-105">
                      <MoreHorizontal className="w-4 h-4" />
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
