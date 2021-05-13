import { connect } from 'react-redux';
import Discovery from 'src/components/Discovery/Discovery';
import { searchChange } from 'src/actions/appActions';

const mapStateToProps = ({ app }) => ({
  tags: app.tags,
  channels: app.channels,
  searchedValue: app.searchedValue,
});

const mapDispatchToProps = (dispatch) => ({
  searchChange: (searchValue) => dispatch(searchChange(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
