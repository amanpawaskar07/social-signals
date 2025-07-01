import React from 'react';
import { User, Settings, LogOut, HelpCircle, CreditCard, Radio } from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: User, label: 'Profile Settings', action: () => console.log('Profile') },
    { icon: CreditCard, label: 'Billing & Plans', action: () => console.log('Billing') },
    { icon: Settings, label: 'Account Settings', action: () => console.log('Settings') },
    { icon: HelpCircle, label: 'Help & Support', action: () => console.log('Help') },
    { icon: LogOut, label: 'Sign Out', action: () => console.log('Logout'), danger: true }
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">JD</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <p className="font-medium text-gray-900">John Doe</p>
            <p className="text-sm text-gray-600">john.doe@example.com</p>
            <p className="text-xs text-blue-600 font-medium">Pro Plan</p>
          </div>
        </div>
      </div>
      
      <div className="py-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => {
                item.action();
                onClose();
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                item.danger ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Radio className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">Social Signals</span>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Version 2.1.0</p>
          <p className="text-xs text-gray-500 mt-1">© 2024 Social Signals</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;