export interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  locationType: string;
}

export interface Schedule {
  id: string;
  dayNumber: number;
  startTime: string;
  endTime: string;
  activityType: string;
  description: string;
  notes?: string;
  location: Location;
}

export interface Pricing {
  currency: string;
  price: number;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  maxParticipants: number;
  currentParticipants: number;
  status: string;
  pricing: Pricing;
  createdAt: string;
  updatedAt: string;
  schedules: Schedule[];
}
