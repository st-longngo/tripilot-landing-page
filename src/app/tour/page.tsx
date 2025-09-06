'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Tour } from '@/types/tour';
import { getTourById } from '@/lib/api';
import TourHeader from '@/components/TourHeader';
import TourSchedule from '@/components/TourSchedule';

export default function TourPage() {
  const params = useParams();
  const tourId = params.id as string;
  
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTour() {
      if (!tourId) {
        setError('Tour ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const tourData = await getTourById(tourId);
        setTour(tourData);
      } catch (err) {
        console.error('Failed to fetch tour:', err);
        setError('Không thể tải thông tin tour. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    }

    fetchTour();
  }, [tourId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Đang tải thông tin tour...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Có lỗi xảy ra</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.657 2.172"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy tour</h2>
          <p className="text-gray-600">Tour với ID &ldquo;{tourId}&rdquo; không tồn tại.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <TourHeader tour={tour} />
        <TourSchedule schedules={tour.schedules} />
      </div>
    </div>
  );
}
