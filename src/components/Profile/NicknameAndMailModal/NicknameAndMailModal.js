import React, {useState} from 'react';
import {Segment, Button, Form, Modal} from 'semantic-ui-react';
import AppInfo from 'src/components/AppInfo/AppInfo';

export default ({ 
  updateMailNew,
  updateNicknameNew,
  updateNickNameAndMailPassword,
  updateNickNameAndMailInfoIsVible,
  appInfo,
  setInputValue,
  submitUpdateAuthCredentials,
 }) => {
  const [open, setOpen] = useState(false)
   
  const handleChange = (evt) => {
    setInputValue({
      name: evt.target.name,
      value: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setOpen(false);
    submitUpdateAuthCredentials();
  }
  return (
  <Modal
  closeIcon
  dimmer='blurring'
  size='small'
  onClose={() => setOpen(false)}
  onOpen={() => setOpen(true)}
  open={open}
  trigger={
    <Button 
      // type='button'
      content='Modifier mes infos de profil' 
      // icon='unlock'
      // labelPosition='left'
      basic
      color="blue"
    />}
  >
    <Modal.Content >
    
    <Segment placeholder>
    <Form onSubmit={handleSubmit}>
      <AppInfo appInfo={appInfo} isVisible={updateNickNameAndMailInfoIsVible}/>
        <Form.Field>
          <label>Nouvel email</label>
          <input 
            name='updateMailNew'
            type='email'
            placeholder='nouvel email'
            value={updateMailNew}
            onChange={handleChange}
            />
        </Form.Field>
        <Form.Field>
          <label>Nouveau pseudo</label>
          <input 
            name='updateNicknameNew' 
            type='text'
            placeholder='nouveau pseudo'
            value={updateNicknameNew}
            onChange={handleChange}
            />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe afin de vérifier la demande</label>
          <input 
            name='updateNickNameAndMailPassword' 
            type='password'
            placeholder='mot de passe'
            value={updateNickNameAndMailPassword}
            onChange={handleChange}
            />
        </Form.Field>
          <Button primary loading={false} >Valider</Button>
        </Form>
      </Segment>
    </Modal.Content>
    
  </Modal>
)}
