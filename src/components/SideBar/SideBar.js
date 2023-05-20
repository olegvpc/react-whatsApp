import "./SideBar.css";
import React from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SideBarChat from "../SideBarChat/SideBarChat";
import SideBarSearch from "../SideBarSearch/SideBarSearch";


const SideBar = ({
  usersList,
  onChoice,
}) => {

  const currentUser = React.useContext(CurrentUserContext);


  return (
    <div className="sideBar">
      <div className="sideBar_header">
      <div className="chat_header_icon-avatar-container">
        <img className="chat_header_icon-avatar" src={currentUser?.avatar} alt="Avatar roomMeeting" />
      </div>

        {/* <Avatar 
        src={currentUser?.avatar}
        /> */}
        <div className="sidebar_headerRight">
          <button className="sidebar_header_icon sidebar_header_icon-status"/>
          <button className="sidebar_header_icon sidebar_header_icon-edit"/>
          <button className="sidebar_header_icon sidebar_header_icon-dots"/>
        </div>
      </div>

      <SideBarSearch 
        usersList={usersList}
        onChoice={onChoice}
      />
      
      <div className="sideBar_chat">
        {/* <SideBarChat addNewChat={"hello"} /> */}
        {usersList.map((user) => (
          <SideBarChat 
            key={user.id} 
            name={user.name} 
            id={user.id}
            onChoice={onChoice}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
