import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const MyChannels = (
  {
    myChannelLinks, 
    showMychannels, 
    fetchChannel, 
    toggleMyChannels,
    imageURL,
  }
  ) => {

  // On met à jour les infos du channel au click sur le lien.
  const handleClick = (channelId) => {
    fetchChannel(channelId);
  };
  //
  const handleMyChannelClick = () => {
    toggleMyChannels();
  };
  const {id} =useParams();
  
  return (
    <section className={showMychannels ? "mychannels --show" : "mychannels"}>

    
      <div className="mychannels__header">
        {
          window.innerWidth < 700 &&
          <button
            className='mychannels__header__button'
            onClick={ handleMyChannelClick }
            >
            <i className="fas fa-times"></i>
          </button>
        }
      
        <div className="mychannels__header__image" >
          <img src={imageURL} />
        </div>
        
        <h1 className="mychannels__title">Mes #</h1>

      </div>
      
      <div className="mychannels__links">
        {
          myChannelLinks.map(link => {
            // return a div if it's the loaded channel
            if (id == link.id) {
              return (
                <div
                  key={link.id}
                  className='mychannels__links__link--active'
                >{link.name}</div>)
            }
            
            return (
            <Link
              key={link.id}
              className='mychannels__links__link'
              to={`/channels/${link.id}`}
              onClick={() => {handleClick(link.id)}}
            >{link.name}</Link>)})
        }
      </div>
    </section>
  )
}

export default MyChannels;
