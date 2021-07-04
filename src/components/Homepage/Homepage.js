import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from 'src/containers/NavbarContainer';
import CardBox from 'src/containers/CardboxContainer';
import Footer from 'src/components/Footer/Footer';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';

import './homepage.scss';

const Homepage = ({
  isUserLoggued,
  myChannels,
  recommendedChannels,
  fetchMyChannels,
  fetchMyRecos,
  isRefresh,
  tags,
  noTagAlert,
}) => {

  // Fetch tags and channels on component did mount, if it's not a rerouting after a refresh. Also fetch channels after user's tags are updated from Profile.
  if (isUserLoggued && !isRefresh) {
    useEffect(() => {
      fetchMyChannels();
      fetchMyRecos();
    }, [tags]);
  }

  return (
    <section className='homepage'>

      <StoreUrl />
      <NavbarContainer />

      <div className='homepage__container'>

        <div className="homepage__mychannels">
          <h1 className="homepage__title"># mes chatrooms</h1>
        {myChannels && myChannels.length > 0 ? (
          <CardBox
            list={myChannels}
            isDeletable={true}
          />
          ) : (
            <div className='homepage__info'>
              <p>Ici s'afficheront les chatrooms visitées</p>
            </div>
          )
        }
          
        </div>

        <div className="homepage__suggested">
          <h1 className="homepage__title"># recommandés</h1>
                    
          {!noTagAlert && (
            <div className='homepage__info'>
              <p>Pour avoir des recommandations,  <Link to="/profile">tu peux choisir des centres d'intérêt dans tes paramètres</Link></p>
            </div>
          )}
          <CardBox
            list={recommendedChannels}
            isDeletable={false}
          />
        </div>

      </div>

      <Footer />
    </section>
  )
};

export default Homepage;
