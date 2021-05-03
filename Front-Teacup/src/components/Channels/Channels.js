import React from 'react';
import Navbar from '../Navbar/Navbar';
import MyChannels from './MyChannels/MyChannels';

import './mychannels.scss';

const Channels = () => {
  
  return (
    <section className='channels'>
      <Navbar />
      <MyChannels />      
    </section>
  )
}

export default Channels;
