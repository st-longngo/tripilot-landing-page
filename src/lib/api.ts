import { Tour } from '@/types/tour';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://192.168.80.121:3000';

export async function getTourById(id: string): Promise<Tour> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/tours/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensure fresh data for each request
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tour: ${response.status}`);
    }

    const tour: Tour = await response.json();
    return tour;
  } catch (error) {
    console.error('Error fetching tour:', error);
    throw error;
  }
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: currency === 'VND' ? 'VND' : 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function formatTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export function calculateDuration(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
