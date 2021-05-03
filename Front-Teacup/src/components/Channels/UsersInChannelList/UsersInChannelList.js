import React from 'react';
// import {Link} from 'react-router-dom';

const UsersInChannelList = (props) => {
  
  const users = [
    {name:"Bernard", avatar: "(_;_)"},
    {name:"Bianca", avatar: ";o)"},
    {name:"Belle", avatar: ":-/"},
    {name:"Sébastien", avatar: "o.0"},
  ];
  
  return (
    <section className="usersinchannellist">
      <h1 className="usersinchannellist__title">En ligne</h1>
      {
        users.map(user => <div className="usersinchannellist__user"><span>{`${user.avatar}`}</span>  <span>{`${user.name}`}</span></div>)
      }
    </section>
  )
}

export default UsersInChannelList;
