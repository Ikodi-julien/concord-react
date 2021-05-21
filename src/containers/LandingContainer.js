import { connect } from 'react-redux';
import Landing from 'src/components/Landing/Landing';
import {
  getUserInfos,
} from 'src/actions/userActions';

const mapStateToProps = ({ auth }) => ({
  isUserLoggued: auth.isUserLoggued,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfos: () => dispatch(getUserInfos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
