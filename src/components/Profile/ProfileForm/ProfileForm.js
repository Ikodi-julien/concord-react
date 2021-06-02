import React, {useEffect} from 'react';
import {Button, Form, Dropdown} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

export default ({
  user, 
  tags, 
  toggleActiveBtn, 
  setTagsDropdownValue, 
  setTagsDropDownIds, 
  setProfileInputValue, 
  updateProfile,
  fetchMyProfile,
}) => {
  const history = useHistory();
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateProfile();
    history.push('/home');
  };
  const handleInputChange = (evt) => {
    const objectInput = {
      [evt.target.name]: evt.target.value
    }
    setProfileInputValue(objectInput);
  }
  
  // This sets options in tags gropdown menu
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
  <Form onSubmit={handleSubmit}>
  <div className="profile__authfieldscontainer">
    <div className="profile__formrow">
      <label>Pseudo :</label>
      <Form.Field >
      <input
        name='nicknameInput'
        type='text'
        placeholder='pseudo'
        value={user.nicknameInput}
        onChange={handleInputChange}
        disabled={!user.nicknameInputIsActive}
        />
      </Form.Field>
        <Button 
          name='nicknameInputIsActive'
          type='button' 
          active={user.nicknameInputIsActive}
          onClick={handleEditBtn}
          >
        <i className="fas fa-edit"></i>
        </Button>
    </div>
  
    <div className="profile__formrow">
      <label >Email :</label>
      <Form.Field>
        <input
          name='emailInput'
          type='email'
          placeholder='email'
          value={user.emailInput}
          onChange={handleInputChange}
          className="input"
          disabled={!user.emailInputIsActive}
          />
      </Form.Field>
      <Button 
        name='emailInputIsActive'
        type='button' 
        active={user.emailInputIsActive}
        onClick={handleEditBtn}
        >
      <i className="fas fa-edit"></i>
      </Button>
    </div>
  </div>
  
  <div className="profile__tagscontainer">
    {/* <h1 className="profile__title">Mes catégories</h1> */}
    <p className="profile__subtitle">Sélectionne des catégories pour avoir des suggestions adaptées.</p>
    
    <Dropdown 
      text='Mes catégories' 
      fluid 
      multiple selection 
      options={tagsOptions} 
      onChange={handleTagsSelection}
      value={user.tagDropDownValue}
      />
  </div>
  
  <Button type='submit' primary >Valider mon profil</Button>
</Form>
)}
