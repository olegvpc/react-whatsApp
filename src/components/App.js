import "./App.css";
import React, { useState, useEffect, lazy } from "react";
import Login from './Login/Login';
import { authorize, getUserInfo,  getAllUsers, getChatHistory, sendNewMessage} from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const SideBar = lazy(() => import("./SideBar/SideBar"));
const Chat = lazy(() => import("./Chat/Chat"));

function App() {
  // const [{ user }, dispatch] = UseStateValue();
  const [currentUser, setCurrentUser] = useState({})
  const [userInfo, setUserInfo] = useState({})
  const [usersList, setUsersList] = useState([])

  const [roomContact, setRoomContact] = useState({})
  const [roomMessages, setRoomMessages] = useState([])

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=> {
    const IdInstance = localStorage.getItem('IdInstance');
    const ApiTokenInstance = localStorage.getItem('ApiTokenInstance');
    if(IdInstance && ApiTokenInstance){
      authorize(IdInstance, ApiTokenInstance)
        .then((res) => {
          if(res) {
            // console.log(res)
            setLoggedIn(true);
            setCurrentUser(res)
          }
        })
        .catch((err) => {
          console.log(`Ошибка аутентификации -${err}`)
      });
    }
  }, [])

  useEffect(() => {
    if (loggedIn) {
        Promise.all([getUserInfo(currentUser.wid), getAllUsers()])
            .then(([userData, allUsersData]) => {
                // console.log(userData) // {avatar: 'https://pps.whatsapp.net/v/t61.24694-24/56461160_4…7BrmUmAL9CnatjJOSPm-ATABVx3vl5brFbIHg&oe=64744904', name: 'Олег Ткач', email
                setUserInfo(userData);
                setUsersList(allUsersData);
            })
            .catch((err) => {
                console.log(`ошибка получения данных по API при первичном запросе данных и контактах и юзере: ${err}`);
            })
    }
  }, [loggedIn, currentUser.wid])

  function onLogin(IdInstance, ApiTokenInstance) {
    // console.log(IdInstance, ApiTokenInstance)
    authorize(IdInstance, ApiTokenInstance)
      .then((res) => {
        if(res) {
          // console.log(res) // {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…wMjV9.9pPYi85hDTK9YjUAKDzJysGnSO1LAzQp8Vsql244vr4'}
          setLoggedIn(true);
          setCurrentUser(res)
          localStorage.setItem('IdInstance', IdInstance);
          localStorage.setItem('ApiTokenInstance', ApiTokenInstance);
        }
      })
      .catch((err) => {
        console.log(`Ошибка аутентификации -${err}`)
      });
  }

  function getRoomContact(id) {
    getUserInfo(id)
      .then(user => {
        setRoomContact(user);
        // console.log(user);
      }).catch(err => console.log(`Ошибка API при получении данных о RoomUser: ${err}`))

    getChatHistory(id)
      .then(messagesData => {
        setRoomMessages(messagesData);
        // console.log(id, messagesData);
      }).catch(err => console.log(`Ошибка API при получении messages with RoomUser: ${err}`))
  }

  function sendMessage (id, message) {
    sendNewMessage (id, message)
  }

  return (
    <CurrentUserContext.Provider value={userInfo}>
      <div className="App">
        {! loggedIn ? (

            <Login 
              onLogin={onLogin}
            />

        ) : (
          <div className="app_body">
            {/* MAIN SITE HERE {<p>
              {currentUser?.wid}
              {userInfo?.name}
              {usersList[0]?.name}
            </p>} */}
            <SideBar 
              usersList={usersList}
              onChoice={getRoomContact}
              />
            <Chat 
              roomContact={roomContact}
              roomMessages={roomMessages}
              sendMessage={sendMessage}
            />

          </div>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
