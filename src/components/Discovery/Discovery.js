import React from 'react';
import {Select} from 'semantic-ui-react';

import NavbarContainer from 'src/containers/NavbarContainer';
import CardBox from 'src/containers/CardboxContainer';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import Footer from 'src/components/Footer/Footer';
import {searchTagsAndReturn} from 'src/selectors/search';

import './discovery.scss';

const Discovery = ({tags, channels, tagSelectValue, tagSelectChange}) => {
  // This function puts Select value in searchedValue prop.
  const handleChange = (evt, {value}) => {
    tagSelectChange(value);
  }
  // Here i build the options object for the Select
  const tagsOptions = tags.map(tag => (
    {
      key: tag.id, value: tag.name, text: tag.name 
    }
  ))
  // Here the channels are filtered according to the option selected and terefore the searchedValue
  // console.log('searchedValue', tagSelectValue);
  const renamedChannelList = channels.map(channel => ({...channel, name: channel.title}));
  // console.log('renamedChannelList', renamedChannelList);
  
  const filteredChannels = searchTagsAndReturn(tagSelectValue, renamedChannelList);
  // console.log('newChannelList', newChannelList);
  
  // Finally, build the list used to display filtered cards
  const channelListToDisplay = filteredChannels.map(channel => {
    
    const tags =[];
    
    for (const tag of channel.tags) {
      tags.push(tag.name);
    }
        
    return (
    {
      id: channel.id,
      title: channel.title,
      tags,
      userCount: 'pas encore',
    }
  )})
  // console.log('filteredChannels', filteredChannels);
  // Default channel list to be displayed
  const allChannels = channels.map(channel => (
    {
      id: channel.id,
      title: channel.title,
      tags: channel.tags,
      userCount: 'pas encore',
    }
  ))
  
  const channelsToDisplay = channelListToDisplay.length ? channelListToDisplay : allChannels;
  
  return (
    <section className="discovery">
    <StoreUrl />
      <NavbarContainer />
      
      <div className="discovery__container">
        <h1 className="discovery__title">Channels</h1>
        
        <div className="discovery__selectcontainer">
          <Select 
            placeholder='Catégories' 
            options={tagsOptions}
            onChange={handleChange}
            />
        </div>
        
        <CardBox
          list={channelsToDisplay}
          isDeletable={false}
          />

      </div>
      <Footer />
    </section>
  );
};

export default Discovery;
