import React, {useEffect} from 'react';
import {Button, Dropdown, Form, Segment, Divider} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import NavbarContainer from 'src/containers/NavbarContainer';
import PasswordModal from './PasswordModal/PasswordModal';
import ProfileForm from './ProfileForm/ProfileForm';
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

  useEffect(() => setFirstLogin(false), [])
  
  return (
    <section className="profile">
      <StoreUrl />
      <NavbarContainer />
      
      <div className="profile__container">
        <Segment >
          <ProfileForm 
            user={user}
            tags={tags}
            toggleActiveBtn={toggleActiveBtn}
            setTagsDropdownValue={setTagsDropdownValue}
            setTagsDropDownIds={setTagsDropDownIds}
            setProfileInputValue={setProfileInputValue}
            updateProfile={updateProfile}
          />
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
