import "./SideBarChat.css";
import React, { useState, useEffect } from "react";
// import { Avatar } from "@material-ui/core";

const SideBarChat = ({
   id, 
   name,
   onChoice,
  }) => {
  // eslint-disable-next-line
  const [messages, setMessages] = useState("");
  const [seed, setSeed] = useState("123");
  const avatar = `https://avatars.dicebear.com/api/human/${seed}.svg`;


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  function handleChoiceUser () {
    // console.log(`Choiced User: ${name} ID: ${id}`)
    onChoice(id)
  }

  return (
    <button className="sidebarChat" onClick={handleChoiceUser}>
        <div className="chat_header_icon-avatar-container">
           <img className="chat_header_icon-avatar" src={avatar} alt="Avatar of client" />
        </div>
      {/* <Avatar src={avatar} /> */}
      <div className="sidebarChat_info">
        <h3
          style={{
            fontSize: "18px",
            color: "rgb(69 66 66)",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontSize: "13px",
            marginLeft: "6px",
            marginTop: "4px",
            color: "#3a3838",
          }}
        >
          {id}
          {/* {messages[0]?.message + ".."} */}
        </p>
      </div>
    </button>
  )
};

export default SideBarChat;
