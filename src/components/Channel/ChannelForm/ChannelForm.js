import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import EditorContainer from 'src/containers/EditorContainer';

const ChannelForm = ({setInputValue, inputValue, channelFormSubmit}) => {
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
    channelFormSubmit();
  }
  
  const handleChange = (evt) => {
    // console.log('change'),
    setInputValue({
      name: "inputForm",
      value: evt.target.value
    })
  }
  
  return (
    <section className="channelForm">
      <Form onSubmit={handleSubmit}>
        <div className="channelForm__row">
          <Form.Field>
            {/* <label>First Name</label> */}
            <EditorContainer />
            {/* <input 
              name="inputForm"
              placeholder='Saisir un message' 
              value={inputValue}
              onChange={handleChange}
              /> */}
          </Form.Field>
          <Button type='submit'><i className="fas fa-paper-plane"></i></Button>
        </div>
      </Form>
    </section>
  )
}

export default ChannelForm;
