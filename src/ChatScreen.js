import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
    const [input, setInput] =useState([''])
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsx6Mgz16YPxb8UKEHytzfuI3nSDzgh84_ag&usqp=CAU",
      message: "whats up? <3 ",
    },
    {
      name: "Ellen",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsx6Mgz16YPxb8UKEHytzfuI3nSDzgh84_ag&usqp=CAU",
      message: "How are you? ",
    },
    {
      message: "Hows it going!",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();
      setMessages([...messages, {message:input}]);
      setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__timeStamp">
        YOU MATCHED WITH ELLEN ON 10/09/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
        value={input}
        onChange={ e => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message"
          type="text"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
      </form>
    </div>
  );
}

export default ChatScreen;
