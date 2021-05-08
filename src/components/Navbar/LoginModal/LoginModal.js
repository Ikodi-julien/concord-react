import React from 'react'
import { Button, Divider, Segment, Grid, Icon, Modal, Form } from 'semantic-ui-react'

import './loginmodal.scss';

const SignupModal = ({loginOpen, signupOpen, setLoginOpen, setSignupOpen}) => {

  return (
    <Modal
      closeIcon
      dimmer='blurring'
      size='small'
      onClose={() => setLoginOpen(false)}
      onOpen={() => setLoginOpen(true)}
      open={loginOpen}
      trigger={<Button primary >Connexion</Button>}
    >
    
    <Modal.Content >
    <Segment placeholder >
    
        <Button
              color='orange'
              content="Google Connect"
              onClick={() => setLoginOpen(false)}
            />
    
    <Divider horizontal >ou</Divider>
    
        <Form>
          <Form.Field>
            <label>Email</label>
            <input type='email' placeholder='email' />
          </Form.Field>
          <Form.Field>
            <label>Mot de passe</label>
            <input type='password' placeholder='mot de passe' />
          </Form.Field>
          
            <Button primary type='submit'>Connexion</Button>

        </Form>
        
    <Divider horizontal >ou</Divider>
        
      <Modal
      closeIcon
      dimmer='blurring'
      size='small'
      onClose={() => setSignupOpen(false)}
      onOpen={() => setSignupOpen(true)}
      open={signupOpen}
      trigger={<Button>Créer un compte</Button>}
      >
      
        <Modal.Content >
      
      <Segment placeholder>
          <Form>
          <Form.Field>
              <label>Pseudo</label>
              <input type='text' placeholder='pseudo' />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input type='email' placeholder='email' />
            </Form.Field>
            <Form.Field>
              <label>Mot de passe</label>
              <input type='password' placeholder='mot de passe' />
            </Form.Field>
            
            <Modal.Actions>
              <Button type='submit'>Créer un compte</Button>
            </Modal.Actions>
          </Form>
          </Segment>
        </Modal.Content>
        
      </Modal>

      
      </Segment>
      </Modal.Content>
    </Modal>
  )
}

export default SignupModal;
