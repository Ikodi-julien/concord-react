import { connect } from 'react-redux';
import ProfileForm from 'src/components/Profile/ProfileForm/ProfileForm';
import {
  updateMeTags,
  setProfileInputValue,
  setTagsDropdownValue,
  setTagsDropDownIds,
  toggleActiveBtn,
  fetchMyProfile,
} from 'src/actions/profileActions';
import { setFirstLogin } from 'src/actions/appActions';

const mapStateToProps = ({ app, user }) => ({
  tags: app.tags,
  nicknameInput: user.nicknameInput,
  emailInput: user.emailInput,
  tagDropDownValue: user.tagDropDownValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateMeTags: () => dispatch(updateMeTags()),
  setProfileInputValue: (objectInput) => dispatch(setProfileInputValue(objectInput)),
  setTagsDropdownValue: (array) => dispatch(setTagsDropdownValue(array)),
  setTagsDropDownIds: (array) => dispatch(setTagsDropDownIds(array)),
  toggleActiveBtn: (btnName) => dispatch(toggleActiveBtn(btnName)),
  setFirstLogin: (bool) => dispatch(setFirstLogin(bool)),
  fetchMyProfile: () => dispatch(fetchMyProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
