
import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="glass backdrop-blur-xl shadow-premium-sm border-b border-white/20 px-8 py-6 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-3 rounded-xl hover:bg-white/20 transition-all duration-300 lg:hidden shadow-premium-sm border border-white/10 backdrop-blur-sm"
          >
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent font-poppins">
              Welcome Back
            </h2>
            <p className="text-slate-600 mt-1 font-medium">Manage your institution with elegance</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-12 pr-6 py-3 w-80 border border-white/20 rounded-xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 glass backdrop-blur-sm shadow-premium-sm transition-all duration-300 placeholder-slate-500 font-medium"
            />
            <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group">
              <Bell className="w-5 h-5 text-slate-600 group-hover:text-red-600 transition-colors" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-premium-sm animate-glow">
                3
              </div>
            </button>
            
            <div className="flex items-center space-x-3 glass backdrop-blur-sm rounded-xl p-3 shadow-premium-sm border border-white/10">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-premium-sm">
                <User className="w-5 h-5" />
              </div>
              <div className="hidden md:block">
                <span className="text-slate-900 font-semibold">Admin User</span>
                <p className="text-slate-500 text-sm font-medium">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

