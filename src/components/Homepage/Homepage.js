import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from 'src/containers/NavbarContainer';
import CardBox from 'src/containers/CardboxContainer';
import Footer from 'src/components/Footer/Footer';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import SetPathnameContainer from 'src/containers/SetPathnameContainer';

import './homepage.scss';

const Homepage = ({
  isUserLoggued,
  myChannels,
  recommendedChannels,
  fetchMyChannels,
  fetchMyRecos,
  isRefresh,
  tags,
  setIsRefresh,
}) => {
  console.log(tags);

  {/* if it's a refresh, a rerouting occurs using a path stored previously in sessionStorage else we store the path in sessionStorage */ }
  if (isRefresh) {
    console.log('on envoi SetPath')
    return (<SetPathnameContainer />)
  }
  // Fetch tags and channels on component did mount, if it's not a rerouting after a refresh. Also fetch after user's tags are updated.
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

        {(!tags || tags.length === 0) && (
          <div className='notagalert'>
            <p><strong>On dirait que tu n'as pas renseigné de centres d'intérêt...</strong> <Link to="/profile">Passe dans tes paramètres</Link> pour que nous puissions te proposer des salons qui t'intéressent !</p>
          </div>
        )}

        {myChannels && myChannels.length > 0 && (
          <div className="homepage__mychannels">
            <h1 className="homepage__title">Tes Channels</h1>
            <CardBox
              list={myChannels}
              isDeletable={true}
            />
          </div>
        )}

        <div className="homepage__suggested">
          <h1 className="homepage__title">Recommandé pour toi</h1>
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
