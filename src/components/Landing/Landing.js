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
        <h1 className='landing__hero__title'>Come chat with us !</h1>
        <p className='landing__hero__description'>
        Envie de discuter de ta série du moment, de films d'horreur ou simplement de ta passion pour la cuisine ? Rejoins nous sur les channels de ton choix et viens échanger avec d'autres passionnés !
        </p>
      </div>
      
      <img className='landing__hero__image' src={hero} />
      
    </div>
    
    <div className='landing__features'>
      <div className='landing__features__feature'>
        <h2 className='landing__features__feature__title'>Des channels dédiés à tes centres d'intérêt </h2>
        
        <p>Chaque channel est associé à un ou plusieurs centres d'intérêts, des films aux sports en passant par les jeux de société, il y en a pour tous les goûts !
        </p>
        
        <img className='landing__features__feature__image' src={featureImg_1} />
        
      </div>
        
        
      <div className='landing__features__feature'>
        
        <img className='landing__features__feature__image' src={featureImg_2} />
      
        <h2 className='landing__features__feature__title'>Remplis ton profil, on s'occupe du reste !</h2>
        
        <p>Renseigne tes centres d'intérêts dans tes paramètres et laisse toi guider ! TeaCup te suggérera des channels adaptés à tes goûts.
        </p>
      
      </div>
    </div>
  </div>
</section>
)};

export default Landing;
