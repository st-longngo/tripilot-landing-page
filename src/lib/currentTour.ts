// Utility functions for managing current tour in localStorage

const CURRENT_TOUR_KEY = 'currentTour';

export interface CurrentTour {
  id: string;
  title: string;
  viewedAt: string;
}

export function saveCurrentTour(tour: { id: string; title: string }) {
  if (typeof window === 'undefined') return;

  try {
    const currentTour: CurrentTour = {
      id: tour.id,
      title: tour.title,
      viewedAt: new Date().toISOString()
    };
    
    localStorage.setItem(CURRENT_TOUR_KEY, JSON.stringify(currentTour));
  } catch (error) {
    console.error('Error saving current tour:', error);
  }
}

export function getCurrentTour(): CurrentTour | null {
  if (typeof window === 'undefined') return null;

  try {
    const tourJson = localStorage.getItem(CURRENT_TOUR_KEY);
    if (!tourJson) return null;
    
    return JSON.parse(tourJson) as CurrentTour;
  } catch (error) {
    console.error('Error getting current tour:', error);
    return null;
  }
}

export function clearCurrentTour() {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(CURRENT_TOUR_KEY);
  } catch (error) {
    console.error('Error clearing current tour:', error);
  }
}
