import React from 'react';
import {Segment, Button, Dropdown, Form, Modal} from 'semantic-ui-react';

import NavbarContainer from 'src/containers/NavbarContainer';
import Footer from 'src/components/Footer/Footer';

import './profile.scss';

const Profile = ({tags}) => {
  
  const handleSubmit = () => {};
  
  return (
    <section className="profile">
      <NavbarContainer />
      
      <div className="profile__container">
      
        <div className="profile__authfieldscontainer">
          <h1 className="profile__title">Mon profil</h1>
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
          trigger={<Button >Modifier</Button>}
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

                <Modal.Actions>
                  <Button type='submit' loading={false} >Modifier le mot de passe</Button>
                </Modal.Actions>
              </Form>
              
              </Segment>
            </Modal.Content>
            
          </Modal>
        </div>
        
        <div className="profile__tagscontainer">
          <h1 className="profile__title">Mes catégories</h1>
          <Form >
            <div class="profile__formrow">
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
                <Button type='submit' loading={false} >
                  Modifier le pseudo
                </Button>
            </div>
          </Form>
          
          <Form >
          <Dropdown 
            item 
            icon='bars' 
            simple
            direction={'right'}
            // open={false}
            // onClick={toggleNavMenu}
            >
            <Dropdown.Menu>
            
            {
            tags.map(tag => (
              <Dropdown.Item key={tag.name}>
                <div className="profile__tagscontainer__tag" >
                  {tag.name}
                </div>
              </Dropdown.Item>
              ))
            }
            </Dropdown.Menu>
          </Dropdown>
            
          </Form>
          
        </div>

      </div>
      <Footer />
    </section>
  );
};

export default Profile;
