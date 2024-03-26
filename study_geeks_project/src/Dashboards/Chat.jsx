import React, { useState, useRef, useEffect } from "react";
import { getUser } from "../service/auth";
import { addDoubts } from "../service/doubts";

function Chat({ showChat, toggleChat }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessageSend = () => {
    if (!inputText.trim()) return;

    const details = {
      username: getUser(),
      doubtdesc: inputText,
    };

    addDoubts(details);
    setMessages([...messages, { text: inputText, sender: "user" }]);
    setInputText("");
    setError(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleMessageSend();
  };

  return (
    <div
      className={`chat-container ${
        showChat ? "block" : "hidden"
      } fixed bottom-4 right-4 md:w-96 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden`}
    >
      <div className="chat-header flex justify-between items-center bg-gray-100 px-4 py-2 border-b border-gray-200">
        <div className="text-lg font-bold">Chat</div>
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleChat}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="chat-content p-4">
        <div className="chat-messages h-64 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-gray-800"
              } mb-2`}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {error && <div className="text-red-600 mb-2">Error: {error}</div>}
        <div className="input-container flex">
          <input
            type="text"
            className="input-field flex-1 rounded-full px-4 py-2 mr-2 outline-none border border-gray-300 focus:border-blue-500"
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="send-button bg-blue-500 text-white px-4 py-2 rounded-full"
            onClick={handleMessageSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
