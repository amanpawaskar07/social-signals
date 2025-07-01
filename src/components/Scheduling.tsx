import React, { useState } from 'react';
import { Calendar, Clock, Plus, Image, Video, FileText, Send, Check, X } from 'lucide-react';
import { format, addDays } from 'date-fns';

const Scheduling: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showNewPost, setShowNewPost] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [scheduledDate, setScheduledDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [scheduledTime, setScheduledTime] = useState('12:00');
  const [isScheduling, setIsScheduling] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [scheduledPosts, setScheduledPosts] = useState([
    {
      id: 1,
      content: 'Exciting product launch announcement! 🚀 Stay tuned for something amazing...',
      platforms: ['Instagram', 'Facebook'],
      scheduledTime: addDays(new Date(), 1),
      status: 'scheduled',
      type: 'image'
    },
    {
      id: 2,
      content: 'Behind the scenes look at our team working on the next big feature',
      platforms: ['Twitter', 'LinkedIn'],
      scheduledTime: addDays(new Date(), 2),
      status: 'scheduled',
      type: 'video'
    },
    {
      id: 3,
      content: 'Weekly industry insights and trends you should know about',
      platforms: ['LinkedIn'],
      scheduledTime: addDays(new Date(), 3),
      status: 'draft',
      type: 'text'
    }
  ]);

  const platforms = [
    { id: 'instagram', name: 'Instagram', color: 'bg-pink-500' },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-600' },
    { id: 'twitter', name: 'Twitter', color: 'bg-sky-500' },
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700' },
    { id: 'youtube', name: 'YouTube', color: 'bg-red-600' }
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setPostContent('');
    setSelectedPlatforms([]);
    setScheduledDate(format(new Date(), 'yyyy-MM-dd'));
    setScheduledTime('12:00');
    setUploadedFiles([]);
  };

  const validateForm = () => {
    if (!postContent.trim()) {
      alert('Please enter post content');
      return false;
    }
    if (selectedPlatforms.length === 0) {
      alert('Please select at least one platform');
      return false;
    }
    return true;
  };

  const handleSaveDraft = async () => {
    if (!validateForm()) return;

    setIsSavingDraft(true);
    
    // Simulate saving draft
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newDraft = {
      id: Date.now(),
      content: postContent,
      platforms: selectedPlatforms.map(id => platforms.find(p => p.id === id)?.name || id),
      scheduledTime: new Date(`${scheduledDate}T${scheduledTime}`),
      status: 'draft',
      type: uploadedFiles.length > 0 ? (uploadedFiles[0].type.startsWith('video/') ? 'video' : 'image') : 'text'
    };

    setScheduledPosts(prev => [...prev, newDraft]);
    setIsSavingDraft(false);
    setSuccessMessage('Draft saved successfully! You can find it in your drafts.');
    setShowSuccessModal(true);
    resetForm();
  };

  const handleSchedulePost = async () => {
    if (!validateForm()) return;

    const scheduledDateTime = new Date(`${scheduledDate}T${scheduledTime}`);
    if (scheduledDateTime <= new Date()) {
      alert('Please select a future date and time');
      return;
    }

    setIsScheduling(true);
    
    // Simulate scheduling post
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newPost = {
      id: Date.now(),
      content: postContent,
      platforms: selectedPlatforms.map(id => platforms.find(p => p.id === id)?.name || id),
      scheduledTime: scheduledDateTime,
      status: 'scheduled',
      type: uploadedFiles.length > 0 ? (uploadedFiles[0].type.startsWith('video/') ? 'video' : 'image') : 'text'
    };

    setScheduledPosts(prev => [...prev, newPost]);
    setIsScheduling(false);
    setSuccessMessage(`Post scheduled successfully for ${format(scheduledDateTime, 'MMM d, yyyy at h:mm a')}!`);
    setShowSuccessModal(true);
    resetForm();
  };

  const closeModal = () => {
    setShowNewPost(false);
    resetForm();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Scheduling</h1>
          <p className="text-gray-600 mt-1">Plan and schedule your social media content</p>
        </div>
        <button
          onClick={() => setShowNewPost(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5" />
          <span>New Post</span>
        </button>
      </div>

      {/* Calendar View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Content Calendar</h3>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const date = addDays(new Date(), i - 15);
                const hasPost = scheduledPosts.some(post => 
                  format(post.scheduledTime, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                );
                const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
                
                return (
                  <div
                    key={i}
                    className={`p-2 text-center text-sm rounded-lg cursor-pointer transition-all duration-200 ${
                      isToday 
                        ? 'bg-blue-500 text-white' 
                        : hasPost 
                          ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' 
                          : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {format(date, 'd')}
                    {hasPost && (
                      <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
                        isToday ? 'bg-white' : 'bg-purple-500'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Posts */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Posts</h3>
          <div className="space-y-4">
            {scheduledPosts.map(post => {
              const Icon = post.type === 'image' ? Image : post.type === 'video' ? Video : FileText;
              return (
                <div key={post.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 mb-2 line-clamp-2">{post.content}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {post.platforms.map(platform => (
                          <span key={platform} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {platform}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{format(post.scheduledTime, 'MMM d, h:mm a')}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          post.status === 'scheduled' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Create New Post</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">{postContent.length}/280 characters</p>
              </div>

              {/* Platforms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Platforms *</label>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map(platform => (
                    <button
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-200 ${
                        selectedPlatforms.includes(platform.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded ${platform.color}`} />
                      <span className="font-medium">{platform.name}</span>
                      {selectedPlatforms.includes(platform.id) && (
                        <Check className="w-4 h-4 text-blue-600 ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    min={format(new Date(), 'yyyy-MM-dd')}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Media Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Media</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-200">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Image className="w-8 h-8 text-gray-400" />
                    <Video className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600 mb-2">Drag & drop media here or click to browse</p>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Choose Files
                  </label>
                </div>
                
                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          {file.type.startsWith('video/') ? (
                            <Video className="w-4 h-4 text-blue-600" />
                          ) : (
                            <Image className="w-4 h-4 text-green-600" />
                          )}
                          <span className="text-sm text-gray-700">{file.name}</span>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
                  <>
                    <FileText className="w-4 h-4" />
                    <span>Save Draft</span>
                  </>
                )}
              </button>
              <button 
                onClick={handleSchedulePost}
                disabled={isScheduling}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScheduling ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Scheduling...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Schedule Post</span>
                  </>
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

export default Scheduling;