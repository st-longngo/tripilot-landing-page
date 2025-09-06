'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { getCurrentTour, CurrentTour } from '@/lib/currentTour';
import Image from 'next/image';

export default function Home() {
  const [currentTour, setCurrentTour] = useState<CurrentTour | null>(null);

  useEffect(() => {
    // Load current tour from localStorage on component mount
    const savedTour = getCurrentTour();
    setCurrentTour(savedTour);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pb-20">
      <div className="text-center max-w-md">
        <div className='flex items-center gap-2 justify-center mb-2'>
          <Image src={'/logo.png'} alt="Tripilot Logo" width={36} height={36} />
          <h1 className="text-3xl font-bold text-gray-900font-sans">
            Tripilot
          </h1>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Lịch trình rõ ràng, cảm xúc ngập tràn
        </p>

        {/* Current Tour Section */}
        {currentTour && (
          <div className="bg-green-50 border border-green-200 rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <h2 className="text-lg font-semibold text-green-900 font-sans text-center">
                Tour hiện tại
              </h2>
            </div>
            <p className="text-green-700 text-sm mb-2">
              {currentTour.title}
            </p>
            <p className="text-green-600 text-xs mb-4">
              Đã xem: {new Date(currentTour.viewedAt).toLocaleString('vi-VN')}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href={`/tour/${currentTour.id}`}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 font-sans">
              Tải ứng dụng Tripilot
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Quét mã QR để tải ứng dụng trên điện thoại của bạn
            </p>
            
            {/* QR Code Container */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 inline-block hover:bg-gray-100 transition-colors">
              <div className="w-48 h-48 mx-auto bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-blue-300 transition-colors group">
                {/* Simplified QR Code Pattern */}
                <div className="w-40 h-40 relative group-hover:scale-105 transition-transform">
                  <svg width="160" height="160" viewBox="0 0 160 160" className="w-full h-full">
                    {/* Corner squares */}
                    <rect x="0" y="0" width="50" height="50" fill="#000" rx="4"/>
                    <rect x="10" y="10" width="30" height="30" fill="#fff"/>
                    <rect x="15" y="15" width="20" height="20" fill="#000"/>
                    
                    <rect x="110" y="0" width="50" height="50" fill="#000" rx="4"/>
                    <rect x="120" y="10" width="30" height="30" fill="#fff"/>
                    <rect x="125" y="15" width="20" height="20" fill="#000"/>
                    
                    <rect x="0" y="110" width="50" height="50" fill="#000" rx="4"/>
                    <rect x="10" y="120" width="30" height="30" fill="#fff"/>
                    <rect x="15" y="125" width="20" height="20" fill="#000"/>
                    
                    {/* Data pattern - simplified */}
                    <rect x="70" y="20" width="10" height="10" fill="#000"/>
                    <rect x="90" y="20" width="10" height="10" fill="#000"/>
                    <rect x="80" y="30" width="10" height="10" fill="#000"/>
                    
                    <rect x="20" y="70" width="10" height="10" fill="#000"/>
                    <rect x="40" y="70" width="10" height="10" fill="#000"/>
                    <rect x="30" y="80" width="10" height="10" fill="#000"/>
                    
                    <rect x="70" y="70" width="10" height="10" fill="#000"/>
                    <rect x="90" y="70" width="10" height="10" fill="#000"/>
                    <rect x="110" y="70" width="10" height="10" fill="#000"/>
                    <rect x="130" y="70" width="10" height="10" fill="#000"/>
                    
                    <rect x="70" y="90" width="10" height="10" fill="#000"/>
                    <rect x="90" y="90" width="10" height="10" fill="#000"/>
                    <rect x="110" y="90" width="10" height="10" fill="#000"/>
                    
                    <rect x="70" y="110" width="10" height="10" fill="#000"/>
                    <rect x="90" y="110" width="10" height="10" fill="#000"/>
                    <rect x="70" y="130" width="10" height="10" fill="#000"/>
                    <rect x="90" y="130" width="10" height="10" fill="#000"/>
                    <rect x="110" y="130" width="10" height="10" fill="#000"/>
                    <rect x="130" y="130" width="10" height="10" fill="#000"/>
                    
                    {/* Center logo area */}
                    <rect x="65" y="65" width="30" height="30" fill="#fff" stroke="#000" strokeWidth="2" rx="4"/>
                    <circle cx="80" cy="80" r="8" fill="#3B82F6"/>
                    <path d="M76 76 L84 80 L76 84 Z" fill="#fff"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Tải xuống trên</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>

              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-green-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Tải xuống trên</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Demo Link */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3">
                Hoặc xem demo trên web
              </p>
              <Link
                href="/tour/tour_123"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors inline-block text-sm"
              >
                Xem tour mẫu
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">
            Tripilot Mobile App
          </p>
          <p className="text-xs text-gray-400">
            Khám phá du lịch một cách thông minh
          </p>
        </div>
      </div>
    </div>
  );
}
