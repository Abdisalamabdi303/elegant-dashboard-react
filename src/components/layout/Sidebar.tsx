
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface NavItem {
  name: string;
  icon: string;
  path: string;
  gradient: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: '📊', path: '/', gradient: 'from-blue-500 to-blue-600' },
  { name: 'Students', icon: '👨‍🎓', path: '/students', gradient: 'from-green-500 to-green-600' },
  { name: 'Staff', icon: '👨‍🏫', path: '/staff', gradient: 'from-purple-500 to-purple-600' },
  { name: 'Courses', icon: '📚', path: '/courses', gradient: 'from-orange-500 to-orange-600' },
  { name: 'Attendance', icon: '✅', path: '/attendance', gradient: 'from-teal-500 to-teal-600' },
  { name: 'Appointments', icon: '📅', path: '/appointments', gradient: 'from-pink-500 to-pink-600' },
  { name: 'Messages', icon: '💬', path: '/messages', gradient: 'from-indigo-500 to-indigo-600' },
  { name: 'Reports', icon: '📈', path: '/reports', gradient: 'from-red-500 to-red-600' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`fixed left-0 top-0 h-full bg-white/95 backdrop-blur-lg shadow-2xl transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-16'} border-r border-white/20`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        {isOpen && (
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            EduAdmin
          </h1>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-xl hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
        >
          <span className="text-lg">{isOpen ? '←' : '→'}</span>
        </button>
      </div>
      
      <nav className="mt-8 px-4">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center px-4 py-4 mb-2 text-left rounded-xl transition-all duration-200 group ${
              location.pathname === item.path 
                ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg transform scale-105` 
                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
            }`}
          >
            <div className={`text-xl mr-4 p-2 rounded-lg transition-all duration-200 ${
              location.pathname === item.path 
                ? 'bg-white/20' 
                : 'group-hover:bg-indigo-100'
            }`}>
              {item.icon}
            </div>
            {isOpen && (
              <span className="font-semibold transition-all duration-200">
                {item.name}
              </span>
            )}
          </button>
        ))}
      </nav>

      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
            <h3 className="font-semibold mb-1">Need Help?</h3>
            <p className="text-sm opacity-90">Contact support for assistance</p>
          </div>
        </div>
      )}
    </div>
  );
};
