import React from 'react';
import NavbarContainer from 'src/containers/NavbarContainer';
import CardBox from 'src/containers/CardboxContainer';
import Footer from 'src/components/Footer/Footer';

import './homepage.scss';

const Homepage = ({  myChannels, recommendedChannels }) => {
  
  
  // const myChannels = [];
  // const suggestedChannels = [];
  // console.log('myChannels homepage :', myChannels);
  console.log('recochannel homepage :', recommendedChannels);
  return (
    <section className='homepage'>
      <NavbarContainer />
    
        <div className='homepage__container'>

          <div className="homepage__mychannels">
            <h1 className="homepage__title">Mes Channels</h1>
            <CardBox 
              list={myChannels}
              isDeletable={true}
              />
          </div>
          
          <div className="homepage__suggested">
            <h1 className="homepage__title">Tu pourrais aimer</h1>
            <CardBox
              list={recommendedChannels}
              isDeletable={true}
              />
          </div>
          
        </div>
        
      <Footer />
    </section>
)};

export default Homepage;
