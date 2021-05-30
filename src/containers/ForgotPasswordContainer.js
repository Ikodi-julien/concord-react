import { connect } from 'react-redux';
import ForgotPassModal from 'src/components/Profile/ForgotPassModal/ForgotPassModal';
import {
  setInputValue,
} from 'src/actions/appActions';
import {
  submitForgotPassForm,
} from 'src/actions/authActions';

const mapStateToProps = ({ auth, app }) => ({
  inputValue: auth.forgotPasswordEmailInput,
  appInfo: app.appInfo,
  forgotPassInfoIsVisible: auth.forgotPassInfoIsVisible,
});

const mapDispatchToProps = (dispatch) => ({
  setEmailInputValue: (object) => dispatch(setInputValue(object)),
  submitForgotPassForm: () => dispatch(submitForgotPassForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassModal);
