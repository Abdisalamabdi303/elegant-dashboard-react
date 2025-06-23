import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  GraduationCap, 
  Users, 
  BookOpen, 
  CheckSquare, 
  Calendar,
  MessageSquare,
  FileText,
  ChevronLeft,
  ChevronRight,
  Bot,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  gradient: string;
  description: string;
}

const navItems: NavItem[] = [
  { 
    name: 'Dashboard', 
    icon: BarChart3, 
    path: '/', 
    gradient: 'from-red-500 to-rose-500',
    description: 'Overview & Analytics'
  },
  { 
    name: 'Students', 
    icon: GraduationCap, 
    path: '/students', 
    gradient: 'from-rose-500 to-pink-500',
    description: 'Student Management'
  },
  { 
    name: 'Staff', 
    icon: Users, 
    path: '/staff', 
    gradient: 'from-pink-500 to-red-500',
    description: 'Staff Directory'
  },
  { 
    name: 'Courses', 
    icon: BookOpen, 
    path: '/courses', 
    gradient: 'from-red-600 to-rose-600',
    description: 'Course Catalog'
  },
  { 
    name: 'Attendance', 
    icon: CheckSquare, 
    path: '/attendance', 
    gradient: 'from-rose-600 to-pink-600',
    description: 'Track Attendance'
  },
  { 
    name: 'Appointments', 
    icon: Calendar, 
    path: '/appointments', 
    gradient: 'from-pink-600 to-red-600',
    description: 'Schedule Meetings'
  },
  { 
    name: 'Messages', 
    icon: MessageSquare, 
    path: '/messages', 
    gradient: 'from-red-500 to-rose-500',
    description: 'Communication Hub'
  },
  { 
    name: 'Reports', 
    icon: FileText, 
    path: '/reports', 
    gradient: 'from-rose-500 to-pink-500',
    description: 'Analytics & Reports'
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={`fixed left-0 top-0 h-full glass backdrop-blur-xl shadow-premium transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-16'} border-r border-white/20`}>
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        {isOpen && (
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-premium-sm transform rotate-12">
                <Bot className="w-6 h-6 text-white transform -rotate-12" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent font-poppins">
                Hilal
              </h1>
              <p className="text-xs text-slate-500 font-medium">Education Platform</p>
            </div>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-premium-sm border border-white/10 backdrop-blur-sm group"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-red-600 transition-colors" />
          ) : (
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-red-600 transition-colors" />
          )}
        </button>
      </div>
      
      <nav className="mt-8 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center px-4 py-4 mb-2 text-left rounded-xl transition-all duration-300 group relative overflow-hidden ${
                isActive 
                  ? `bg-gradient-to-r ${item.gradient} text-white shadow-premium transform scale-105` 
                  : 'text-slate-700 hover:bg-white/20 hover:text-red-600 hover:scale-105'
              }`}
            >
              {/* Animated background for active state */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50"></div>
              )}
              
              <div className={`relative z-10 text-xl mr-4 p-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'bg-white/20 shadow-premium-sm' 
                  : 'group-hover:bg-red-100 group-hover:text-red-600'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              {isOpen && (
                <div className="relative z-10 transition-all duration-300">
                  <span className="font-semibold text-sm block font-poppins">
                    {item.name}
                  </span>
                  <span className={`text-xs opacity-75 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                    {item.description}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 rounded-xl p-4 text-white shadow-premium relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="font-semibold mb-1 flex items-center font-poppins">
                <HelpCircle className="w-4 h-4 mr-2" />
                Need Help?
              </h3>
              <p className="text-sm opacity-90">Contact support for assistance</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
