import React from 'react'
import { Button, Divider, Segment, Modal, Form } from 'semantic-ui-react'
import ErrorInfo from 'src/components/Navbar/ErrorInfo/ErrorInfo';

import './loginmodal.scss';

const LoginModal = ({
  loginOpen, 
  signupOpen, 
  setLoginOpen, 
  setSignupOpen,
  submitLoginForm,
  submitSignupForm,
  loginButtonIsLoading,
  inputLoginEmailValue,
  inputLoginPasswordValue,
  signupButtonIsLoading,
  inputSignupPseudoValue,
  inputSignupEmailValue,
  inputFirstSignupPasswordValue,
  inputSecondSignupPasswordValue,
  setInputValue,
  loginErrorIsVisible,
  signupErrorIsVisible,
  errorMessage,
}) => {

  const inputChange = (evt) => {
    // console.log(evt.)
    setInputValue({name: evt.target.name, value: evt.target.value})
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.name === 'loginForm') {
      submitLoginForm();
      return;
    }
    submitSignupForm();
  }

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
    <ErrorInfo isVisible={loginErrorIsVisible} errorMessage={errorMessage} />
    <Modal.Content >
    <Segment placeholder >
    
        <Button
              color='orange'
              content="Google Connect"
              onClick={() => setLoginOpen(false)}
            />
    
    <Divider horizontal >ou</Divider>
    
        <Form name='loginForm' onSubmit={handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input 
              name='loginEmail' 
              type='email' 
              placeholder='email' 
              value={inputLoginEmailValue}
              onChange={inputChange}
              />
          </Form.Field>
          <Form.Field>
            <label>Mot de passe</label>
            <input 
              name='loginPassword' 
              type='password' 
              placeholder='mot de passe' 
              value={inputLoginPasswordValue}
              onChange={inputChange}
              />
          </Form.Field>
          
            <Button 
              primary 
              loading={loginButtonIsLoading}
              type='submit'
              >Connexion</Button>

        </Form>
        
    <Divider horizontal >ou</Divider>
        
      <Modal
      closeIcon
      dimmer='blurring'
      size='small'
      onClose={() => setSignupOpen(false)}
      onOpen={() => setSignupOpen(true)}
      open={signupOpen}
      trigger={<Button >Créer un compte</Button>}
      >
      <ErrorInfo isVisible={signupErrorIsVisible} errorMessage={errorMessage} />
        <Modal.Content >
      
      <Segment placeholder>
          <Form name='signupForm' onSubmit={handleSubmit}>
          <Form.Field>
              <label>Pseudo</label>
              <input 
                name='signupPseudo'
                type='text' 
                placeholder='pseudo'
                value={inputSignupPseudoValue}
                onChange={inputChange}
                />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input 
                name='signupEmail'
                type='email'
                placeholder='email'
                value={inputSignupEmailValue}
                onChange={inputChange}
                />
            </Form.Field>
            <Form.Field>
              <label>Mot de passe</label>
              <input 
                name='firstSignupPassword' 
                type='password'
                placeholder='mot de passe'
                value={inputFirstSignupPasswordValue}
                onChange={inputChange}
                />
            </Form.Field>
            <Form.Field>
              <label>Un autre mot de passe (ok, je sors...)</label>
              <input 
                name='secondSignupPassword' 
                type='password'
                placeholder='mot de passe'
                value={inputSecondSignupPasswordValue}
                onChange={inputChange}
                />
            </Form.Field>
            <Modal.Actions>
              <Button type='submit' loading={signupButtonIsLoading} >Créer un compte</Button>
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

export default LoginModal;
