import React from 'react';
import {Segment, Button, Dropdown, Form, Modal} from 'semantic-ui-react';

import NavbarContainer from 'src/containers/NavbarContainer';
import Footer from 'src/components/Footer/Footer';

import './profile.scss';

const Profile = ({tags}) => {
  
  const handleSubmit = () => {};
  
  const tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
  
  return (
    <section className="profile">
      <NavbarContainer />
      
      <div className="profile__container">
      
        <div className="profile__authfieldscontainer">
          <h1 className="profile__title">Mon profil</h1>
          <Form >
            <div className="profile__formrow">
              <label>Pseudo :</label>
              <Form.Field >
              <input
                name='pseudo'
                type='text'
                placeholder='pseudo'
                value={''}
                onChange={() => {}}
                />
              </Form.Field>
                <Button type='submit' primary loading={false} >
                  Modifier le pseudo
                </Button>
            </div>
          </Form>
          
          <Form >
            <div className="profile__formrow">
            <label >Email :</label>
              <Form.Field>
                    <input
                      name='email'
                      type='email'
                      placeholder='email'
                      value={''}
                      onChange={() => {}}
                      className="input"
                      />
              </Form.Field>
              <Button type='submit' primary loading={false} >
                Modifier l'email
              </Button>
            </div>
          </Form>
            
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
              <Form name='passwordForm' onSubmit={handleSubmit}>
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
          <h1 className="profile__title">Mes catégories</h1>
          <p className="profile__subtitle">Sélectionne des catégories pour avoir des suggestions adaptées.</p>
          
          <Form >
          <Dropdown 
            text='Mes catégories' 
            fluid 
            multiple selection 
            options={tagsOptions} 
            />
            
          </Form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Profile;
