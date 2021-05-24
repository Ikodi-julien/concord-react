import React from 'react';
import {Segment, Button, Form, Modal} from 'semantic-ui-react';
import AppInfo from 'src/components/AppInfo/AppInfo';

export default ({
  inputValue, 
  setEmailInputValue, 
  submitForgotPassForm,
  appInfo,
  forgotPassInfoIsVisible,
}) => (
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
      content='Mot de passe oublié' 
      icon='mail'
      labelPosition='left'
    />}
  >
    <Modal.Content >
      <Form onSubmit={() => submitForgotPassForm()}>
      <AppInfo appInfo={appInfo} isVisible={forgotPassInfoIsVisible} />
        <Segment placeholder>
          <Form.Field>
              <label>Saisir l'email avec lequel le compte a été créé</label>
              <input 
                name='forgotPasswordEmailInput'
                type='email' 
                placeholder='Mon email'
                value={inputValue}
                onChange={(evt) => {
                  setEmailInputValue({
                    name: evt.target.name, value: evt.target.value,
                    })
                }}
                />
          </Form.Field>
          <Button type='submit' primary loading={false} >Envoyer la demande</Button>
        </Segment>
      </Form>
    </Modal.Content>
  </Modal>
)
