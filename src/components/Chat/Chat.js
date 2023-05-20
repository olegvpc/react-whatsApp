import "./Chat.css";
// import { Avatar, IconButton } from "@material-ui/core";
// import {
//   AttachFile,
//   SearchOutlined,
//   MoreVert,
//   // InsertEmoticonIcon,
// } from "@material-ui/icons";
// import MoodIcon from "@material-ui/icons/Mood";
// import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useState, useEffect } from "react";
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Chat({
  roomContact,
  roomMessages,
  sendMessage,
}) {
  // eslint-disable-next-line
  const {values, errors, isValid, handleChange, setValues, setIsValid} = useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  // console.count('RENDER Chat-component')
  useEffect(()=>{
    setRoomName(roomContact);
    setMessages(roomMessages);
    
    // console.log(roomMessages);
    // eslint-disable-next-line
  }, [roomContact, JSON.stringify(roomMessages)])


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("click SEND", values.message)
    if(values.message){
      const response = sendMessage(roomName.chatId, values.message);
      const newMessage =  {
        "type": "outgoing",
        "idMessage": response.idMessage,
        "timestamp": new Date().toString(),
        "typeMessage": "textMessage",
        "chatId": "79037202775@c.us",
        "textMessage": values.message,
        "statusMessage": "read",
        "sendByApi": true
    };
      setMessages(prev => [newMessage, ...prev]);
      // console.log(messages)

    }
    setValues('')

    // console.log(values.IdInstance, values.ApiTokenInstance)
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_header_icon-avatar-container">
           <img className="chat_header_icon-avatar" src={roomName?.avatar} alt="Avatar roomMeeting" />
        </div>
       

        <div className="chat_headerInfo">
          <h3>{roomName?.name}</h3>
          <p>
            last seen at: {" "}
            {/* {new Date(messages[messages.length - 1]?.timestamp).getHours().toString()}:{new Date(messages[messages.length - 1]?.timestamp).getMinutes().toString()
            } */}
          </p>
        </div>

        <div className="chat_headerRight">
          <button className="chat_header_icon chat_header_icon-search" />
          <button className="chat_header_icon chat_header_icon-clip" />
          <button className="chat_header_icon chat_header_icon-dots" />

        </div>
      </div>
      {/* chat body */}
      <div className="chat_body">
        {/* {messages[0]?.textMessage} */}
        {messages?.map((message) => (
          <p
            key={message.idMessage}
            className={`chat_message ${
              ! message?.senderName ? "chat_reciever" : ''
              // 'chat_reciever'
            }`}
          >
            <span className="chat_name">{message?.senderName ? message?.senderName : currentUser?.name}</span>
            {(message?.typeMessage === "textMessage" || message?.typeMessage === "extendedTextMessage") ? message?.textMessage : 'Отправлена фото'}
            <span className="chat_timestamp">
              {/* {new Date(message.timestamp?.toDate()).toUTCString()} */}
              {new Date(message?.timestamp).getHours().toString()}:{new Date(message?.timestamp).getMinutes().toString()}
            </span>
          </p>
        ))}
      </div>

      {/* chat footer */}
      <div className="chat_footer">
        <button className="chat_header_icon chat_header_icon-face"/>
        <form 
        // onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Type a message"
            name='message'
            value={values?.message || ''}
            onChange={handleChange}
            minLength='1'
            maxLength='100'
            disabled={! roomName?.chatId}
          />
          <button type="submit" 
          onClick={handleSubmit}
          >
            Send
          </button>
        </form>
       <button className="chat_header_icon chat_header_icon-mic"/>
      </div>
    </div>
  );
}

export default Chat;
