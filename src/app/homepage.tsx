import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Tripilot
        </h1>
        <p className="text-gray-600 mb-8">
          Landing page hiển thị thông tin chi tiết và lịch trình của các tour du lịch
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Xem thông tin tour
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Để xem thông tin tour, truy cập URL với format:
          </p>
          <code className="bg-gray-100 px-3 py-2 rounded text-sm block mb-4">
            /tour/[tour-id]
          </code>
          <Link
            href="/tour/tour_123"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors inline-block"
          >
            Xem tour mẫu
          </Link>
        </div>
        
        <div className="text-xs text-gray-500">
          <p>API: 192.168.80.121:3000/api/tours/[id]</p>
        </div>
      </div>
    </div>
  );
}
