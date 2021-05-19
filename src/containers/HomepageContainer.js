import { connect } from 'react-redux';
import Homepage from 'src/components/Homepage/Homepage';
import { fetchMyChannels, fetchMyRecos } from 'src/actions/channelActions';
// import fakeChannels from 'src/middlewares/fakeChannels';

const mapStateToProps = ({ user, app }) => ({
  isUserLoggued: app.isUserLoggued,
  myChannels: user.channels,
  recommendedChannels: user.recommendedChannels,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyChannels: () => dispatch(fetchMyChannels()),
  fetchMyRecos: () => dispatch(fetchMyRecos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
