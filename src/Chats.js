import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Steff"
        message="hey sweetie"
        profilePic="https://live.staticflickr.com/4191/34189827480_a3b4e23f3e_b.jpg"
        timestamp="1 day ago"
      />
      <Chat
        name="Hola"
        message="How are youuuu"
        profilePic="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        timestamp="35s ago"
      />
      <Chat
        name="Aria"
        message="when we going out??"
        profilePic="https://i.pinimg.com/236x/64/84/dd/6484dd8643a7860e5394da8fc796719a.jpg"
        timestamp="2h ago"
      />
      <Chat
        name="Stella"
        message="lets have sex now"
        profilePic="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        timestamp="she never done it"
      />
    </div>
  );
}

export default Chats;
