import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import {
  toggleNavSearch,
  toggleNavMenu,
} from 'src/actions/appActions';

const mapStateToProps = ({ app }) => ({

  tags: app.tags,
  isShowLoginButton: app.isShowLoginButton,
  isShowSearch: app.isShowSearch,
  isShowMenu: app.isShowMenu,
  links: app.appRoutes,

});

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => {
    dispatch(toggleNavSearch());
  },
  toggleMenu: () => {
    dispatch(toggleNavMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
