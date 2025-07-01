import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Eye, TrendingUp, Users, Clock, Zap } from 'lucide-react';
import Chart from './Chart';

const Engagement: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('overall');
  const [timeRange, setTimeRange] = useState('7d');

  const engagementMetrics = [
    {
      title: 'Total Interactions',
      value: '47.2K',
      change: '+18.5%',
      icon: MessageCircle,
      color: 'blue',
      trend: 'up'
    },
    {
      title: 'Engagement Rate',
      value: '6.8%',
      change: '+1.2%',
      icon: Heart,
      color: 'pink',
      trend: 'up'
    },
    {
      title: 'Share Rate',
      value: '2.4%',
      change: '+0.8%',
      icon: Share2,
      color: 'green',
      trend: 'up'
    },
    {
      title: 'Response Time',
      value: '12m',
      change: '-3m',
      icon: Clock,
      color: 'purple',
      trend: 'down'
    }
  ];

  const engagementTrendData = [
    { label: 'Mon', value: 4.2 },
    { label: 'Tue', value: 5.1 },
    { label: 'Wed', value: 6.8 },
    { label: 'Thu', value: 5.9 },
    { label: 'Fri', value: 7.2 },
    { label: 'Sat', value: 8.1 },
    { label: 'Sun', value: 6.5 }
  ];

  const interactionTypeData = [
    { label: 'Likes', value: 18500, color: 'bg-gradient-to-t from-pink-400 to-pink-600' },
    { label: 'Comments', value: 8200, color: 'bg-gradient-to-t from-blue-400 to-blue-600' },
    { label: 'Shares', value: 3400, color: 'bg-gradient-to-t from-green-400 to-green-600' },
    { label: 'Saves', value: 2100, color: 'bg-gradient-to-t from-purple-400 to-purple-600' }
  ];

  const topEngagingPosts = [
    {
      id: 1,
      content: 'Behind the scenes of our latest product development...',
      platform: 'Instagram',
      likes: 2840,
      comments: 156,
      shares: 89,
      engagement: 8.2,
      time: '2 hours ago'
    },
    {
      id: 2,
      content: 'Industry insights: The future of digital marketing',
      platform: 'LinkedIn',
      likes: 1920,
      comments: 234,
      shares: 145,
      engagement: 7.8,
      time: '5 hours ago'
    },
    {
      id: 3,
      content: 'Quick tip: How to improve your social media ROI',
      platform: 'Twitter',
      likes: 1560,
      comments: 89,
      shares: 234,
      engagement: 6.9,
      time: '1 day ago'
    }
  ];

  const engagementTools = [
    {
      title: 'Auto-Reply Setup',
      description: 'Set up automated responses for common questions',
      status: 'Active',
      responses: 156,
      icon: MessageCircle,
      color: 'bg-blue-500'
    },
    {
      title: 'Engagement Campaigns',
      description: 'Run targeted campaigns to boost interaction',
      status: 'Running',
      responses: 89,
      icon: Zap,
      color: 'bg-purple-500'
    },
    {
      title: 'Community Management',
      description: 'Monitor and respond to community interactions',
      status: 'Active',
      responses: 234,
      icon: Users,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Engagement Hub</h1>
          <p className="text-gray-600 mt-1">Monitor and boost your social media engagement</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="overall">Overall Engagement</option>
            <option value="likes">Likes</option>
            <option value="comments">Comments</option>
            <option value="shares">Shares</option>
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
            Create Campaign
          </button>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {engagementMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                  <p className={`text-sm font-medium mt-1 ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </p>
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
          data={engagementTrendData}
          type="line"
          title="Engagement Rate Trends (%)"
        />
        <Chart 
          data={interactionTypeData}
          type="bar"
          title="Interaction Types Breakdown"
        />
      </div>

      {/* Engagement Tools */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Engagement Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${tool.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{tool.title}</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {tool.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{tool.responses} responses</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Configure
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Engaging Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Top Engaging Posts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Likes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topEngagingPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 line-clamp-2">{post.content}</p>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {post.platform}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{post.likes.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{post.comments}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{post.shares}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-green-600">{post.engagement}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Boost
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Reply to Comments', count: 23, color: 'bg-blue-500', action: 'View All' },
          { title: 'Pending Mentions', count: 8, color: 'bg-yellow-500', action: 'Review' },
          { title: 'Direct Messages', count: 15, color: 'bg-green-500', action: 'Respond' },
          { title: 'Engagement Alerts', count: 5, color: 'bg-red-500', action: 'Check' }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-2xl font-bold text-gray-900">{item.count}</span>
            </div>
            <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              {item.action} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engagement;