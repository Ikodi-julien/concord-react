import React, {useEffect, useState} from 'react';
import './landing.scss';

const Landing = ({getUserInfos}) => {

  // Page only reachable when user is not loggued, but after a refresh user is not loggued so we try to get user infos with httponly tokens anyway.
  // If success in getUserInfos, /home is displayed then à rerouting will occur from /home if necessary.
  
  useEffect(() => {
    getUserInfos();
  }, []);
    
return (
<section className='landing'>
  <div className="hero"></div>
</section>
)};

export default Landing;
