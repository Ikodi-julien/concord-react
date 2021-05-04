import React from 'react';
// import {Link} from 'react-router-dom';

const ChannelMessages = ({messages, title}) => {
  

  

  
  return (
    <section className="channelmessages">
      <h1 className="channelmessages__title">{title}</h1>
      {
        messages.map(message => (
          <div key={message.id} className="channelmessages__message">
            <span>{`${message.userName}`}</span> : <span>{`${message.content}`}</span>
          </div>))
      }
    </section>
  )
}

export default ChannelMessages;
