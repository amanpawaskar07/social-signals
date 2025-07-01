import React, { useState } from 'react';
import { Target, Plus, Play, Pause, BarChart3, Calendar, DollarSign, Users, TrendingUp, Eye, Check, X } from 'lucide-react';
import Chart from './Chart';

const Campaigns: React.FC = () => {
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState('all');
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    objective: 'Brand Awareness',
    platforms: [] as string[],
    budget: '',
    duration: '',
    audience: ''
  });

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Summer Product Launch',
      status: 'active',
      platform: ['Instagram', 'Facebook'],
      budget: '$5,000',
      spent: '$3,200',
      reach: '450K',
      engagement: '6.2%',
      conversions: 234,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      objective: 'Brand Awareness'
    },
    {
      id: 2,
      name: 'Holiday Sales Campaign',
      status: 'paused',
      platform: ['Twitter', 'LinkedIn'],
      budget: '$3,500',
      spent: '$2,100',
      reach: '280K',
      engagement: '4.8%',
      conversions: 156,
      startDate: '2024-01-10',
      endDate: '2024-01-31',
      objective: 'Lead Generation'
    },
    {
      id: 3,
      name: 'Brand Awareness Drive',
      status: 'completed',
      platform: ['YouTube', 'Instagram'],
      budget: '$8,000',
      spent: '$7,800',
      reach: '1.2M',
      engagement: '8.1%',
      conversions: 445,
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      objective: 'Brand Awareness'
    }
  ]);

  const campaignStats = [
    {
      title: 'Active Campaigns',
      value: campaigns.filter(c => c.status === 'active').length.toString(),
      change: '+3',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Total Reach',
      value: '2.4M',
      change: '+18.5%',
      icon: Eye,
      color: 'green'
    },
    {
      title: 'Conversion Rate',
      value: '3.8%',
      change: '+0.7%',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Total Spend',
      value: '$12.4K',
      change: '+$2.1K',
      icon: DollarSign,
      color: 'orange'
    }
  ];

  const campaignPerformanceData = [
    { label: 'Week 1', value: 2.3 },
    { label: 'Week 2', value: 3.1 },
    { label: 'Week 3', value: 4.2 },
    { label: 'Week 4', value: 3.8 },
    { label: 'Week 5', value: 4.9 },
    { label: 'Week 6', value: 5.2 }
  ];

  const budgetAllocationData = [
    { label: 'Instagram', value: 35, color: 'bg-gradient-to-t from-pink-400 to-pink-600' },
    { label: 'Facebook', value: 28, color: 'bg-gradient-to-t from-blue-400 to-blue-600' },
    { label: 'Twitter', value: 20, color: 'bg-gradient-to-t from-sky-400 to-sky-600' },
    { label: 'LinkedIn', value: 12, color: 'bg-gradient-to-t from-blue-600 to-blue-700' },
    { label: 'YouTube', value: 5, color: 'bg-gradient-to-t from-red-400 to-red-600' }
  ];

  const platforms = ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const togglePlatform = (platform: string) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert('Please enter a campaign name');
      return false;
    }
    if (formData.platforms.length === 0) {
      alert('Please select at least one platform');
      return false;
    }
    if (!formData.budget || parseFloat(formData.budget) <= 0) {
      alert('Please enter a valid budget amount');
      return false;
    }
    if (!formData.duration || parseInt(formData.duration) <= 0) {
      alert('Please enter a valid duration');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      objective: 'Brand Awareness',
      platforms: [],
      budget: '',
      duration: '',
      audience: ''
    });
  };

  const handleSaveDraft = async () => {
    if (!validateForm()) return;

    setIsSavingDraft(true);
    
    // Simulate saving draft
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newDraft = {
      id: Date.now(),
      name: formData.name,
      status: 'draft',
      platform: formData.platforms,
      budget: `$${formData.budget}`,
      spent: '$0',
      reach: '0',
      engagement: '0%',
      conversions: 0,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + parseInt(formData.duration) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      objective: formData.objective
    };

    setCampaigns(prev => [...prev, newDraft]);
    setIsSavingDraft(false);
    setSuccessMessage('Campaign draft saved successfully! You can find it in your campaigns list.');
    setShowSuccessModal(true);
    resetForm();
    setShowNewCampaign(false);
  };

  const handleLaunchCampaign = async () => {
    if (!validateForm()) return;

    setIsCreatingCampaign(true);
    
    // Simulate campaign creation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newCampaign = {
      id: Date.now(),
      name: formData.name,
      status: 'active',
      platform: formData.platforms,
      budget: `$${formData.budget}`,
      spent: '$0',
      reach: '0',
      engagement: '0%',
      conversions: 0,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + parseInt(formData.duration) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      objective: formData.objective
    };

    setCampaigns(prev => [...prev, newCampaign]);
    setIsCreatingCampaign(false);
    setSuccessMessage(`Campaign "${formData.name}" launched successfully! It's now active and running.`);
    setShowSuccessModal(true);
    resetForm();
    setShowNewCampaign(false);
  };

  const closeModal = () => {
    setShowNewCampaign(false);
    resetForm();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'draft':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Play className="w-4 h-4" />;
      case 'paused':
        return <Pause className="w-4 h-4" />;
      default:
        return <BarChart3 className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
          <p className="text-gray-600 mt-1">Create, monitor, and optimize your marketing campaigns</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Campaigns</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="completed">Completed</option>
            <option value="draft">Drafts</option>
          </select>
          <button
            onClick={() => setShowNewCampaign(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5" />
            <span>New Campaign</span>
          </button>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {campaignStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
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
          data={campaignPerformanceData}
          type="line"
          title="Campaign Performance Trends"
        />
        <Chart 
          data={budgetAllocationData}
          type="bar"
          title="Budget Allocation by Platform (%)"
        />
      </div>

      {/* Campaign List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Campaigns</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platforms</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns
                .filter(campaign => selectedCampaign === 'all' || campaign.status === selectedCampaign)
                .map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{campaign.name}</p>
                      <p className="text-sm text-gray-500">{campaign.objective}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(campaign.status)}`}>
                        {getStatusIcon(campaign.status)}
                        <span className="capitalize">{campaign.status}</span>
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {campaign.platform.map((platform, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{campaign.budget}</p>
                      <p className="text-sm text-gray-500">Spent: {campaign.spent}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{campaign.reach}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-green-600">{campaign.engagement}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{campaign.conversions}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaign Templates */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Campaign Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Brand Awareness',
              description: 'Increase brand visibility and recognition',
              platforms: ['Instagram', 'Facebook', 'Twitter'],
              estimatedReach: '500K+',
              color: 'bg-blue-500'
            },
            {
              title: 'Lead Generation',
              description: 'Generate qualified leads for your business',
              platforms: ['LinkedIn', 'Facebook'],
              estimatedReach: '200K+',
              color: 'bg-green-500'
            },
            {
              title: 'Product Launch',
              description: 'Promote new products or services',
              platforms: ['Instagram', 'YouTube', 'Twitter'],
              estimatedReach: '750K+',
              color: 'bg-purple-500'
            }
          ].map((template, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${template.color} text-white`}>
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-900">{template.title}</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">{template.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {template.platforms.map((platform, platformIndex) => (
                  <span key={platformIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {platform}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Est. reach: {template.estimatedReach}</span>
                <button 
                  onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      objective: template.title,
                      platforms: template.platforms
                    }));
                    setShowNewCampaign(true);
                  }}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Campaign Modal */}
      {showNewCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Create New Campaign</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter campaign name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Objective</label>
                <select 
                  value={formData.objective}
                  onChange={(e) => handleInputChange('objective', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Brand Awareness</option>
                  <option>Lead Generation</option>
                  <option>Website Traffic</option>
                  <option>Conversions</option>
                  <option>Engagement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Platforms *</label>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map(platform => (
                    <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={formData.platforms.includes(platform)}
                        onChange={() => togglePlatform(platform)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                      />
                      <span className="text-sm text-gray-700">{platform}</span>
                      {formData.platforms.includes(platform) && (
                        <Check className="w-4 h-4 text-blue-600" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget ($) *</label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (days) *</label>
                  <input
                    type="number"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    placeholder="30"
                    min="1"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                <textarea
                  value={formData.audience}
                  onChange={(e) => handleInputChange('audience', e.target.value)}
                  placeholder="Describe your target audience..."
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex items-center justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveDraft}
                disabled={isSavingDraft}
                className="flex items-center space-x-2 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSavingDraft ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <span>Save Draft</span>
                )}
              </button>
              <button 
                onClick={handleLaunchCampaign}
                disabled={isCreatingCampaign}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreatingCampaign ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Launching...</span>
                  </>
                ) : (
                  <span>Launch Campaign</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">{successMessage}</p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;