import { connect } from 'react-redux';
import NavSearch from 'src/components/Navbar/NavSearch/NavSearch';
import {
  toggleNavSearch,
  searchChange,
  tagSelectChange,
  setNavSearchResult,
} from 'src/actions/appActions';
import { fetchChannel } from 'src/actions/channelActions';

const mapStateToProps = ({ app }) => ({
  tags: app.tags,
  channels: app.channels,
  isSearchLoading: app.isSearchLoading,
  searchedValue: app.searchedValue,
  searchResult: app.searchResult,
  tagSelectValue: app.tagSelectValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearch: () => dispatch(toggleNavSearch()),
  searchChange: (value) => dispatch(searchChange(value)),
  tagSelectChange: (value) => dispatch(tagSelectChange(value)),
  setSearchResult: (list) => dispatch(setNavSearchResult(list)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
