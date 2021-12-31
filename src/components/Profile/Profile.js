import React, { useState } from "react";
import { Button, Header, Segment, Divider, Modal } from "semantic-ui-react";

import StoreUrl from "src/components/StoreUrl/StoreUrl";
import NavbarContainer from "src/containers/NavbarContainer";
import PasswordModalContainer from "src/containers/PasswordModalContainer";
import AvatarContainer from "src/containers/AvatarContainer";
import ProfileFormContainer from "src/containers/ProfileFormContainer";
import Footer from "src/components/Footer/Footer";

import "./profile.scss";

const Profile = ({ submitDeleteAuthAccount }) => {
  const [open, setOpen] = useState(false);
  const handleDeleteAccount = () => {
    setOpen(false);
    submitDeleteAuthAccount();
  };
  /* Profile datas are fetch from ProfileForm component */
  return (
    <section className="profile">
      <StoreUrl />
      <NavbarContainer />

      <div className="profile__container">
        {/* <Segment> */}
        <ProfileFormContainer />
        {/* </Segment> */}
        <Divider />
        <AvatarContainer />
        <Divider />
        <Segment className="profile__pwdAndDelete">
          <PasswordModalContainer />

          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Supprimer mon compte</Button>}
          >
            <Modal.Header>Supprimer mon compte</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>Vous êtes sûr de vouloir supprimer votre compte ?</p>
                <p>
                  Vos informations personnelles seront supprimées pour toutes
                  les applications IKODI... envolées, disparues, pfuit...
                </p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={() => setOpen(false)}>
                Nope
              </Button>
              <Button
                content="Supprimer mon compte"
                labelPosition="right"
                icon="checkmark"
                onClick={handleDeleteAccount}
                positive
              />
            </Modal.Actions>
          </Modal>
        </Segment>
      </div>
      <Footer />
    </section>
  );
};

export default Profile;
