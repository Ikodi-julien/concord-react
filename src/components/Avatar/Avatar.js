import React from 'react';
import PropTypes from 'prop-types';
import AvatarEdit from 'react-avatar-edit';
import { Button, Segment } from 'semantic-ui-react';
import Message from 'src/components/Message/Message';
import './avatar.scss';

const Avatar = ({ avatarFile, avatar, setAvatar, pseudo, updateAvatar }) => {

  const onClose = () => {
    setAvatar(null)
  }

  const onCrop = (avatar) => {
    // console.log(avatar);
    setAvatar(avatar)
  }

  // const onBeforeFileLoad = (elem) => {
  //   // console.log(elem.target.files[0].size);
  // }

  const preview = {
    nickname: pseudo,
    id: 'a',
  }
  return (
    <section>
      <h1 className="profile__title">Mon avatar</h1>
      <div className="profile__avatar__row">
        <div className="profile__avatar__container">
          <AvatarEdit
            width={200}
            height={150}
            onCrop={onCrop}
            onClose={onClose}
            // onBeforeFileLoad={onBeforeFileLoad}
            src={avatarFile}
          />
        </div>
        {avatar && (
          <div>
            <p>Aperçu</p>
            <Message message={preview} nickname={pseudo} avatar={avatar} />
          </div>
        )}
      </div>
      <div className="profile__avatar__submit"><Button basic color="blue" content="Valider l'avatar" onClick={updateAvatar} /></div>
    </section>
  )
}

Avatar.propTypes = {
  avatarFile: PropTypes.any,
  avatar: PropTypes.string.isRequired,
  setAvatar: PropTypes.func.isRequired, 
  pseudo: PropTypes.string.isRequired, 
  updateAvatar: PropTypes.func.isRequired,
}

export default Avatar;
