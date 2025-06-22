
import React from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 px-8 py-6 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-3 rounded-xl hover:bg-gray-100 transition-colors lg:hidden shadow-sm border border-gray-200"
          >
            <span className="text-lg">☰</span>
          </button>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-1">Manage your institution with ease</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything..."
              className="pl-12 pr-6 py-3 w-80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/70 backdrop-blur-sm shadow-sm transition-all"
            />
            <span className="absolute left-4 top-3.5 text-gray-400 text-lg">🔍</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-3 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-xl">🔔</span>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                3
              </div>
            </button>
            
            <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-xl p-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                A
              </div>
              <div className="hidden md:block">
                <span className="text-gray-900 font-semibold">Admin User</span>
                <p className="text-gray-500 text-sm">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
