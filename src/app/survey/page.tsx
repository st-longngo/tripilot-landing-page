'use client';

import { useState } from 'react';

export default function SurveyPage() {
  const [formData, setFormData] = useState({
    rating: '',
    tourType: '',
    recommend: '',
    feedback: '',
    name: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        rating: '',
        tourType: '',
        recommend: '',
        feedback: '',
        name: '',
        email: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto p-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-sans">
              Cảm ơn bạn!
            </h2>
            <p className="text-gray-600">
              Phản hồi của bạn đã được gửi thành công. Chúng tôi sẽ sử dụng thông tin này để cải thiện dịch vụ.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 font-sans">
            Khảo sát ý kiến
          </h1>
          <p className="text-gray-600 text-sm">
            Chia sẻ trải nghiệm của bạn để giúp chúng tôi cải thiện dịch vụ
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <label className="block text-sm font-medium text-gray-900 mb-3 font-sans">
              Bạn đánh giá dịch vụ như thế nào? *
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} className="flex flex-col items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={formData.rating === rating.toString()}
                    onChange={handleInputChange}
                    className="hidden"
                    required
                  />
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${
                    formData.rating === rating.toString()
                      ? 'bg-yellow-400 border-yellow-400 text-white'
                      : 'border-gray-300 text-gray-500 hover:border-yellow-400'
                  }`}>
                    {rating}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 text-center">
                    {rating === 1 ? 'Rất tệ' : rating === 2 ? 'Tệ' : rating === 3 ? 'Bình thường' : rating === 4 ? 'Tốt' : 'Rất tốt'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Tour Type Preference */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <label className="block text-sm font-medium text-gray-900 mb-3 font-sans">
              Loại tour bạn quan tâm? *
            </label>
            <select
              name="tourType"
              value={formData.tourType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Chọn loại tour</option>
              <option value="family">Tour gia đình</option>
              <option value="adventure">Tour phiêu lưu</option>
              <option value="cultural">Tour văn hóa</option>
              <option value="beach">Tour biển đảo</option>
              <option value="mountain">Tour miền núi</option>
              <option value="city">Tour thành phố</option>
            </select>
          </div>

          {/* Recommendation */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <label className="block text-sm font-medium text-gray-900 mb-3 font-sans">
              Bạn có giới thiệu dịch vụ cho bạn bè không? *
            </label>
            <div className="space-y-2">
              {[
                { value: 'yes', label: 'Có, chắc chắn sẽ giới thiệu' },
                { value: 'maybe', label: 'Có thể sẽ giới thiệu' },
                { value: 'no', label: 'Không giới thiệu' }
              ].map((option) => (
                <label key={option.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="recommend"
                    value={option.value}
                    checked={formData.recommend === option.value}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <label className="block text-sm font-medium text-gray-900 mb-3 font-sans">
              Góp ý khác (tùy chọn)
            </label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Chia sẻ thêm về trải nghiệm của bạn..."
            />
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 font-sans">
              Thông tin liên hệ (tùy chọn)
            </h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ tên
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập họ tên của bạn"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email của bạn"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
          >
            Gửi khảo sát
          </button>
        </form>
      </div>
    </div>
  );
}
