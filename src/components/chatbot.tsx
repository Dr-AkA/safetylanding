"use client";

import React, { useState } from "react";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

type ChatbotProps = {
  faqItems: FAQItem[];
  initialMessage: string;

};

export const Chatbot = ({ faqItems, initialMessage }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
 const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
  { sender: "bot", text: initialMessage },
]);

  const handleUserClick = (item: FAQItem) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: item.question },
      { sender: "bot", text: item.answer },
    ]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasUnread(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white w-80 rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center bg-black text-white p-3 font-semibold">
            <Image
              src="/assets/safety_2_only_logo.png"
              alt="Bot logo"
              width={24}
              height={24}
              className="mr-2 rounded-full"
            />
            Support Bot
          </div>
          <div className="flex-1 p-3 overflow-y-auto max-h-96">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-1 text-sm ${msg.sender === "bot" ? "text-left" : "text-right"}`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-2xl ${
                    msg.sender === "bot"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex flex-wrap gap-2">
            {faqItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleUserClick(item)}
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs hover:bg-gray-200"
              >
                {item.question}
              </button>
            ))}
          </div>
          <button
            onClick={toggleChat}
            className="text-xs text-gray-500 p-1 hover:underline"
          >
            Close
          </button>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="relative bg-black hover:bg-gray-900 text-white p-3 rounded-full shadow-lg"
        >
          <Image
            src="/assets/safety_2_only_logo.png"
            alt="Bot logo"
            width={24}
            height={24}
            className="rounded-full"
          />
          {hasUnread && (
            <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-500"></span>
          )}
        </button>
      )}
    </div>
  );
};
