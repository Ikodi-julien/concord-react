import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import {
  toggleNavSearch,
  toggleNavMenu,
  fetchNavData,
  searchChange,
  tagSelectChange,
  setNavSearchResult,
  setLoginOpen,
  setSignupOpen,
  setInputValue,
  setNavMenuOpen,
  setWindowSize,
} from 'src/actions/appActions';

import {
  submitLoginForm,
  submitSignupForm,
  disconnectUser,
} from 'src/actions/loginsignupActions';

import { toggleMyChannels, fetchChannel } from 'src/actions/channelActions';

const mapStateToProps = ({ app, auth }) => ({

  tags: app.tags,
  channels: app.channels,
  isShowSearch: app.isShowSearch,
  isNavMenuOpen: app.isNavMenuOpen,
  links: app.appRoutes,
  isSearchLoading: app.isSearchLoading,
  searchedValue: app.searchedValue,
  searchResult: app.searchResult,
  tagSelectValue: app.tagSelectValue,
  errorMessage: app.errorMessage,
  appErrorIsVisible: app.appErrorIsVisible,
  windowSize: app.windowSize,

  isUserLoggued: auth.isUserLoggued,
  isShowLoginModal: auth.isShowLoginModal,
  isShowSignupModal: auth.isShowSignupModal,
  loginButtonIsLoading: auth.loginButtonIsLoading,
  inputLoginEmailValue: auth.loginEmail,
  inputLoginPasswordValue: auth.loginPassword,
  signupButtonIsLoading: auth.signupButtonIsLoading,
  inputSignupPseudoValue: auth.signupPseudo,
  inputSignupEmailValue: auth.signupEmail,
  inputFirstSignupPasswordValue: auth.firstSignupPassword,
  inputSecondSignupPasswordValue: auth.secondSignupPassword,
  signupErrorIsVisible: auth.signupErrorIsVisible,
  loginErrorIsVisible: auth.loginErrorIsVisible,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchNavData()),
  toggleSearch: () => dispatch(toggleNavSearch()),
  toggleNavMenu: () => dispatch(toggleNavMenu()),
  searchChange: (value) => dispatch(searchChange(value)),
  tagSelectChange: (value) => dispatch(tagSelectChange(value)),
  setSearchResult: (list) => dispatch(setNavSearchResult(list)),
  setLoginOpen: (bool) => dispatch(setLoginOpen(bool)),
  setSignupOpen: (bool) => dispatch(setSignupOpen(bool)),
  submitLoginForm: () => dispatch(submitLoginForm()),
  submitSignupForm: () => dispatch(submitSignupForm()),
  setInputValue: (objectInput) => dispatch(setInputValue(objectInput)),
  disconnectUser: () => dispatch(disconnectUser()),
  toggleMyChannels: () => dispatch(toggleMyChannels()),
  setNavMenuOpen: (bool) => dispatch(setNavMenuOpen(bool)),
  setWindowSize: (windowSize) => dispatch(setWindowSize(windowSize)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
