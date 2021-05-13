import { connect } from 'react-redux';
import Discovery from 'src/components/Discovery/Discovery';
import { tagSelectChange } from 'src/actions/appActions';

const mapStateToProps = ({ app }) => ({
  tags: app.tags,
  channels: app.channels,
  tagSelectValue: app.tagSelectValue,
});

const mapDispatchToProps = (dispatch) => ({
  tagSelectChange: (searchValue) => dispatch(tagSelectChange(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
