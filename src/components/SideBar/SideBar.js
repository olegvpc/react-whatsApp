import "./SideBar.css";
import React from "react";
// import db from "../firebase";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SideBarChat from "../SideBarChat/SideBarChat";
import SideBarSearch from "../SideBarSearch/SideBarSearch";
// import { UseStateValue } from "../globalContext/StateProvider";

const SideBar = ({
  usersList,
  onChoice,
}) => {

  // const [rooms, setRooms] = useState([]);
  // const [{ user }, dispatch] = UseStateValue();
  const currentUser = React.useContext(CurrentUserContext);


  return (
    <div className="sideBar">
      <div className="sideBar_header">
        <Avatar 
        src={currentUser?.avatar}
        />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
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
