import React, { useState } from "react";
import { Chatbot } from "supersimpledev";

const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function useEnter(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  async function sendMessage() {
    const newMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        message: (
          <img
            src="https://supersimple.dev/images/loading-spinner.gif"
            className="h-[40px]"
          />
        ),
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newMessage);

    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newMessage.slice(0, -1),
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <div className="mb-10 flex justify-end items-center">
      <input
        type="text"
        placeholder="Send message to chatbot"
        onChange={handleChange}
        value={inputText}
        className="p-3 flex-1 border-1 rounded-xl"
        onKeyDown={useEnter}
      />
      <button
        className="bg-green-600 text-white p-4 ml-3 rounded-2xl cursor-pointer hover:bg-green-700"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
