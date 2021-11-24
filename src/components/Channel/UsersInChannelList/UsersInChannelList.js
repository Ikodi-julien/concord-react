import React from 'react';
import defaultAvatar from 'src/assets/avatarDefault.js';

const UsersInChannelList = ({users, showUsersInChannel, toggleUsersInChannel}) => {
  // ici il y a la liste des users connectés au chat et ceux qui l'ont été.
  return (
    <section className={showUsersInChannel ? "usersinchannellist --show" : "usersinchannellist"}>
    
      <div className="usersinchannellist__header">
        <h1 className="usersinchannellist__title">Utilisateurs</h1>
        {
          window.innerWidth < 700 &&
          <button
            className='usersinchannellist__header__button'
            onClick={toggleUsersInChannel}
            >
            <i className="fas fa-times"></i>
          </button>
        }
      </div>
      
      <div className="usersinchannellist__links">
        {
          users.map((user) => (<div 
            key={user.id} 
            className={user.isLogged ? "usersinchannellist__links__link --logged" : "usersinchannellist__links__link"}>
          <img src={user.avatar ? user.avatar : defaultAvatar} style={{width: 25, height: 25 }}/>
          <span> {`${user.nickname}`}</span></div>))
        }
      </div>

    </section>
  )
}

export default UsersInChannelList;
