import { connect } from 'react-redux';
import PasswordModal from 'src/components/Profile/PasswordModal/PasswordModal';
import {
  setInputValue,
} from 'src/actions/appActions';
import {
  submitUpdatePassword,
} from 'src/actions/authActions';

const mapStateToProps = ({ auth, app }) => ({
  updatePassFormOld: auth.updatePassFormOld,
  updatePassFormNew1: auth.updatePassFormNew1,
  updatePassFormNew2: auth.updatePassFormNew2,
  appInfo: app.appInfo,
  updatePassInfoIsVisible: auth.updatePassInfoIsVisible,
});

const mapDispatchToProps = (dispatch) => ({
  setInputValue: (object) => dispatch(setInputValue(object)),
  submitUpdatePassword: () => dispatch(submitUpdatePassword()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordModal);
