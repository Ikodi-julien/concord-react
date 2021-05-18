import { connect } from 'react-redux';
import Profile from 'src/components/Profile/Profile';
import {
  updateProfile,
  setProfileInputValue,
  setTagsDropdownValue,
  setTagsDropDownIds,
  toggleActiveBtn,
} from 'src/actions/profileActions';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
