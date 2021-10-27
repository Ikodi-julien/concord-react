import React from 'react';
import {Select} from 'semantic-ui-react';

import NavbarContainer from 'src/containers/NavbarContainer';
import CardBox from 'src/containers/CardboxContainer';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import FooterContainer from 'src/containers/FooterContainer';
import {searchTagsAndReturn, makeSelectOptions} from 'src/selectors/search';
import SetPathnameContainer from 'src/containers/SetPathnameContainer';

import './discovery.scss';

const Discovery = ({
  tags, 
  channels, 
  tagSelectValue, 
  tagSelectChange,
  isRefresh,
}) => {
    {/* if it's a refresh, a rerouting occurs using a path stored previously in sessionStorage */}
    if (isRefresh) {
      // console.log('on envoi SetPath')
      return (<SetPathnameContainer />)
    }
  
  // This function puts Select value in searchedValue prop.
  const handleChange = (evt, {value}) => {
    tagSelectChange(value);
  }
  // Sort tags
  const sortedTags = tags.sort((a, b) => a.id - b.id);
  
  // Options for select component
  const selectOptions = makeSelectOptions(sortedTags);
  
  // sort channels by rank
  const sortedChannels = channels.sort((a, b) => a.rank - b.rank );
  
  // Here the channels are filtered according to the option selected
  const renamedChannelList = sortedChannels.map(channel => ({...channel, name: channel.title}));
  
  const filteredChannels = searchTagsAndReturn(tagSelectValue, renamedChannelList);

  let channelsToDisplay = filteredChannels.length ? filteredChannels : sortedChannels;

  if (tagSelectValue !== '' && !filteredChannels.length) channelsToDisplay = [];
  
  return (
    <section className="discovery">
      <StoreUrl />
      <NavbarContainer />
      
      <div className="discovery__container">
        <h1 className="discovery__title">Chat rooms</h1>
        
        <div className="discovery__selectcontainer">
          <Select 
            placeholder='Catégories' 
            value={tagSelectValue}
            options={selectOptions}
            onChange={handleChange}
            />
        </div>
        
        <CardBox
          list={channelsToDisplay}
          isDeletable={false}
          />

      </div>
      <FooterContainer />
    </section>
  );
};

export default Discovery;
