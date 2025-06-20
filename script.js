  function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = React.useState("");

        function handleChange(e) {
          setInputText(e.target.value);
        }

        function sendMessage() {
          const newChatMessage = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setChatMessages(newChatMessage);
          setInputText("");

          const response = Chatbot.getResponse(inputText);

          setChatMessages([
            ...newChatMessage,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);
        }

        function useEnter(e) {
          if (e.key === "Enter") {
            sendMessage();
          }
        }
        return (
          <div className="chat-input-container">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Enter message"
              onChange={handleChange}
              value={inputText}
              onKeyDown={useEnter}
              size="30"
            />
            <button className="send-btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        );
      }

      function ChatMessage({ message, sender }) {
        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {sender === "robot" && (
              <img
                src="https://raw.githubusercontent.com/saadhn4/react-course/refs/heads/main/robot.png"
                width="50"
              />
            )}
            <div className="chat-message">{message}</div>
            {sender === "user" && (
              <img
                src="https://raw.githubusercontent.com/saadhn4/react-course/refs/heads/main/user.png"
                width="50"
              />
            )}
          </div>
        );
      }

      function ChatMessages({ chatMessages }) {
        return (
          <div>
            {chatMessages.length === 0 && (
              <p className="welcome-msg">Welcome to the chatbot! type "hello"</p>
            )}
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }
      function App() {
        const [chatMessages, setChatMessages] = React.useState([]);
        return (
          <div className="app-container">
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
            <ChatMessages chatMessages={chatMessages} />
          </div>
        );
      }

      const container = document.querySelector(".js-container");
      ReactDOM.createRoot(container).render(<App />);