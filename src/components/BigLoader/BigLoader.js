import React from 'react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import './bigloader.scss';

const BigLoader = () => (
<div className="bigloader" >
    <Dimmer active>
      <Loader active size='massive'>Loading</Loader>
    </Dimmer>
</div>
)

export default BigLoader;
