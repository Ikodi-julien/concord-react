import React, {useEffect, useRef} from 'react';
import Message from 'src/components/Message/Message';

const ChannelMessages = (
  {
    messages, 
    title, 
    nickname, 
    toggleUsersInChannel
  }) => {
  
  const refContainer = useRef(null);

  useEffect(() => {
    // effet exécuté à chaque rendu du composant, pour scroller vers le bas
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
    
    // Ici on gère la création d'un éditeur quill.js pour afficher les message avec leur mise en forme après que l'élement soit créé dans le DOM.
    if (messages.length) {
      messages.map(message => {
        const quill = new Quill(`#editor-${message.id}`, {
          modules: {
            toolbar: false,
          },
        });
        quill.enable(false);
        quill.setContents(message.content); 
      })
    }
  }
  ); 
  
  return (
    
    <section className="channelmessages">
      <div className="channelmessages__header">
        <h1 className="channelmessages__title">{title}</h1>
        {
          window.innerWidth < 700 &&
          <button 
            className='channelmessages__header__button'
            onClick={toggleUsersInChannel}
            >
            <i className="fas fa-users"></i>
          </button>
        }
      </div>
      <div className="channelmessages__messagelist" ref={refContainer}>
      {
        messages.map(message => (
          <Message key={message.id} message={message} nickname={nickname}/>
          )
        )
      }

      </div>
    </section>
  )
}

export default ChannelMessages;
