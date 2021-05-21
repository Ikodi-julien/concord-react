import { connect } from 'react-redux';
import Profile from 'src/components/Profile/Profile';
import {
  updateProfile,
  setProfileInputValue,
  setTagsDropdownValue,
  setTagsDropDownIds,
  toggleActiveBtn,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
