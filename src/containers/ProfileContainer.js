import { connect } from 'react-redux';
import Profile from 'src/components/Profile/Profile';
import {
  submitDeleteAuthAccount,
} from 'src/actions/profileActions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  submitDeleteAuthAccount: () => dispatch(submitDeleteAuthAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
