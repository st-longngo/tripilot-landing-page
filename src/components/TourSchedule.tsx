import { Schedule } from '@/types/tour';
import ScheduleCard from './ScheduleCard';

interface TourScheduleProps {
  schedules: Schedule[];
}

export default function TourSchedule({ schedules }: TourScheduleProps) {
  // Group schedules by day
  const schedulesByDay = schedules.reduce((acc, schedule) => {
    const day = schedule.dayNumber;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(schedule);
    return acc;
  }, {} as Record<number, Schedule[]>);

  const sortedDays = Object.keys(schedulesByDay)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 font-sans">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 012 0v4h4V3a1 1 0 012 0v4h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1z"/>
          </svg>
          Lịch trình chi tiết
        </h2>
        
        {sortedDays.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Chưa có lịch trình nào được cập nhật
          </p>
        ) : (
          <div className="space-y-6">
            {sortedDays.map((day) => (
              <div key={day}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {day}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 font-sans">
                    Ngày {day}
                  </h3>
                </div>
                
                <div className="ml-5 pl-6 border-l-2 border-gray-200 space-y-4">
                  {schedulesByDay[day]
                    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
                    .map((schedule) => (
                      <ScheduleCard key={schedule.id} schedule={schedule} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
