import React from 'react';
import {Form} from 'semantic-ui-react';
import EditorContainer from 'src/containers/EditorContainer';

const ChannelForm = ({channelFormSubmit}) => {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!evt.target.value) return;
    channelFormSubmit();
  }
  
  return (
    <section className="channelForm">
      <Form onSubmit={handleSubmit}>
        <div className="channelForm__row">
          <EditorContainer />
          <button className="channelForm__row__button" type='submit'>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </Form>
    </section>
  )
}

export default ChannelForm;
