import { Schedule } from '@/types/tour';
import { formatTime } from '@/lib/api';

interface ScheduleCardProps {
  schedule: Schedule;
}

export default function ScheduleCard({ schedule }: ScheduleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200">
      <div className="flex items-start gap-4">
        {/* Time indicator */}
        <div className="flex flex-col items-center min-w-[60px]">
          <div className="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {formatTime(schedule.startTime)}
          </div>
          <div className="w-px bg-gray-300 h-4 my-1"></div>
          <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-sm">
            {formatTime(schedule.endTime)}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium capitalize">
              {schedule.activityType}
            </span>
            <span className="text-gray-500 text-sm">
              Ngày {schedule.dayNumber}
            </span>
          </div>
          
          <h3 className="font-medium text-gray-900 mb-2 font-sans">
            {schedule.description}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>{schedule.location.name}</span>
          </div>

          {schedule.notes && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mt-3">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p className="text-sm text-yellow-800">{schedule.notes}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
