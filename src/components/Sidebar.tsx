import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Home, 
  TrendingUp, 
  Users, 
  MessageSquare,
  Target,
  Settings,
  ChevronLeft,
  ChevronRight,
  Radio
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'scheduling', label: 'Scheduling', icon: Calendar },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'audience', label: 'Audience', icon: Users },
    { id: 'engagement', label: 'Engagement', icon: MessageSquare },
    { id: 'campaigns', label: 'Campaigns', icon: Target },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className={`bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white h-screen sticky top-0 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        {!collapsed && (
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
              <span className="font-bold text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Social Signals
              </span>
              <p className="text-xs text-gray-400 font-medium">Analytics Pro</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:scale-105'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-300 font-medium">Live Analytics</span>
            </div>
            <p className="text-xs text-gray-400">Real-time data streaming</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;