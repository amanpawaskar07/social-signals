import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Scheduling from './components/Scheduling';
import Performance from './components/Performance';
import Audience from './components/Audience';
import Engagement from './components/Engagement';
import Campaigns from './components/Campaigns';
import Settings from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'scheduling':
        return <Scheduling />;
      case 'performance':
        return <Performance />;
      case 'audience':
        return <Audience />;
      case 'engagement':
        return <Engagement />;
      case 'campaigns':
        return <Campaigns />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-inter">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;