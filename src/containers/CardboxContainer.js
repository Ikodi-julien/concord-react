import { connect } from 'react-redux';
import Cardbox from 'src/components/CardBox/CardBox';
import { deleteFromMyChannels } from 'src/actions/userActions';

const mapStateToProps = (_, { list, isDeletable }) => ({
  list,
  isDeletable,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFromMyChannels: (channelId) => dispatch(deleteFromMyChannels(channelId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cardbox);
