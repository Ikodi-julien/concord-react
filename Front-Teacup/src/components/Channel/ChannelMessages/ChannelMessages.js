import React from 'react';
// import {Link} from 'react-router-dom';

const ChannelMessages = (props) => {
  
  const messages = [
    {id: 1, userName:"Bernard", content: "Tu la connais celle des deux poissons rouge dans un bocal ?"},
    {id: 2, userName:"Bianca", content: "Non, raconte !"},
    {id: 3, userName:"Belle", content: "Moi je la connais"},
    {id: 4, userName:"Sébastien", content: "Ouais, y'en a un qui dit à l'autre \"J'arrive pas à croire qu'on est déjà jeudi\""},
  ];
  
  const channelTitle = 'Le channel de test'
  
  return (
    <section className="channelmessages">
      <h1 className="channelmessages__title">{channelTitle}</h1>
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
