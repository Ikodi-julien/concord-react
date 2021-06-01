import React from 'react'
import Avatar from 'react-avatar-edit'
import { Button, Segment } from 'semantic-ui-react'

import './avatar.scss'

export default ({ avatarSrc, preview, setPreview }) => {
  // constructor(props) {
  //   super(props)
  //   const src = './example/einshtein.jpg'
  //   this.state = {
  //     preview: null,
  //     src,
  //   }
  //   this.onCrop = this.onCrop.bind(this)
  //   this.onClose = this.onClose.bind(this)
  //   this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  // }

  const onClose = () => {
    setPreview(null)
    // this.setState({ preview: null })
  }

  const onCrop = (preview) => {
    setPreview(preview)
  }

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 500000) {
      alert('File is too big! max 500ko')
      elem.target.value = ''
    }
  }

  return (
    <Segment>
      <h1 className="profile__title">Mon avatar</h1>
      <div className="profile__avatar__row">
        <Avatar
          width={150}
          height={150}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
          src={avatarSrc}
        />
        {preview && <img src={preview} alt="Preview" />}
      </div>
      <Button primary content="Valider" onClick={() => {}} />
    </Segment>
  )
}
