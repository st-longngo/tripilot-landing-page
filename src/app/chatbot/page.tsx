'use client';

import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là trợ lý ảo của Tripilot. Tôi có thể giúp bạn về thông tin tour, đặt chỗ và các câu hỏi khác. Bạn cần hỗ trợ gì không?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    "Có tour nào phù hợp với gia đình không?",
    "Giá tour bao gồm những gì?",
    "Làm sao để đặt tour?",
    "Chính sách hủy tour như thế nào?"
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Cảm ơn bạn đã liên hệ! Đây là phản hồi tự động. Chúng tôi sẽ có nhân viên tư vấn liên hệ lại trong thời gian sớm nhất.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      let response = "";
      if (question.includes("gia đình")) {
        response = "Chúng tôi có nhiều tour phù hợp cho gia đình như tour Hạ Long, Đà Nẵng, Phú Quốc với các hoạt động vui chơi cho trẻ em.";
      } else if (question.includes("giá")) {
        response = "Giá tour bao gồm: xe đưa đón, khách sạn, bữa ăn theo chương trình, vé tham quan và hướng dẫn viên.";
      } else if (question.includes("đặt")) {
        response = "Bạn có thể đặt tour qua hotline 1900 1234, website hoặc trực tiếp tại văn phòng của chúng tôi.";
      } else {
        response = "Bạn có thể hủy tour trước 7 ngày khởi hành với phí hủy 20%, trước 3 ngày phí hủy 50%.";
      }

      const botResponse: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-blue-500 text-white p-4">
          <h1 className="text-xl font-bold font-sans">Trợ lý ảo Tripilot</h1>
          <p className="text-blue-100 text-sm">Luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isUser
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-900 border'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isUser ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString('vi-VN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Questions */}
        <div className="p-4 bg-white border-t">
          <p className="text-sm text-gray-600 mb-3 font-medium">Câu hỏi thường gặp:</p>
          <div className="grid grid-cols-1 gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="text-left p-2 text-sm text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhập tin nhắn..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
