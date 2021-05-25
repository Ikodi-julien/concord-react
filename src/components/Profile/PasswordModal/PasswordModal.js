import React from 'react';
import {Segment, Button, Form, Modal} from 'semantic-ui-react';
import AppInfo from 'src/components/AppInfo/AppInfo';

export default ({ updatePassFormOld, updatePassFormNew1, updatePassFormNew2, setInputValue, submitUpdatePassword, appInfo, updatePassInfoIsVisible }) => {
  const handleChange = (evt) => {
    setInputValue({
      name: evt.target.name,
      value: evt.target.value,
    });
  };
  const handleSubmit = () => {
    submitUpdatePassword()
  }
  return (
  <Modal
  closeIcon
  dimmer='blurring'
  size='small'
  trigger={
    <Button 
      type='button'
      content='Modifier mon mot de passe' 
      icon='unlock'
      labelPosition='left'
    />}
  >
    <Modal.Content >
    
    <Segment placeholder>
    <Form onSubmit={handleSubmit}>
      <AppInfo appInfo={appInfo} isVisible={updatePassInfoIsVisible}/>
      <Form.Field>
          <label>Mot de passe actuel</label>
          <input 
            name='updatePassFormOld'
            type='password' 
            placeholder='Mot de passe'
            value={updatePassFormOld}
            onChange={handleChange}
            />
        </Form.Field>
        <Form.Field>
          <label>Nouveau mot de passe</label>
          <input 
            name='updatePassFormNew1'
            type='password'
            placeholder='nouveau mot de passe'
            value={updatePassFormNew1}
            onChange={handleChange}
            />
        </Form.Field>
        <Form.Field>
          <label>Confirmer le nouveau mot de passe</label>
          <input 
            name='updatePassFormNew2' 
            type='password'
            placeholder='nouveau mot de passe'
            value={updatePassFormNew2}
            onChange={handleChange}
            />
        </Form.Field>

          <Button type='submit' primary loading={false} >Modifier le mot de passe</Button>
        </Form>
      </Segment>
    </Modal.Content>
    
  </Modal>
)}
