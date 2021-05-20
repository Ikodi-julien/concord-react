import { connect } from 'react-redux';
import Landing from 'src/components/Landing/Landing';
import {
  getUserInfos,
} from 'src/actions/appActions';

const mapStateToProps = ({ app }) => ({
  isUserLoggued: app.isUserLoggued,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfos: () => dispatch(getUserInfos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
