import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  SearchOutlined,
  MoreVert,
  // InsertEmoticonIcon,
} from "@material-ui/icons";
import MoodIcon from "@material-ui/icons/Mood";
import MicNoneIcon from "@material-ui/icons/MicNone";
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


  useEffect(()=>{
    setRoomName(roomContact);
    setMessages(roomMessages);
    // console.log(roomMessages);
    // eslint-disable-next-line
  }, [roomContact, JSON.stringify(roomMessages)])

  // useEffect(()=>{
  //   console.log(values.message)
  // }, [values.message])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click SEND", values.message)
    if(values.message){
      sendMessage(roomName.chatId, values.message)
    }
    setValues('')

    // console.log(values.IdInstance, values.ApiTokenInstance)
  }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={roomName?.avatar} />

        <div className="chat_headerInfo">
          <h3>{roomName?.name}</h3>
          <p>
            last seen at{" "}
            {/* {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()} */}
          </p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
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
        <MoodIcon />
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
        <MicNoneIcon />
      </div>
    </div>
  );
}

export default Chat;
