import React, { useState } from 'react';
import { Calendar, Download, Filter, TrendingUp, Users, Eye, Heart, FileText, BarChart3 } from 'lucide-react';
import Chart from './Chart';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [isExporting, setIsExporting] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const audienceData = [
    { label: '18-24', value: 125, color: 'bg-gradient-to-t from-purple-500 to-indigo-500' },
    { label: '25-34', value: 380, color: 'bg-gradient-to-t from-blue-500 to-cyan-500' },
    { label: '35-44', value: 290, color: 'bg-gradient-to-t from-green-500 to-teal-500' },
    { label: '45-54', value: 180, color: 'bg-gradient-to-t from-yellow-500 to-orange-500' },
    { label: '55+', value: 95, color: 'bg-gradient-to-t from-pink-500 to-rose-500' }
  ];

  const contentPerformanceData = [
    { label: 'Videos', value: 850, color: 'bg-gradient-to-t from-purple-500 to-indigo-500' },
    { label: 'Images', value: 620, color: 'bg-gradient-to-t from-blue-500 to-cyan-500' },
    { label: 'Carousels', value: 420, color: 'bg-gradient-to-t from-green-500 to-teal-500' },
    { label: 'Stories', value: 340, color: 'bg-gradient-to-t from-pink-500 to-rose-500' }
  ];

  const engagementTrendData = [
    { label: 'Week 1', value: 2.3 },
    { label: 'Week 2', value: 2.8 },
    { label: 'Week 3', value: 3.1 },
    { label: 'Week 4', value: 2.9 },
    { label: 'Week 5', value: 3.4 },
    { label: 'Week 6', value: 3.8 },
    { label: 'Week 7', value: 4.2 }
  ];

  const handleExport = async () => {
    setIsExporting(true);
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsExporting(false);
    setShowExportModal(true);
  };

  const downloadExport = (format: string) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `social-signals-analytics-${new Date().toISOString().split('T')[0]}.${format}`;
    link.click();
    setShowExportModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Advanced Analytics</h1>
          <p className="text-gray-600 mt-1">Deep insights into your social media performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Platforms</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Exporting...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Export</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Impressions', value: '2.4M', change: '+18.2%', icon: Eye, color: 'blue' },
          { title: 'Unique Reach', value: '847K', change: '+12.5%', icon: Users, color: 'green' },
          { title: 'Engagement Rate', value: '4.8%', change: '+0.7%', icon: Heart, color: 'pink' },
          { title: 'Growth Rate', value: '2.3%', change: '+0.4%', icon: TrendingUp, color: 'purple' }
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">+{metric.change}</p>
                </div>
                <div className={`p-3 rounded-xl bg-${metric.color}-50 text-${metric.color}-600`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart 
          data={engagementTrendData}
          type="line"
          title="Engagement Rate Trends"
        />
        <Chart 
          data={contentPerformanceData}
          type="bar"
          title="Content Type Performance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audience Demographics with Chart */}
        <Chart 
          data={audienceData}
          type="bar"
          title="Audience Age Demographics"
        />

        {/* Top Performing Posts */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Posts</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Product Launch Announcement',
                platform: 'Instagram',
                engagement: '2.4K',
                reach: '45.2K',
                date: '2 days ago'
              },
              {
                title: 'Behind the Scenes Content',
                platform: 'Facebook',
                engagement: '1.8K',
                reach: '32.1K',
                date: '4 days ago'
              },
              {
                title: 'Customer Success Story',
                platform: 'LinkedIn',
                engagement: '890',
                reach: '18.7K',
                date: '1 week ago'
              },
              {
                title: 'Industry Insights Thread',
                platform: 'Twitter',
                engagement: '567',
                reach: '12.3K',
                date: '1 week ago'
              }
            ].map((post, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <h4 className="font-medium text-gray-900 mb-2">{post.title}</h4>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{post.platform}</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600 font-medium">{post.engagement} engagements</span>
                  <span className="text-gray-600">{post.reach} reach</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Platform Performance Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posts</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { platform: 'Instagram', posts: 24, reach: '342K', engagement: '6.2%', growth: '+12%', roi: '340%' },
                { platform: 'Facebook', posts: 18, reach: '289K', engagement: '3.8%', growth: '+8%', roi: '280%' },
                { platform: 'Twitter', posts: 32, reach: '156K', engagement: '2.9%', growth: '+15%', roi: '220%' },
                { platform: 'LinkedIn', posts: 12, reach: '89K', engagement: '4.7%', growth: '+6%', roi: '190%' },
                { platform: 'YouTube', posts: 8, reach: '67K', engagement: '7.3%', growth: '+18%', roi: '410%' }
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.platform}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.posts}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.reach}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.engagement}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">{row.growth}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">{row.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Success Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Export Complete!</h3>
              <p className="text-gray-600">Your analytics data has been successfully exported and is ready for download.</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Analytics Export</span>
                </div>
                <span className="text-sm text-gray-500">CSV</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Platform performance data</p>
                <p>• Engagement metrics</p>
                <p>• Audience demographics</p>
                <p>• Content performance breakdown</p>
                <p>• Time-based analytics</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowExportModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={() => downloadExport('csv')}
                className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download CSV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;