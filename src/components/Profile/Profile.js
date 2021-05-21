import React, {useState, useEffect} from 'react';
import {Segment, Button, Dropdown, Form, Modal, Input} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

import NavbarContainer from 'src/containers/NavbarContainer';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import Footer from 'src/components/Footer/Footer';

import './profile.scss';

const Profile = (
  {
    tags, 
    user, 
    updateProfile,
    setProfileInputValue,
    setTagsDropdownValue,
    setTagsDropDownIds,
    toggleActiveBtn,
    setFirstLogin,
  }) => {
  const history = useHistory();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateProfile();
    history.push('/home');
  };
  const handleInputChange = (evt) => {
    const objectInput = {
      [evt.target.name]: evt.target.value
    }
    setProfileInputValue(objectInput);
  }
    
  const tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
  
  const handleTagsSelection = ((_, {value}) => {
    const tagIds = value.map(tagName => tagsOptions.filter(tag => tag.value === tagName)[0].key
    )
    setTagsDropdownValue(value);
    setTagsDropDownIds(tagIds)
  })

  const handleEditBtn = (evt, {name}) => {
    console.log(name)
    toggleActiveBtn(name)
  };
  
  useEffect(() => setFirstLogin(false), [])
  
  return (
    <section className="profile">
      <StoreUrl />
      <NavbarContainer />
      
      <div className="profile__container">
      <Form onSubmit={handleSubmit}>
        <div className="profile__authfieldscontainer">
          <h1 className="profile__title">Mon profil</h1>
            <div className="profile__formrow">
              <label>Pseudo :</label>
              <Form.Field >
              <input
                name='nicknameInput'
                type='text'
                placeholder='pseudo'
                value={user.nicknameInput}
                onChange={handleInputChange}
                disabled={!user.nicknameInputIsActive}
                />
              </Form.Field>
                <Button 
                  name='nicknameInputIsActive'
                  type='button' 
                  active={user.nicknameInputIsActive}
                  onClick={handleEditBtn}
                  >
                <i className="fas fa-edit"></i>
                </Button>
            </div>
          
            <div className="profile__formrow">
            <label >Email :</label>
              <Form.Field>
                <input
                  name='emailInput'
                  type='email'
                  placeholder='email'
                  value={user.emailInput}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!user.emailInputIsActive}
                  />
              </Form.Field>
              <Button 
                  name='emailInputIsActive'
                  type='button' 
                  active={user.emailInputIsActive}
                  onClick={handleEditBtn}
                  >
                <i className="fas fa-edit"></i>
                </Button>
            </div>
            
          <label>Mot de passe :</label>
          <Modal
          closeIcon
          dimmer='blurring'
          size='small'
          onClose={() => {}}
          onOpen={() => {}}
          // open={false}
          trigger={
            <Button 
              content='Modifier le mot de passe' 
              icon='right arrow'
              labelPosition='right'
            />
              }
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
        </div>
        
        <div className="profile__tagscontainer">
          {/* <h1 className="profile__title">Mes catégories</h1> */}
          <p className="profile__subtitle">Sélectionne des catégories pour avoir des suggestions adaptées.</p>
          
          <Dropdown 
            text='Mes catégories' 
            fluid 
            multiple selection 
            options={tagsOptions} 
            onChange={handleTagsSelection}
            value={user.tagDropDownValue}
            />
        </div>
        <Button type='submit' primary >Valider mon profil</Button>
      </Form>
    </div>
    <Footer />
  </section>
  );
};

export default Profile;
