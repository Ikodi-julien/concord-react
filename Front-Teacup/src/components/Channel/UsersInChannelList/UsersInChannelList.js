import React from 'react';
// import {Link} from 'react-router-dom';

const UsersInChannelList = ({users}) => {
  
  // ici il y avait la liste des users connectés au chat.
  
  return (
    <section className="usersinchannellist">
      <h1 className="usersinchannellist__title">En ligne</h1>
      {
        users.map(user => <div key={user.id} className="usersinchannellist__user"><span>{`${user.avatar}`}</span>  <span>{`${user.name}`}</span></div>)
      }
    </section>
  )
}

export default UsersInChannelList;
