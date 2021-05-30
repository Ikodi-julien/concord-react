import { connect } from 'react-redux';
import Profile from 'src/components/Profile/Profile';
import {
  submitDeleteAccount,
} from 'src/actions/profileActions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  submitDeleteAccount: () => dispatch(submitDeleteAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
