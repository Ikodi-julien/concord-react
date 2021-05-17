import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Icon} from 'semantic-ui-react';

import './cardbox.scss';

const CardBox = ({list}) => {
  
  const array = list || [];

  return (
  <div className="discovery__listcontainer">
    {
      array.map(item => (
        <Link key={item.id} to={`/channels/${item.id}`} >
        <Card >
          <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Description>
              {item.tags &&
                item.tags.map(tag => <div key={tag.id} className="discovery__listcontainer__cardtag">{tag.name}</div>)
              }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
              <Icon name='user' />
              {item.userCount}
          </Card.Content>
        </Card>
        </Link>
      ))
    }
  </div>
)}

export default CardBox;
