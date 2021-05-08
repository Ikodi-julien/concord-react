import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SignupModal = ({open}) => {

  return (
    <Modal
      onClose={() => {}}
      onOpen={() => {}}
      open={open}
      trigger={<Button>Connexion</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='src/assets/cats_fond_transparent.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => {}}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {setOpen(false)}}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default SignupModal;
