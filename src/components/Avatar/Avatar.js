import React from 'react';
import Avatar from 'react-avatar-edit';
import { Button, Segment } from 'semantic-ui-react';
import Message from 'src/components/Message/Message';
import './avatar.scss';

export default ({ avatarFile, avatar, setAvatar, pseudo, updateAvatar }) => {

  const onClose = () => {
    setAvatar(null)
  }

  const onCrop = (avatar) => {
    // console.log(avatar);
    setAvatar(avatar)
  }

  const onBeforeFileLoad = (elem) => {
    // console.log(elem.target.files[0].size);
  }

  const preview = {
    nickname: pseudo,
    id: 'a',
  }
  return (
    <Segment>
      <h1 className="profile__title">Mon avatar</h1>
      <div className="profile__avatar__row">
        <div className="profile__avatar__container">
          <Avatar
            width={200}
            height={150}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            src={avatarFile}
          />
        </div>
        {avatar && (
          <Message message={preview} nickname={pseudo} avatar={avatar} />
        )}
      </div>
      <Button primary content="Valider" onClick={() => {updateAvatar()}} />
    </Segment>
  )
}
