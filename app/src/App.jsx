import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

const App = () => {
  const [chatMessages, setChatMessages] = useState([
    // {
    //   message: "hi hru",
    //   sender: "user",
    //   id: "id1",
    // },
    // {
    //   message: "good wbu",
    //   sender: "robot",
    //   id: "id2",
    // },
  ]);
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 md:px-16 md:max-w-3xl mx-auto">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
    </div>
  );
};

export default App;
