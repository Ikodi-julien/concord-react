import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import {
  toggleNavMenu,
  toggleNavSearch,
  fetchNavData,
  setNavMenuOpen,
  setWindowSize,
} from 'src/actions/appActions';
import {
  disconnectUser,
} from 'src/actions/loginsignupActions';
import { toggleMyChannels } from 'src/actions/channelActions';

const mapStateToProps = ({ app, auth }) => ({
  tags: app.tags,
  channels: app.channels,
  isShowSearch: app.isShowSearch,
  isNavMenuOpen: app.isNavMenuOpen,
  links: app.appRoutes,
  errorMessage: app.errorMessage,
  appErrorIsVisible: app.appErrorIsVisible,
  windowSize: app.windowSize,
  isUserLoggued: auth.isUserLoggued,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchNavData()),
  toggleNavMenu: () => dispatch(toggleNavMenu()),
  disconnectUser: () => dispatch(disconnectUser()),
  toggleMyChannels: () => dispatch(toggleMyChannels()),
  setNavMenuOpen: (bool) => dispatch(setNavMenuOpen(bool)),
  setWindowSize: (windowSize) => dispatch(setWindowSize(windowSize)),
  toggleSearch: () => dispatch(toggleNavSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
