import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';

const BigLoader = () => (
  
  <div>
    <Segment>
      <Dimmer active>
        <Loader active size='massive'>Loading</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default BigLoader;
