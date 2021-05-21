import { connect } from 'react-redux';
import { setWindowSize } from 'src/actions/appActions';
import App from 'src/components/App/App';

const mapStateToProps = ({ auth }) => ({
  isUserLoggued: auth.isUserLoggued,
  firstLogin: auth.firstLogin,
});

const mapDispatchToProps = (dispatch) => ({
  setWindowSize: (windowSize) => dispatch(setWindowSize(windowSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
