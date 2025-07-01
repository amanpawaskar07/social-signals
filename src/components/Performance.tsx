import React, { useState } from 'react';
import { TrendingUp, Award, Target, Zap, Users, Eye, Heart, MessageCircle } from 'lucide-react';
import Chart from './Chart';

const Performance: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  const performanceMetrics = [
    {
      title: 'Best Performing Platform',
      value: 'Instagram',
      subtitle: '6.2% avg engagement rate',
      icon: Award,
      color: 'text-yellow-600 bg-yellow-50',
      trend: '+15%'
    },
    {
      title: 'Top Content Type',
      value: 'Video Content',
      subtitle: '85% higher engagement',
      icon: Target,
      color: 'text-blue-600 bg-blue-50',
      trend: '+23%'
    },
    {
      title: 'Peak Engagement Time',
      value: '7-9 PM',
      subtitle: 'Weekdays perform best',
      icon: Zap,
      color: 'text-purple-600 bg-purple-50',
      trend: '+12%'
    },
    {
      title: 'Audience Growth',
      value: '2.3%',
      subtitle: 'Monthly growth rate',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-50',
      trend: '+8%'
    }
  ];

  const platformComparison = [
    { label: 'Instagram', value: 6.2, color: 'bg-gradient-to-t from-pink-500 to-rose-400' },
    { label: 'YouTube', value: 7.3, color: 'bg-gradient-to-t from-red-500 to-red-400' },
    { label: 'LinkedIn', value: 4.7, color: 'bg-gradient-to-t from-blue-600 to-blue-500' },
    { label: 'Facebook', value: 3.8, color: 'bg-gradient-to-t from-blue-500 to-indigo-500' },
    { label: 'Twitter', value: 2.9, color: 'bg-gradient-to-t from-sky-500 to-blue-500' }
  ];

  const contentPerformanceData = [
    { label: 'Jan', value: 3.2 },
    { label: 'Feb', value: 3.8 },
    { label: 'Mar', value: 4.1 },
    { label: 'Apr', value: 3.9 },
    { label: 'May', value: 4.5 },
    { label: 'Jun', value: 4.8 },
    { label: 'Jul', value: 5.2 }
  ];

  const topPosts = [
    {
      id: 1,
      title: 'Product Launch Video',
      platform: 'Instagram',
      engagement: 4850,
      reach: 89200,
      likes: 3240,
      comments: 456,
      shares: 189,
      date: '2024-01-15',
      performance: 'excellent'
    },
    {
      id: 2,
      title: 'Behind the Scenes Story',
      platform: 'Facebook',
      engagement: 3220,
      reach: 67400,
      likes: 2180,
      comments: 234,
      shares: 145,
      date: '2024-01-12',
      performance: 'good'
    },
    {
      id: 3,
      title: 'Industry Insights Thread',
      platform: 'Twitter',
      engagement: 1890,
      reach: 45300,
      likes: 1240,
      comments: 89,
      shares: 234,
      date: '2024-01-10',
      performance: 'good'
    },
    {
      id: 4,
      title: 'Customer Success Case Study',
      platform: 'LinkedIn',
      engagement: 2140,
      reach: 38900,
      likes: 1560,
      comments: 145,
      shares: 78,
      date: '2024-01-08',
      performance: 'average'
    }
  ];

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'excellent':
        return 'bg-green-100 text-green-800';
      case 'good':
        return 'bg-blue-100 text-blue-800';
      case 'average':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Insights</h1>
          <p className="text-gray-600 mt-1">Track and analyze your content performance across platforms</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-green-600 text-sm font-medium">{metric.trend}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
              <p className="text-sm text-gray-500">{metric.subtitle}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart 
          data={platformComparison}
          type="bar"
          title="Platform Engagement Comparison (%)"
        />
        <Chart 
          data={contentPerformanceData}
          type="line"
          title="Monthly Performance Trends"
        />
      </div>

      {/* Content Performance Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Content Performance Analysis</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSelectedMetric('engagement')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedMetric === 'engagement' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Engagement
            </button>
            <button
              onClick={() => setSelectedMetric('reach')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedMetric === 'reach' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Reach
            </button>
            <button
              onClick={() => setSelectedMetric('growth')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                selectedMetric === 'growth' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Growth
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <Eye className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-900">Total Reach</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">2.4M</p>
            <p className="text-sm text-green-600 font-medium">+18.2% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-900">Total Engagement</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">118K</p>
            <p className="text-sm text-green-600 font-medium">+12.5% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-900">New Followers</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">6.8K</p>
            <p className="text-sm text-green-600 font-medium">+8.3% from last month</p>
          </div>
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Posts</h3>
          <p className="text-gray-600 text-sm mt-1">Your best content from the past 30 days</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interactions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.title}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {post.platform}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{post.engagement.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{post.reach.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getPerformanceBadge(post.performance)}`}>
                      {post.performance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Performance;