import React from 'react';
import { Bell, X, Check, AlertCircle, TrendingUp, MessageCircle, Users } from 'lucide-react';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Campaign Performance',
      message: 'Your "Summer Launch" campaign exceeded engagement targets by 25%',
      time: '2 minutes ago',
      icon: TrendingUp,
      unread: true
    },
    {
      id: 2,
      type: 'info',
      title: 'New Comment',
      message: 'Sarah Johnson commented on your Instagram post',
      time: '15 minutes ago',
      icon: MessageCircle,
      unread: true
    },
    {
      id: 3,
      type: 'warning',
      title: 'Follower Milestone',
      message: 'Congratulations! You reached 50K followers on Twitter',
      time: '1 hour ago',
      icon: Users,
      unread: false
    },
    {
      id: 4,
      type: 'alert',
      title: 'Budget Alert',
      message: 'Your Facebook campaign has used 80% of its budget',
      time: '2 hours ago',
      icon: AlertCircle,
      unread: false
    },
    {
      id: 5,
      type: 'info',
      title: 'Scheduled Post',
      message: 'Your LinkedIn post has been published successfully',
      time: '3 hours ago',
      icon: Check,
      unread: false
    }
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'alert':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                notification.unread ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getNotificationColor(notification.type)}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Mark all as read
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-700 font-medium">
            View all notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;