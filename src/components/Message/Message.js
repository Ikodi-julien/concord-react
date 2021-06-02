import React from 'react';
import getDateMyFormat from 'src/selectors/getDateMyFormat';

export default ({message, nickname, avatar}) => (
  <div className={message.nickname === nickname ?"channelmessages__message --me" : "channelmessages__message"} >
    <div className="channelmessages__message__options">
      <img className="channelmessages__message__image" src={avatar} alt="Mon avatar" />
      <div className={message.nickname === nickname ? 'channelmessages__message__nickname --me' : 'channelmessages__message__nickname'}
      >
        {`${message.nickname}`}
      </div>
      <div className="profile__avatar__preview__options__time">
        {getDateMyFormat()}
      </div>
    </div>
    <div className={'channelmessages__message__content'}>
      <div className={message.nickname === nickname ? 'channelmessages__message__content__text --me' : 'channelmessages__message__content__text'}>
        <div id={`editor-${message.id}`} />
      </div>
    </div>
  </div>
)