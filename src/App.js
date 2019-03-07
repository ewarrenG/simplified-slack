import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {data} from './static-data';
import Sidebar from './Sidebar';
import Chat from './Chat';
import moment from 'moment';

class App extends Component {

  state = {
    user: 'Elliot',
    activeChat: 'general',
    messages: data.messages
  }

  //helper function
  changeActiveChat = chat => {
    this.setState({
      activeChat: chat,
    })
  }

  sendNewMessage = (message, activeChat) => {
    let copy = {...this.state.messages};
    copy[activeChat] = typeof copy[activeChat] === 'undefined' ? copy[activeChat] = [message] : [...copy[activeChat], message];
    this.setState({
      messages: copy
    })
  }

  render() {
    const user = this.state.user;
    const activeChat = this.state.activeChat;
    const allChatMessages = this.state.messages;
    return (
      <div className="App">
        <Sidebar 
          channels={data.channels} 
          people={data.people} 
          activeChat={activeChat} 
          onChatChange={this.changeActiveChat} />
        <Chat 
          user={user}
          activeChat={activeChat} 
          allChatMessages={allChatMessages}
          onSendMessage={this.sendNewMessage}
        />
      </div>
    );
  }
}

export default App;