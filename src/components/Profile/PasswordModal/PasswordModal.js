import React from 'react';
import {Segment, Button, Form, Modal} from 'semantic-ui-react';

export default () => (
  <Modal
  closeIcon
  dimmer='blurring'
  size='small'
  onClose={() => {}}
  onOpen={() => {}}
  // open={false}
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
    <Form onSubmit={() => {}}>
      <Form.Field>
          <label>Mot de passe actuel</label>
          <input 
            name='password'
            type='password' 
            placeholder='Mot de passe'
            value={''}
            onChange={() => {}}
            />
        </Form.Field>
        <Form.Field>
          <label>Nouveau mot de passe</label>
          <input 
            name='newpassword'
            type='password'
            placeholder='nouveau mot de passe'
            value={''}
            onChange={() => {}}
            />
        </Form.Field>
        <Form.Field>
          <label>Confirmer le nouveau mot de passe</label>
          <input 
            name='newpasswordconfirm' 
            type='password'
            placeholder='nouveau mot de passe'
            value={''}
            onChange={() => {}}
            />
        </Form.Field>

          <Button type='submit' primary loading={false} >Modifier le mot de passe</Button>
        </Form>
      </Segment>
    </Modal.Content>
    
  </Modal>
)
