// import API_URL from "./constants";
const API_URL = 'https://api.green-api.com';

const IdInstance = () => localStorage.getItem('IdInstance');
const ApiTokenInstance = () => localStorage.getItem('ApiTokenInstance');

function getResponse(res) {
    // статус возврвщается 201 - Created
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const authorize = (IdInstance, ApiTokenInstance) => {
  return fetch(`${API_URL}/waInstance${IdInstance}/getSettings/${ApiTokenInstance}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({password, email})
  })
  .then((res) => {
    return getResponse(res)
  })
}

// Получение  данных о пользователе
export const getUserInfo = (user) => {
  return fetch(`${API_URL}/waInstance${IdInstance()}/getContactInfo/${ApiTokenInstance()}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chatId: user,
    })
  })
  .then((res) => {
    return getResponse(res)
  })
};

// Получение  данных о пользователе
export const getAllUsers = () => {
  return fetch(`${API_URL}/waInstance${IdInstance()}/getContacts/${ApiTokenInstance()}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    return getResponse(res)
  })
};

// Получение последних сообщений пользователе
export const getChatHistory = (roomUser) => {
  return fetch(`${API_URL}/waInstance${IdInstance()}/getChatHistory/${ApiTokenInstance()}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chatId: roomUser,
      count: 20,
    })
  })
  .then((res) => {
    return getResponse(res)
  })
};

// Отправка сообщения контакту 
export const sendNewMessage = (chat_id, message) => {
  return fetch(`${API_URL}/waInstance${IdInstance()}/sendMessage/${ApiTokenInstance()}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chatId: chat_id,
      message
    })
  })
  .then((res) => {
    return getResponse(res)
  })
};

