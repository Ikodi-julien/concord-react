import React, {useEffect} from 'react';
import hero from 'src/assets/cats_in_cup.png';
import featureImg_1 from 'src/assets/teacup_logo.png';
import featureImg_2 from 'src/assets/friends.png';
import './landing.scss';

const Landing = ({getUserInfos}) => {
  // Page only reachable when user is not loggued, but after a refresh user is not loggued so we try to get user infos with httponly tokens anyway.
  // If success in getUserInfos, /home is displayed then à rerouting will occur from /home if necessary.
  useEffect(() => {
    getUserInfos();
  }, []);

return (
<section className='landing'>
  {/* Le composant Logguer doit redemander les infos du user à l'API si celui-ci n'est pas loggué dans le state. */}
  <div className='landing__background' />
  <div className='landing__container'>
    <div className='landing__hero'>
    
      <div className="landing__hero__text">
        <h1 className='landing__hero__title'>La phrase d'accroche à trouver</h1>
        <p className='landing__hero__description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
      
      <img className='landing__hero__image' src={hero} />
      
    </div>
    
    <div className='landing__features'>
      <div className='landing__features__feature'>
        <h2 className='landing__features__feature__title'>La phrase feature</h2>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
        
        <img className='landing__features__feature__image' src={featureImg_1} />
        
      </div>
        
        
      <div className='landing__features__feature'>
        
        <img className='landing__features__feature__image' src={featureImg_2} />
      
        <h2 className='landing__features__feature__title'>La phrase feature</h2>
        
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
      
      </div>
    </div>
  </div>
</section>
)};

export default Landing;
