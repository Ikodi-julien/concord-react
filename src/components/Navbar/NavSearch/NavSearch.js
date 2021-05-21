import React from 'react';
import {Search, Select} from 'semantic-ui-react';
import {searchNameAndReturn} from 'src/selectors/search';
import {useHistory} from 'react-router-dom';

const NavSearch = (
  {
    tags,
    channels,
    isSearchLoading,
    searchedValue,
    searchResult,
    tagSelectValue,
    toggleSearch,
    searchChange,
    tagSelectChange,
    setSearchResult,
    fetchChannel,
  }) => {
  // This allows to redirect with a history.push('/someurl')
  let history = useHistory();
  // Options for select component
  const tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
  
  /* ------- Search handling -------- */
  const tagNames = tags.map(tag => tag.name);
  
  const handleResultSelect = (evt, data) => {
    // console.log('data.result.title', data.result.title);
    // TODO faire la différence entre salon et catégorie autrement
    for (const tagName of tagNames) {
      if (tagName === data.result.title) {
        history.push('/discovery');
        tagSelectChange(tagName);
        return
      }
    }
    // If a channel is clicked, displays the related channel page.
    history.push(`/channels/${data.result.id}`);
    // Need to dispatch action
    fetchChannel(data.result.id);
  };
  
  const handleSelectChange = (evt, {value}) => {
    // When a tag is selected, displays discovery page and results.
    history.push('/discovery');
    tagSelectChange(value);
  };
  
  // Make filtered list of items that's shown in search input dropdown
  const handleSearchChange = (evt) => { 
    // On informe du changement dans l'input search
    searchChange(evt.target.value);
    // On tri la liste des tags correspondant
    const newNavTagList = searchNameAndReturn(evt.target.value, tags);
    // On fabrique la liste de tags utilisée par le composant search
    const searchTagResult = newNavTagList.map((tag) => ({ title: tag.name}));
    // On tri la liste des channels correspondant
    const renamedChannelList = channels.map(channel => (
      {
        ...channel,
        name: channel.title,
      }
    ));
    const newNavChannelList = searchNameAndReturn(evt.target.value, renamedChannelList);
    // On fabrique la liste de channels à afficher par le composant search
    const searchChannelResult = newNavChannelList.map((channel) => ({ 
      id: channel.id,
      title: channel.name
    }));
    // On fabrique l'objet représentant les résultats utilisés par le composant search.
    const results = {
      channels: {
        name: "Salons",
        results: searchChannelResult,
      },
      tags: {
        name: "Catégories",
        results: searchTagResult,
      }
    }
    
    setSearchResult(results);
  };
  
  return (
    <div className='nav__search'>
      <div 
        className={window.innerWidth < 700 ? 'nav__search__touchzone' : ''}
        onClick={toggleSearch}
      ></div>
    
      <div className='nav__search__container'>
        <div className="nav__search__container__search">
          <Search
            category
            loading={isSearchLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={handleSearchChange}
            results={searchResult}
            value={searchedValue}
          />
        </div>
        
        <div className="nav__search__container__select">
          <Select 
            placeholder="Catégories" 
            value={tagSelectValue}
            options={tagsOptions}
            onChange={handleSelectChange}
          />
        </div>
      </div>
    </div>
  )
};

export default NavSearch;
