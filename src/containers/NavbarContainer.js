import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar/Navbar';
import {
  toggleNavSearch,
  toggleNavMenu,
  fetchNavData,
  searchNavChange,
  setNavSearchResult,
} from 'src/actions/appActions';

const mapStateToProps = ({ app }) => ({

  tags: app.tags,
  channels: app.channels,
  isShowLoginButton: app.isShowLoginButton,
  isShowSearch: app.isShowSearch,
  isShowMenu: app.isShowMenu,
  links: app.appRoutes,
  isSearchLoading: app.isSearchLoading,
  searchedValue: app.searchedValue,
  searchResult: app.searchResult,

});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchNavData());
  },
  toggleSearch: () => {
    dispatch(toggleNavSearch());
  },
  toggleMenu: () => {
    dispatch(toggleNavMenu());
  },
  searchChange: (value) => {
    dispatch(searchNavChange(value));
  },
  setSearchResult: (list) => {
    dispatch(setNavSearchResult(list));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
