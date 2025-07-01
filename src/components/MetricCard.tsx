import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  color 
}) => {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  }[changeType];

  const bgColor = {
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    pink: 'bg-pink-50 text-pink-600',
    indigo: 'bg-indigo-50 text-indigo-600'
  }[color] || 'bg-gray-50 text-gray-600';

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
          <p className={`text-sm font-medium ${changeColor}`}>
            {changeType === 'positive' ? '+' : changeType === 'negative' ? '-' : ''}{change}
          </p>
        </div>
        <div className={`p-3 rounded-xl ${bgColor}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;