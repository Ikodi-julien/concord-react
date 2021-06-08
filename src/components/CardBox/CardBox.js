import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

import './cardbox.scss';

const CardBox = ({ list, deleteChannel, isDeletable, deleteFromMyChannels }) => {

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
                
                <div className='cardbox__content'>
                  <div className="cardbox__title">
                    {item.title}
                  </div>
                  <div className='cardbox__description'>
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
                  <div className='cardbox__emptyspace' />
                  
                </div>
                <div className='cardbox__usercount'>
                  <Icon name='user' />
                  {(item.usersCount || 'Aucun') + ` utilisateur${item.usersCount > 1 ? "s" : ""} sur ce channel`}
                </div>
              </Link>
            </Card>
          ))
        }
      </Card.Group>
    </div >
  )
}

export default CardBox;
