import React, { useState } from 'react';
import { Bell, Search, Settings, User, Radio } from 'lucide-react';
import NotificationPanel from './NotificationPanel';
import UserProfile from './UserProfile';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                Social Signals
              </h1>
              <p className="text-xs text-gray-500 font-medium">Analytics Dashboard</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search analytics..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 w-64"
            />
          </div>
          
          <div className="relative">
            <button 
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserProfile(false);
                setShowSettings(false);
              }}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <NotificationPanel 
              isOpen={showNotifications} 
              onClose={() => setShowNotifications(false)} 
            />
          </div>
          
          <div className="relative">
            <button 
              onClick={() => {
                setShowSettings(!showSettings);
                setShowNotifications(false);
                setShowUserProfile(false);
              }}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <Settings className="w-5 h-5" />
            </button>
            {showSettings && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    General Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    Notification Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    Privacy Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    Integration Settings
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => {
                setShowUserProfile(!showUserProfile);
                setShowNotifications(false);
                setShowSettings(false);
              }}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <User className="w-5 h-5" />
            </button>
            <UserProfile 
              isOpen={showUserProfile} 
              onClose={() => setShowUserProfile(false)} 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;