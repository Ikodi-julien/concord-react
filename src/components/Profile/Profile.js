import React from 'react';
import {Segment, Divider} from 'semantic-ui-react';

import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import NavbarContainer from 'src/containers/NavbarContainer';
import PasswordModalContainer from 'src/containers/PasswordModalContainer';
import ProfileFormContainer from 'src/containers/ProfileFormContainer';
import Footer from 'src/components/Footer/Footer';

import './profile.scss';

const Profile = () => {

  /* Profile datas are fetch from ProfileForm component */
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
          <PasswordModalContainer />
          {/* <Button secondary icon='delete user' content='Supprimer mon compte' labelPosition='left' /> */}
        </Segment>

      </div>
    <Footer />
  </section>
  );
};

export default Profile;
