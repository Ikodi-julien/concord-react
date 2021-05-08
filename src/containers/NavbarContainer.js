import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import {
  toggleNavSearch,
  toggleNavMenu,
  fetchNavData,
  searchNavChange,
  setNavSearchResult,
  setLoginOpen,
  setSignupOpen,
  setInputValue,
} from 'src/actions/appActions';

import {
  submitLoginForm,
  submitSignupForm,
} from 'src/actions/loginsignupActions';

const mapStateToProps = ({ app }) => ({

  tags: app.tags,
  channels: app.channels,
  isShowLoginButton: app.isShowLoginButton,
  isShowLoginModal: app.isShowLoginModal,
  isShowSignupModal: app.isShowSignupModal,
  isShowSearch: app.isShowSearch,
  isShowMenu: app.isShowMenu,
  links: app.appRoutes,
  isSearchLoading: app.isSearchLoading,
  searchedValue: app.searchedValue,
  searchResult: app.searchResult,
  inputLoginEmailValue: app.loginEmail,
  inputLoginPasswordValue: app.loginPassword,
  inputSignupPseudoValue: app.signupPseudo,
  inputSignupEmailValue: app.signupEmail,
  inputFirstSignupPasswordValue: app.firstSignupPassword,
  inputSecondSignupPasswordValue: app.secondSignupPassword,
  signupErrorIsVisible: app.signupErrorIsVisible,
  loginErrorIsVisible: app.loginErrorIsVisible,
  errorMessage: app.errorMessage,

});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchNavData()),
  toggleSearch: () => dispatch(toggleNavSearch()),
  toggleMenu: () => dispatch(toggleNavMenu()),
  searchChange: (value) => dispatch(searchNavChange(value)),
  setSearchResult: (list) => dispatch(setNavSearchResult(list)),
  setLoginOpen: (bool) => dispatch(setLoginOpen(bool)),
  setSignupOpen: (bool) => dispatch(setSignupOpen(bool)),
  submitLoginForm: () => dispatch(submitLoginForm()),
  submitSignupForm: () => dispatch(submitSignupForm()),
  setInputValue: (objectInput) => dispatch(setInputValue(objectInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
