import { connect } from 'react-redux';
import LoginModal from 'src/components/Navbar/LoginModal/LoginModal';
import {
  setLoginOpen,
  setSignupOpen,
  setInputValue,
} from 'src/actions/appActions';
import {
  submitLoginForm,
  submitSignupForm,
  disconnectUser,
} from 'src/actions/authActions';

const mapStateToProps = ({ app, auth }) => ({
  loginOpen: auth.isShowLoginModal,
  signupOpen: auth.isShowSignupModal,
  loginButtonIsLoading: auth.loginButtonIsLoading,
  inputLoginEmailValue: auth.loginEmail,
  inputLoginPasswordValue: auth.loginPassword,
  signupButtonIsLoading: auth.signupButtonIsLoading,
  inputSignupPseudoValue: auth.signupPseudo,
  inputSignupEmailValue: auth.signupEmail,
  inputFirstSignupPasswordValue: auth.firstSignupPassword,
  inputSecondSignupPasswordValue: auth.secondSignupPassword,
  loginInfoIsVisible: auth.loginInfoIsVisible,
  signupInfoIsVisible: auth.signupInfoIsVisible,
  appInfo: app.appInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setLoginOpen: (bool) => dispatch(setLoginOpen(bool)),
  setSignupOpen: (bool) => dispatch(setSignupOpen(bool)),
  submitLoginForm: () => dispatch(submitLoginForm()),
  submitSignupForm: () => dispatch(submitSignupForm()),
  setInputValue: (objectInput) => dispatch(setInputValue(objectInput)),
  disconnectUser: () => dispatch(disconnectUser()),

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
