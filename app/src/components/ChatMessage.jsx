const ChatMessage = ({ sender, message }) => {
  return (
    <div
      className={`flex ${
        sender === "user" ? "justify-end" : "justify-start"
      } items-center mb-4`}
    >
      {sender === "robot" && (
        <img
          width={50}
          src="https://raw.githubusercontent.com/saadhn4/react-course/refs/heads/main/robot.png"
        />
      )}
      <p className="mx-3 bg-gray-200 max-w-[150px] md:max-w-[300px] p-3 rounded-xl">{message}</p>
      {sender === "user" && (
        <img
          width={50}
          src="https://raw.githubusercontent.com/saadhn4/react-course/refs/heads/main/user.png"
        />
      )}
    </div>
  );
};

export default ChatMessage;
