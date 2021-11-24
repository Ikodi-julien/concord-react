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
    <h1 className="profile__title">Mon profil</h1>
    <div className="profile__authfieldscontainer">
      <div className="profile__formcolumn">
        <div className="profile__formrow">
          <label className="profile__formrow__label">Pseudo:</label>
          <div>{nicknameInput}</div>
        </div>
        <div className="profile__formrow">
          <label className="profile__formrow__label">Email:</label>
          <div>{emailInput}</div>
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
            className="profile__dropdown"
            />
      
          <Button type='submit' basic color="blue" >Valider mes catégories</Button>
        </div>
      </div>
    </Form>
  </section>
)}
