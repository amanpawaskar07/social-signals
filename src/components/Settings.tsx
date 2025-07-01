import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Globe, Database, Key, Radio } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true
  });

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Globe },
    { id: 'data', label: 'Data & Privacy', icon: Database },
    { id: 'api', label: 'API Keys', icon: Key }
  ];

  const connectedPlatforms = [
    { name: 'Instagram', connected: true, lastSync: '2 hours ago' },
    { name: 'Facebook', connected: true, lastSync: '1 hour ago' },
    { name: 'Twitter', connected: true, lastSync: '30 minutes ago' },
    { name: 'LinkedIn', connected: false, lastSync: 'Never' },
    { name: 'YouTube', connected: true, lastSync: '3 hours ago' },
    { name: 'TikTok', connected: false, lastSync: 'Never' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JD</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center">
                  <Radio className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                  Change Photo
                </button>
                <p className="text-sm text-gray-500 mt-1">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                rows={4}
                defaultValue="Social media manager and digital marketing enthusiast. Helping brands grow their online presence with Social Signals."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 capitalize">{key} Notifications</h4>
                      <p className="text-sm text-gray-600">
                        {key === 'email' && 'Receive notifications via email'}
                        {key === 'push' && 'Receive push notifications in browser'}
                        {key === 'sms' && 'Receive SMS notifications'}
                        {key === 'marketing' && 'Receive marketing and promotional emails'}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => setNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Password & Security</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Enable 2FA</h4>
                  <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
                  Enable
                </button>
              </div>
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Connected Platforms</h3>
              <div className="space-y-4">
                {connectedPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        platform.connected ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{platform.name}</h4>
                        <p className="text-sm text-gray-600">Last sync: {platform.lastSync}</p>
                      </div>
                    </div>
                    <button className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      platform.connected 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                    }`}>
                      {platform.connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <Radio className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Settings for {activeTab} coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-lg flex items-center justify-center">
          <Radio className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your Social Signals account settings and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            {renderTabContent()}
            
            <div className="flex items-center justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Cancel
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;