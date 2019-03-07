import React from 'react';
//import PropTypes from 'prop-types';
import './Chat.css';
import moment from 'moment';

function Chat({ user, activeChat, allChatMessages, onSendMessage }) {
  const newChatMessage = [{ sender: '', timestamp: '', message: 'Chat has no messages' }];
  const chatMessages = allChatMessages[activeChat] || newChatMessage;
  return (
    <div className="Chat-container">
      {/* Chat container */}
      <Messages activeChat={activeChat} chatMessages={chatMessages} />
      <NewMessage user={user} onSendMessage={onSendMessage} activeChat={activeChat} />
    </div>
  );
}
function Messages({ chatMessages }) {
  return (
    <ul id="Chat-ul" className="Chat-ul">
      {chatMessages.map((msg, index) => (
        <>
          <li key={msg.sender + '-' + index} className="Chat-li">
            <b>{msg.sender}</b> <span className="Chat-msgTimestamp">{msg.timestamp}</span>
          </li>
          <li key={msg.message.replace(/\s+/g, '') + index} className="Chat-li">
            {msg.message}
          </li>
        </>
      ))}
    </ul>
  );
}

function NewMessage({ user, activeChat, onSendMessage }) {
  return (
    <div className="Chat-inputContainer">
      <input
        className="Chat-input"
        placeholder="Type your message here. Enter to send."
        onKeyPress={event => {
          if (event.key === 'Enter') {
            onSendMessage(
              {
                sender: user,
                message: event.target.value,
                timestamp: moment()._d.toString()
              },
              activeChat
            );
            event.target.value = '';
            var ul = document.getElementById('Chat-ul');
            ul.scrollTop = ul.scrollHeight;
          }
        }}
      />
    </div>
  );
}

export default Chat;
