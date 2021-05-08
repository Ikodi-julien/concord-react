import React, {useEffect, useRef} from 'react';
// import {Link} from 'react-router-dom';

const ChannelMessages = ({messages, title}) => {
  
  const refContainer = useRef(null);

  // effet exécuté à chaque rendu du composant, pour scroller vers le bas
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo

    // refContainer.current contient la référence vers la div
    // https://reactjs.org/docs/hooks-reference.html#useref

    refContainer.current.scrollTo({
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
      // hauteur de l'élément, y compris la zone non visible (overflow)
      top: refContainer.current.scrollHeight,
      left: 0,
      // scroll progressif
      behavior: 'smooth',
    });
  }); 
  
  return (
    
    <section className="channelmessages">
      <h1 className="channelmessages__title">{title}</h1>
      <div className="channelmessages__messagelist" ref={refContainer}>
      {
        messages.map(message => (
          <div key={message.id} className="channelmessages__message">
            <span>{`${message.nickname}`}</span> : <span>{`${message.content}`}</span>
          </div>))
      }
      </div>
    </section>
  )
}

export default ChannelMessages;
