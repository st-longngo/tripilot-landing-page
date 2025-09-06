import { Tour } from '@/types/tour';
import { formatPrice, formatDate, calculateDuration } from '@/lib/api';

interface TourHeaderProps {
  tour: Tour;
}

export default function TourHeader({ tour }: TourHeaderProps) {
  const duration = calculateDuration(tour.startDate, tour.endDate);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-bold text-gray-900 flex-1 pr-4 font-sans">
          {tour.title}
        </h1>
        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          Đặt ngay
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {tour.description}
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 012 0v4h4V3a1 1 0 012 0v4h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1z"/>
          </svg>
          <span>{formatDate(tour.startDate)} - {formatDate(tour.endDate)}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>{duration} ngày</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span>{tour.currentParticipants}/{tour.maxParticipants} người</span>
        </div>
        
        {tour.pricing.price && 
          <div className="flex items-center gap-2 text-lg font-bold text-blue-600">
            {formatPrice(tour.pricing.price, tour.pricing.currency)}
          </div>
        }
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span className="text-gray-600">
          Bấm để xem lịch trình chi tiết
        </span>
      </div>
    </div>
  );
}
