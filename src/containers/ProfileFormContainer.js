import { connect } from 'react-redux';
import ProfileForm from 'src/components/Profile/ProfileForm/ProfileForm';
import {
  updateProfile,
  setProfileInputValue,
  setTagsDropdownValue,
  setTagsDropDownIds,
  toggleActiveBtn,
  fetchMyProfile,
} from 'src/actions/profileActions';
import { setFirstLogin } from 'src/actions/appActions';

const mapStateToProps = ({ app, user }) => ({
  tags: app.tags,
  user: { ...user },
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: () => dispatch(updateProfile()),
  setProfileInputValue: (objectInput) => dispatch(setProfileInputValue(objectInput)),
  setTagsDropdownValue: (array) => dispatch(setTagsDropdownValue(array)),
  setTagsDropDownIds: (array) => dispatch(setTagsDropDownIds(array)),
  toggleActiveBtn: (btnName) => dispatch(toggleActiveBtn(btnName)),
  setFirstLogin: (bool) => dispatch(setFirstLogin(bool)),
  fetchMyProfile: () => dispatch(fetchMyProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
