import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const chatMessagesContainer = chatMessagesRef.current;
    if (chatMessagesContainer) {
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div
      className="max-h-[600px] flex-1 overflow-scroll chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.length === 0 && (
        <p className="text-gray-400 text-center text-base sm:text-lg font-semibold mt-4">
          Welcome to the chatbot! type "hello"
        </p>
      )}
      {chatMessages.map((chatMessage) => {
        return (
          <div>
            <ChatMessage
              sender={chatMessage.sender}
              message={chatMessage.message}
              key={chatMessage.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
