import React, { useState, useEffect, useRef } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const socketRef = useRef(null);

  
  useEffect(() => {
    // Создаем WebSocket соединение при монтировании компонента
    socketRef.current = new W3CWebSocket('ws://92.53.107.133:8000/ws/users/1/chat/');

    // Обработчик сообщений от сервера
    socketRef.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Отключение соединения при размонтировании компонента
    return () => {
      socketRef.current.close();
    };
  }, []);

  const handleMessageSubmit = () => {
    // Отправляем сообщение на сервер
    const messageData = {
      action: 'message',
      message: inputMessage,
      user: 1,
      roomId: 'CSnW7JTjkhS4NkthF6Zqyu',
    };
    socketRef.current.send(JSON.stringify(messageData));
    setInputMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Отправить</button>
      </div>
    </div>
  );
};

export default ChatComponent;
