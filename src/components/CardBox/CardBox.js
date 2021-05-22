import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Icon} from 'semantic-ui-react';

import './cardbox.scss';

const CardBox = ({list, deleteChannel, isDeletable, deleteFromMyChannels}) => {
  
  const array = list || [];
  const handleDelete = (evt) => {
    const channelId = evt.target.closest('.cardbox__button').id;
    deleteFromMyChannels(channelId);
  }
  return (
  <div className="discovery__listcontainer">
    {
      array.map(item => (
        <Card key={item.id} >
          {isDeletable && <button 
            id={item.id}
            className='cardbox__button'
            onClick={handleDelete}
            >
            <i className="fas fa-times"></i>
          </button>}
          <Card.Content>
            <Card.Header>
              <Link to={`/channels/${item.id}`} >
              {item.title}
              </Link>
              <div className='cardbox__emptyspace' />
            </Card.Header>
            <Card.Description>
              {item.tags &&
                item.tags.map(tag => <div key={`tag-${tag.id}`} className={"discovery__listcontainer__cardtag" + (tag.matchingTag ? "--matching_tag" : "")}>{tag.name}</div>)
              }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Icon name='user' />
              {item.usersCount}
          </Card.Content>
        </Card>
      ))
    }
  </div>
)}

export default CardBox;
