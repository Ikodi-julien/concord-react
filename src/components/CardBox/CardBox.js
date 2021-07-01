import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

import './cardbox.scss';

const CardBox = ({ list, isDeletable, deleteFromMyChannels }) => {

  const array = list || [];
  const handleDelete = (evt) => {
    const channelId = evt.target.closest('.cardbox__button').id;
    deleteFromMyChannels(channelId);
  }
  return (
    <div className="cardbox__listcontainer">
      <Card.Group>
        {
          array.map(item => (
            
            <Card key={item.id} >
              
                {isDeletable && <button
                  id={item.id}
                  className='cardbox__button'
                  onClick={handleDelete}
                >
                  <i className="far fa-trash-alt"></i>
                </button>}
                
              <Link to={`/channels/${item.id}`} >
                <div className="cardbox__title__row">
                  <div className="cardbox__title__text">
                      {item.title}
                  </div>
                  <div className='cardbox__emptyspace' />
                </div>
              </Link>
                
                <div className="cardbox__tags">
                {item.tags &&
                      item.tags.map(tag => 
                      (<div 
                          key={`tag-${tag.id}`} 
                          className={"cardbox__cardtag" + (tag.matchingTag ? " --matching_tag" : "")}
                        >
                          {tag.name}
                        </div>)
                      )
                    }
                </div>
                
                <div className='cardbox__content'>
                  <Link to={`/channels/${item.id}`} >
                    <div className='cardbox__content__image'>
                      <img src={item.img_url} />
                    </div>
                  </Link>
                  
                  <div className='cardbox__content__plot'>
                    {item.plot}
                  </div>
                </div>

                <div className='cardbox__footer'>
                  <div className='cardbox__footer__rank'>
                    <i className="fas fa-trophy"/> {item.rank}
                  </div>
                  <div className='cardbox__footer__year'>
                    Année: {item.year}
                  </div>
                  <div className='cardbox__footer__usercount'>
                  <Icon name='user' />
                  {(item.usersCount || 'Aucun') + ` utilisateur${item.usersCount > 1 ? "s" : ""}`}
                  </div>
                </div>
            </Card>
          ))
        }
      </Card.Group>
    </div >
  )
}

CardBox.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  isDeletable: PropTypes.bool.isRequired,
  deleteFromMyChannels: PropTypes.func, 
}
export default CardBox;
