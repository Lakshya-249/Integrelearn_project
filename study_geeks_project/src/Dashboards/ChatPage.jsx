// ChatPage.jsx
import React, { useState } from "react";
import Chat from "./Chat";

function ChatPage() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      <button
        className="fixed bottom-1 right-4 bg-blue-500 text-white px-4 py-2 rounded-full"
        onClick={toggleChat}
      >
        {showChat ? "Close Chat" : "Open Chat"}
      </button>
      <Chat showChat={showChat} toggleChat={toggleChat} />
    </div>
  );
}

export default ChatPage;
