import { connect } from 'react-redux';
import Cardbox from 'src/components/CardBox/CardBox';
import { } from 'src/actions/channelActions';

const mapStateToProps = (_, { list, isDeletable }) => ({
  list,
  isDeletable,
});

const mapDispatchToProps = (dispatch) => ({
  deleteChannel: () => console.log('delete'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cardbox);
