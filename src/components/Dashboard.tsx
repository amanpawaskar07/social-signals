import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Share2, 
  Eye,
  TrendingUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Download,
  FileText,
  Calendar,
  BarChart3
} from 'lucide-react';
import MetricCard from './MetricCard';
import PlatformCard from './PlatformCard';
import Chart from './Chart';

const Dashboard: React.FC = () => {
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const metrics = [
    {
      title: 'Total Followers',
      value: '284.7K',
      change: '12.5%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      change: '0.3%',
      changeType: 'positive' as const,
      icon: Heart,
      color: 'purple'
    },
    {
      title: 'Total Reach',
      value: '1.2M',
      change: '8.2%',
      changeType: 'positive' as const,
      icon: Eye,
      color: 'green'
    },
    {
      title: 'Post Performance',
      value: '94.2',
      change: '2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      followers: '125.4K',
      engagement: '3.2%',
      posts: 24,
      icon: Facebook,
      color: 'blue',
      isConnected: true
    },
    {
      name: 'Instagram',
      followers: '89.7K',
      engagement: '6.1%',
      posts: 18,
      icon: Instagram,
      color: 'pink',
      isConnected: true
    },
    {
      name: 'Twitter',
      followers: '45.2K',
      engagement: '2.9%',
      posts: 32,
      icon: Twitter,
      color: 'indigo',
      isConnected: true
    },
    {
      name: 'LinkedIn',
      followers: '24.4K',
      engagement: '4.7%',
      posts: 12,
      icon: Linkedin,
      color: 'blue',
      isConnected: false
    },
    {
      name: 'YouTube',
      followers: '15.8K',
      engagement: '7.3%',
      posts: 8,
      icon: Youtube,
      color: 'red',
      isConnected: true
    }
  ];

  const engagementData = [
    { label: 'Mon', value: 245 },
    { label: 'Tue', value: 380 },
    { label: 'Wed', value: 290 },
    { label: 'Thu', value: 420 },
    { label: 'Fri', value: 350 },
    { label: 'Sat', value: 480 },
    { label: 'Sun', value: 390 }
  ];

  const postPerformanceData = [
    { label: 'Likes', value: 1420, color: 'bg-gradient-to-t from-pink-500 to-rose-400' },
    { label: 'Comments', value: 340, color: 'bg-gradient-to-t from-blue-500 to-cyan-400' },
    { label: 'Shares', value: 180, color: 'bg-gradient-to-t from-green-500 to-emerald-400' },
    { label: 'Saves', value: 95, color: 'bg-gradient-to-t from-purple-500 to-violet-400' }
  ];

  // New data for post performance trends
  const postPerformanceTrends = [
    { label: 'Week 1', value: 85 },
    { label: 'Week 2', value: 92 },
    { label: 'Week 3', value: 78 },
    { label: 'Week 4', value: 94 },
    { label: 'Week 5', value: 88 },
    { label: 'Week 6', value: 96 },
    { label: 'Week 7', value: 94 }
  ];

  const handleGenerateReport = async () => {
    setIsGeneratingReport(true);
    
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsGeneratingReport(false);
    setShowReportModal(true);
  };

  const downloadReport = (format: string) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `social-signals-report-${new Date().toISOString().split('T')[0]}.${format}`;
    link.click();
    setShowReportModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Monitor your social media performance across all platforms</p>
        </div>
        <button 
          onClick={handleGenerateReport}
          disabled={isGeneratingReport}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isGeneratingReport ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              <span>Generate Report</span>
            </>
          )}
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart 
          data={engagementData}
          type="line"
          title="Weekly Engagement Trends"
        />
        <div className="space-y-4">
          <Chart 
            data={postPerformanceData}
            type="bar"
            title="Post Performance Breakdown"
            height={200}
          />
          <Chart 
            data={postPerformanceTrends}
            type="line"
            title="Performance Score Trends"
            height={180}
          />
        </div>
      </div>

      {/* Platforms Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            {
              action: 'New post published on Instagram',
              time: '2 hours ago',
              engagement: '+127 interactions',
              type: 'success'
            },
            {
              action: 'Facebook campaign completed',
              time: '4 hours ago',
              engagement: '94% completion rate',
              type: 'info'
            },
            {
              action: 'Twitter engagement spike detected',
              time: '6 hours ago',
              engagement: '+45% above average',
              type: 'warning'
            },
            {
              action: 'LinkedIn post reached milestone',
              time: '1 day ago',
              engagement: '1,000+ views',
              type: 'success'
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'info' ? 'bg-blue-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' : 'bg-gray-500'
                }`} />
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700">{activity.engagement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Report Generation Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Report Generated Successfully!</h3>
              <p className="text-gray-600">Your comprehensive analytics report is ready for download.</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Analytics Report</span>
                </div>
                <span className="text-sm text-gray-500">PDF</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Platform performance metrics</p>
                <p>• Engagement analytics</p>
                <p>• Audience insights</p>
                <p>• Growth recommendations</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowReportModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={() => downloadReport('pdf')}
                className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;