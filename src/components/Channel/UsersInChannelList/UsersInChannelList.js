import React from 'react';
import {Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const UsersInChannelList = ({users, showUsersInChannel}) => {
  
  // ici il y a la liste des users connectés au chat et ceux qui l'ont été.
  
  return (
    <section className={showUsersInChannel ? "usersinchannellist --show" : "usersinchannellist"}>
      <h1 className="usersinchannellist__title">Utilisateurs</h1>
      <div class="usersinchannellist__links">
        {
          users.map(user => <Link 
            key={user.id} 
            className="usersinchannellist__links__link">
          {/* <span>{`${user.avatar}`}</span> */}
          <span>{`${user.nickname}`}</span></Link>)
        }
      </div>
      
      {/* <h1 className="usersinchannellist__title">Hors ligne</h1> */}
      {/* {
        users.map(user => <div key={user.id} className="usersinchannellist__user"> */}
        {/* <span>{`${user.avatar}`}</span> */}
        {/* <span>{`${user.nickname}`}</span></div>)
      } */}
      
    </section>
  )
}

export default UsersInChannelList;
