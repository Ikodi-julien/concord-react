import React from 'react';
import getDateMyFormat from 'src/selectors/getDateMyFormat';

import './message.scss';

export default ({message, nickname, avatar}) => (
  <div className={message.nickname === nickname ?"message --me" : "message"} >
    
    <img className="message__image" src={avatar ? avatar : message.avatar} alt="Mon avatar" />
    
    <div className="message__data">
      <div className="message__options">
        <span className={message.nickname === nickname ? 'message__nickname --me' : 'message__nickname'}
        >
          {`${message.nickname}`}
        </span>
        <span className="message__time">
          {getDateMyFormat()}
        </span>
      </div>
      <div className={'message__content'}>
        <div className={message.nickname === nickname ? 'message__content__text --me' : 'message__content__text'}>
          <div id={`editor-${message.id}`} />
        </div>
      </div>
    </div>
  </div>
)