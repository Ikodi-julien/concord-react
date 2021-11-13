import React, {useEffect} from 'react';
import NicknameAndMailModalContainer from 'src/containers/NicknameAndMailModalContainer'

import {Button, Input, Form, Dropdown} from 'semantic-ui-react';

export default ({
  nicknameInput,
  emailInput,
  tagDropDownValue,
  tags, 
  toggleActiveBtn, 
  setTagsDropdownValue, 
  setTagsDropDownIds, 
  setProfileInputValue, 
  updateMeTags,
  fetchMyProfile,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateMeTags();
  };
  // const handleInputChange = (evt) => {
  //   const objectInput = {
  //     [evt.target.name]: evt.target.value
  //   }
  //   setProfileInputValue(objectInput);
  // }
  
  // This sets options in tags dropdown menu
  let tagsOptions = tags.map(tag => ({ key: tag.id, value: tag.name, text: tag.name }))
  //
  const handleTagsSelection = ((_, {value}) => {
    const tagIds = value.map(tagName => tagsOptions.filter(tag => tag.value === tagName)[0].key
    )
    setTagsDropdownValue(value);
    setTagsDropDownIds(tagIds)
  })

  const handleEditBtn = (_, {name}) => {
    toggleActiveBtn(name)
  };
  
  // Fetch for last profile datas on component did mount.
  useEffect(() => {
    fetchMyProfile();
  }, []);

  return (
  <section >
    <div className="profile__authfieldscontainer">
      <div className="profile__formrow">
        <label>Pseudo :</label>
        <div className="profile__inputrow">
          <Input
            name='nicknameInput'
            type='text'
            placeholder='pseudo'
            value={nicknameInput}
            disabled={true}
          />
        </div>
      </div>
      <div className="profile__formrow">
        <label>Email :</label>
        <div className="profile__inputrow">
          <Input
            name='emailInput'
            type='email'
            placeholder='email'
            value={emailInput}
            className="input"
            disabled={true}
            />
        </div>
      </div>
      
      <NicknameAndMailModalContainer />
    </div>
    
    <Form onSubmit={handleSubmit}>
      <div className="profile__tagscontainer">
        {/* <h1 className="profile__title">Mes catégories</h1> */}
        <p className="profile__subtitle">Sélectionne des catégories pour avoir des suggestions adaptées.</p>
        <div className="profile__inputrow --tags">
          <Dropdown
            text='Mes catégories'
            fluid
            multiple selection
            options={tagsOptions}
            onChange={handleTagsSelection}
            value={tagDropDownValue}
            />
      
          <Button type='submit' primary >Valider mes catégories</Button>
        </div>
      </div>
    </Form>
  </section>
)}
