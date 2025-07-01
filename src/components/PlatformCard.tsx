import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  name: string;
  followers: string;
  engagement: string;
  posts: number;
  icon: LucideIcon;
  color: string;
  isConnected: boolean;
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  followers,
  engagement,
  posts,
  icon: Icon,
  color,
  isConnected
}) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    pink: 'bg-pink-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500'
  }[color] || 'bg-gray-500';

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${colorClasses} text-white`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${
              isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
            }`}>
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Followers</span>
          <span className="font-semibold text-gray-900">{followers}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Engagement</span>
          <span className="font-semibold text-gray-900">{engagement}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Posts This Month</span>
          <span className="font-semibold text-gray-900">{posts}</span>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;