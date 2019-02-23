import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

function Sidebar({channels, people, activeChat, onChatChange}){
  return(
    <div className="Sidebar-container">
        <SidebarGroup group={channels} activeChat={activeChat} onChatChange={onChatChange}/>
        <SidebarGroup group={people} activeChat={activeChat} onChatChange={onChatChange}/>
    </div>
  )
}

function SidebarGroup({group, activeChat, onChatChange}){
  return (
    <ul className="Sidebar-ul">
      <li className="Sidebar-li-title">{group.name.toUpperCase()}</li>
      <ul className="Sidebar-ul-nested">
        {group.list.map((item, index) => 
          <li 
            key={item + '-' + index} 
            className={activeChat === item ? "Sidebar-li-nested selected" : "Sidebar-li-nested"} 
            onClick={() => onChatChange(item)}
            >
              {group.name === 'channels' ? '# ' + item : item}
          </li>  
        )}
      </ul>
    </ul>
  )
}

Sidebar.propTypes = {
  channels: PropTypes.object.isRequired,
  people: PropTypes.object.isRequired,
}

export default Sidebar;