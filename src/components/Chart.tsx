import React from 'react';

interface ChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  type: 'bar' | 'line' | 'pie';
  title: string;
  height?: number;
}

const Chart: React.FC<ChartProps> = ({ data, type, title, height = 300 }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  if (type === 'bar') {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="flex items-end justify-between space-x-2" style={{ height: height }}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className={`w-full rounded-t-lg transition-all duration-1000 hover:opacity-80 cursor-pointer relative group ${
                  item.color || 'bg-gradient-to-t from-blue-500 to-purple-600'
                }`}
                style={{ 
                  height: `${(item.value / maxValue) * 80}%`,
                  animation: `growUp 1s ease-out ${index * 0.1}s both`
                }}
                title={`${item.label}: ${item.value}`}
              >
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                  {item.value.toLocaleString()}
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-600 font-medium">{item.label}</p>
                <p className="text-sm font-semibold text-gray-900">{item.value.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes growUp {
            from {
              height: 0;
            }
            to {
              height: ${(100 / maxValue) * 80}%;
            }
          }
        `}</style>
      </div>
    );
  }

  if (type === 'line') {
    const width = 400;
    const chartHeight = height - 100;
    const padding = 40;
    
    const xStep = (width - 2 * padding) / (data.length - 1);
    const yStep = (chartHeight - 2 * padding) / maxValue;
    
    const points = data.map((item, index) => ({
      x: padding + index * xStep,
      y: chartHeight - padding - (item.value * yStep)
    }));
    
    const pathData = points.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');

    const areaPathData = `${pathData} L ${points[points.length - 1].x} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`;

    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <svg width={width} height={chartHeight + 60} className="w-full">
          <defs>
            <linearGradient id={`lineGradient-${title.replace(/\s+/g, '-')}`} x1="0%\" y1="0%\" x2="100%\" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id={`areaGradient-${title.replace(/\s+/g, '-')}`} x1="0%\" y1="0%\" x2="0%\" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          <g className="opacity-20">
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1={padding}
                y1={padding + (i * (chartHeight - 2 * padding) / 4)}
                x2={width - padding}
                y2={padding + (i * (chartHeight - 2 * padding) / 4)}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            ))}
          </g>
          
          {/* Area fill */}
          <path
            d={areaPathData}
            fill={`url(#areaGradient-${title.replace(/\s+/g, '-')})`}
            className="opacity-50"
          />
          
          {/* Line */}
          <path
            d={pathData}
            fill="none"
            stroke={`url(#lineGradient-${title.replace(/\s+/g, '-')})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="white"
                stroke={`url(#lineGradient-${title.replace(/\s+/g, '-')})`}
                strokeWidth="3"
                className="hover:r-8 transition-all duration-200 cursor-pointer drop-shadow-sm"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill={`url(#lineGradient-${title.replace(/\s+/g, '-')})`}
              />
              {/* Tooltip on hover */}
              <g className="opacity-0 hover:opacity-100 transition-opacity duration-200">
                <rect
                  x={point.x - 20}
                  y={point.y - 35}
                  width="40"
                  height="20"
                  fill="#1F2937"
                  rx="4"
                />
                <text
                  x={point.x}
                  y={point.y - 22}
                  textAnchor="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                >
                  {data[index].value}
                </text>
              </g>
            </g>
          ))}
        </svg>
        <div className="flex justify-between mt-4">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-xs text-gray-600 font-medium">{item.label}</p>
              <p className="text-sm font-semibold text-gray-900">{item.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Pie chart implementation would go here
  return <div>Pie chart not implemented yet</div>;
};

export default Chart;