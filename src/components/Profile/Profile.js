import React, {useEffect} from 'react';
import {Button, Dropdown, Form, Segment, Divider} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import NavbarContainer from 'src/containers/NavbarContainer';
import PasswordModal from './PasswordModal/PasswordModal';
import ProfileFormContainer from 'src/containers/ProfileFormContainer';
import Footer from 'src/components/Footer/Footer';

import './profile.scss';

const Profile = ({ setFirstLogin }) => {

  useEffect(() => {
    setFirstLogin(false);
  }, [])
  
  return (
    <section className="profile">
      <StoreUrl />
      <NavbarContainer />
      
      <div className="profile__container">
        <Segment >
          <ProfileFormContainer />
        </Segment>
        <Divider />
        <Segment >
          <PasswordModal />
          {/* <Button secondary icon='delete user' content='Supprimer mon compte' labelPosition='left' /> */}
        </Segment>

      </div>
    <Footer />
  </section>
  );
};

export default Profile;
