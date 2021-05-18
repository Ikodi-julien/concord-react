import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import './bigloader.scss';

const BigLoader = () => (
<div className="bigloader" >
  <Segment>
    <Dimmer active>
      <Loader active size='massive'>Loading</Loader>
    </Dimmer>
  </Segment>
</div>
)

export default BigLoader;
