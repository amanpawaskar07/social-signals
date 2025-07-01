import React, { useState } from 'react';
import { Users, TrendingUp, MapPin, Clock, Filter, Download, Eye, Heart, MessageCircle, FileText, BarChart3 } from 'lucide-react';
import Chart from './Chart';

const Audience: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [isExporting, setIsExporting] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const audienceGrowthData = [
    { label: 'Jan', value: 12500 },
    { label: 'Feb', value: 15200 },
    { label: 'Mar', value: 18900 },
    { label: 'Apr', value: 22100 },
    { label: 'May', value: 26800 },
    { label: 'Jun', value: 31200 },
    { label: 'Jul', value: 35600 }
  ];

  const ageDistributionData = [
    { label: '13-17', value: 8, color: 'bg-gradient-to-t from-purple-400 to-purple-600' },
    { label: '18-24', value: 28, color: 'bg-gradient-to-t from-blue-400 to-blue-600' },
    { label: '25-34', value: 35, color: 'bg-gradient-to-t from-green-400 to-green-600' },
    { label: '35-44', value: 20, color: 'bg-gradient-to-t from-yellow-400 to-yellow-600' },
    { label: '45-54', value: 7, color: 'bg-gradient-to-t from-orange-400 to-orange-600' },
    { label: '55+', value: 2, color: 'bg-gradient-to-t from-red-400 to-red-600' }
  ];

  const topLocations = [
    { country: 'United States', percentage: 32, followers: '11,200', flag: '🇺🇸' },
    { country: 'United Kingdom', percentage: 18, followers: '6,300', flag: '🇬🇧' },
    { country: 'Canada', percentage: 12, followers: '4,200', flag: '🇨🇦' },
    { country: 'Australia', percentage: 8, followers: '2,800', flag: '🇦🇺' },
    { country: 'Germany', percentage: 6, followers: '2,100', flag: '🇩🇪' },
    { country: 'France', percentage: 5, followers: '1,750', flag: '🇫🇷' },
    { country: 'Others', percentage: 19, followers: '6,650', flag: '🌍' }
  ];

  const audienceInterests = [
    { interest: 'Technology', percentage: 45, color: 'bg-blue-500' },
    { interest: 'Business', percentage: 38, color: 'bg-green-500' },
    { interest: 'Design', percentage: 32, color: 'bg-purple-500' },
    { interest: 'Marketing', percentage: 28, color: 'bg-pink-500' },
    { interest: 'Entrepreneurship', percentage: 25, color: 'bg-indigo-500' },
    { interest: 'Innovation', percentage: 22, color: 'bg-cyan-500' }
  ];

  const engagementByTime = [
    { label: '6AM', value: 12 },
    { label: '9AM', value: 28 },
    { label: '12PM', value: 45 },
    { label: '3PM', value: 38 },
    { label: '6PM', value: 62 },
    { label: '9PM', value: 78 },
    { label: '12AM', value: 35 }
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
    link.download = `social-signals-audience-insights-${new Date().toISOString().split('T')[0]}.${format}`;
    link.click();
    setShowExportModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Audience Insights</h1>
          <p className="text-gray-600 mt-1">Understand your audience demographics and behavior patterns</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Platforms</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
          </select>
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
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

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Audience', value: '35.6K', change: '+12.5%', icon: Users, color: 'blue' },
          { title: 'Growth Rate', value: '2.3%', change: '+0.4%', icon: TrendingUp, color: 'green' },
          { title: 'Avg. Engagement', value: '4.8%', change: '+0.7%', icon: Heart, color: 'pink' },
          { title: 'Active Hours', value: '6-9 PM', change: 'Peak time', icon: Clock, color: 'purple' }
        ].map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">{metric.change}</p>
                </div>
                <div className={`p-3 rounded-xl bg-${metric.color}-50 text-${metric.color}-600`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart 
          data={audienceGrowthData}
          type="line"
          title="Audience Growth Over Time"
        />
        <Chart 
          data={ageDistributionData}
          type="bar"
          title="Age Distribution (%)"
        />
      </div>

      {/* Demographics and Interests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Locations</h3>
            <MapPin className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{location.flag}</span>
                  <div>
                    <p className="font-medium text-gray-900">{location.country}</p>
                    <p className="text-sm text-gray-600">{location.followers} followers</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{location.percentage}%</p>
                  <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${location.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audience Interests */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Interests</h3>
          <div className="space-y-4">
            {audienceInterests.map((interest, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{interest.interest}</span>
                  <span className="text-sm text-gray-600">{interest.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${interest.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${interest.percentage}%`,
                      animation: `growWidth 1.5s ease-out ${index * 0.1}s both`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement by Time */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Optimal Posting Times</h3>
        <Chart 
          data={engagementByTime}
          type="bar"
          title="Engagement Rate by Hour"
          height={250}
        />
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Insight:</strong> Your audience is most active between 6-9 PM. Consider scheduling your most important content during these peak hours for maximum engagement.
          </p>
        </div>
      </div>

      {/* Audience Segments */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Audience Segments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Tech Enthusiasts',
              size: '45%',
              description: 'Interested in technology, gadgets, and innovation',
              engagement: 'High',
              color: 'bg-blue-100 text-blue-800'
            },
            {
              title: 'Business Professionals',
              size: '35%',
              description: 'Entrepreneurs, managers, and business owners',
              engagement: 'Medium',
              color: 'bg-green-100 text-green-800'
            },
            {
              title: 'Creative Minds',
              size: '20%',
              description: 'Designers, artists, and creative professionals',
              engagement: 'Very High',
              color: 'bg-purple-100 text-purple-800'
            }
          ].map((segment, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{segment.title}</h4>
                <span className="text-lg font-bold text-blue-600">{segment.size}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{segment.description}</p>
              <span className={`px-2 py-1 text-xs rounded-full font-medium ${segment.color}`}>
                {segment.engagement} Engagement
              </span>
            </div>
          ))}
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
              <p className="text-gray-600">Your audience insights data has been successfully exported and is ready for download.</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Audience Insights Export</span>
                </div>
                <span className="text-sm text-gray-500">CSV</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Audience demographics data</p>
                <p>• Geographic distribution</p>
                <p>• Age and interest breakdowns</p>
                <p>• Engagement timing insights</p>
                <p>• Growth metrics and trends</p>
                <p>• Audience segment analysis</p>
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

      <style jsx>{`
        @keyframes growWidth {
          from {
            width: 0;
          }
          to {
            width: ${100}%;
          }
        }
      `}</style>
    </div>
  );
};

export default Audience;