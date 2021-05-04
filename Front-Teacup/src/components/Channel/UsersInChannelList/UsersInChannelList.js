import React from 'react';
// import {Link} from 'react-router-dom';

const UsersInChannelList = (props) => {
  
  const users = [
    {id: 1, name:"Bernard", avatar: "(_;_)"},
    {id: 2, name:"Bianca", avatar: ";o)"},
    {id: 3, name:"Belle", avatar: ":-/"},
    {id: 4, name:"Sébastien", avatar: "o.0"},
  ];
  
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
