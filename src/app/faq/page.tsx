export default function FAQPage() {
  const faqs = [
    {
      question: "Làm thế nào để đặt tour?",
      answer: "Bạn có thể đặt tour bằng cách liên hệ trực tiếp qua hotline hoặc gửi form đăng ký online."
    },
    {
      question: "Có thể hủy tour sau khi đặt không?",
      answer: "Có thể hủy tour trước 7 ngày khởi hành. Phí hủy sẽ được tính theo quy định."
    },
    {
      question: "Tour có bao gồm bảo hiểm không?",
      answer: "Tất cả tour đều bao gồm bảo hiểm du lịch trong nước với mức bồi thường tối đa."
    },
    {
      question: "Phương tiện di chuyển như thế nào?",
      answer: "Tùy vào từng tour, chúng tôi sử dụng xe du lịch, tàu thủy hoặc máy bay."
    },
    {
      question: "Có hướng dẫn viên đi cùng không?",
      answer: "Có, mỗi tour đều có hướng dẫn viên chuyên nghiệp đi cùng."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
            Câu hỏi thường gặp
          </h1>
          <p className="text-gray-600 mb-6">
            Tìm hiểu thêm về các câu hỏi phổ biến về dịch vụ tour của chúng tôi
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-medium text-gray-900 font-sans">
                    {faq.question}
                  </h3>
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mt-6">
          <h3 className="font-semibold text-blue-900 mb-2 font-sans">
            Không tìm thấy câu trả lời?
          </h3>
          <p className="text-blue-700 text-sm mb-3">
            Liên hệ với chúng tôi để được hỗ trợ trực tiếp
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-blue-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hotline: 1900 1234</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email: support@tripilot.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
