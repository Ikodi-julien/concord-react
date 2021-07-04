import React from 'react'
import { Button, Divider, Segment, Modal, Form } from 'semantic-ui-react'
import AppInfo from 'src/components/AppInfo/AppInfo';
import ForgotPassContainer from 'src/containers/ForgotPasswordContainer';
import {GOOGLE_CONNECT_URL} from 'src/settings'
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
  loginInfoIsVisible,
  signupInfoIsVisible,
  appInfo,
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
      trigger={<Button primary >S'inscrire / Se connecter</Button>}
    >
    <AppInfo isVisible={loginInfoIsVisible} appInfo={appInfo} />
    <Modal.Content >
    <Segment placeholder >
    
      <a href={GOOGLE_CONNECT_URL} >
        <button className="button-google" />
      </a>
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
      <AppInfo isVisible={signupInfoIsVisible} appInfo={appInfo} />
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
      <Divider />
      
      <ForgotPassContainer />
      
      </Segment>
      </Modal.Content>
    </Modal>
  )
}

export default LoginModal;
