import { connect } from 'react-redux';
import Landing from 'src/components/Landing/Landing';
import {
  getUserInfos,
} from 'src/actions/userActions';
import {
  setIsLandingActive,
} from 'src/actions/appActions';

const mapStateToProps = ({ auth, app }) => ({
  isUserLoggued: auth.isUserLoggued,
  isActive: app.isLandingActive,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfos: () => dispatch(getUserInfos()),
  setIsLandingActive: (bool) => dispatch(setIsLandingActive(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
