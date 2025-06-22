
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
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: '📊', path: '/' },
  { name: 'Students', icon: '👨‍🎓', path: '/students' },
  { name: 'Staff', icon: '👨‍🏫', path: '/staff' },
  { name: 'Courses', icon: '📚', path: '/courses' },
  { name: 'Attendance', icon: '✅', path: '/attendance' },
  { name: 'Appointments', icon: '📅', path: '/appointments' },
  { name: 'Messages', icon: '💬', path: '/messages' },
  { name: 'Reports', icon: '📈', path: '/reports' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-xl transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-16'} border-r border-gray-200`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isOpen && <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <span className="text-lg">{isOpen ? '←' : '→'}</span>
        </button>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
              location.pathname === item.path 
                ? 'bg-blue-100 border-r-3 border-blue-500 text-blue-700' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            {isOpen && <span className="font-medium">{item.name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};
