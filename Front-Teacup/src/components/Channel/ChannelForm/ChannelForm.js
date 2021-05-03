import React from 'react';
import {Button, Form} from 'semantic-ui-react';

const ChannelForm = () => {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
  }
  
  return (
    <section className="channelForm">
      <Form onSubmit={handleSubmit}>
        <div className="channelForm__row">
          <Form.Field>
            {/* <label>First Name</label> */}
            <input placeholder='Saisir un message' />
          </Form.Field>
          <Button type='submit'><i className="fas fa-paper-plane"></i></Button>
        </div>
      </Form>
    </section>
  )
}

export default ChannelForm;
