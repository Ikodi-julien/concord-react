import React from 'react';
import searchAndReturn from 'src/selectors/search';
import {Search, Select, Button, Dropdown, Icon, Menu} from 'semantic-ui-react';
// import './navsearch.scss'

const NavSearch = ({
  isSearchLoading, 
  searchResult,
  searchedValue,
  searchChange,
  setSearchResult,
  tags,
}) => {
  
    
  const tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
    /* Ici la gestion de la recherche */
  
    const handleResultSelect = () => {
      // Ici je voudrais rediriger soit vers le channel choisi, soit vers la page de résultat de recherche affichant les channels du tag sélectionné
    };
    
    const handleSearchChange = (evt) => { 
      // On informe du changement dans l'input search
      searchChange(evt.target.value);
      // On tri la liste des tags correspondant
      const newNavTagList = searchAndReturn(evt.target.value, tags);
      // On fabrique la liste de tags utilisée par le composant search
      const searchTagResult = newNavTagList.map((tag) => ({ title: tag.name}));
      // On fabrique l'objet représentant les résultats utilisés par le composant search.
      const results = {
        channels: {
          name: "Salons",
          results: [
              {
                "title": "Baxter dury",
              },
              {
                "title": "Justice",
              }
          ]
        },
        tags: {
          name: "Catégories",
          results: searchTagResult,
        }
      }
      
      setSearchResult(results);
    };

  return (
    
    <section className='nav__search__container'>
      <Menu attached='top'>
        <Dropdown
          item 
          icon='search' 
          simple
          direction={ window.innerWidth < 700 ? 'right' : 'left'}
        >
          <Dropdown.Menu >
            <Dropdown.Item>
              <Dropdown.Header icon='tags' content='Trier par catégorie' />
              
              {/* <Dropdown.Menu direction='left' scrolling > */}
                {/* {tagsOptions.map((option) => (
                  <Dropdown.Item key={option.value} {...option} />
                ))} */}
              <Select placeholder="Catégories" options={tagsOptions} />
                
              {/* </Dropdown.Menu> */}

              <Dropdown.Header icon='search' content='Rechercher sur Teacup' />
              
                <Search
                  category
                  loading={isSearchLoading}
                  onResultSelect={handleResultSelect}
                  onSearchChange={handleSearchChange}
                  results={searchResult}
                  value={searchedValue}
                  />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </section>
  )
}

export default NavSearch;
