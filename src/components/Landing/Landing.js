import React, {useEffect} from 'react';
import './landing.scss';

const Landing = ({getUserInfos, isActive, setIsLandingActive}) => {

  // Page only reachable when user is not loggued, but after a refresh user is not loggued so we try to get user infos with httponly tokens anyway.
  // If success in getUserInfos, /home is displayed then à rerouting will occur from /home if necessary.
  useEffect(() => {
    getUserInfos();
    setTimeout(() => {
      setIsLandingActive(true)
    }, 12000);
  }, []);

  const indexs = [];
  for (let index = 0; index < 400; index++) {
    indexs.push(index)
    }
    
return (
<section className='landing'>
  <div className={isActive ? 'landing__container --active' : 'landing__container'}>
    <div className='hero'>
      {
        indexs.map(index => {
          
          const duration = Math.random() * 5 + 's';
          return(
          <div 
            key={index} 
            className='blocks' 
            style={{animationDuration: duration}}
              
            />)})
      }
    </div>
  </div>
</section>
)};

export default Landing;
