import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import { toggleNavSearch } from 'src/actions/appActions';

const mapStateToProps = ({ app }) => ({

  tags: app.tags,
  isShowLoginButton: app.isShowLoginButton,
  isShowSearch: app.isShowSearch,
  isShowMenu: app.isShowMenu,

});

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => {
    dispatch(toggleNavSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
