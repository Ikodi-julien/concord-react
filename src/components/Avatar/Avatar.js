import React from 'react';
import Avatar from 'react-avatar-edit';
import { Button, Segment } from 'semantic-ui-react';
import getDateMyFormat from 'src/selectors/getDateMyFormat';
import './avatar.scss';

export default ({ avatarFile, avatar, setAvatar, pseudo }) => {

  const onClose = () => {
    setAvatar(null)
  }

  const onCrop = (avatar) => {
    setAvatar(avatar)
  }

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 500000) {
      alert('File is too big! max 500ko')
      elem.target.value = ''
    }
  }

  return (
    <Segment>
      <h1 className="profile__title">Mon avatar</h1>
      <div className="profile__avatar__row">
        <Avatar
          width={150}
          height={150}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={avatarFile}
        />
        {avatar && (
          <div className="profile__avatar__preview">
            <img src={avatar} alt="Preview" />
            <div className="profile__avatar__preview__options">
              <div className="profile__avatar__preview__options__time">{getDateMyFormat()}</div>
              <div className="profile__avatar__preview__options__pseudo">{pseudo}</div>
              <div className="profile__avatar__preview__content">Ça a débuté comme ça.</div>
            </div>
          </div>
        )}
      </div>
      <Button primary content="Valider" onClick={() => {}} />
    </Segment>
  )
}
